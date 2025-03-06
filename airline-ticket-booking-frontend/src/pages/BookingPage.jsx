import  { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookingPage() {
    const { flightId } = useParams();
    const [passengerName, setPassengerName] = useState("");
    const [seatNumber, setSeatNumber] = useState("");
    const navigate = useNavigate();

    const handleBooking = () => {
        const bookingData = { flightId, passengerName, seatNumber };
        
        fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    navigate(`/payment/${data.bookingId}`);
                } else {
                    alert("Booking failed. Please try again.");
                }
            })
            .catch((error) => console.error("Error creating booking:", error));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Book Your Flight</h2>
            <input
                type="text"
                placeholder="Passenger Name"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                style={{ display: "block", margin: "10px 0", padding: "8px" }}
            />
            <input
                type="text"
                placeholder="Seat Number"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
                style={{ display: "block", margin: "10px 0", padding: "8px" }}
            />
            <button onClick={handleBooking} style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px" }}>
                Confirm Booking
            </button>
        </div>
    );
}

export default BookingPage;
