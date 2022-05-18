import React, { useState } from "react";

function LoginForm(LogIn, error) {
  const [details, setDetails] = useState({ name: "", password: "" });
  function submitHandler(e) {
    e.preventDefault();
    LogIn(details);
  }
  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="Password"
            name="Password"
            id="Password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          ></input>
        </div>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}

export default LoginForm;
