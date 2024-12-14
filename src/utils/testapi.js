import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {data ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
