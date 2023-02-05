import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import User from './User';

function UsersContainer({ handleDelete, handleEdit }) {
  const { users } = useContext(UserContext);

  return (
    <article
      className="border-2 p-3 shadow-2xl"
      style={ {
        marginLeft: '5%',
        marginRight: '5%',
      } }
    >
      <div
        className="flex text-base font-light
      text-center items-center justify-center my-3"
      >
        <p
          className="w-16"
        >
          Id

        </p>
        <p
          className="w-60"
        >
          Name

        </p>
        <p
          className="w-64"
        >
          E-mail

        </p>
        <p
          className="w-36"
        >
          Phone

        </p>
        <p
          className="w-44"
        >
          WhatsApp

        </p>
        <p
          className="w-20"
        >
          Edit

        </p>
        <p
          className="w-20"
        >
          Delete

        </p>
      </div>
      {
        (users.length > 0)
          ? (
            users.map((user, index) => (
              <div
                className="flex
                 text-center items-center justify-center my-3
        text-lg"
                key={ index }
              >
                <User
                  handleEdit={ handleEdit }
                  handleDelete={ handleDelete }
                  user={ user }
                />

              </div>

            ))
          )
          : null
      }
    </article>
  );
}

UsersContainer.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default UsersContainer;
