



import React from 'react';
import { Link } from 'react-router-dom';
// import { useFormContext } from './FormProvider'; // Import useFormContext

import { useFormContext } from '../context/FormContext';
import AirportDropdown from './AirportDropdown'; // Adjust the path based on your file structure
import axios from 'axios';

const FlightBookingForm = () => {
  const { formData, setFormData } = useFormContext(); // Access context
  const { tripType, from, to, departureDate, returnDate, passengerCount, promoCode } = formData;

  const airports = [
    { city: 'Delhi', code: 'DEL' },
    { city: 'Mumbai', code: 'BOM' },
    { city: 'Bangalore', code: 'BLR' },
    { city: 'Kolkata', code: 'CCU' },
    { city: 'Chennai', code: 'MAA' },
  ];

  const filteredToAirports = airports.filter((airport) => airport.code !== from);

  // Get today's date in yyyy-MM-dd format
  const today = new Date().toISOString().split('T')[0];

  const isFormValid = from && to && departureDate && passengerCount;
  const [errorMessage, setErrorMessage] = React.useState(''); // For validation errors

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    console.log("f book form",formData);
    
  };

  const handleSearchClick = (event) => {
    if (!isFormValid) {
      event.preventDefault();
      setErrorMessage('Please fill in all required fields.');
    } else {
      setErrorMessage('');
      
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Book a flight</h2>
      </div>
      <form className="space-y-4">
        <div className="flex space-x-4">
          <AirportDropdown
            label="From"
            selectedValue={from}
            onChange={(value) => handleInputChange('from', value)}
            options={airports}
            placeholder="Select departure airport"
          />
          <AirportDropdown
            label="To"
            selectedValue={to}
            onChange={(value) => handleInputChange('to', value)}
            options={filteredToAirports}
            placeholder="Select destination airport"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700">Departure</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => handleInputChange('departureDate', e.target.value)}
              min={today}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Return</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => handleInputChange('returnDate', e.target.value)}
              min={departureDate || today}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700">Passengers</label>
            <input
              type="number"
              value={passengerCount}
              onChange={(e) => handleInputChange('passengerCount', e.target.value)}
              min="1"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Promo Code</label>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => handleInputChange('promoCode', e.target.value)}
              placeholder="Enter promo code"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        {/* Show error message if any required field is missing */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <Link
          to={isFormValid ? "/flights" : "#"}
          state={isFormValid ? formData : {}}
          onClick={handleSearchClick}
          className={`bg-blue-600 text-white px-4 py-2 rounded-lg block text-center no-underline ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
        >
          Search
        </Link>
      </form>
    </div>
  );
};

export default FlightBookingForm;
