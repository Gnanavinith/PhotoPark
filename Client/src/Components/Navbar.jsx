import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const navRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }

      if (navRef.current && !navRef.current.contains(event.target) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const StyledNavLink = ({ to, children, onClick, className }) => {
    return (
      <NavLink 
        to={to} 
        onClick={onClick}
        className={({ isActive }) => 
          `flex flex-col items-center gap-1 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'} ${className || ''}`
        }
      >
        {children}
        <div className="h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
      </NavLink>
    );
  };

  return (
    <nav className="py-5 px-4 md:px-6 font-medium relative" ref={navRef}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 tracking-wide uppercase">
          PHOTO PARK
        </h1>

        <ul className="hidden sm:flex gap-5 text-sm">
          <li className="group">
            <StyledNavLink to="/">HOME</StyledNavLink>
          </li>

          <li className="group relative">
            <div 
              className="flex flex-col items-center gap-1 cursor-pointer text-gray-700 hover:text-gray-900"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <div className="flex items-center gap-1">
                <span>SHOP</span>
                <ChevronDown size={14} />
              </div>
              <div className="h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              
              {dropdownVisible && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-48 bg-white shadow-md rounded-md border border-gray-200 z-50 py-1">
                  <NavLink to="/shop/acrylic" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Acrylic</NavLink>
                  <NavLink to="/shop/canvas" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Canvas</NavLink>
                  <NavLink to="/shop/wooden-cutouts" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Wooden Cutouts</NavLink>
                  <NavLink to="/shop/backlight-frames" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Backlight Photo Frames</NavLink>
                </div>
              )}
            </div>
          </li>

          <li className="group"><StyledNavLink to="/frames">FRAMES</StyledNavLink></li>
          <li className="group"><StyledNavLink to="/customize">CUSTOMIZE</StyledNavLink></li>
          <li className="group"><StyledNavLink to="/about">ABOUT</StyledNavLink></li>
          <li className="group"><StyledNavLink to="/contact">CONTACT</StyledNavLink></li>
        </ul>

        <div className="flex items-center gap-6">
          <button className="w-5 h-5 flex items-center justify-center">
            <Search size={20} strokeWidth={1.5} className="text-gray-800" />
          </button>

          <div className="relative" ref={profileRef}>
            <button 
              className="w-5 h-5 flex items-center justify-center"
              onClick={() => setProfileDropdown(!profileDropdown)}
            >
              <User size={20} strokeWidth={1.5} className="text-gray-800" />
            </button>

            {profileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border border-gray-200 z-50 py-1 animate-fadeIn">
                <NavLink to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</NavLink>
                <NavLink to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</NavLink>
                <NavLink to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</NavLink>
                <NavLink to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/cart" className="relative flex items-center justify-center">
            <ShoppingCart size={20} strokeWidth={1.5} className="text-gray-800" />
            <span className="absolute -right-1.5 -bottom-1.5 w-4 h-4 flex items-center justify-center bg-gray-900 text-white text-[10px] rounded-full">12</span>
          </NavLink>

          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="sm:hidden flex items-center justify-center"
          >
            <Menu size={20} strokeWidth={1.5} className="text-gray-800" />
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold">Menu</h2>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X size={20} className="text-gray-700" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col py-2">
              <NavLink to="/" className={({ isActive }) => `py-3 px-6 border-b border-gray-100 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>HOME</NavLink>

              <div className="relative">
                <div
                  className="py-3 px-6 border-b border-gray-100 flex justify-between items-center cursor-pointer text-gray-700"
                  onClick={() => setMobileDropdownVisible(!mobileDropdownVisible)}
                >
                  <span>SHOP</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${mobileDropdownVisible ? 'rotate-180' : ''}`} />
                </div>

                {mobileDropdownVisible && (
                  <div className="bg-gray-50 py-1 border-b border-gray-100">
                    <NavLink to="/shop/acrylic" className={({ isActive }) => `block py-2 px-10 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600'}`} onClick={() => setMobileMenuOpen(false)}>Acrylic</NavLink>
                    <NavLink to="/shop/canvas" className={({ isActive }) => `block py-2 px-10 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600'}`} onClick={() => setMobileMenuOpen(false)}>Canvas</NavLink>
                    <NavLink to="/shop/wooden-cutouts" className={({ isActive }) => `block py-2 px-10 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600'}`} onClick={() => setMobileMenuOpen(false)}>Wooden Cutouts</NavLink>
                    <NavLink to="/shop/backlight-frames" className={({ isActive }) => `block py-2 px-10 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600'}`} onClick={() => setMobileMenuOpen(false)}>Backlight Photo Frames</NavLink>
                  </div>
                )}
              </div>

              <NavLink to="/frames" className={({ isActive }) => `py-3 px-6 border-b border-gray-100 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>FRAMES</NavLink>
              <NavLink to="/customize" className={({ isActive }) => `py-3 px-6 border-b border-gray-100 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>CUSTOMIZE</NavLink>
              <NavLink to="/about" className={({ isActive }) => `py-3 px-6 border-b border-gray-100 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>ABOUT</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `py-3 px-6 border-b border-gray-100 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>CONTACT</NavLink>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between">
              <NavLink to="/login" className="text-gray-700 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Login</NavLink>
              <NavLink to="/profile" className="text-gray-700 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>My Account</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
