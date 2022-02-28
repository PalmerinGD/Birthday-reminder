import { useState } from 'react';
import Person from './components/Person';
import data from './data'
function App() {
  console.log(data)
  const[users, setUsers] = useState([...data])
  console.log(users)
  return (
    <div className="App">
      {users.map(user => (<Person key={user.id} person={user}/>))}
      <button onClick={()=>{setUsers([])}}>Clear All</button>
    </div>
  );
}
export default App;
