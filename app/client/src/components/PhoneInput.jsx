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
    >
      Phone
      <input
        className="shadow-md appearance-none border border-verde-escuro
        mt-1.5 rounded w-full py-2 px-3
   text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    focus:border focus:border-verde-claro"
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
