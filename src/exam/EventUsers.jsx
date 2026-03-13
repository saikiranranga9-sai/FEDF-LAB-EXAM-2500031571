import { useEffect, useState } from "react";

function EventUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  // Delete Function
  const deleteUser = (index) => {

    const updatedUsers = users.filter((user, i) => i !== index);

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>

      <h3>Event Registered Users</h3>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((u, index) => (
            <tr key={index}>
              <td>{u.name}</td>
              <td>{u.gender}</td>
              <td>{u.email}</td>
              <td>{u.contact}</td>

              <td>
                <button onClick={() => deleteUser(index)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EventUsers;