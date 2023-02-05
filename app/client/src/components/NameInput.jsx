import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function NameInput() {
  const { fullName, setFullName } = useContext(UserContext);

  const handleName = (value) => {
    setFullName(value);
  };

  return (
    <label
      htmlFor="name"
      className="text-gray-500 text-base font-light mt-2"
    >
      Name
      <input
        className="appearance-none border-b border-violet-600
        mt-1.5 p-2 w-full leading-tight focus:outline-none
        focus:border-b-2 focus:border-blue-800"
        value={ fullName }
        type="text"
        id="name"
        placeholder="Min. 12 characters"
        onChange={ (e) => handleName(e.target.value) }
      />
    </label>
  );
}

export default NameInput;
