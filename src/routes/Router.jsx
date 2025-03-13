// src/routes/Router.jsx
import { Routes, Route } from 'react-router-dom'; // No need for BrowserRouter here
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProtectedRoute from '../components/ProtectedRoute';
import Foods from '../pages/Foods'
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          
            <Dashboard />
          
        }
      />
      <Route path="/login" element={<Login />} />
      
      <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;