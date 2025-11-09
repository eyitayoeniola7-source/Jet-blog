import react from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-zinc-300 rounded-lg py-12 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Two column layout - Logo/Social on left, Newsletter on right */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* LEFT COLUMN - Logo and Social Icons */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className=" rounded-full flex items-center justify-center">
                <img src={logo} alt="logo" className='w-25 h-20   flex items-start justify-start' />
              </div>
            
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {/* Email */}
              <a href="#email" className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              {/* Behance */}
              <a href="#behance" className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition">
                <span className="text-gray-700 font-bold">Be</span>
              </a>
              {/* Dribbble */}
              <a href="#dribbble" className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#linkedin" className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition">
                <span className="text-gray-700 font-bold">in</span>
              </a>
            </div>
          </div>
          
          {/* RIGHT COLUMN - Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider line */}
        <div className="border-t border-gray-300 pt-8">
          {/* Bottom row - Copyright and Policy links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-600">
            <span>©2025. All Right Reserved.</span>
            <span className="hidden md:block">|</span>
            <a href="#terms" className="hover:text-purple-600 transition">Terms Policy</a>
            <span className="hidden md:block">|</span>
            <a href="#privacy" className="hover:text-purple-600 transition">Privacy Policy</a>
            <span className="hidden md:block">|</span>
            <a href="#cookie" className="hover:text-purple-600 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;