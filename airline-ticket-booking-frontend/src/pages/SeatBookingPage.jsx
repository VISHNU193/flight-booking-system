// import React, { useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import PassengerForm from '../components/PassengerForm'; // Child form component
// import axios from 'axios';

// const SeatBookingPage = () => {
//   const [passengers, setPassengers] = useState([
//     { firstName: '', middleName: '', lastName: '', age: '', gender: '' },
//   ]);

//   // Add a new passenger
//   const addPassenger = () => {
//     setPassengers((prevPassengers) => [
//       ...prevPassengers,
//       { firstName: '', middleName: '', lastName: '', age: '', gender: '' },
//     ]);
//   };

//   // Remove a passenger (ensuring there is at least one)
//   const removePassenger = (index) => {
//     if (passengers.length > 1) {
//       setPassengers((prevPassengers) => prevPassengers.filter((_, i) => i !== index));
//     }
//   };

//   // Handle change in passenger data
//   const handlePassengerChange = (index, key, value) => {
//     setPassengers((prevPassengers) => {
//       const updatedPassengers = [...prevPassengers];
//       updatedPassengers[index] = { ...updatedPassengers[index], [key]: value };
//       return updatedPassengers;
//     });
//   };

//   // Handle form submission with validation
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all required fields are filled
//     const allFieldsFilled = passengers.every((passenger) => {
//       return passenger.firstName && passenger.lastName && passenger.age && passenger.gender;
//     });

//     if (!allFieldsFilled) {
//       alert('Please fill all required fields before submitting.');
//       return; // Prevent form submission if validation fails
//     }

//     // If all fields are valid, send the data
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/api/submitBooking',
//         passengers
//       );
//       console.log('Bookings submitted successfully:', response.data);
//       // Handle success (e.g., show success message or redirect)
//     } catch (error) {
//       console.error('Error submitting bookings:', error);
//       // Handle error (e.g., show error message)
//     }
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         '& > :not(style)': { m: 1 },
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         maxWidth: '800px',
//         margin: 'auto',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Seat Booking Form
//       </Typography>
//       {passengers.map((passenger, index) => (
//         <Box key={index} sx={{ mb: 2, border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
//           <PassengerForm
//             index={index}
//             passengerData={passenger}
//             handlePassengerChange={handlePassengerChange}
//           />
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={() => removePassenger(index)}
//             sx={{ mt: 2 }}
//             disabled={passengers.length === 1} // Disable the button if there's only one passenger
//           >
//             Remove Passenger
//           </Button>
//         </Box>
//       ))}
//       <Button variant="outlined" color="secondary" onClick={addPassenger} sx={{ mt: 2 }}>
//         Add Another Passenger
//       </Button>
//       <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//         Submit All
//       </Button>
//     </Box>
//   );
// };

// export default SeatBookingPage;





// // import  { useContext, useEffect } from 'react';
// // import { Box, Button } from '@mui/material';
// // import PassengerForm from '../components/PassengerForm';
// // import axios from 'axios';
// // import { FormContext } from '../context/FormContext';

// // const SeatBookingPage = () => {
// //   const { formData, updateFormData } = useContext(FormContext);

// //   // Initialize passenger forms based on passenger count
// //   useEffect(() => {
// //     const initialPassengers = Array.from({ length: formData.passengerCount }, () => ({
// //       firstName: '',
// //       middleName: '',
// //       lastName: '',
// //       age: '',
// //       gender: '',
// //     }));
// //     updateFormData('passengers', initialPassengers);
// //   }, [formData.passengerCount, updateFormData]);

// //   // Add a new passenger
// //   const addPassenger = () => {
// //     const newPassenger = { firstName: '', middleName: '', lastName: '', age: '', gender: '' };
// //     updateFormData('passengers', [...formData.passengers, newPassenger]);
// //     updateFormData('passengerCount', formData.passengerCount + 1);
// //   };

// //   // Remove a passenger (ensuring there is at least one)
// //   const removePassenger = (index) => {
// //     if (formData.passengers.length > 1) {
// //       const updatedPassengers = formData.passengers.filter((_, i) => i !== index);
// //       updateFormData('passengers', updatedPassengers);
// //       updateFormData('passengerCount', formData.passengerCount - 1);
// //     }
// //   };

// //   // Handle change in passenger data
// //   const handlePassengerChange = (index, key, value) => {
// //     const updatedPassengers = [...formData.passengers];
// //     updatedPassengers[index] = { ...updatedPassengers[index], [key]: value };
// //     updateFormData('passengers', updatedPassengers);
// //   };

// //   // Handle form submission with validation
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const allFieldsFilled = formData.passengers.every((passenger) => {
// //       return passenger.firstName && passenger.lastName && passenger.age && passenger.gender;
// //     });

// //     if (!allFieldsFilled) {
// //       alert('Please fill all required fields before submitting.');
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://localhost:8080/api/submitBooking', formData);
// //       console.log('Bookings submitted successfully:', response.data);
// //     } catch (error) {
// //       console.error('Error submitting bookings:', error);
// //     }
// //   };

// //   return (
// //     <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, gap: 2, display: 'flex', flexDirection: 'column' }} noValidate>
// //       {formData.passengers.map((passenger, index) => (
// //         <Box key={index} sx={{ mb: 2 }}>
// //           <PassengerForm
// //             index={index}
// //             passengerData={passenger}
// //             handlePassengerChange={handlePassengerChange}
// //           />
// //           <Button
// //             variant="outlined"
// //             color="secondary"
// //             onClick={() => removePassenger(index)}
// //             sx={{ mt: 1 }}
// //             disabled={formData.passengerCount === 1} // Ensure at least one passenger
// //           >
// //             Remove Passenger
// //           </Button>
// //         </Box>
// //       ))}
// //       <Button variant="outlined" color="secondary" onClick={addPassenger} sx={{ mt: 2 }}>
// //         Add Another Passenger
// //       </Button>
// //       <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
// //         Submit All
// //       </Button>
// //     </Box>
// //   );
// // };

// // export default SeatBookingPage;

// import React, { useEffect, useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import PassengerForm from '../components/PassengerForm'; // PassengerForm component
// import { useFormContext } from '../context/FormContext'; // Access context for passengerCount

// const SeatBookingPage = () => {
//   const navigate = useNavigate();
//   const { formData, setFormData } = useFormContext(); // Access FormContext
//   const { passengerCount } = formData; // Get passengerCount from context

//   const [passengers, setPassengers] = useState([]);

//   // Synchronize passengers array with passengerCount
//   useEffect(() => {
//     setPassengers((prev) => {
//       const updatedPassengers = [...prev];

//       if (passengerCount > updatedPassengers.length) {
//         // Add passengers if count increases
//         const additionalPassengers = Array.from(
//           { length: passengerCount - updatedPassengers.length },
//           () => ({ firstName: '', middleName: '', lastName: '', age: '', gender: '' })
//         );
//         return [...updatedPassengers, ...additionalPassengers];
//       } else if (passengerCount < updatedPassengers.length) {
//         // Remove passengers if count decreases
//         return updatedPassengers.slice(0, passengerCount);
//       }
//       return updatedPassengers;
//     });
//   }, [passengerCount]);

//   // Handle change in passenger data
//   const handlePassengerChange = (index, key, value) => {
//     setPassengers((prevPassengers) => {
//       const updatedPassengers = [...prevPassengers];
//       updatedPassengers[index] = { ...updatedPassengers[index], [key]: value };
//       return updatedPassengers;
//     });
//   };

//   // Validate form and navigate to the next step
//   const handleNext = () => {
//     // Validate all passenger forms are filled
//     const allFieldsFilled = passengers.every((passenger) =>
//       ['firstName', 'lastName', 'age', 'gender'].every((key) => passenger[key])
//     );

//     if (!allFieldsFilled) {
//       alert('Please fill all required fields for all passengers.');
//       return; // Prevent navigation if validation fails
//     }

//     // Save passengers to FormContext
//     setFormData((prev) => ({ ...prev, passengers }));

//     // Navigate to seat selection page
//     navigate('/seat-booking');
//   };

//   return (
//     <Box
//       sx={{
//         '& > :not(style)': { m: 1 },
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         maxWidth: '800px',
//         margin: 'auto',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Passenger Details
//       </Typography>
//       {passengers.map((passenger, index) => (
//         <Box key={index} sx={{ mb: 2, border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
//           <PassengerForm
//             index={index}
//             passengerData={passenger}
//             handlePassengerChange={handlePassengerChange}
//           />
//         </Box>
//       ))}
//       <Button type="button" variant="contained" color="primary" onClick={handleNext} sx={{ mt: 2 }}>
//         Next
//       </Button>
//     </Box>
//   );
// };

// export default SeatBookingPage;





// import React, { useEffect, useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import PassengerForm from '../components/PassengerForm'; // PassengerForm component
// import { useFormContext } from '../context/FormContext'; // Access context for passengerCount

// const SeatBookingPage = () => {
//   const navigate = useNavigate();
//   const { formData, setFormData } = useFormContext(); // Access FormContext
//   const { passengerCount } = formData; // Get passengerCount from context

//   const [passengers, setPassengers] = useState([]);

//   // Synchronize passengers array with passengerCount
//   useEffect(() => {
//     setPassengers((prev) => {
//       const updatedPassengers = [...prev];

//       if (passengerCount > updatedPassengers.length) {
//         // Add passengers if count increases
//         const additionalPassengers = Array.from(
//           { length: passengerCount - updatedPassengers.length },
//           () => ({ firstName: '', middleName: '', lastName: '', age: '', gender: '' })
//         );
//         return [...updatedPassengers, ...additionalPassengers];
//       } else if (passengerCount < updatedPassengers.length) {
//         // Remove passengers if count decreases
//         return updatedPassengers.slice(0, passengerCount);
//       }
//       return updatedPassengers;
//     });
//   }, [passengerCount]);

//   // Handle change in passenger data
//   const handlePassengerChange = (index, key, value) => {
//     setPassengers((prevPassengers) => {
//       const updatedPassengers = [...prevPassengers];
//       updatedPassengers[index] = { ...updatedPassengers[index], [key]: value };
//       return updatedPassengers;
//     });
//   };

//   // Handle removing a passenger
//   const handleRemovePassenger = (index) => {
//     if (passengers.length > 1) {
//       setPassengers((prevPassengers) => prevPassengers.filter((_, i) => i !== index));

//       // Update the passenger count in the context
//       setFormData((prev) => ({
//         ...prev,
//         passengerCount: passengerCount - 1,
//       }));
//     } else {
//       alert('At least one passenger is required.');
//     }
//   };

//   // Validate form and navigate to the next step
//   const handleNext = () => {
//     // Validate all passenger forms are filled
//     const allFieldsFilled = passengers.every((passenger) =>
//       ['firstName', 'lastName', 'age', 'gender'].every((key) => passenger[key])
//     );

//     if (!allFieldsFilled) {
//       alert('Please fill all required fields for all passengers.');
//       return; // Prevent navigation if validation fails
//     }

//     // Save passengers to FormContext
//     setFormData((prev) => ({ ...prev, passengers }));

//     // Navigate to seat selection page
//     navigate('/seat-booking');
//   };

//   return (
//     <Box
//       sx={{
//         '& > :not(style)': { m: 1 },
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         maxWidth: '800px',
//         margin: 'auto',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Passenger Details
//       </Typography>
//       {passengers.map((passenger, index) => (
//         <Box
//           key={index}
//           sx={{ mb: 2, border: '1px solid #ccc', p: 2, borderRadius: 2 }}
//         >
//           <PassengerForm
//             index={index}
//             passengerData={passenger}
//             handlePassengerChange={handlePassengerChange}
//           />
//           <Button
//             type="button"
//             variant="outlined"
//             color="secondary"
//             onClick={() => handleRemovePassenger(index)}
//             sx={{ mt: 2 }}
//             disabled={passengers.length === 1} // Disable the button if only one passenger is left
//           >
//             Remove Passenger
//           </Button>
//         </Box>
//       ))}
//       <Button
//         type="button"
//         variant="contained"
//         color="primary"
//         onClick={handleNext}
//         sx={{ mt: 2 }}
//       >
//         Next
//       </Button>
//     </Box>
//   );
// };

// export default SeatBookingPage;





// import React, { useEffect, useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import PassengerForm from '../components/PassengerForm';
// import { useFormContext } from '../context/FormContext';

// const SeatBookingPage = () => {
//   const navigate = useNavigate();
//   const { formData, setFormData } = useFormContext();
//   const { passengerCount } = formData;

//   const [passengers, setPassengers] = useState([]);

//   useEffect(() => {
//     setPassengers((prev) => {
//       const updatedPassengers = [...prev];

//       if (passengerCount > updatedPassengers.length) {
//         const additionalPassengers = Array.from(
//           { length: passengerCount - updatedPassengers.length },
//           () => ({ firstName: '', middleName: '', lastName: '', age: '', gender: '' })
//         );
//         return [...updatedPassengers, ...additionalPassengers];
//       } else if (passengerCount < updatedPassengers.length) {
//         return updatedPassengers.slice(0, passengerCount);
//       }
//       return updatedPassengers;
//     });
//   }, [passengerCount]);

//   const handlePassengerChange = (index, key, value) => {
//     setPassengers((prevPassengers) => {
//       const updatedPassengers = [...prevPassengers];
//       updatedPassengers[index] = { ...updatedPassengers[index], [key]: value };
//       return updatedPassengers;
//     });
//   };

//   const handleRemovePassenger = (index) => {
//     if (passengers.length > 1) {
//       setPassengers((prevPassengers) => prevPassengers.filter((_, i) => i !== index));
//       setFormData((prev) => ({
//         ...prev,
//         passengerCount: passengerCount - 1,
//       }));
//     } else {
//       alert('At least one passenger is required.');
//     }
//   };

//   const handleNext = () => {
//     const allFieldsFilled = passengers.every((passenger) =>
//       ['firstName', 'lastName', 'age', 'gender'].every((key) => passenger[key])
//     );

//     if (!allFieldsFilled) {
//       alert('Please fill all required fields for all passengers.');
//       return;
//     }

//     setFormData((prev) => ({ ...prev, passengers }));
//     navigate('/seat-booking');
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//         maxWidth: '800px',
//         margin: 'auto',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Passenger Details
//       </Typography>
//       {passengers.map((passenger, index) => (
//         <Box key={index} sx={{ mb: 2, border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
//           <PassengerForm
//             index={index}
//             passengerData={passenger}
//             handlePassengerChange={handlePassengerChange}
//           />
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={() => handleRemovePassenger(index)}
//             sx={{ mt: 2 }}
//             disabled={passengers.length === 1}
//           >
//             Remove Passenger
//           </Button>
//         </Box>
//       ))}
//       <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 2 }}>
//         Next
//       </Button>
//     </Box>
//   );
// };

// export default SeatBookingPage;






import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PassengerForm from '../components/PassengerForm';
import { useFormContext } from '../context/FormContext';
import { preconnect } from 'react-dom';

const SeatBookingPage = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();
  const { passengerCount } = formData;

  const [passengers, setPassengers] = useState(formData.passengers || [{
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: ''
  }]);

  // Adjust passengers based on passengerCount
  useEffect(() => {
    setPassengers((prev) => {
      const updatedPassengers = [...prev];

      if (passengerCount > updatedPassengers.length) {
        const additionalPassengers = Array.from(
          { length: passengerCount - updatedPassengers.length },
          () => ({ firstName: '', middleName: '', lastName: '', age: '', gender: '' })
        );
        return [...updatedPassengers, ...additionalPassengers];
      } else if (passengerCount < updatedPassengers.length) {
        return updatedPassengers.slice(0, passengerCount);
      }
      return updatedPassengers;
    });
  }, [passengerCount]);

  // Synchronize passengers with formData
  useEffect(() => {
    setFormData((prev) => ({ ...prev, passengers }));
  }, [passengers, setFormData]);

  const handlePassengerChange = (index, key, value) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers[index] = { ...updatedPassengers[index], [key]: value };
      return updatedPassengers;
    });
  };

  const handleRemovePassenger = (index) => {
    if (passengers.length > 1) {
      setPassengers((prevPassengers) => prevPassengers.filter((_, i) => i !== index));
      setFormData((prev) => ({
        ...prev,
        passengerCount: passengerCount - 1,
      }));
    } else {
      alert('At least one passenger is required.');
    }
  };

  const handleNext = () => {
    const allFieldsFilled = passengers.every((passenger) =>
      ['firstName', 'lastName', 'age', 'gender'].every((key) => passenger[key])
    );

    console.log(passengers);
    
    if (!allFieldsFilled) {
      alert('Please fill all required fields for all passengers.');
      return;
    }
   
    
    setFormData((prev) =>{
      console.log(prev);
      // console.log("prev + curr",...prev,passengers);
      
      return ({ ...prev, passengers })
    } );
    navigate('/seat-selection');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '800px',
        margin: 'auto',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Passenger Details
      </Typography>
      {passengers.map((passenger, index) => (
        <Box key={index} sx={{ mb: 2, border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
          <PassengerForm
            index={index}
            passengerData={passenger}
            handlePassengerChange={handlePassengerChange}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleRemovePassenger(index)}
            sx={{ mt: 2 }}
            disabled={passengers.length === 1}
          >
            Remove Passenger
          </Button>
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 2 }}>
        Next
      </Button>
    </Box>
  );
};

export default SeatBookingPage;
