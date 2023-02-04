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
    >
      WhatsApp
      <input
        className="shadow-md appearance-none border border-verde-escuro
        mt-1.5 rounded w-full py-2 px-3
   text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    focus:border focus:border-verde-claro"
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
