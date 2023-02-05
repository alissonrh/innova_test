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
    >
      Nome
      <input
        className="shadow-md appearance-none border border-verde-escuro
        mt-1.5 rounded w-full py-2 px-3
   text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    focus:border focus:border-verde-claro"
        value={ fullName }
        type="text"
        id="name"
        placeholder="Min. 12 caracteres"
        onChange={ (e) => handleName(e.target.value) }
      />
    </label>
  );
}

export default NameInput;
