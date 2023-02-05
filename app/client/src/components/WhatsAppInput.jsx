import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function WhatsAppInput() {
  const { whatsApp, setWhatsApp } = useContext(UserContext);

  const handleWhatsApp = (value) => {
    setWhatsApp(value);
  };

  return (
    <label
      htmlFor="whatsApp"
      className="text-gray-500 text-base font-light mt-2"
    >
      WhatsApp
      <input
        className="appearance-none border-b border-violet-600
        mt-1.5 p-2 w-full leading-tight focus:outline-none
        focus:border-b-2 focus:border-blue-800"
        value={ whatsApp }
        type="text"
        id="whatsApp"
        placeholder="DDD + WhatsApp Number"
        onChange={ (e) => handleWhatsApp(e.target.value) }
      />
    </label>
  );
}

export default WhatsAppInput;
