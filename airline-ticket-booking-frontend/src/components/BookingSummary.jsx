// import{ useContext } from 'react';

import { useFormContext } from '../context/FormContext';

const BookingSummary = () => {
//   const { formData } = useContext(FormContext);
    const { formData, setFormData } = useFormContext();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>
      <div className="text-sm text-gray-700">
        <p><strong>Name:</strong> {formData.firstName} {formData.middleName && formData.middleName} {formData.lastName}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Selected Seat:</strong> {formData.selectedSeat}</p>

        {/* Travel Details */}
        <h4 className="font-semibold mt-4">Travel Details:</h4>
        <p><strong>Trip Type:</strong> {formData.tripType}</p>
        <p><strong>From:</strong> {formData.from}</p>
        <p><strong>To:</strong> {formData.to}</p>
        <p><strong>Departure Date:</strong> {formData.departureDate}</p>
        {formData.tripType === 'Round Trip' && (
          <p><strong>Return Date:</strong> {formData.returnDate}</p>
        )}
        <p><strong>Passengers:</strong> {formData.passengers}</p>

        {/* Promo Code */}
        <p><strong>Promo Code:</strong> {formData.promoCode || 'None'}</p>

        <p><strong>Payment Type:</strong> {formData.paymentType}</p>
      </div>
    </div>
  );
};

export default BookingSummary;
