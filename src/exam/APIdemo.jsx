import { useEffect, useState } from "react";

function Apidemo() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setData(json));

  }, []);

  return (
    <div>

      <h3>API Data</h3>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>

          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Apidemo;