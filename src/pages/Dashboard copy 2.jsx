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
  const location={address:'Jendral Sudirman Street PahomanBandar Lampung, Lampung, 35222', phoneNo:'+0721 471 285'}
    return (

      <div className="lg:h-screen flex flex-col lg:flex-row">
        {/* Navbar */}
        <div className='lg:w-2/12 bg-gray-900 hidden text-white p-4 lg:flex flex-col justify-between' style={{
                    backgroundImage: `url(${firstsectionbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#1e1e1e", // Set your fallback background color
                    
                  }}>
            <img src={ImgLogo} alt="" className='w-24 mx-auto pt-6 '/>
            <div className='w-full mt-auto flex justify-center'>
                <button className='px-7 py-2 mb-2 border border-white text-white text-center bg-black'>LOGOUT</button>
            </div>
        </div>
        <div className='flex  flex-row pt-4 justify-between flex-1 h-fit px-7 lg:hidden w-full'>
            <img src={ImgLogo} alt="" className='w-20 h-fit'/>
            <button className='h-fit'>LOGOUT</button>
        </div>
        {/* Dashboard */}
        <div className='lg:w-10/12 flex flex-col h-scree flex-1 overflow-y-auto'>
          <h1 className='font-dmSerif text-2xl p-4'>Daily goals</h1>
          <p className='text-gray-500 px-4'>These show how much more and what you should eat</p>
          <div className='grid grid-cols-3 lg:flex lg:flex-row lg:justify-between items-center grid-rows-[auto_auto] bg-black rounded-xl p-4  m-4 gap-y-4'>
          <div className='justify-center items-center text-center col-start-1 col-span-2 h-fit lg:order-3'>
            <Gauge size="largem" value={50} fullvalue={100} color="text-white" bgcolor="text-red-200" showValue={true} title='Calories' />
          </div>
          <div className='col-start-3 col-span-1 h-fit lg:order-1'>
            <Gauge size="smallm" value={50} fullvalue={100} color="text-white" bgcolor="text-red-200" showValue={true} title='Fat' />
          </div>
          <div className='col-start-1 col-span-1 h-fit lg:order-2'>
            <Gauge size="smallm" value={50} fullvalue={100} color="text-white" bgcolor="text-red-200" showValue={true} title='Suger' />
          </div>
          <div className='col-start-2 col-span-1 h-fit lg:order-4'>
            <Gauge size="smallm" value={50} fullvalue={100} color="text-white" bgcolor="text-red-200" showValue={true} title='Fiber' />
          </div>
          <div className='col-start-3 col-span-1 h-fit lg:order-5'>
            <Gauge size="smallm" value={50} fullvalue={100} color="text-white" bgcolor="text-red-200" showValue={true} title='Golotamin' />
          </div>
        </div>
        <div className='flex flex-col p-4'>
          <h1 className='font-dmSerif text-2xl pb-2'>Pre-workout</h1>
          <p className='text-gray-500 pb-4'>for reaching your daily goal you have to choose between these items based on what ai suggested you</p>
          <div
              className="flex flex-row space-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 lg:justify-center pb-4"
              style={{
                maxWidth: "100%", // Restrict the width of the scrollable area
                overflowY: "hidden", // Prevent vertical scrolling
              }}
            >
              {foods.map((food) => {
                return (
                  <div
                    key={food.name}
                    className=" text-white  w-48 lg:w-1/4 flex-shrink-0"
                  >
                    <img src={food.img} alt={food.name} className="object-contain" />
                    <h1 className="font-dmSerif text-black text-lg lg:px-4 py-2">{food.name}</h1>
                  </div>
                );
              })}
          </div>
          <h1 className='font-dmSerif text-2xl pb-2'>Post-workout</h1>
          <p className='text-gray-500 pb-4'>for reaching your daily goal you have to choose between these items based on what ai suggested you after your workout</p>
          <div
              className="flex flex-row space-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 lg:justify-center pb-4"
              style={{
                maxWidth: "100%", // Restrict the width of the scrollable area
                overflowY: "hidden", // Prevent vertical scrolling
              }}
            >
              {foods.map((food) => {
                return (
                  <div
                    key={food.name}
                    className=" text-white  w-48 lg:w-1/4 flex-shrink-0"
                  >
                    <img src={food.img} alt={food.name} className="object-contain" />
                    <h1 className="font-dmSerif text-black text-lg lg:px-4 py-2">{food.name}</h1>
                  </div>
                );
              })}
          </div>
          <h1 className='font-dmSerif text-2xl pb-2'>Main dish</h1>
          <p className='text-gray-500 pb-4'>for reaching your daily goal you have to choose between these items based on what ai suggested you after your workout</p>
          <div
              className="flex flex-row space-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 lg:justify-center pb-4"
              style={{
                maxWidth: "100%", // Restrict the width of the scrollable area
                overflowY: "hidden", // Prevent vertical scrolling
              }}
            >
              {foods.map((food) => {
                return (
                  <div
                    key={food.name}
                    className=" text-white  w-48 lg:w-1/4 flex-shrink-0"
                  >
                    <img src={food.img} alt={food.name} className="object-contain" />
                    <h1 className="font-dmSerif text-black text-lg lg:px-4 py-2">{food.name}</h1>
                  </div>
                );
              })}
          </div>
          </div>  
          </div>        
      </div>
      
    );
  };
  
  export default Dashboard;