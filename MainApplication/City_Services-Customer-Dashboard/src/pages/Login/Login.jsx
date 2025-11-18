import React, { useEffect, useState } from "react";

const Login = () => {
  localStorage.setItem("username", "Pankaj");
  localStorage.setItem("password", "12345");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const savedUser=localStorage.getItem("username");
  const savedPassword=localStorage.getItem("password");
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlepasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleButtonClick() {
    if (username === savedUser && password === savedPassword) {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  }

  return (
    <div className="bg-[url(/src/assets/images/img.jpg)] flex h-screen items-center justify-center flex-col gap-2">
      <div className="flex flex-col gap-5 bg-transparent border-2 border-solid border-[rgba(255,255,255,0.2)] backdrop-blur-[20px] p-8 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.2)] w-85">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Access Dashboard
        </h1>
        <input
          type="text"
          placeholder="Enter Username"
          className="p-4 rounded-[40px]  border border-white focus:outline-none focus:ring-1 focus:ring-white text-white"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 rounded-[40px]  border border-white focus:outline-none focus:ring-1 focus:ring-white text-white"
          password={password}
          onChange={handlepasswordChange}
        />
        <button
          className="bg-black text-white p-2 rounded-[40px] hover:bg-white hover:text-black cursor-pointer"
          onClick={handleButtonClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
