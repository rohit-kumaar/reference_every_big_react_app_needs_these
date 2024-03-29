import React, { useState } from "react";

function AllInputsWithAsingleonChange() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    country: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(user);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="userName"
          placeholder="User name"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email "
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <br />
        <input type="text" name="address" placeholder="Address" /> <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default AllInputsWithAsingleonChange;
