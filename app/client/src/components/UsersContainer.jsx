import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api/request';
import User from './User';

function UsersContainer() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setUsers(await getAllUsers());
  };

  const handleDelete = async () => {
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <article
      className="border-2 p-3 shadow-2xl"
      style={ {
        marginLeft: '5%',
        marginRight: '5%',
      } }
    >
      <div
        className="flex
      text-center items-center justify-center my-3
text-lg"
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
          WhatApp

        </p>
        <p
          className="w-20"
        >
          Editar

        </p>
        <p
          className="w-20"
        >
          Excluir

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
                  user={ user }
                  index={ index }
                  handleDelete={ handleDelete }
                />

              </div>

            ))
          )
          : null
      }
    </article>
  );
}

export default UsersContainer;
