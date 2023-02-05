import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import PhoneInput from './PhoneInput';
import WhatsAppInput from './WhatsAppInput';

function UserForm({ createUser, editUserAtForm }) {
  const MIN_NOME = 12;
  const MIN_PHONE = 11;
  const MIN_WHATSAPP = 14;
  const { fullName, email, phone, whatsApp,
    edit, _editUser } = useContext(UserContext);

  const validate = () => (
    fullName.length >= MIN_NOME
    && /\S+@\S+\.\S+/.test(email)
    && phone.length >= MIN_PHONE
    && /^\+55\d+$/.test(whatsApp)
    && whatsApp.length >= MIN_WHATSAPP
  );

  return (
    <form
      className="border-2 p-3 shadow-2xl grid
        grid-cols-5 gap-6 my-3
        text-lg"
      style={ {
        marginLeft: '5%',
        marginRight: '5%',
      } }
    >
      <NameInput />
      <EmailInput />
      <PhoneInput />
      <WhatsAppInput />
      {
        edit ? (
          <button
            className={
              `${!validate()
                ? 'opacity-40'
                : 'opacity-100'}
            text-xl my-1 bg-[#036B52] text-white p-1 text-center rounded`
            }
            type="button"
            onClick={ () => createUser() }
            disabled={ !validate() }
          >
            CADASTRAR
          </button>)
          : (
            <button
              className={
                `${!validate()
                  ? 'opacity-40'
                  : 'opacity-100'}
          text-xl my-1 bg-[#03136b] text-white p-1 text-center rounded`
              }
              type="button"
              onClick={ () => editUserAtForm(_editUser.id) }
              disabled={ !validate() }
            >
              ATUALIZAR
            </button>
          )
      }

    </form>
  );
}

UserForm.propTypes = {
  createUser: PropTypes.func.isRequired,
  editUserAtForm: PropTypes.func.isRequired,
};

export default UserForm;
