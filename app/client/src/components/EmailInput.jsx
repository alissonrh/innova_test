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
      className="text-gray-500 text-base font-light mt-2"
    >
      Email
      <input
        className="appearance-none border-b border-violet-600
      mt-1.5 p-2 w-full leading-tight focus:outline-none
      focus:border-b-2 focus:border-blue-800"
        value={ email }
        id="email"
        type="email"
        placeholder="example@example.com"
        onChange={ (e) => handleEmail(e.target.value) }
      />
    </label>
  );
}

export default EmailInput;
