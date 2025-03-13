// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Img from '../assets/logo ora-green.png'
const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="m-0 w-full px-10 xl:px-48 py-8 max-w-screen-2xl">
      <ul className="flex justify-between items-center xl:space-x-4 lg:space-x-1">
        <li>
          <Link to="/" className="text-white hover:text-gray-200">
            <img  src={Img} alt="Logo" className="h-10 w-fit"/>
          </Link>
        </li>
        {user ? (
          <li>
            <button onClick={handleLogout} className="font-castoro text-white hover:text-gray-200">
              <h1 className='font-castoro'>Logout</h1>
              
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login" className="font-castoro text-white hover:text-gray-200">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;