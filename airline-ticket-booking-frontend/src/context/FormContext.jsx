// import React, { createContext, useState, useContext } from 'react';

// const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [formData, setFormData] = useState({
//     tripType: 'One Way',
//     from: '',
//     to: '',
//     departureDate: '',
//     returnDate: '',
//     passengers: 1,
//     promoCode: '',
//     paymentType: 'Cash',
//   });

//   return (
//     <FormContext.Provider value={{ formData, setFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useFormContext = () => useContext(FormContext);



// import { createContext, useState, useContext } from 'react';

// const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [formData, setFormData] = useState({
//     tripType: 'One Way',
//     from: '',
//     to: '',
//     departureDate: '',
//     returnDate: '',
//     passengers: 1,
//     promoCode: '',
//     paymentType: 'Cash',
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     age: '',
//     email: '',
//     gender: '',
//     selectedSeat: '',
//   });

//   const updateFormData = (field, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   return (
//     <FormContext.Provider value={{ formData, setFormData, updateFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useFormContext = () => useContext(FormContext);





import { createContext, useState, useContext } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tripType: 'One Way',
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengerCount: 1, // Number of passengers
    passengers: [
      {firstName: '', middleName: '', lastName: '', age: '', gender: ''}
    ], // Array to hold passenger details
    promoCode: '',
    paymentType: 'Cash',
    flight_id: '',
    selectedSeats:[]
  });

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);

