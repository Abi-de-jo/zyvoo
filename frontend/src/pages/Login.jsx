import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign-Up");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle between Sign-Up and Login
  const toggleState = () => {
    setCurrentState(currentState === "Sign-Up" ? "Login" : "Sign-Up");
  };


  const onSubmit = async (e)=>{

    event.preventDefault();


  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-28 gap-5 text-gray-800 p-6 rounded-lg shadow-lg ">
      
      {/* Title */}
      <div className="inline-flex items-center gap-2 mb-2">
        <p className="text-3xl font-semibold">{currentState}</p>
        <hr className="border-none h-[2px] w-8 bg-gray-800" />
      </div>

      {/* Name Input (Only for Sign-Up) */}
      {currentState === "Sign-Up" && (
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}

      {/* Email Input */}
      <input 
        type="email" 
        placeholder="Email Address" 
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Password Input with Toggle */}
      <div className="relative w-full">
        <input 
          type={showPassword ? "text" : "password"} 
          placeholder="Password" 
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span 
          className="absolute right-3 top-3 text-gray-500 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁"}
        </span>
      </div>

      {/* Forgot Password (Only for Login) */}
      {currentState === "Login" && (
        <p className="text-sm text-blue-500 cursor-pointer hover:underline self-end">
          Forgot Password?
        </p>
      )}

      {/* Submit Button */}
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        {currentState}
      </button>

      {/* Toggle Sign-Up/Login */}
      <p className="text-sm text-gray-600">
        {currentState === "Sign-Up" ? "Already have an account?" : "Don't have an account?"} 
        <span 
          className="text-blue-500 cursor-pointer hover:underline ml-1"
          onClick={toggleState}
        >
          {currentState === "Sign-Up" ? "Login" : "Sign-Up"}
        </span>
      </p>
      
    </form>
  );
};

export default Login;
