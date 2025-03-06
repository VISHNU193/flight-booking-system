

const AirportDropdown = ({ label, selectedValue, onChange, options, placeholder }) => {
  return (
    <div className="flex-1">
      <label className="block text-gray-700">{label}</label>
      <select
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.code}>
            {option.city} - {option.code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AirportDropdown;
