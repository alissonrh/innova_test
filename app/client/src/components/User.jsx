import React from 'react';
import PropTypes from 'prop-types';

function User({ user, handleDelete, handleEdit }) {
  const { id, fullName, email, phone, whatsApp } = user;

  return (
    <>
      <p
        className="bg-[#2FC18C] rounded-l-md w-16"
      >
        {id}

      </p>
      <p
        className="bg-slate-200 w-60"
      >
        {fullName}

      </p>
      <p
        className="bg-[#036B52] text-white w-64"
      >
        {email}

      </p>
      <p
        className="bg-[#421981] text-white w-36"
      >
        {phone}

      </p>
      <p
        className="bg-[#9564C5] text-white w-44"
      >
        {whatsApp}

      </p>
      <button
        className="bg-[#056CF9] text-white w-20"
        type="button"
        onClick={ () => handleEdit(id) }
      >
        Editar
      </button>
      <button
        className="bg-[#056CF9] text-white rounded-r-md w-20"
        type="button"
        onClick={ () => handleDelete(id) }
      >
        Excluir
      </button>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    id: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.string,
    whatsApp: PropTypes.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default User;
