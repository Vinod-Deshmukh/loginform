import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
function App() {
  const userAdmin = {
    name: "Vinod",
    password: "admin@123",
  };
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  function LogIn(details) {
    console.log(details);
  }
  const LogOut = () => {
    console.log("");
  };
  return (
    <div className="App">
      {user.password != "" ? (
        <div>
          Welcome<span>user.name</span>
          <button>Log Out</button>
        </div>
      ) : (
        <LoginForm LogIn={LogIn} error={error} />
      )}
    </div>
  );
}

export default App;
