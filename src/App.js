import logo from './logo.svg';
import './App.css';
import UsersList from './components/userlist/UsersList';
import useUser from './hooks/useUsers';

function App() {
  const {users} = useUser();

  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <UsersList users={users}/>
      </header>
    </div>
  );
}

export default App;
