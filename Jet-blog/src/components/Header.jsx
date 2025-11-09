import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  //  Control mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  //  control  (light/dark mode)
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
     document.documentElement.classList.toggle('dark');
  };

  return (
<header className={`sticky top-0 z-50 shadow-sm transition-colors ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-purple-300 to-white'
       }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="flex justify-between items-center h-20">
          
          
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            {/* Logo Icon - Purple circle with up arrow */}
            
             <img src={logo} alt="logo" className='w-25 h-20   flex items-start justify-start' />
          </Link>
         
         
          {/* Desktop Navigation - Center (hidden on mobile) */}
          <div className="flex rounded-full px-4 py-2 border border-white/50 bg-white items-center gap-8">
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition font-medium">
              HOME
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-purple-600 transition font-medium">
              CATEGORIES
            </Link>
            <Link to="/tags" className="text-gray-700 hover:text-purple-600 transition font-medium">
              TAGS
            </Link>
            <Link to="/articles" className="text-gray-700 hover:text-purple-600 transition font-medium">
              ARTICLES
            </Link>
          </nav>

          {/* Right Side Actions - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <button className="text-gray-700 hover:text-purple-600 transition font-medium">
              EN ▼
            </button>

            {/* Theme Toggle Button (Sun/Moon) */}
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-200 transition"
            >
              {isDarkMode ? (
                // Moon icon for dark mode
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Cloud/Settings Icon */}
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-200 transition">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </button>

            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1723204814857-f72033f99e30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=828" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sign Up Button - Gradient from purple to orange */}
            <Link 
              to="/signup"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold hover:shadow-lg transition"
            >
              SIGN UP
            </Link>
          </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu - Only shows when isMenuOpen is true */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-2">
            <Link 
              to="/" 
              onClick={toggleMenu}
              className="py-3 px-4 hover:bg-purple-200 rounded-lg transition text-gray-700 font-medium"
            >
              HOME
            </Link>
            <Link 
              to="/categories" 
              onClick={toggleMenu}
              className="py-3 px-4 hover:bg-purple-200 rounded-lg transition text-gray-700 font-medium"
            >
              CATEGORIES
            </Link>
            <Link 
              to="/tags" 
              onClick={toggleMenu}
              className="py-3 px-4 hover:bg-purple-200 rounded-lg transition text-gray-700 font-medium"
            >
              TAGS
            </Link>
            <Link 
              to="/articles" 
              onClick={toggleMenu}
              className="py-3 px-4 hover:bg-purple-200 rounded-lg transition text-gray-700 font-medium"
            >
              ARTICLES
            </Link>
            <Link 
              to="/signup"
              onClick={toggleMenu}
              className="py-3 px-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-lg font-semibold text-center mt-2"
            >
              SIGN UP
            </Link>
          </nav>
        </div>
      </div>
    </header>

  );
};


export default Header;