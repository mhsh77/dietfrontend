// src/pages/SignUp.jsx
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import loginbg from '../assets/loginbg.png'
import bgm from '../assets/bg.png'
import women from '../assets/women.png'
import men from '../assets/men.png'
import logo from '../assets/logo ora-green.png'
import QuantizedRange from '../components/QuantizedRange';
import tik from '../assets/tik.png'
const SignUp = () => {
  
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
  const values = [1, 2, 3, 4, 5, 6]; // Allowed quantized values
  const [bgImage, setBgImage] = useState(loginbg);
  const [state,setState] = useState(1);



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentweight,setCurrentWeight] = useState(0);
  const [desieredWeight,setDesiredWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [age,setAge] = useState(0)
  const [activity,setActivity] = useState(0)
  const [gender,setGender] = useState('women')
  const [ilness,setIlness] = useState('')
  const [registered,setRegistered] = useState(true)
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBgImage(bgm);
      } else {
        setBgImage(loginbg);
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
                backgroundPosition: "top", // Set your fallback background color
              }}>

      <header class="fixed top-0 left-0 w-full z-50 px-10">
      <div class="container mx-auto flex items-center justify-between p-4">
        
        <div class="flex items-center">
          <img src={logo} alt="Logo" class="h-8 w-auto"/>
        </div>

        <nav class="flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" class="text-gray-600 hover:text-blue-500">Foods</a>
          <a href="#" class="text-gray-600 hover:text-blue-500">Login</a>
        </nav>
      </div>
      </header>


      <div className='flex flex-col lg:grid lg:grid-cols-2  items-center justify-center h-screen'>
        <div className='col-start-1 col-span-1 hidden lg:flex'>
          <div className='flex flex-col space-y-10'>
            <div className='flex flex-row'>
            <span className={`w-14 h-14 rounded-full ${ state === 1 ? 'bg-gray-500' : state > 2 ? 'bg-green-500' : 'bg-green-500' } ml-8`} ></span>

              <div className="flex flex-col text-white pl-4">
                <h1>Registration form</h1>
                <h1>fill in your personal information so we can reach you</h1>
              </div>
            </div>
            <div className='flex flex-row'>
              <span className={`w-14 h-14 rounded-full ${ state === 2 ? 'bg-gray-500' : state > 2 ? 'bg-green-500' : 'bg-black' } ml-8`} ></span>
              <div className="flex flex-col text-white pl-4">
                <h1>Registration form</h1>
                <h1>fill in your personal information so we can reach you</h1>
              </div>
            </div>
            <div className='flex flex-row'>
              <span className={`w-14 h-14 rounded-full ${ state === 3 ? 'bg-gray-500' : state > 3 ? 'bg-green-500' : 'bg-black'  } ml-8`} ></span>
              <div className="flex flex-col text-white pl-4">
                <h1>Registration form</h1>
                <h1>fill in your personal information so we can reach you</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-full h-2  lg:hidden px-10 space-x-4'>
          <div className={` h-2 flex-1 ${ state === 1 ? 'bg-gray-500' : state > 2 ? 'bg-green-500' : 'bg-green-500' }`}> </div>
          <div className={` h-2 flex-1  ${ state === 2 ? 'bg-gray-500' : state > 2 ? 'bg-green-500' : 'bg-black' }`}></div>
          <div className={` h-2 flex-1 ${ state === 3 ? 'bg-gray-500' : state > 3 ? 'bg-green-500' : 'bg-black'  }`}></div>
        </div>
      {state ==1 && 
        <div className="bg-white p-6 rounded  col-start-2 mx-1 max-w-96 lg:mx-20 flex flex-col justify-center items-center space-y-3 col-span-1">
          <h2 className="text-4xl font-bold font-dmSerif  mb-16">Registeration Form</h2>
          <div className="w-full">
            <label className="block font-light text-sm mb-1 ">Full Name</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
              required
            />
          </div>
          <div className=" w-full">
            <label className="block text-sm font-light mb-1 ">Phone Number</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
              required
            />
          </div>
          <div className=" w-full">
            <label className="block text-sm font-light mb-1 ">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
              required
            />
          </div>
          <div className=" w-full">
            <label className="block text-sm font-light mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-light mb-1">Confirm Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
              required
            />
          </div>
          <button onClick={()=>{setState(state+1)}} className="w-full bg-black font-thin text-white p-2 font-dmSans py-3" >
            CONTINIUE
          </button>
          <h1>have an account? <button>Sign In</button></h1>
        </div>}
        {state ==2 &&
        <div className="bg-white p-6 rounded  col-start-2 mx-1 max-w-96 lg:mx-20 flex flex-col justify-center items-center space-y-3 col-span-1">
        <h2 className="text-4xl font-bold font-dmSerif  mb-16">Physical Situation</h2>
        <div className="w-full">
          <label className="block font-light text-sm mb-1 ">How much do you weight currently? (kg)</label>
          <input
            
            value={currentweight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            type='number'
            className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
            required
          />
        </div>
        <div className=" w-full">
          <label className="block text-sm font-light mb-1 ">How much is your target? (kg)</label>
          <input
            
            value={desieredWeight}
            onChange={(e) => setDesiredWeight(e.target.value)}
            type='number'
            className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
            required
          />
        </div>
        <div className=" w-full">
          <label className="block text-sm font-light mb-1 ">How tall are you? (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
            required
          />
        </div>
        <div className=" w-full">
          <label className="block text-sm font-light mb-1">How old are you?(years)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 bg-gray-100 border-b-[1px] border-black"
            required
          />
        </div>
        
        <button onClick={()=>{setState(state+1)}} className="w-full bg-black font-thin text-white p-2 font-dmSans py-3" >
          CONTINUE
        </button>
      </div>
        }
        {state ==3 &&
        <div className="bg-white p-6 rounded  col-start-2 mx-1 max-w-96 lg:mx-20 flex flex-col justify-center items-center space-y-3 col-span-1">
        <h2 className="text-4xl font-bold font-dmSerif  mb-16">Activity checkup</h2>
        <div className="w-full">
          <label className="block font-light text-sm mb-1 ">How active you are?</label>
          <div className='mt-4'>
            <QuantizedRange values={values} value={activity} setValue={setActivity}/>
            <p className="text-gray-400 text-sm pt-2">Lorem ipsum dolor sit amet consectetur. Euismod egestas.</p>
          </div>
          
        </div>
        <div className=" w-full space-x-2 py-2">
          <label className="block text-sm font-light mb-1 ">What is your gender?</label>
          <button className={`border border-1 border-gray-500 w-16 h-16 rounded-md ${gender =='women' ? 'bg-gray-200 border-2' : 'bg-white'}`} onClick={()=>setGender('women')}> 
            <img src={women}/>
          </button>
          <button className={`border border-1 border-gray-500 w-16 h-16 rounded-md ${gender =='men' ? 'bg-gray-200 border-2' : 'bg-white'}`} onClick={()=>setGender('men')}>
            <img src={men}/>
          </button>
        </div>
        
        <div className=" w-full">
          <label className="block text-sm font-light mb-1">Do you have any kind of ilness?</label>
          <textarea
            type="textfeild"
            value={ilness}
            onChange={(e) => setIlness(e.target.value)}
            className="w-full p-2 bg-gray-100 border-b-[1px] border-black h-40"
            required
          />
        </div>
        
        <button onClick={()=>{setState(state+1)}} className="w-full bg-black font-thin text-white p-2 font-dmSans py-3" >
          Finish
        </button>
      </div>
        }
        {state ==4 && 
          <div className="bg-white p-6 rounded  col-start-2 mx-1 max-w-96 lg:mx-20 flex flex-col justify-center items-center space-y-3 col-span-1">
          <h2 className="text-3xl font-bold font-dmSerif  mb-16 text-center">It will take few moments<br/>to set up AI for you</h2>
          <div className={`w-28 h-28 border-4 border-black border-t-transparent rounded-full animate-spin ${registered==true? ' hidden':''}`}></div>
          <div><img src={tik} alt="" className={`pb-10 ${registered==false?'hidden':''}`}/></div>
            <button onClick={()=>{console.log('navigate to dashboard')}} className={`w-full bg-black font-thin text-white p-2 font-dmSans py-3 ${registered==false?'hidden':''}`} >
            Lets start the journey!
          </button>
        </div>
        }
      </div>
    </div>
  );
};

export default SignUp;