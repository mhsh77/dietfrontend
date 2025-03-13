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
const Home = () => {
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
            available in our restaurant  </h1>
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
            <h1 className="font-dmSerif text-amber-300 text-2xl lg:text-4xl">What to eat?</h1>
            <h1 className="font-dmSans text-xs">Here are some of the most delicious foods we serve.</h1>
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


          {/* what do we offer?*/}
          <div className="w-full xl:px-48 max-w-screen-2xl bg-white text-white space-y-10 py-11 flex flex-col items-start pb-20" style={{
            backgroundImage: `url(${offersImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundColor: "#1e1e1e", // Set your fallback background color
          }}>
              <h1 className='font-dmSerif text-amber-300 text-2xl lg:text-4xl mx-auto lg:ml-10'>What do we offer?</h1>
              <h1 className='font-dmSans text-sm lg:text-base mx-auto lg:ml-10'>We recommend you food based on your health situation<br/>
              and what your body needs</h1>
              <div className='grid grid-cols-2 lg:space-x-4  lg:flex lg:flex-row px-auto lg:justify-evenly w-full lg:max-w-full lg:w-auto lg:mx-auto'>
                {offers.map((offer)=>{
                  return(
                    <div className=' bg-black bg-opacity-70 text-white max-w-40 max-h-40 lg:max-w-80 w-60 flex flex-col items-center mx-auto mt-4 py-5'>
                      <img src={offer.Logo} alt={offer.title} className='max-w-28 max-h-14 h-48'/>
                      <h1 className='font-dmSerif text-white text-lg lg:text-xl px-4 py-2 text-center'>{offer.title}</h1>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Our team */}
            <div className="w-full xl:px-48 max-w-screen-2xl bg-custom-dark text-white space-y-5 lg:space-y-10 py-5 flex flex-col items-start pb-20">
              <h1 className='font-dmSerif text-amber-300 text-2xl lg:text-4xl mx-auto lg:ml-10'>Our team</h1>
              <h1 className='font-dmSans text-sm lg:text-base mx-auto lg:ml-10'>we are experts</h1>
              <div className='flex flex-col space-y-8 lg:space-y-2 mx-auto pt-4'>
                {team.map((member)=>{
                  return(
                    <div className='flex flex-row space-x-4 px-10'>
                      <img src={member.img} alt={member.name} className=' w-32 lg:w-60 lg:h-80'/>
                      <div className='flex flex-col'>
                        <h1 className='font-dmSerif text-amber-300 text-2xl'>{member.name}</h1>
                        <h1 className='font-dmSans '>{member.position}</h1>
                        <h1 className='font-dmSans text-gray-400 max-w-screen-sm text-gray'>{member.quet}</h1>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Spacer */}
            <img src={divider} className='w-full'/>
            {/* Spacer */}
            <div className="w-full xl:px-48 max-w-screen-2xl bg-custom-dark text-white space-y-10 py-5 flex flex-col items-start pb-20">
            <h1 className='font-dmSerif text-amber-300 text-2xl lg:text-4xl mx-auto lg:ml-10'>Our story</h1>
            <h1 className='font-dmSans text-sm lg:text-base mx-auto lg:ml-10'>A journey for making successful diet club</h1>
            <div className='flex flex-row'>
              <img src={story} alt="" srcset="" className=' w-48 h-48 pl-10 lg:w-1/2 p-0 lg:h-auto'/>
              <h1 className='font-dmSans mx-10 text-sm lg:text-base text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna id leo euismod rhoncus. Aliquam erat volutpat. Nulla id aliquam neque, at dignissim quam. Praesent et lacus accumsan, consequat nisl a, mattis sapien.

  Nam sodales ullamcorper aliquet. Phasellus ut pretium libero, vitae imperdiet purus. Sed sed tincidunt velit. Aliquam vitae ipsum molestie, vehicula nisi quis, finibus leo.</h1>
              </div>
            </div>
            {/* footer */}
            <div className='w-full xl:px-48 max-w-screen-2xl bg-white text-white space-y-10 py-11 flex flex-col items-center pb-20 justify-center' style={{
               backgroundImage: `url(${footer})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "top",
               backgroundColor: "#1e1e1e", // Set your fallback background color
            }}>
              <h1 className='text-2xl p-10 lg:text-4xl text-amber-300 font-cinzel font-bold text-center'>WE ARE READY TO BRING YOUR BODY<br/> THE BEST NUTRITIONS</h1>
              <div className='flex flex-col lg:flex-row items-start lg:justify-center lg:items-center'>
                <div className='flex flex-row justify-center items-center'>
                  <img src={map} alt="" />
                  <h1 className='max-w-80 text-gray-400'>{location.address}</h1>
                  </div>
                  <div className='flex flex-row justify-center items-center'>
                  <img src={phone} alt="" />
                  <h1 className='max-w-80 text-gray-400'>{location.phoneNo}</h1>
                  </div>
              </div>
              <button className='bg-amber-400 text-black mt-4 font-cormorant py-2 px-4'>Join Us Now</button>
              <Link to="/" className="text-white hover:text-gray-200">
                <img  src={ImgLogo} alt="Logo" className="h-10 w-fit"/>
              </Link>
              <h1 className='text-gray-300'>© 2025 Ora - All rights reserved</h1>
              <div className='flex flex-row justify-center items-center space-x-3'>
                <h1 className=' underline'>Instagram</h1>
                <h1 className=' underline'>Twitter</h1>
                <h1 className=' underline'>Facebook</h1>
              </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Home;