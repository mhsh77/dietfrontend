import Navbar from '../components/Navbar';
import firstsectionbg from '../assets/calltoaction.png';
import firstfood from '../assets/food1.png';
import secondfood from '../assets/food2.png'; 
import thirdfood from '../assets/food3.png';
import diet from '../assets/diet.png';
import analysis from '../assets/analysis.png';
import foodlogo from '../assets/foodlogo.png';
import monitor from '../assets/monitor.png';
import offersImg from '../assets/offers.png'
import firstofteam from '../assets/firstofteam.png'
import secofteam from '../assets/secofteam.png'
import thofteam from '../assets/thofteam.png'
import divider from '../assets/divider.png'
import story from '../assets/story.png'
import footer from '../assets/footer.png'
import map from '../assets/map.png'
import phone from '../assets/phone.png'
import ImgLogo from '../assets/logo ora-green.png'
import { Link } from 'react-router-dom';
import Gauge from '../components/Gauge';
import { useState } from 'react';

const Dashboard = () => {
  const foods=[
    {id:1, name:'tuna sushi', desc:'Tuna sushi is a type of sushi that incorporates raw tuna fish as a main ingredient. It includes a variety of different types of sushi rolls, nigiri, and sashimi.', price: 10, img:firstfood},
    {id:2, name:'salmon sushi', desc:'Salmon sushi is a type of sushi that incorporates raw salmon fish as a main ingredient. It includes a variety of different types of sushi rolls, nigiri, and sashimi.', price: 12, img:secondfood},
    {id:3, name:'california roll', desc:'California roll is a type of sushi roll that incorporates imitation crab, avocado, and cucumber as main ingredients. It is a popular type of sushi roll in the United States.', price: 8, img:thirdfood},
  ]
  const offers=[

    {id:1, title:'Effective diet', Logo:diet},
    {id:2, title:'Physical analyses',Logo:analysis},
    {id:3, title:'Foods and recipes',Logo:foodlogo},
    {id:4, title:'Health monitoring',Logo:monitor},
  ]
  const team=[
    {id:1, name:'John Doe', position:'Chef', img:firstofteam,quet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'},
    {id:2, name:'Jane Doe', position:'Nutritionist', img:secofteam,quet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'},
    {id:3, name:'Jack Doe', position:'Doctor', img:thofteam,quet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'},
  ]
  const [messages, setMessages] = useState([
    "Hello! How are you?",
    "I'm good, thanks! What about you?",
    "Just working on a project.",
    "That sounds interesting!"
  ]);

  return (
    <div className="h-screen flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold">Sidebar</h2>
        <p className="text-gray-400">Fixed, non-scrollable</p>
      </div>

      {/* Right Chat Section */}
      <div className="w-3/4 flex flex-col h-screen">
        {/* Chat Header */}
        <div className="p-4 bg-gray-800 text-white font-bold">Chat</div>
        
        {/* Chat Messages - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-white shadow rounded-lg">
              {msg}
            </div>
          ))}
        </div>
        
        {/* Chat Input */}
        <div className="p-4 bg-gray-200 flex">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg"
            placeholder="Type a message..."
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
  };
  
  export default Dashboard;