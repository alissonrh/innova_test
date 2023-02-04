import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsApp, setWhatsApp] = useState('+55');

  const contextUser = useMemo(() => ({
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    whatsApp,
    setWhatsApp,
  }), [email, fullName, phone, whatsApp]);

  return (
    <UserContext.Provider value={ contextUser }>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
