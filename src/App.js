import './App.css';
import AppHeader from './components/app-header';
import { users } from './data/users';

function findUserById(id) {
  return users.filter(user => user.id === id)[0];
}

function App() {

  const user = findUserById('lreyes');

  return (
    <div className="App">
      < AppHeader fullName={user.fullName} nickName={user.nickName} profile={user.profile} />
    </div>
  );
}

export default App;