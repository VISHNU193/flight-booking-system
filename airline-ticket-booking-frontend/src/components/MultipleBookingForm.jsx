import  { useState } from 'react';
import { Box, Button } from '@mui/material';
import SeatBookingPage from '../pages/SeatBookingPage';
import axios from 'axios';

const MultipleBookingForm = () => {
  const [peopleData, setPeopleData] = useState([{
    firstName: '',
    middleName: '',
    lastName: ''
  }]);

  // Add new person form
  const addPerson = () => {
    setPeopleData([...peopleData, { firstName: '', middleName: '', lastName: '' }]);
  };

  // Handle form submission for multiple people
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/submitBooking', peopleData);
      console.log('Bookings submitted successfully:', response.data);
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      console.error('Error submitting bookings:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off" onSubmit={handleSubmit}>
      {peopleData.map((personData, index) => (
        <SeatBookingPage
          key={index}
          index={index}
          personData={personData}
          setPeopleData={setPeopleData}
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Submit All
      </Button>
      <Button variant="outlined" color="secondary" onClick={addPerson}>
        Add Another Person
      </Button>
    </Box>
  );
};

export default MultipleBookingForm;
