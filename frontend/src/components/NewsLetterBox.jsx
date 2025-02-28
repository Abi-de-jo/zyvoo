import React, { useState } from 'react';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation (optional)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    // Here, you can call an API or handle the subscription logic
    console.log('Subscribed with:', email);
    setMessage('Thank you for subscribing! 🎉');
    setEmail('');
  };

  return (
    <div className="text-center my-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% Off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sequi?
      </p>

      <form 
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          type="submit" 
          className="bg-black cursor-pointer text-white text-xs px-10 py-4 hover:bg-gray-800 transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>

      {message && (
        <p className="text-green-600 mt-4">{message}</p>
      )}
    </div>
  );
};

export default NewsLetterBox;
