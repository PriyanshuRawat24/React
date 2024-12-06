import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill out all fields!");
      return;
    }
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center pb-12">
  <h2 className="pb-8 text-green-700 font-bold text-3xl">Login</h2>
  <input
    className="w-1/3 mb-4 p-2 border border-gray-300 rounded"
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Username"
  />
  <input
    className="w-1/3 mb-4 p-2 border border-gray-300 rounded"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
  />
  <button
    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    type="button"
    onClick={handleSubmit}
  >
    Submit
  </button>
</div>
  );
}

export default Login;
