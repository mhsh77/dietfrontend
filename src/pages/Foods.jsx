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
const Foods = () => {
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
      <div className="bg-custom-dark flex flex-col">
        
        
        <div className='flex flex-col items-center' style={{
            backgroundImage: `url(${firstsectionbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#1e1e1e", // Set your fallback background color
            width: "100%",
            height: "100vh",
          }}>
          <Navbar />
          {/* call to action section */}
          <div className=' w-full min-h-[70vh] flex flex-col justify-center px-10 xl:px-48 max-w-screen-2xl text-white space-y-10 lg:space-y-20 py-11'>
            <h1 className='font-cinzel text-xl lg:text-4xl'>Some of the best food and recipes<br/>
            available in our restaurant    </h1>
            <h1 className='text-gray-300 text-sm'>We recommend you food based on your health situation<br/>
            and what your body needs</h1>
            <div className='w-full flex justify-end'>
              <Link to={'/login'}>
              <button className='bg-amber-400 text-black mt-4 ml-auto font-cormorant py-2 px-4'>Join Us Now</button>
              </Link>
            </div>
          </div>
          {/* foods*/}
          <div className="w-full xl:px-48 max-w-screen-2xl bg-custom-dark text-white space-y-5 lg:space-y-10 py-11 flex flex-col items-center">
            <h1 className="font-dmSerif text-amber-300 text-2xl lg:text-4xl">Pre-workout</h1>
            <h1 className="font-dmSans text-xs">wanna something to eat before workout</h1>
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
                    className="lg:bg-[#2e2e2e] text-white  w-48 lg:w-1/4 flex-shrink-0"
                  >
                    <img src={food.img} alt={food.name} className="object-contain" />
                    <h1 className="font-dmSerif text-amber-300 text-lg lg:px-4 py-2">{food.name}</h1>
                    <h1 className="font-dmSans text-gray-400 px-4 pb-2 text-justify hidden lg:block">{food.desc}</h1>
                  </div>
                );
              })}
            </div>
          </div>
              {/* foods*/}
          <div className="w-full xl:px-48 max-w-screen-2xl bg-custom-dark text-white space-y-5 lg:space-y-10 py-11 flex flex-col items-center">
            <h1 className="font-dmSerif text-amber-300 text-2xl lg:text-4xl">Post-workout</h1>
            <h1 className="font-dmSans text-xs">wanna something to eat after workout</h1>
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
                    className="lg:bg-[#2e2e2e] text-white  w-48 lg:w-1/4 flex-shrink-0"
                  >
                    <img src={food.img} alt={food.name} className="object-contain" />
                    <h1 className="font-dmSerif text-amber-300 text-lg lg:px-4 py-2">{food.name}</h1>
                    <h1 className="font-dmSans text-gray-400 px-4 pb-2 text-justify hidden lg:block">{food.desc}</h1>
                  </div>
                );
              })}
            </div>
          </div>
{/* foods*/}
<div className="w-full xl:px-48 max-w-screen-2xl bg-custom-dark text-white space-y-5 lg:space-y-10 py-11 flex flex-col items-center">
            <h1 className="font-dmSerif text-amber-300 text-2xl lg:text-4xl">Main dish</h1>
            <h1 className="font-dmSans text-xs">try our main dishes</h1>
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
                    className="lg:bg-[#2e2e2e] text-white  w-48 lg:w-1/4 flex-shrink-0"
                  >
                    <img src={food.img} alt={food.name} className="object-contain" />
                    <h1 className="font-dmSerif text-amber-300 text-lg lg:px-4 py-2">{food.name}</h1>
                    <h1 className="font-dmSans text-gray-400 px-4 pb-2 text-justify hidden lg:block">{food.desc}</h1>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    );
  };
  
  export default Foods;