import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function EmailInput() {
  const { email, setEmail } = useContext(UserContext);

  const handleEmail = (value) => {
    setEmail(value);
  };

  return (
    <label
      htmlFor="email"
    >
      Email
      <input
        className="shadow-md appearance-none border border-verde-escuro
           mt-1.5 rounded w-full py-2 px-3
      text-gray-700 leading-tight focus:outline-none focus:shadow-outline
       focus:border focus:border-verde-claro"
        value={ email }
        type="email"
        id="email"
        placeholder="exemplo@exemplo.com"
        onChange={ (e) => handleEmail(e.target.value) }
      />
    </label>
  );
}

export default EmailInput;
