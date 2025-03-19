import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true); // Assuming token is initially true for demo

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img onClick={()=>navigate('/')} className="w-11 cursor-pointer" src={assets.logo} alt="Logo" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="relative">
          <li className="py-1">HOME</li>
          <hr className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-none outline-none h-0.5 bg-blue-500 w-3/5 hidden" />
        </NavLink>
        <NavLink to="/doctor" className="relative">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-none outline-none h-0.5 bg-blue-500 w-3/5 hidden" />
        </NavLink>
        <NavLink to="/about" className="relative">
          <li className="py-1">ABOUT</li>
          <hr className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-none outline-none h-0.5 bg-blue-500 w-3/5 hidden" />
        </NavLink>
        <NavLink to="/contact" className="relative">
          <li className="py-1">CONTACT</li>
          <hr className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-none outline-none h-0.5 bg-blue-500 w-3/5 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={assets.profile_pic} alt="" className="w-8 rounded-full" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={()=>navigate('my-profile')} className="cursor-pointer hover:text-blue-500">My Profile</p>
                <p onClick={()=>navigate('my-appointment')} className="cursor-pointer hover:text-blue-500">My Appointments</p>
                <p onClick={()=>setToken(false)} className="cursor-pointer hover:text-blue-500">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
