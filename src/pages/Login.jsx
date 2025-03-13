// src/pages/Login.jsx
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import loginbg from '../assets/loginbg.png'
import bgm from '../assets/bg.png'
import logo from '../assets/logo ora-green.png'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLoggedIn = await login(email, password);
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };
  const [bgImage, setBgImage] = useState(loginbg);
  const [bgcolor,setBgcolor] = useState("#1e1e1e")
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBgImage(bgm);
        setBgcolor('#fff')
      } else {
        setBgImage(loginbg);
        setBgcolor('#1e1e1e')
      }
    };
    
    updateBackground(); // Set initial background
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);
  return (
    <div className="flex flex-col" style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundColor: {bgcolor}, // Set your fallback background color
              }}>

      <div className='fixed justify-between flex flex-row px-10 pt-10 w-[100vw] max-w-screen-2xl'>
        <img src={logo} alt="" className='h-10'/>
        <div className='flex flex-row space-x-4'>
          <button>Home</button>
          <button>Foods</button>
          <button>Register</button>
        </div>
      </div>
      <div className='grid lg:grid-cols-2  items-center justify-center h-screen'>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded  col-start-2 mx-1 max-w-96 lg:mx-20 flex flex-col justify-center items-center col-span-1">
        <h2 className="text-4xl font-bold font-dmSerif  mb-16">Welcome back</h2>
        <div className="mb-10 w-full">
          <label className="block text-sm font-medium mb-1 text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-400 border-b-[1px] border-black"
            required
          />
        </div>
        <div className="mb-2 w-full">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <h1 className='ml-auto mb-10'>forgot password?</h1>
        <button type="submit" className="w-full bg-black font-thin text-white p-2 font-dmSans py-3 mb-20">
          LOGIN
        </button>
        <h1>Dont have an account? <button>Sign Up</button></h1>
      </form>
      </div>
    </div>
  );
};

export default Login;