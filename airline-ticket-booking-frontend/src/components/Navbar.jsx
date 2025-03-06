
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Airline Booking</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/flights">Flights</Link>
                </li>
                <li>
                    <Link to="/bookings">My Bookings</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/book">Book</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
