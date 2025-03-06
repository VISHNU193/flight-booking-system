// import React from 'react';
// import PropTypes from 'prop-types';
// import { Box, TextField, MenuItem } from '@mui/material';

// const genders = [
//   { value: 'male', label: 'Male' },
//   { value: 'female', label: 'Female' },
//   { value: 'other', label: 'Other' }
// ];

// const PassengerForm = ({ index, passengerData, handlePassengerChange }) => {
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     handlePassengerChange(index, name, value);
//   };

//   return (
//     <Box>
//       <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
//         <TextField
//           required
//           label="First Name"
//           name="firstName"
//           value={passengerData.firstName}
//           onChange={handleInputChange}
//           variant="outlined"
//           size="small"
//           sx={{ flex: 1 }}
//           error={!passengerData.firstName}
//         />
//         <TextField
//           label="Middle Name"
//           name="middleName"
//           value={passengerData.middleName}
//           onChange={handleInputChange}
//           variant="outlined"
//           size="small"
//           sx={{ flex: 1 }}
//         />
//         <TextField
//           required
//           label="Last Name"
//           name="lastName"
//           value={passengerData.lastName}
//           onChange={handleInputChange}
//           variant="outlined"
//           size="small"
//           sx={{ flex: 1 }}
//           error={!passengerData.lastName}
//         />
//       </Box>
//       <Box sx={{ display: 'flex', gap: 2 }}>
//         <TextField
//           required
//           label="Age"
//           name="age"
//           type="number"
//           value={passengerData.age}
//           onChange={handleInputChange}
//           variant="outlined"
//           size="small"
//           inputProps={{ min: 0, max: 120 }}
//           sx={{ flex: 1 }}
//           error={!passengerData.age}
//         />
//         <TextField
//           required
//           select
//           label="Gender"
//           name="gender"
//           value={passengerData.gender}
//           onChange={handleInputChange}
//           variant="outlined"
//           size="small"
//           sx={{ flex: 1 }}
//           error={!passengerData.gender}
//         >
//           {genders.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       </Box>
//     </Box>
//   );
// };

// PassengerForm.propTypes = {
//   index: PropTypes.number.isRequired,
//   passengerData: PropTypes.shape({
//     firstName: PropTypes.string.isRequired,
//     middleName: PropTypes.string,
//     lastName: PropTypes.string.isRequired,
//     age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//     gender: PropTypes.oneOf(['male', 'female', 'other']).isRequired
//   }).isRequired,
//   handlePassengerChange: PropTypes.func.isRequired
// };

// export default PassengerForm;



import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, MenuItem } from '@mui/material';

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const PassengerForm = ({ index, passengerData, handlePassengerChange }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handlePassengerChange(index, name, value);
  };

  return (
    <Box>
      {/* Row for Name Fields */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          required
          label="First Name"
          name="firstName"
          value={passengerData.firstName}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
          error={!passengerData.firstName}
          helperText={!passengerData.firstName ? 'First Name is required' : ''}
        />
        <TextField
          label="Middle Name"
          name="middleName"
          value={passengerData.middleName}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
        />
        <TextField
          required
          label="Last Name"
          name="lastName"
          value={passengerData.lastName}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
          error={!passengerData.lastName}
          helperText={!passengerData.lastName ? 'Last Name is required' : ''}
        />
      </Box>

      {/* Row for Age and Gender Fields */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          required
          label="Age"
          name="age"
          type="number"
          value={passengerData.age}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
          inputProps={{ min: 0, max: 120 }}
          sx={{ flex: 1 }}
          error={!passengerData.age}
          helperText={!passengerData.age ? 'Age is required' : ''}
        />
        <TextField
          required
          select
          label="Gender"
          name="gender"
          value={passengerData.gender}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
          error={!passengerData.gender}
          helperText={!passengerData.gender ? 'Gender is required' : ''}
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

PassengerForm.propTypes = {
  index: PropTypes.number.isRequired,
  passengerData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    gender: PropTypes.oneOf(['male', 'female', 'other']).isRequired,
  }).isRequired,
  handlePassengerChange: PropTypes.func.isRequired,
};

export default PassengerForm;
