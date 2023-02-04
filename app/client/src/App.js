import UserProvider from './context/UserProvider';
import UsersPage from './screens/UsersPage';

function App() {
  return (
    <UserProvider>
      <UsersPage />
    </UserProvider>
  );
}

export default App;
