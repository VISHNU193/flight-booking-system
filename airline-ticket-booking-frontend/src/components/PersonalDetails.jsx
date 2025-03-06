
// import { useFormContext } from './FormContext';

// const PersonalDetails = () => {
//   const { formData, updateFormData } = useFormContext();

//   return (
//     <form className="space-y-4">
//       <div>
//         <label className="block text-gray-700">First Name</label>
//         <input
//           type="text"
//           value={formData.firstName}
//           onChange={(e) => updateFormData('firstName', e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//           placeholder="Enter your first name"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-gray-700">Last Name</label>
//         <input
//           type="text"
//           value={formData.lastName}
//           onChange={(e) => updateFormData('lastName', e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//           placeholder="Enter your last name"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => updateFormData('email', e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
//           placeholder="Enter your email"
//           required
//         />
//       </div>
//     </form>
//   );
// };

// export default PersonalDetails;
