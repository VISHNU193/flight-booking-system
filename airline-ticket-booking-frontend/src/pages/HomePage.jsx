
import FlightBookingForm from "../components/FlightBookingForm";
import "../styles/HomePage.css";
import BookingPage from "./BookingPage";
function HomePage() {
    return (
        // <div className="home-page">
        //     <h1>Welcome to Airline Booking</h1>
        // </div>

        <div>
            {/* <BookingPage/> */}

            <FlightBookingForm/>
        </div>
    );
}

export default HomePage;
