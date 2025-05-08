import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
            S
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            SoftSell
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#why-choose-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Get Started
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col space-y-4 px-6">
            <a 
              href="#how-it-works" 
              className="hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors w-full text-left mt-2">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;