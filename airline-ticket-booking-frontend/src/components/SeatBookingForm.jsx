



// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useFormContext } from '../context/FormContext';
// // import SeatSelection from './SeatSelection';
// // import BookingSummary from './BookingSummary';

// // const SeatBookingForm = () => {
// //   const { formData, updateFormData } = useFormContext();
// //   const [availableSeats, setAvailableSeats] = useState([]);
// //   const [showSummary, setShowSummary] = useState(false);

// //   // Fetch available seats from backend
// //   useEffect(() => {
// //     const fetchAvailableSeats = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8080/api/available-seats/${formData.flight_id}`);
// //         setAvailableSeats(response.data); // Assuming the backend returns an array of available seat IDs
// //       } catch (error) {
// //         console.error('Error fetching available seats:', error);
// //       }
// //     };
// //     fetchAvailableSeats();
// //   }, [formData.flight_id]);

// //   const handleInputChange = (field, value) => {
// //     updateFormData(field, value); // Update the context
// //   };

// //   const handleShowSummary = () => {
// //     setShowSummary(true); // Show summary on button click
// //   };

// //   return (
// //     <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-7xl mx-auto">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Booking</h2>
// //       <form className="flex space-x-6 mb-4">
// //         {/* Left side (form fields) */}
// //         <div className="flex-1 space-y-4">
// //           <div>
// //             <label className="block text-gray-700">First Name (as per passport)</label>
// //             <input
// //               type="text"
// //               value={formData.firstName}
// //               onChange={(e) => handleInputChange('firstName', e.target.value)}
// //               placeholder="Enter your first name"
// //               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Middle Name (if any, as per passport)</label>
// //             <input
// //               type="text"
// //               value={formData.middleName}
// //               onChange={(e) => handleInputChange('middleName', e.target.value)}
// //               placeholder="Enter your middle name (if any)"
// //               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Last Name (as per passport)</label>
// //             <input
// //               type="text"
// //               value={formData.lastName}
// //               onChange={(e) => handleInputChange('lastName', e.target.value)}
// //               placeholder="Enter your last name"
// //               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Age</label>
// //             <input
// //               type="number"
// //               value={formData.age}
// //               onChange={(e) => handleInputChange('age', e.target.value)}
// //               placeholder="Enter your age"
// //               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               value={formData.email}
// //               onChange={(e) => handleInputChange('email', e.target.value)}
// //               placeholder="Enter your email"
// //               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-gray-700">Gender</label>
// //             <select
// //               value={formData.gender}
// //               onChange={(e) => handleInputChange('gender', e.target.value)}
// //               className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
// //               required
// //             >
// //               <option value="" disabled>Select your gender</option>
// //               <option value="Male">Male</option>
// //               <option value="Female">Female</option>
// //             </select>
// //           </div>
// //         </div>

// //         {/* Right side (seat selection) */}
// //         <div className="flex-1">
// //           <SeatSelection availableSeats={availableSeats} onSelectSeat={(seat) => handleInputChange('selectedSeat', seat)} />
// //         </div>
// //       </form>

// //       {/* Show Summary Button */}
// //       <div className="flex justify-center mt-4">
// //         <button
// //           type="button"
// //           onClick={handleShowSummary}
// //           className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm"
// //         >
// //           Show Summary
// //         </button>
// //       </div>

// //       {/* Conditionally render BookingSummary */}
// //       {showSummary && <BookingSummary formData={formData} />}
// //     </div>
// //   );
// // };

// // export default SeatBookingForm;



// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useFormContext } from '../context/FormContext';
// import PassengerForm from './PassengerForm';
// import SeatSelection from './SeatSelection';
// import BookingSummary from './BookingSummary';

// const SeatBookingForm = () => {
//   const { formData, updateFormData } = useFormContext();
//   const [availableSeats, setAvailableSeats] = useState([]);
//   const [showSummary, setShowSummary] = useState(false);

//   // Fetch available seats from backend
//   useEffect(() => {
//     const fetchAvailableSeats = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/available-seats/${formData.flight_id}`);
//         setAvailableSeats(response.data); // Assuming the backend returns an array of available seat IDs
//       } catch (error) {
//         console.error('Error fetching available seats:', error);
//       }
//     };
//     fetchAvailableSeats();
//   }, [formData.flight_id]);

//   // Handle change in individual passenger fields
//   const handlePassengerChange = (index, field, value) => {
//     const updatedPassengers = [...formData.passengers];
//     updatedPassengers[index][field] = value;
//     updateFormData('passengers', updatedPassengers);
//   };

//   // Handle seat selection for a specific passenger
//   const handleSeatSelection = (index, seat) => {
//     const updatedPassengers = [...formData.passengers];
//     updatedPassengers[index].selectedSeat = seat;
//     updateFormData('passengers', updatedPassengers);
//   };

//   // Show summary button handler
//   const handleShowSummary = () => {
//     setShowSummary(true); // Show summary on button click
//   };

//   return (
//     <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-7xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Booking</h2>
//       <form className="space-y-6">
//         {/* Passenger Forms */}
//         {formData.passengers.map((passenger, index) => (
//           <div key={index} className="border-t border-gray-300 pt-4">
//             <PassengerForm
//               passenger={passenger}
//               index={index}
//               onChange={handlePassengerChange}
//             />
//             <SeatSelection
//               availableSeats={availableSeats}
//               onSelectSeat={(seat) => handleSeatSelection(index, seat)}
//             />
//           </div>
//         ))}

//         {/* Show Summary Button */}
//         <div className="flex justify-center mt-4">
//           <button
//             type="button"
//             onClick={handleShowSummary}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm"
//           >
//             Show Summary
//           </button>
//         </div>
//       </form>

//       {/* Conditionally render BookingSummary */}
//       {showSummary && <BookingSummary formData={formData} />}
//     </div>
//   );
// };

// export default SeatBookingForm;



import { useState, useEffect } from 'react';
import { useFormContext } from '../context/FormContext'; // Ensure this path is correct
import PassengerForm from './PassengerForm'; // Ensure this path is correct
import SeatSelection from './SeatSelection'; // Ensure this path is correct

const SeatBookingForm = () => {
  const { formData, updateFormData } = useFormContext();
  const [availableSeats, setAvailableSeats] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  // Fetch available seats from backend
  useEffect(() => {
    const fetchAvailableSeats = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/available-seats/${formData.flight_id}`);
        const data = await response.json();
        setAvailableSeats(data); // Assuming 'data' is an array of seat objects
      } catch (error) {
        console.error('Error fetching available seats:', error);
      }
    };

    if (formData.flight_id) fetchAvailableSeats();
  }, [formData.flight_id]);

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...formData.passengers];
    updatedPassengers[index][field] = value;
    updateFormData('passengers', updatedPassengers);
  };

  const handleSeatSelection = (seatNumber) => {
    const updatedPassengers = [...formData.passengers];
    // Assuming each passenger gets one seat
    updatedPassengers[0].selectedSeat = seatNumber; // Select seat for the first passenger
    updateFormData('passengers', updatedPassengers);
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seat Booking</h2>
      <div className="space-x-12">

        Left Side: Passenger Details
        <div className="flex-1 space-y-6">
          {formData.passengers && formData.passengers.length > 0 && formData.passengers.map((passenger, index) => (
            <div key={index} className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Passenger {index + 1}</h3>
              <PassengerForm
                passenger={passenger}
                index={index}
                onChange={handlePassengerChange}
              />
            </div>
          ))}
        </div>

        {/* Right Side: Seat Selection
        <div className="flex-1">
          {availableSeats.length > 0 ? (
            <SeatSelection
              availableSeats={availableSeats}
              onSelectSeat={handleSeatSelection}
            />
          ) : (
            <div>Loading available seats...</div>
          )}
        </div> */}

      </div>
    </div>
  );
};

export default SeatBookingForm;
