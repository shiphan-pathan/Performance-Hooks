import { useMemo, useCallback, useState } from 'react';
import './App.css'
import UserList from './pages/UserList';

const userData = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
]


function App() {
  const [count, setCount] = useState(0);
  const [search , setSearch] = useState('');  

  const filtered = useMemo(() => {
    console.log('Filtering users');
    return userData.filter((user) => 
      user.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleSelect = useCallback((name) => {
    console.log('Selected user:', name);
  }, []);

  return (
    <div style = {{ padding: '20px' }}>
      <h1>React Optimization</h1>

      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <br /> <br />

      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <UserList users={filtered} onSelect={handleSelect} />

    </div>
  )
}

export default App
