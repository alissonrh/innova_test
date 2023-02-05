import { useContext, useEffect } from 'react';
import { getAllUsers, deleteUser, postUser, editUser, getUserById } from '../api/request';
import UserForm from '../components/UserForm';
import UserContainer from '../components/UsersContainer';
import UserContext from '../context/UserContext';

function UsersPage() {
  const { fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    whatsApp,
    setWhatsApp,
    setUsers,
    setEdit,
    _editUser,
    setEditUser,
  } = useContext(UserContext);

  const getUsers = async () => {
    setUsers(await getAllUsers());
  };

  const handleDelete = async (idUser) => {
    await deleteUser(`/${idUser}`);
    getUsers();
  };

  const editUserAtForm = async (idUser) => {
    await editUser(`/${idUser}`, { fullName, email, phone, whatsApp });
    getUsers();
    setFullName('');
    setEmail('');
    setPhone('');
    setWhatsApp('');
    setEditUser({});
    setEdit(true);
  };

  const handleEdit = async (idUser) => {
    const user = await getUserById(idUser);
    setEditUser(user);
    setEdit(false);
  };

  useEffect(() => {
    if (Object.keys(_editUser).length > 0) {
      setFullName(_editUser.fullName);
      setEmail(_editUser.email);
      setPhone(_editUser.phone);
      setWhatsApp(_editUser.whatsApp);
    }
  }, [_editUser]);

  const createUser = async () => {
    await postUser({ fullName, email, phone, whatsApp });
    getUsers();
    setFullName('');
    setEmail('');
    setPhone('');
    setWhatsApp('');
    setEditUser({});
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <UserForm createUser={ createUser } editUserAtForm={ editUserAtForm } />
      <UserContainer handleDelete={ handleDelete } handleEdit={ handleEdit } />
    </>
  );
}

export default UsersPage;
