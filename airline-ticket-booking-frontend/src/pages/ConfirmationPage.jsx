

// function ConfirmationPage() {
//     return (
//         <div style={{ textAlign: "center", padding: "20px" }}>
//             <h1>Payment Successful!</h1>
//             <p>Your booking is confirmed. Thank you for choosing our airline!</p>
//             <a href="/" style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}>
//                 Back to Home
//             </a>
//         </div>
//     );
// }

// export default ConfirmationPage;



import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ConfirmationPage = () => {
  const { bookingId } = useParams(); // Extract bookingId from the URL
  const [bookingDetails, setBookingDetails] = useState(null);

  // Fetch booking details from the backend
  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        console.log(bookingId);
        
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/bookings/booking/${bookingId}`
        );
        setBookingDetails(response.data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
        alert('Failed to load booking details.');
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  if (!bookingDetails) {
    return <p>Loading booking details...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Confirmation</h2>
      <div className="mb-4">
        <p>
          <strong>Booking ID:</strong> {bookingDetails.bookingId}
        </p>
        <p>
          <strong>Flight ID:</strong> {bookingDetails.flightId}
        </p>
        <p>
          <strong>Passenger Count:</strong> {bookingDetails.passengerCount}
        </p>
        <p>
          <strong>Passengers:</strong> {bookingDetails.passengers.join(', ')}
        </p>
        <p>
          <strong>Selected Seats:</strong> {bookingDetails.selectedSeats.join(', ')}
        </p>
        <p>
          <strong>Trip Type:</strong> {bookingDetails.tripType}
        </p>
        <p>
          <strong>From:</strong> {bookingDetails.fromLocation}
        </p>
        <p>
          <strong>To:</strong> {bookingDetails.toLocation}
        </p>
        <p>
          <strong>Departure Date:</strong>{' '}
          {new Date(bookingDetails.departureDate).toLocaleString()}
        </p>
        {bookingDetails.returnDate && (
          <p>
            <strong>Return Date:</strong>{' '}
            {new Date(bookingDetails.returnDate).toLocaleString()}
          </p>
        )}
        <p>
          <strong>Promo Code:</strong> {bookingDetails.promoCode || 'N/A'}
        </p>
        <p>
          <strong>Payment Type:</strong> {bookingDetails.paymentType}
        </p>
        <p>
          <strong>Status:</strong> {bookingDetails.status}
        </p>
        {/* <p>
          <strong>Created At:</strong>{' '}
          {new Date(bookingDetails.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong>{' '}
          {new Date(bookingDetails.updatedAt).toLocaleString()}
        </p> */}
      </div>
      <button
        onClick={() => (window.location.href = '/')}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;
