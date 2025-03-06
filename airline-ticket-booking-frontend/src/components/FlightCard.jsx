

// // // import { Link } from "react-router-dom";
// // // import PropTypes from "prop-types";
// // // import "../styles/FlightCard.css";

// // // function FlightCard({ flight }) {
// // //     return (
// // //         <div className="flex ">
// // //             <h3>{flight.airlinename}</h3>
// // //             <p>From: {flight.departureairport}</p>
// // //             <p>To: {flight.arrivalairport}</p>
// // //             <p>Departure: {new Date(flight.departuretime).toLocaleString()}</p>
// // //             <p>Arrival: {new Date(flight.arrivaltime).toLocaleString()}</p>
// // //             <Link to={`/seat-booking`} className="flight-card-button">
// // //                 <button className="bg-slate-600 text-white border rounded-md p-1" >Book now</button>
// // //             </Link>
// // //         </div>
// // //     );
// // // }

// // // // FlightCard.propTypes = {
// // // //     flight: PropTypes.shape({
// // // //         airlineName: PropTypes.string.isRequired,
// // // //         departureAirport: PropTypes.string.isRequired,
// // // //         arrivalAirport: PropTypes.string.isRequired,
// // // //         departureTime: PropTypes.string.isRequired,
// // // //         arrivalTime: PropTypes.string.isRequired,
// // // //         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// // // //     }).isRequired,
// // // // };

// // // export default FlightCard;


// // import { Link } from "react-router-dom";
// // import PropTypes from "prop-types";
// // import "../styles/FlightCard.css";

// // function FlightCard({ flight }) {
// //     return (
// //         <div className="bg-white shadow-md rounded-lg p-4 m-4 max-w-xs mx-auto hover:shadow-xl transition-all">
// //             <div className="flex flex-col">
// //                 <h3 className="text-2xl font-semibold text-gray-800">{flight.airlinename}</h3>
// //                 <p className="text-lg text-gray-600">Flight Number: <span className="font-bold">{flight.flightnumber}</span></p>
// //                 <p className="text-lg text-gray-600">From: <span className="font-bold">{flight.departureairport}</span></p>
// //                 <p className="text-lg text-gray-600">To: <span className="font-bold">{flight.arrivalairport}</span></p>
// //                 <p className="text-lg text-gray-600">Departure: <span className="font-bold">{new Date(flight.departuretime).toLocaleString()}</span></p>
// //                 <p className="text-lg text-gray-600">Arrival: <span className="font-bold">{new Date(flight.arrivaltime).toLocaleString()}</span></p>
// //                 <p className="text-lg text-gray-600">Total Seats: <span className="font-bold">{flight.totalseats}</span></p>
// //                 <p className="text-lg text-gray-600">Remaining Seats: <span className="font-bold">{flight.remainingseats}</span></p>
// //                 <p className="text-xl font-bold text-green-600">Price: ₹{flight.ticketprice.toFixed(2)}</p>
// //             </div>
// //             <Link to={`/seat-booking/${flight.id}`} className="mt-4 block text-center">
// //                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all">
// //                     Book Now
// //                 </button>
// //             </Link>
// //         </div>
// //     );
// // }

// // FlightCard.propTypes = {
// //     flight: PropTypes.shape({
// //         id: PropTypes.number.isRequired,
// //         airlinename: PropTypes.string.isRequired,
// //         flightnumber: PropTypes.string.isRequired,
// //         departureairport: PropTypes.string.isRequired,
// //         arrivalairport: PropTypes.string.isRequired,
// //         departuretime: PropTypes.string.isRequired,
// //         arrivaltime: PropTypes.string.isRequired,
// //         totalseats: PropTypes.number.isRequired,
// //         ticketprice: PropTypes.number.isRequired,
// //         remainingseats: PropTypes.number.isRequired,
// //     }).isRequired,
// // };

// // export default FlightCard;


// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import "../styles/FlightCard.css";

// // Function to dynamically assign background color based on the airline
// const getAirlineColor = (airlineName) => {
//     switch (airlineName) {
//         case "Air India":
//             return "bg-red-500";
//         case "IndiGo":
//             return "bg-blue-500";
//         case "SpiceJet":
//             return "bg-orange-500";
//         case "Vistara":
//             return "bg-purple-500";
//         case "GoAir":
//             return "bg-green-500";
//         default:
//             return "bg-gray-500";
//     }
// };

// function FlightCard({ flight }) {
//     return (
//         <div className="flight-card flex bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-4 mx-2">
//             <div className={`flight-details flex flex-1 items-center ${getAirlineColor(flight.airlinename)} p-4 rounded-lg`}>
//                 <div className="flight-info flex flex-col justify-center mr-4">
//                     <h3 className="text-xl font-semibold text-white">{flight.airlinename}</h3>
//                     <p className="text-sm text-white">Flight No: {flight.flightnumber}</p>
//                     <p className="text-sm text-white">From: {flight.departureairport}</p>
//                     <p className="text-sm text-white">To: {flight.arrivalairport}</p>
//                 </div>
//                 <div className="flight-times flex flex-col justify-center mr-4">
//                     <p className="text-sm text-white">Departure: {new Date(flight.departuretime).toLocaleString()}</p>
//                     <p className="text-sm text-white">Arrival: {new Date(flight.arrivaltime).toLocaleString()}</p>
//                 </div>
//             </div>
//             <div className="flight-price flex flex-col justify-center items-center p-2 bg-gray-100 rounded-lg">
//                 <p className="text-lg font-semibold text-gray-800">₹ {flight.ticketprice}</p>
//                 <p className="text-sm text-gray-600">Remaining Seats: {flight.remainingseats}</p>
//                 <Link to={`/seat-booking`} className="flight-card-button mt-2">
//                     <button className="bg-slate-600 text-white border rounded-md py-2 px-4">Book now</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// FlightCard.propTypes = {
//     flight: PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         airlinename: PropTypes.string.isRequired,
//         flightnumber: PropTypes.string.isRequired,
//         departureairport: PropTypes.string.isRequired,
//         arrivalairport: PropTypes.string.isRequired,
//         departuretime: PropTypes.string.isRequired,
//         arrivaltime: PropTypes.string.isRequired,
//         totalseats: PropTypes.number.isRequired,
//         ticketprice: PropTypes.number.isRequired,
//         remainingseats: PropTypes.number.isRequired,
//     }).isRequired,
// };

// export default FlightCard;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/FlightCard.css";
import { useFormContext } from "../context/FormContext";

// Function to dynamically assign background color based on the airline
const getAirlineColor = (airlineName) => {
    switch (airlineName) {
        case "Air India":
            return "bg-red-500";
        case "IndiGo":
            return "bg-blue-500";
        case "SpiceJet":
            return "bg-orange-500";
        case "Vistara":
            return "bg-purple-500";
        case "GoAir":
            return "bg-green-500";
        default:
            return "bg-gray-500";
    }
};

function FlightCard({ flight }) {
    const { formData, setFormData } = useFormContext();
    const bookNowHandler=(field,value)=>{
        setFormData((prev) => ({ ...prev, [field]: value }));
    }
    
    return (
        <div className="flight-card flex bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-4 mx-2">
            <div className={`flight-details flex flex-1 items-center ${getAirlineColor(flight.airlinename)} p-4 rounded-lg`}>
                <div className="flight-info flex flex-col justify-center mr-4">
                    <h3 className="text-xl font-semibold text-white">{flight.airlinename}</h3>
                    <p className="text-sm text-white">Flight No: {flight.flightnumber}</p>
                    <p className="text-sm text-white">From: {flight.departureairport}</p>
                    <p className="text-sm text-white">To: {flight.arrivalairport}</p>
                </div>
                <div className="flight-times flex flex-col justify-center mr-4">
                    <p className="text-sm text-white">Departure: {new Date(flight.departuretime).toLocaleString()}</p>
                    <p className="text-sm text-white">Arrival: {new Date(flight.arrivaltime).toLocaleString()}</p>
                </div>
            </div>
            <div className="flight-price flex flex-col justify-center items-center p-2 bg-gray-100 rounded-lg">
                <p className="text-lg font-semibold text-gray-800">₹ {flight.ticketprice}</p>
                <p className="text-sm text-gray-600">Remaining Seats: {flight.remainingseats}</p>
                <Link to={`/x`} className="flight-card-button mt-2">
                    <button onClick={()=>{bookNowHandler('flight_id',flight.id);console.log(formData);
                    }} className="bg-slate-600 text-white border rounded-md py-2 px-4">Book now</button>
                </Link>
            </div>
        </div>
    );
}

FlightCard.propTypes = {
    flight: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        airlinename: PropTypes.string.isRequired,
        flightnumber: PropTypes.string.isRequired,
        departureairport: PropTypes.string.isRequired,
        arrivalairport: PropTypes.string.isRequired,
        departuretime: PropTypes.string.isRequired,
        arrivaltime: PropTypes.string.isRequired,
        totalseats: PropTypes.number.isRequired,
        ticketprice: PropTypes.number.isRequired,
        remainingseats: PropTypes.number.isRequired,
    }).isRequired,
};

export default FlightCard;
