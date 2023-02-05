import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function PhoneInput() {
  const { phone, setPhone } = useContext(UserContext);

  const handlePhone = (value) => {
    setPhone(value);
  };

  return (
    <label
      htmlFor="phone"
      className="text-gray-500 text-base font-light mt-2"
    >
      Phone
      <input
        className="appearance-none border-b border-violet-600
        mt-1.5 p-2 w-full leading-tight focus:outline-none
        focus:border-b-2 focus:border-blue-800"
        value={ phone }
        type="text"
        id="phone"
        placeholder="DDD + Phone Number"
        onChange={ (e) => handlePhone(e.target.value) }
      />
    </label>
  );
}

export default PhoneInput;
