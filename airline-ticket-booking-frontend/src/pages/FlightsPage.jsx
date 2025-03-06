import { useState, useEffect } from "react";
import FlightCard from "../components/FlightCard";
import { useFormContext } from '../context/FormContext';



function FlightsPage() {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const { formData, setFormData } = useFormContext(); // Access context
    const { tripType, from, to, departureDate, returnDate, passengers, promoCode } = formData;
    
    useEffect(() => {
        // Fetch flight data from the backend

        const currentTime = new Date().toTimeString().split(" ")[0];
        const dateTime = `${departureDate}T${currentTime}`;
        const FLIGHTS_REST_API = `${import.meta.env.VITE_API_URL}/flights/available?departureAirport=${from}&arrivalAirport=${to}&departureTime=${dateTime}`;
        fetch(FLIGHTS_REST_API,{ 
            mode:"cors",
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
            .then((response) => {
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                
                setFlights(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching flights:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading flights...</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Available Flights</h2>
            {flights.length > 0 ? (
                flights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                ))
            ) : (
                <p>No flights available.</p>
            )}
        </div>
    );
}

export default FlightsPage;
