import './App.css';
import Users from './components/Users';
import { UsersProvider } from './UsersContext'

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
