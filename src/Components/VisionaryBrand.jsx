import React, { useState, useEffect } from 'react';
import Problems from "./Problems";
import bgVideo from '/bg-video/bg-video.mp4';
import { Moon, Sun } from 'lucide-react';

const clientLogos = [
  "/client logo/logo1.png",
  "/client logo/logo2.jpg",
  "/client logo/logo3.png",
  "/client logo/logo4.png",
  "/client logo/logo5.png",
  "/client logo/logo6.png",
  "/client logo/logo7.png",
  "/client logo/logo8.png",
  "/client logo/logo9.png",
  "/client logo/logo10.png",
  "/client logo/logo11.jpeg",
  "/client logo/logo12.png",
  "/client logo/logo13.png",
  "/client logo/logo14.png",
  "/client logo/logo15.png",
  "/client logo/logo16.webp",
  "/client logo/logo17.png",
  "/client logo/logo18.png",
  "/client logo/logo19.png",
  "/client logo/logo20.png",
];

const VisionaryBrand = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Effect to apply theme to body and html
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark', isDarkMode);
    htmlElement.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  // Theme toggle handler
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full 
        bg-white dark:bg-gray-800 
        text-gray-800 dark:text-white 
        shadow-light dark:shadow-dark 
        hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-all duration-300"
      >
        {isDarkMode ? (
          <Sun size={24} className="text-yellow-500" />
        ) : (
          <Moon size={24} className="text-indigo-600" />
        )}
      </button>

      {/* Hero Section with Background Video */}
      <div className="relative h-screen w-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex justify-between text-white p-4">
            <div className="font-semibold text-light-secondary dark:text-dark-secondary">
              Branding Tactics
            </div>
            <div>
              <button className="text-white hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                Case Study
              </button>
            </div>
          </div>
          
          <div className="flex-grow flex items-center justify-center">
            {/* Hero main content can go here */}
          </div>
        </div>
      </div>

      {/* Trusted By Visionary Brands Section */}
      <div className="flex flex-col justify-center items-center bg-light-background dark:bg-dark-background">
        <div className="flex flex-col w-full">
          <div className="flex justify-center items-center mt-5">
            <p className="text-2xl text-light-secondary dark:text-dark-secondary mr-2">
              Trusted By
            </p>
            <p className="text-3xl text-light-text dark:text-dark-text">
              Visionary Brands
            </p>
          </div>

          <div className="logo-slider overflow-hidden">
            <div className="logo-track">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className="logo inline-block filter brightness-75 dark:brightness-100 grayscale dark:grayscale-0 hover:brightness-100 hover:grayscale-0 transition-all duration-300" 
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center cursor-pointer my-8">
            <button 
              type="button" 
              className="cursor-pointer transition group flex h-10 w-56 items-center justify-center rounded-full 
              bg-gradient-light dark:bg-gradient-dark 
              p-[1.5px] text-white 
              duration-300 hover:shadow-lg"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full 
              bg-white dark:bg-[#121212] 
              text-light-text dark:text-dark-text 
              transition duration-300 ease-in-out 
              group-hover:bg-light-primary dark:group-hover:bg-dark-primary 
              group-hover:text-white">
                Let's work together
              </div>
            </button>
          </div>
        </div>
      </div>

      <Problems/>
    </div>
  );
};

export default VisionaryBrand;