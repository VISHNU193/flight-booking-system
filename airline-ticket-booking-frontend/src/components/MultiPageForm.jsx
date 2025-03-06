// import  { useState } from 'react';
// import { useFormContext } from './FormContext';
// import PersonalDetails from './PersonalDetails';
// import SeatSelection from './SeatSelection';
// import Summary from './Summary';

// const MultiPageForm = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { formData } = useFormContext();

//   const handleNext = () => setCurrentPage((prev) => prev + 1);
//   const handlePrevious = () => setCurrentPage((prev) => prev - 1);
//   const handleSubmit = () => {
//     alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
//   };

//   return (
//     <div className="bg-gray-100 rounded-lg shadow-md p-6 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Flight Booking</h2>
//       {currentPage === 1 && <PersonalDetails />}
//       {currentPage === 2 && <SeatSelection />}
//       {currentPage === 3 && <Summary />}
//       <div className="flex justify-between mt-4">
//         {currentPage > 1 && (
//           <button
//             className="bg-gray-400 text-white px-4 py-2 rounded-lg"
//             onClick={handlePrevious}
//           >
//             Previous
//           </button>
//         )}
//         {currentPage < 3 && (
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg"
//             onClick={handleNext}
//           >
//             Next
//           </button>
//         )}
//         {currentPage === 3 && (
//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded-lg"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MultiPageForm;
