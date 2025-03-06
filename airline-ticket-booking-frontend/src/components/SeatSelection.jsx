// // import  { useState, useEffect } from "react";
// // import axios from "axios";

// // const SeatSelection = () => {
// //   const [seats, setSeats] = useState([]);
// //   const [selectedSeats, setSelectedSeats] = useState([]);

// //   // Fetch seat data from the backend
// //   useEffect(() => {
// //     const fetchSeats = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8080/api/seats"); // Update with your backend endpoint
// //         setSeats(response.data); // Assuming response contains a list of seat objects
// //       } catch (error) {
// //         console.error("Error fetching seat data:", error);
// //       }
// //     };
// //     fetchSeats();
// //   }, []);

// //   // Handle seat selection
// //   const handleSeatClick = (seat) => {
// //     if (seat.status === "booked") return; // Do nothing if the seat is booked
// //     if (selectedSeats.includes(seat.number)) {
// //       // Deselect seat if already selected
// //       setSelectedSeats(selectedSeats.filter((s) => s !== seat.number));
// //     } else {
// //       // Select seat
// //       setSelectedSeats([...selectedSeats, seat.number]);
// //     }
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 rounded-lg">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
// //       <div className="grid grid-cols-6 gap-4">
// //         {seats.map((seat) => (
// //           <div
// //             key={seat.number}
// //             className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer ${
// //               seat.status === "booked"
// //                 ? "bg-red-500 cursor-not-allowed"
// //                 : selectedSeats.includes(seat.number)
// //                 ? "bg-green-500"
// //                 : "bg-white"
// //             }`}
// //             title={`Seat ${seat.number}`}
// //             onClick={() => handleSeatClick(seat)}
// //           >
// //             {selectedSeats.includes(seat.number) && seat.number}
// //           </div>
// //         ))}
// //       </div>
// //       <div className="mt-6">
// //         <h3 className="text-lg font-semibold">Selected Seats:</h3>
// //         <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SeatSelection;


// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import '../styles/SeatSelection.css' // Custom CSS for styling

// // const SeatSelection = () => {
// //   const [seats, setSeats] = useState([]);
// //   const [selectedSeats, setSelectedSeats] = useState([]);

// //   useEffect(() => {
// //     // Fetch seat data from backend
// //     axios.get('http://localhost:8080/api/seats')
// //       .then(response => setSeats(response.data))
// //       .catch(error => console.error('Error fetching seats:', error));
// //   }, []);

// //   const handleSeatClick = (seatNumber) => {
// //     setSelectedSeats((prevSelected) =>
// //       prevSelected.includes(seatNumber)
// //         ? prevSelected.filter((seat) => seat !== seatNumber) // Deselect seat
// //         : [...prevSelected, seatNumber] // Select seat
// //     );
// //   };

// //   return (
// //     <div className="seat-selection">
// //       <div className="airplane">
// //         {seats.map((seat) => (
// //           <div
// //             key={seat.number}
// //             className={`seat ${seat.status} ${
// //               selectedSeats.includes(seat.number) ? 'selected' : ''
// //             }`}
// //             onClick={() => seat.status === 'free' && handleSeatClick(seat.number)}
// //             title={`Seat ${seat.number}`}
// //           >
// //             {seat.number}
// //           </div>
// //         ))}
// //       </div>
// //       <div className="selected-seats">
// //         <h3>Selected Seats:</h3>
// //         {selectedSeats.length > 0 ? (
// //           <ul>
// //             {selectedSeats.map((seat) => (
// //               <li key={seat}>{seat}</li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No seats selected</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SeatSelection;



// // import { useState, useEffect } from "react";
// // import axios from "axios";

// // const SeatSelection = () => {
// //   const [seats, setSeats] = useState([]);
// //   const [selectedSeats, setSelectedSeats] = useState([]);

// //   // Fetch seat data from the backend
// //   useEffect(() => {
// //     const fetchSeats = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8080/api/seats"); // Update with your backend endpoint
// //         setSeats(response.data); // Assuming response contains a list of seat objects
// //       } catch (error) {
// //         console.error("Error fetching seat data:", error);
// //       }
// //     };
// //     fetchSeats();
// //   }, []);

// //   // Handle seat selection
// //   const handleSeatClick = (seat) => {
// //     if (seat.status === "booked") return; // Do nothing if the seat is booked
// //     if (selectedSeats.includes(seat.number)) {
// //       // Deselect seat if already selected
// //       setSelectedSeats(selectedSeats.filter((s) => s !== seat.number));
// //     } else {
// //       // Select seat
// //       setSelectedSeats([...selectedSeats, seat.number]);
// //     }
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 rounded-lg">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
// //       <div className="grid grid-cols-6 gap-x-4 gap-y-4">
// //         {seats.map((seat) => (
// //           <div
// //             key={seat.number}
// //             className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer ${
// //               seat.status === "booked"
// //                 ? "bg-red-500 cursor-not-allowed"
// //                 : selectedSeats.includes(seat.number)
// //                 ? "bg-green-500"
// //                 : "bg-white"
// //             }`}
// //             title={`Seat ${seat.number}`}
// //             onClick={() => handleSeatClick(seat)}
// //             style={{
// //               pointerEvents: seat.status === "booked" ? "none" : "auto",
// //               cursor: seat.status === "booked" ? "not-allowed" : "pointer",
// //             }}
// //           >
// //             {seat.number}
// //           </div>
// //         ))}
// //       </div>
// //       <div className="mt-6">
// //         <h3 className="text-lg font-semibold">Selected Seats:</h3>
// //         <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SeatSelection;






// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useFormContext } from '../context/FormContext';


// const SeatSelection = () => {
//   const [seats, setSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const { formData, updateFormData } = useFormContext();

//   // Fetch seat data from the backend
//   useEffect(() => {
//     const fetchSeats = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/available-seats/${formData.flight_id}`); // Update with your backend endpoint
//         setSeats(response.data); // Assuming response contains a list of seat objects
//       } catch (error) {
//         console.error('Error fetching seat data:', error);
//       }
//     };
//     fetchSeats();
//   }, []);

//   // Handle seat selection
//   const handleSeatClick = (seat) => {
//     if (seat.isBooked === true) return; // Do nothing if the seat is booked
//     if (selectedSeats.includes(seat.seatNumber)) {
//       // Deselect seat if already selected
//       setSelectedSeats(selectedSeats.filter((s) => s !== seat.seatNumber));
//     } else {
//       // Select seat
//       setSelectedSeats([...selectedSeats, seat.seatNumber]);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
//       <div className="grid grid-cols-6 gap-4">
//         {seats.map((seat) => (
//           <div
//             key={seat.seatNumber}
//             className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer ${
//               seat.isBooked === true
//                 ? 'bg-red-500 cursor-not-allowed'  // Apply cursor-not-allowed when booked
//                 : selectedSeats.includes(seat.seatNumber)
//                 ? 'bg-green-500'
//                 : 'bg-white'
//             }`}
//             title={`Seat ${seat.seatNumber}`}
//             onClick={() => handleSeatClick(seat)}
//           >
//             {seat.seatNumber}
//           </div>
//         ))}
//       </div>
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Selected Seats:</h3>
//         <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
//       </div>
//     </div>
//   );
// };

// export default SeatSelection;


import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormContext } from '../context/FormContext';

const SeatSelection = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { formData, updateFormData } = useFormContext();

  // Fetch seat data from the backend
  useEffect(() => {
    const fetchSeats = async () => {
      try {
        
        
        const response = await axios.get(`http://localhost:8080/api/available-seats/${formData.flight_id}`);
        console.log(response.data);
        
        setSeats(response.data); // Assuming response contains a list of seat objects
      } catch (error) {
        console.error('Error fetching seat data:', error);
      }
    };
    fetchSeats();
  }, [formData.flight_id]);

  // Handle seat selection
  const handleSeatClick = (seat) => {
    if (seat.isBooked === true) return; // Do nothing if the seat is booked

    if (selectedSeats.includes(seat.seatNumber)) {
      // Deselect seat if already selected
      setSelectedSeats(selectedSeats.filter((s) => s !== seat.seatNumber));
    } else if (selectedSeats.length < formData.passengers) {
      // Select seat only if the limit is not reached
      setSelectedSeats([...selectedSeats, seat.seatNumber]);
    } else {
      alert(`You can only select up to ${formData.passengers} seats.`);
    }
  };

  // Update form data with selected seats
  useEffect(() => {
    updateFormData('selectedSeats', selectedSeats);
  }, [selectedSeats, updateFormData]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
      <div className="grid grid-cols-6 gap-4">
        {seats.map((seat) => (
          <div
            key={seat.seatNumber}
            className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer ${
              seat.isBooked
                ? 'bg-red-500 cursor-not-allowed' // Booked seat
                : selectedSeats.includes(seat.seatNumber)
                ? 'bg-green-500' // Selected seat
                : 'bg-white'
            }`}
            title={`Seat ${seat.seatNumber}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.seatNumber.split("_").pop()}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Selected Seats:</h3>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
        <p className="text-sm text-gray-500">
          {selectedSeats.length} / {formData.passengers} seats selected
        </p>
      </div>
    </div>
  );
};

export default SeatSelection;
