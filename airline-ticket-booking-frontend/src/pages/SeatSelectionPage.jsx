// // // import { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useFormContext } from '../context/FormContext';

// // // const SeatSelectionPage = () => {
// // //   const [seats, setSeats] = useState([]);
// // //   const [selectedSeats, setSelectedSeats] = useState([]);
// // //   const { formData, updateFormData } = useFormContext();

// // //   // Fetch seat data from the backend
// // //   useEffect(() => {
// // //     const fetchSeats = async () => {
// // //       try {
// // //         const response = await axios.get(`http://localhost:8080/api/available-seats/${formData.flight_id}`);
// // //         console.log(response.data);
        
// // //         setSeats(response.data); // Assuming response contains a list of seat objects
// // //       } catch (error) {
// // //         console.error('Error fetching seat data:', error);
// // //       }
// // //     };
// // //     fetchSeats();
// // //   }, [formData.flight_id]);

// // //   // Handle seat selection
// // //   const handleSeatClick = (seat) => {
// // //     if (seat.isBooked) return; // Do nothing if the seat is booked

// // //     if (selectedSeats.includes(seat.seatNumber)) {
// // //       // Deselect seat if already selected
// // //       setSelectedSeats((prev) => prev.filter((s) => s !== seat.seatNumber));
// // //     } else if (selectedSeats.length < formData.passengerCount) {
// // //       // Select seat only if the limit is not reached
// // //       setSelectedSeats((prev) => [...prev, seat.seatNumber]);
// // //     } else {
// // //       alert(`You can only select up to ${formData.passengerCount} seats.`);
// // //     }
// // //   };

// // //   // Update form data with selected seats only when selectedSeats changes
// // //   useEffect(() => {
// // //     if (formData.selectedSeats !== selectedSeats) {
// // //       updateFormData('selectedSeats', selectedSeats);
// // //     }
// // //   }, [selectedSeats, formData.selectedSeats, updateFormData]);

// // //   // Divide seats into left and right sections
// // //   const leftSeats = seats.filter((_, index) => index % 6 < 3);
// // //   const rightSeats = seats.filter((_, index) => index % 6 >= 3);

// // //   const renderSeats = (seatsToRender) =>
// // //     seatsToRender.map((seat) => (
// // //       <div
// // //         key={seat.seatNumber}
// // //         className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer ${
// // //           seat.isBooked
// // //             ? 'bg-red-500 cursor-not-allowed' // Booked seat
// // //             : selectedSeats.includes(seat.seatNumber)
// // //             ? 'bg-green-500' // Selected seat
// // //             : 'bg-white'
// // //         }`}
// // //         title={`Seat ${seat.seatNumber}`}
// // //         onClick={() => handleSeatClick(seat)}
// // //       >
// // //         {seat.seatNumber.split('_').pop()}
// // //       </div>
// // //     ));

// // //   // Display the summary of form data
// // //   const handleShowSummary = () => {
// // //     alert(`
// // //       Flight ID: ${formData.flight_id}
// // //       Passenger Count: ${formData.passengerCount}
// // //       Selected Seats: ${selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
// // //     `);
// // //   };

// // //   return (
// // //     <div className="p-6 bg-gray-100 rounded-lg">
// // //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
// // //       <div className="flex gap-8">
// // //         {/* Left seats */}
// // //         <div className="grid grid-cols-3 gap-2">
// // //           {renderSeats(leftSeats)}
// // //         </div>
// // //         {/* Right seats */}
// // //         <div className="grid grid-cols-3 gap-2">
// // //           {renderSeats(rightSeats)}
// // //         </div>
// // //       </div>
// // //       <div className="mt-6">
// // //         <h3 className="text-lg font-semibold">Selected Seats:</h3>
// // //         <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
// // //         <p className="text-sm text-gray-500">
// // //           {selectedSeats.length} / {formData.passengerCount} seats selected
// // //         </p>
// // //       </div>
// // //       {/* Show Summary Button */}
// // //       <div className="mt-6">
// // //         <button
// // //           onClick={handleShowSummary}
// // //           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
// // //         >
// // //           Show Summary
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SeatSelectionPage;




// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useFormContext } from '../context/FormContext';

// // const SeatSelectionPage = () => {
// //   const [seats, setSeats] = useState([]);
// //   const [flightDetails, setFlightDetails] = useState(null);
// //   const [sliderOpen, setSliderOpen] = useState(false);
// //   const { formData, updateFormData } = useFormContext();

// //   // Fetch flight details using flight_id
// //   useEffect(() => {
// //     if (!formData.flight_id) return;

// //     const fetchFlightDetails = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:8080/flights/availableById`,
// //           { params: { id: formData.flight_id } }
// //         );
// //         console.log(response.data);
// //         console.log(response.data[0].id);
        
// //         setFlightDetails(response.data[0]);
// //       } catch (error) {
// //         console.error('Error fetching flight details:', error);
// //       }
// //     };

// //     fetchFlightDetails();
// //   }, [formData.flight_id]);

// //   // Fetch available seats using flight_id
// //   useEffect(() => {
// //     if (!formData.flight_id) return;

// //     const fetchSeats = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:8080/api/available-seats/${formData.flight_id}`
// //         );
// //         setSeats(response.data);
// //       } catch (error) {
// //         console.error('Error fetching seat data:', error);
// //       }
// //     };

// //     fetchSeats();
// //   }, [formData.flight_id]);

// //   // Handle seat selection
// //   const handleSeatClick = (seat) => {
// //     if (seat.isBooked) return; // Do nothing if the seat is booked

// //     const passengerSeats = formData.passengers.map((passenger, index) => ({
// //       ...passenger,
// //       seat: formData.selectedSeats[index] || null, // Map seat to the passenger
// //     }));

// //     if (formData.selectedSeats.includes(seat.seatNumber)) {
// //       // Deselect seat if already selected
// //       const updatedSeats = formData.selectedSeats.filter(
// //         (s) => s !== seat.seatNumber
// //       );
// //       updateFormData('selectedSeats', updatedSeats);
// //     } else if (formData.selectedSeats.length < formData.passengerCount) {
// //       // Select seat only if the limit is not reached
// //       updateFormData('selectedSeats', [
// //         ...formData.selectedSeats,
// //         seat.seatNumber,
// //       ]);
// //     } else {
// //       alert(`You can only select up to ${formData.passengerCount} seats.`);
// //     }

// //     // Update passengers with booked seats
// //     updateFormData('passengers', passengerSeats);
// //   };

// //   // Divide seats into left and right sections (3 seats on each side)
// //   const leftSeats = seats.filter((_, index) => index % 6 < 3);
// //   const rightSeats = seats.filter((_, index) => index % 6 >= 3);

// //   const renderSeats = (seatsToRender) =>
// //     seatsToRender.map((seat) => (
// //       <div
// //         key={seat.seatNumber}
// //         className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer ${
// //           seat.isBooked
// //             ? 'bg-red-500 cursor-not-allowed' // Booked seat
// //             : formData.selectedSeats.includes(seat.seatNumber)
// //             ? 'bg-green-500' // Selected seat
// //             : 'bg-white'
// //         }`}
// //         onClick={() => handleSeatClick(seat)}
// //       >
// //         {seat.seatNumber.split('_').pop()}
// //       </div>
// //     ));

// //   return (
// //     <div className="relative p-6 bg-gray-100 rounded-lg">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
// //       <div className="flex gap-8">
// //         {/* Left seats */}
// //         <div className="grid grid-cols-3 gap-2">
// //           {renderSeats(leftSeats)}
// //         </div>
// //         {/* Right seats */}
// //         <div className="grid grid-cols-3 gap-2">
// //           {renderSeats(rightSeats)}
// //         </div>
// //       </div>
// //       <button
// //         onClick={() => setSliderOpen(true)}
// //         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
// //       >
// //         View Booking Summary
// //       </button>

// //       {/* Right-Side Slider */}
// //       {sliderOpen && (
// //         <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-auto">
// //           <button
// //             onClick={() => setSliderOpen(false)}
// //             className="absolute top-4 right-4 text-gray-600 hover:text-black"
// //           >
// //             &times;
// //           </button>
// //           <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
// //           {flightDetails && (
// //             <>
// //               <p>
// //                 <strong>Flight ID:</strong> {flightDetails.id}
// //               </p>
// //               <p>
// //                 <strong>Airline:</strong> {flightDetails.airlinename}
// //               </p>
// //               <p>
// //                 <strong>From:</strong> {flightDetails.departureairport}
// //               </p>
// //               <p>
// //                 <strong>To:</strong> {flightDetails.arrivalairport}
// //               </p>
// //               <p>
// //                 <strong>Departure Time:</strong>{' '}
// //                 {new Date(flightDetails.departuretime).toLocaleString()}
// //               </p>
// //               <p>
// //                 <strong>Arrival Time:</strong>{' '}
// //                 {new Date(flightDetails.arrivaltime).toLocaleString()}
// //               </p>
// //             </>
// //           )}
// //           <p>
// //             <strong>Passenger Count:</strong> {formData.passengerCount}
// //           </p>
// //           <p>
// //             <strong>Selected Seats:</strong>{' '}
// //             {formData.selectedSeats.length > 0
// //               ? formData.selectedSeats.join(', ')
// //               : 'None'}
// //           </p>
// //           <h4 className="text-lg font-semibold mt-4">Passenger Details:</h4>
// //           {formData.passengers.map((passenger, index) => (
// //             <p key={index}>
// //               {passenger.firstName || `Passenger ${index + 1}`} - Seat:{' '}
// //               {formData.selectedSeats[index] || 'Not assigned'}
// //             </p>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SeatSelectionPage;


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import axios from 'axios';
// import { useFormContext } from '../context/FormContext';

// const SeatSelectionPage = () => {
//   const [seats, setSeats] = useState([]);
//   const [flightDetails, setFlightDetails] = useState(null);
//   const [sliderOpen, setSliderOpen] = useState(false);
//   const { formData, updateFormData } = useFormContext();
//   const navigate = useNavigate();

//   // Fetch flight details using flight_id
//   useEffect(() => {
//     if (!formData.flight_id) return;

//     const fetchFlightDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/flights/availableById`,
//           { params: { id: formData.flight_id } }
//         );
//         setFlightDetails(response.data[0]);
//       } catch (error) {
//         console.error('Error fetching flight details:', error);
//       }
//     };

//     fetchFlightDetails();
//   }, [formData.flight_id]);

//   // Fetch available seats using flight_id
//   useEffect(() => {
//     if (!formData.flight_id) return;

//     const fetchSeats = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/available-seats/${formData.flight_id}`
//         );
//         setSeats(response.data);
//       } catch (error) {
//         console.error('Error fetching seat data:', error);
//       }
//     };

//     fetchSeats();
//   }, [formData.flight_id]);

//   // Handle seat selection
//   const handleSeatClick = (seat) => {
//     if (seat.isBooked) return;

//     if (formData.selectedSeats.includes(seat.seatNumber)) {
//       // Deselect seat if already selected
//       const updatedSeats = formData.selectedSeats.filter(
//         (s) => s !== seat.seatNumber
//       );
//       updateFormData('selectedSeats', updatedSeats);
//     } else if (formData.selectedSeats.length < formData.passengerCount) {
//       // Select seat only if limit is not reached
//       updateFormData('selectedSeats', [
//         ...formData.selectedSeats,
//         seat.seatNumber,
//       ]);
//     } else {
//       alert(`You can only select up to ${formData.passengerCount} seats.`);
//     }
//   };

//   // Handle booking confirmation
//   const handleBookNow = () => {
//     // Validate if all seats are selected
//     if (formData.selectedSeats.length < formData.passengerCount) {
//       alert('Please select seats for all passengers before booking.');
//       return;
//     }

//     // Navigate to confirmation page
//     navigate('/confirmation', { state: { bookingDetails: formData } });
//   };

//   // Divide seats into left and right sections (3 seats on each side)
//   const leftSeats = seats.filter((_, index) => index % 6 < 3);
//   const rightSeats = seats.filter((_, index) => index % 6 >= 3);

//   const renderSeats = (seatsToRender) =>
//     seatsToRender.map((seat) => (
//       <div
//         key={seat.seatNumber}
//         className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer ${
//           seat.isBooked
//             ? 'bg-red-500 cursor-not-allowed'
//             : formData.selectedSeats.includes(seat.seatNumber)
//             ? 'bg-green-500'
//             : 'bg-white'
//         }`}
//         onClick={() => handleSeatClick(seat)}
//       >
//         {seat.seatNumber.split('_').pop()}
//       </div>
//     ));

//   return (
//     <div className="relative p-6 bg-gray-100 rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
//       <div className="flex gap-8">
//         {/* Left seats */}
//         <div className="grid grid-cols-3 gap-2">{renderSeats(leftSeats)}</div>
//         {/* Right seats */}
//         <div className="grid grid-cols-3 gap-2">{renderSeats(rightSeats)}</div>
//       </div>
//       <button
//         onClick={() => setSliderOpen(true)}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//       >
//         View Booking Summary
//       </button>
//       <button
//         onClick={handleBookNow}
//         className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//       >
//         Book Now
//       </button>

//       {/* Right-Side Slider */}
//       {sliderOpen && (
//         <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-auto">
//           <button
//             onClick={() => setSliderOpen(false)}
//             className="absolute top-4 right-4 text-gray-600 hover:text-black"
//           >
//             &times;
//           </button>
//           <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
//           {flightDetails && (
//             <>
//               <p>
//                 <strong>Flight ID:</strong> {flightDetails.id}
//               </p>
//               <p>
//                 <strong>Airline:</strong> {flightDetails.airlinename}
//               </p>
//               <p>
//                 <strong>From:</strong> {flightDetails.departureairport}
//               </p>
//               <p>
//                 <strong>To:</strong> {flightDetails.arrivalairport}
//               </p>
//               <p>
//                 <strong>Departure Time:</strong>{' '}
//                 {new Date(flightDetails.departuretime).toLocaleString()}
//               </p>
//               <p>
//                 <strong>Arrival Time:</strong>{' '}
//                 {new Date(flightDetails.arrivaltime).toLocaleString()}
//               </p>
//             </>
//           )}
//           <p>
//             <strong>Passenger Count:</strong> {formData.passengerCount}
//           </p>
//           <p>
//             <strong>Selected Seats:</strong>{' '}
//             {formData.selectedSeats.length > 0
//               ? formData.selectedSeats.join(', ')
//               : 'None'}
//           </p>
//           <h4 className="text-lg font-semibold mt-4">Passenger Details:</h4>
//           {formData.passengers.map((passenger, index) => (
//             <p key={index}>
//               {passenger.firstName || `Passenger ${index + 1}`} - Seat:{' '}
//               {formData.selectedSeats[index] || 'Not assigned'}
//             </p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeatSelectionPage;



import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormContext } from '../context/FormContext';

const SeatSelectionPage = () => {
  const [seats, setSeats] = useState([]);
  const [flightDetails, setFlightDetails] = useState(null);
  const [sliderOpen, setSliderOpen] = useState(false);
  const { formData, updateFormData } = useFormContext();
  const navigate = useNavigate();

  // Fetch flight details using flight_id
  useEffect(() => {
    if (!formData.flight_id) return;

    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/flights/availableById`,
          { params: { id: formData.flight_id } }
        );
        setFlightDetails(response.data[0]);
      } catch (error) {
        console.error('Error fetching flight details:', error);
      }
    };

    fetchFlightDetails();
  }, [formData.flight_id]);

  // Fetch available seats using flight_id
  useEffect(() => {
    if (!formData.flight_id) return;

    const fetchSeats = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/available-seats/${formData.flight_id}`
        );
        setSeats(response.data);
      } catch (error) {
        console.error('Error fetching seat data:', error);
      }
    };

    fetchSeats();
  }, [formData.flight_id]);

  // Handle seat selection
  const handleSeatClick = (seat) => {
    if (seat.isBooked) return;

    if (formData.selectedSeats.includes(seat.seatNumber)) {
      // Deselect seat if already selected
      const updatedSeats = formData.selectedSeats.filter(
        (s) => s !== seat.seatNumber
      );
      updateFormData('selectedSeats', updatedSeats);
    } else if (formData.selectedSeats.length < formData.passengerCount) {
      // Select seat only if the limit is not reached
      updateFormData('selectedSeats', [
        ...formData.selectedSeats,
        seat.seatNumber,
      ]);
    } else {
      alert(`You can only select up to ${formData.passengerCount} seats.`);
    }
  };

  // Handle booking confirmation
  // const handleBookNow = async () => {
  //   if (formData.selectedSeats.length < formData.passengerCount) {
  //     alert('Please select seats for all passengers before booking.');
  //     return;
  //   }

  //   const bookingPayload = {
  //     flightId: formData.flight_id,
  //     passengerCount: formData.passengerCount,
  //     passengers: formData.passengers.map((p) => `${p.firstName} ${p.lastName}`),
  //     selectedSeats: formData.selectedSeats,
  //     tripType: formData.tripType,
  //     fromLocation: flightDetails.departureairport,
  //     toLocation: flightDetails.arrivalairport,
  //     departureDate: flightDetails.departuretime,
  //     returnDate: formData.returnDate,
  //     promoCode: formData.promoCode,
  //     paymentType: formData.paymentType,
  //     status: 'CONFIRMED',
  //   };

  //   try {
  //     const response = await axios.post(
  //       'http://localhost:8080/api/bookings',
  //       bookingPayload
  //     );
  //     const bookingId = response.data.bookingId; // Assuming backend returns booking ID
  //     navigate('/confirmation', { state: { bookingId } });
  //   } catch (error) {
  //     console.error('Error creating booking:', error);
  //     alert('Failed to create booking. Please try again.');
  //   }
  // };


  const handleBookNow = async () => {
    if (!flightDetails) {
      alert('Flight details not loaded yet.');
      return;
    }

    // Prepare booking data
    const bookingData = {
      flightId: flightDetails.id, // Assuming flightDetails.id is the flight_id
      passengerCount: formData.passengerCount,
      passengers: formData.passengers.map((p) => `${p.firstName} ${p.lastName}`), // Combine first and last names
      selectedSeats: formData.selectedSeats,
      tripType: formData.tripType,
      fromLocation: flightDetails.departureairport, // Map to "fromLocation"
      toLocation: flightDetails.arrivalairport, // Map to "toLocation"
      departureDate: flightDetails.departuretime, // Map to "departureDate"
      returnDate: formData.returnDate || null, // Optional return date
      promoCode: formData.promoCode || null, // Optional promo code
      paymentType: formData.paymentType,
      status: 'CONFIRMED', // Hardcoded for simplicity
    };

    try {

      
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
        bookingData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert('Booking successful!');
      console.log('Booking response:', response.data);

      // Redirect to confirmation page (if using React Router)
      window.location.href = `/confirmation/${response.data.bookingId}`;
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  // Divide seats into left and right sections (3 seats on each side)
  const leftSeats = seats.filter((_, index) => index % 6 < 3);
  const rightSeats = seats.filter((_, index) => index % 6 >= 3);

  const renderSeats = (seatsToRender) =>
    seatsToRender.map((seat) => (
      <div
        key={seat.seatNumber}
        className={`w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer ${
          seat.isBooked
            ? 'bg-red-500 cursor-not-allowed'
            : formData.selectedSeats.includes(seat.seatNumber)
            ? 'bg-green-500'
            : 'bg-white'
        }`}
        onClick={() => handleSeatClick(seat)}
      >
        {seat.seatNumber.split('_').pop()}
      </div>
    ));

  return (
    <div className="relative p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
      <div className="flex gap-8">
        <div className="grid grid-cols-3 gap-2">{renderSeats(leftSeats)}</div>
        <div className="grid grid-cols-3 gap-2">{renderSeats(rightSeats)}</div>
      </div>
      <button
        onClick={() => setSliderOpen(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        View Booking Summary
      </button>
      <button
        onClick={handleBookNow}
        className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Book Now
      </button>

      {/* Right-Side Slider */}
      {sliderOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-auto">
          <button
            onClick={() => setSliderOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
          >
            &times;
          </button>
          <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
          {flightDetails && (
            <>
              <p>
                <strong>Flight ID:</strong> {flightDetails.id}
              </p>
              <p>
                <strong>Airline:</strong> {flightDetails.airlinename}
              </p>
              <p>
                <strong>From:</strong> {flightDetails.departureairport}
              </p>
              <p>
                <strong>To:</strong> {flightDetails.arrivalairport}
              </p>
              <p>
                <strong>Departure Time:</strong>{' '}
                {new Date(flightDetails.departuretime).toLocaleString()}
              </p>
              <p>
                <strong>Arrival Time:</strong>{' '}
                {new Date(flightDetails.arrivaltime).toLocaleString()}
              </p>
            </>
          )}
          <p>
            <strong>Passenger Count:</strong> {formData.passengerCount}
          </p>
          <p>
            <strong>Selected Seats:</strong>{' '}
            {formData.selectedSeats.length > 0
              ? formData.selectedSeats.join(', ')
              : 'None'}
          </p>
          <h4 className="text-lg font-semibold mt-4">Passenger Details:</h4>
          {formData.passengers.map((passenger, index) => (
            <p key={index}>
              {passenger.firstName || `Passenger ${index + 1}`} - Seat:{' '}
              {formData.selectedSeats[index] || 'Not assigned'}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeatSelectionPage;
