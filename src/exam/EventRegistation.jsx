import { useState } from "react";

function EventRegistation() {

  const [user, setUser] = useState({
    eventname: "",
    gender: "",
    email: "",
    password: "",
    contact: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully");

    setUser({
      eventname: "",
      gender: "",
      email: "",
      password: "",
      contact: ""
    });
  };

  return (
    <div className="container">

      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />

        <select name="gender" value={user.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input name="email" placeholder="Email" value={user.email} onChange={handleChange} />

        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />

        <input name="contact" placeholder="Contact" value={user.contact} onChange={handleChange} />

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default EventRegistation;