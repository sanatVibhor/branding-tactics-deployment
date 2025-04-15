// import React, { useState, useEffect } from 'react';
// import Problems from "./Problems";
// import bgVideo from '/bg-video/bg-video.mp4';
// import {  Moon, Sun } from 'lucide-react';
// import { Link } from 'react-router-dom'
// import Navbar from './Navbar';
// import logo from '../assets/icon.png'
// import LoaderHomePage from './LoaderHomePage';

// const clientLogos = [
//   "/client logo/logo1.png",
//   "/client logo/logo2.png",
//   "/client logo/logo3.png",
//   "/client logo/logo4.png",
//   "/client logo/logo5.png",
//   "/client logo/logo6.png",
//   "/client logo/logo7.png",
//   "/client logo/logo8.png",
//   "/client logo/logo9.png",
//   "/client logo/logo10.jpeg",
//   "/client logo/logo11.png",
//   "/client logo/logo12.png",
//   "/client logo/logo13.png",
//   "/client logo/logo14.png",
//   "/client logo/logo15.png",
//   "/client logo/logo16.webp",
//   "/client logo/logo17.jpg",
//   "/client logo/logo18.png",
//   "/client logo/logo19.png",
//   "/client logo/logo20.png",
// ];

// const VisionaryBrand = () => {
//   const [darkMode, setdarkMode] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [videoLoaded, setVideoLoaded] = useState(false);
  
//   // Handle video loaded event
//   const handleVideoLoaded = () => {
//     console.log("Video loaded successfully");
//     setVideoLoaded(true);
//   };
// useEffect(()=>{
//     if (darkMode){
//         document.documentElement.classList.add('dark')
//     }else{
//         document.documentElement.classList.remove('dark')
//     }
// },[darkMode])
//   const toggleDarkMode=()=>{
//     setdarkMode(!darkMode)
//   }
  
//   // Effect to handle loading state
//   useEffect(() => {
//     // If video is loaded, set a small delay before hiding loader for smooth transition
//     if (videoLoaded) {
//       const timer = setTimeout(() => {
//         setLoading(false);
//       }, 500);
//       return () => clearTimeout(timer);
//     }
    
//     // Fallback timer in case video load event doesn't fire
//     const fallbackTimer = setTimeout(() => {
//       console.log("Fallback timer triggered");
//       setLoading(false);
//     }, 8000); // Maximum wait time of 8 seconds
    
//     return () => clearTimeout(fallbackTimer);
//   }, [videoLoaded]);


//   return (
//     <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
//       {/* Theme Toggle Button */}
 

//       {/* Hero Section with Background Video */}
//       <div className="relative h-screen w-full overflow-hidden">
//       {/* Loader */}
//       {loading && (
//         <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
//           <div className="w-16 h-16 relative">
//             <div className="absolute top-0 left-0 w-full h-full border-4 border-t-teal-400 border-r-orange-500 border-b-purple-500 border-l-yellow-400 rounded-full animate-spin"></div>
//           </div>
//           <p className="mt-4 text-white text-lg">Loading experience...</p>
//         </div>
//       )}
      
//       {/* Background Video - Hidden until loaded */}
//       <div className={loading ? "invisible" : "visible"}>
//         <video 
//           autoPlay 
//           loop 
//           muted 
//           playsInline 
//           onLoadedData={handleVideoLoaded}
//           onCanPlayThrough={handleVideoLoaded}
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src={bgVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
        
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//       </div>
      
//       {/* Content Container - Hidden until loaded */}
//       <div className={`relative z-10 h-full flex flex-col ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
//         {/* Header with Logo and Case Study Button */}
//         <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 w-full">
//           <div className="flex items-center space-x-3 mb-4 sm:mb-0">
//             <img 
//               src={logo} 
//               alt="Branding Tactics Logo" 
//               className="h-8 sm:h-10 w-auto"
//             />
//             <span className="text-white font-bold text-lg sm:text-xl">Branding Tactics</span>
//           </div>
          
//           <Link to="/CaseStudy">
//             <button className=" cursor-pointer border border-orange-500 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white hover:bg-orange-500/20 transition duration-300">
//               Case Study
//             </button>
//           </Link>
//         </div>
        
//         <div className="flex-grow flex items-center justify-center">
//           <div className="w-full max-w-6xl px-4">
//             <div className="flex flex-col sm:flex-row sm:justify-end gap-6 sm:gap-8 md:gap-16 mb-6 sm:mb-8 md:mb-12">
//               <div className="text-center">
//                 <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">100+</div>
//                 <div className="text-white text-xs sm:text-sm">Satisfied Clients</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">13k+</div>
//                 <div className="text-white text-xs sm:text-sm">Instagram Followers</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">5+</div>
//                 <div className="text-white text-xs sm:text-sm">Years Experience</div>
//               </div>
//             </div>
            
   
//             <div className="text-center sm:text-right mb-8 sm:mb-12 md:mb-16">
//               <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 Serious Branding for
//                 <br className="hidden sm:inline" />
//                 <span className="sm:hidden"> </span>
//                 Serious Entreprenuers
//               </h1>
//             </div>

//             <div className="flex  justify-center sm:justify-end md:justify-center">
//               <button className="cursor-pointer border border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-teal-400/20 transition duration-300">
//                Book a Call
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//       {/* Trusted By Visionary Brands Section */}
//       <div className="flex flex-col justify-center items-center bg-[#121212] dark:bg-[#121212]">
//         <div className="flex flex-col w-full">
//           <div className="flex gap-2 justify-center items-center mt-10 mb-10">
//             <p className="text-2xl text-[#AAAAAA] ">
//               Trusted By
//             </p>
//             <p className="text-3xl text-[#FFFFFF]">
//               Visionary Brands
//             </p>
//           </div>

//           <div className="logo-slider overflow-hidden bg-[#DDDDDD] dark:bg-[#121212] ">
//             <div className="logo-track">
//               {clientLogos.concat(clientLogos).map((logo, index) => (
//                 <img 
//                   key={index} 
//                   src={logo} 
//                   alt={`Client Logo ${index + 1}`} 
//                   className="logo inline-block bg-[#F8F8F8] dark:bg-[#AAAAAA] " 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* <div className="mx-auto flex h-30 w-screen items-center justify-center cursor-pointer">
//   <button type="button" className="cursor-pointer transtion group flex h-10 w-56 items-center justify-center rounded-full bg-gradient-to-r from-[#0DF5D0] to-[#08EE86] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l  hover:shadow-3xl hover:shadow-[#0DF5D0]">
//     <div className="flex h-full w-full items-center justify-center rounded-full bg-[#121212] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">Let's work together</div>
//   </button>
// </div> */}

//         </div>
//       </div>

//       <Problems/>
//     </div>
//   );
// };

// export default VisionaryBrand;
import React, { useState, useEffect, useRef } from 'react';
import Problems from "./Problems";
import bgVideo from '/bg-video/bg-video.mp4';
import {  Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import logo from '../assets/icon.png'
import LoaderHomePage from './LoaderHomePage';
import BrandingPopup from './BrandingPopup';

const clientLogos = [
  "/client logo/logo1.png",
  "/client logo/logo2.png",
  "/client logo/logo3.png",
  "/client logo/logo4.png",
  "/client logo/logo5.png",
  "/client logo/logo6.png",
  "/client logo/logo7.png",
  "/client logo/logo8.png",
  "/client logo/logo9.png",
  "/client logo/logo10.jpeg",
  "/client logo/logo11.png",
  "/client logo/logo12.png",
  "/client logo/logo13.png",
  "/client logo/logo14.png",
  "/client logo/logo15.png",
  "/client logo/logo16.png",
  "/client logo/logo17.jpg",
  "/client logo/logo18.png",
  "/client logo/logo19.png",
  "/client logo/logo20.png",
];

const VisionaryBrand = () => {
  const [darkMode, setdarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  // Counter state for animations
  const [clientCount, setClientCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  
  // Target values for counters
  const clientTarget = 100;
  const followerTarget = 13000;
  const yearsTarget = 5;
  
  // Animation started flag
  const [animationStarted, setAnimationStarted] = useState(false);
  
  // Handle video loaded event
  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  
  const toggleDarkMode = () => {
    setdarkMode(!darkMode)
  }
  
  // Effect to handle loading state
  useEffect(() => {
    // If video is loaded, set a small delay before hiding loader for smooth transition
    if (videoLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    
    // Fallback timer in case video load event doesn't fire
    const fallbackTimer = setTimeout(() => {
      console.log("Fallback timer triggered");
      setLoading(false);
    }, 8000); // Maximum wait time of 8 seconds
    
    return () => clearTimeout(fallbackTimer);
  }, [videoLoaded]);

  // Effect to handle counter animations when page is loaded
  useEffect(() => {
    if (!loading && !animationStarted) {
      setAnimationStarted(true);
      
      // Duration for animations in milliseconds
      const duration = 2000;
      const startTime = performance.now();
      
      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Calculate current values based on easeOutExpo function for smoother ending
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
        // Update counter states
        setClientCount(Math.floor(easeOutProgress * clientTarget));
        setFollowerCount(Math.floor(easeOutProgress * followerTarget));
        setYearsCount(Math.min(Math.floor(easeOutProgress * yearsTarget * 10) / 10, yearsTarget));
        
        // Continue animation if not complete
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      // Start animation
      requestAnimationFrame(animate);
    }
  }, [loading, animationStarted]);

  // Format the follower count (13k+)
  const formatFollowers = (count) => {
    if (count >= 1000) {
      return `${Math.floor(count / 1000)}k+`;
    }
    return `${count}+`;
  };

  return (
    <>
    <BrandingPopup 
      isOpen={showPopup} 
      onClose={() => setShowPopup(false)} 
    />
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
      {/* Theme Toggle Button */}
 
      {/* Hero Section with Background Video */}
      <div className="relative h-screen w-full overflow-hidden">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          <div className="w-16 h-16 relative">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-t-teal-400 border-r-orange-500 border-b-purple-500 border-l-yellow-400 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-white text-lg">Loading experience...</p>
        </div>
      )}
      
      {/* Background Video - Hidden until loaded */}
      <div className={loading ? "invisible" : "visible"}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          onLoadedData={handleVideoLoaded}
          onCanPlayThrough={handleVideoLoaded}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
      </div>
      
      {/* Content Container - Hidden until loaded */}
      <div className={`relative z-10 h-full flex flex-col ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        {/* Header with Logo and Case Study Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 w-full">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <img 
              src={logo} 
              alt="Branding Tactics Logo" 
              className="h-8 sm:h-10 w-auto"
            />
            <span className="text-white font-bold text-lg sm:text-xl">Branding Tactics</span>
          </div>
          
          <Link to="/CaseStudy">
            <button className=" cursor-pointer border border-orange-500 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white hover:bg-orange-500/20 transition duration-300">
              Case Study
            </button>
          </Link>
        </div>
        
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <div className="flex flex-col sm:flex-row sm:justify-end gap-6 sm:gap-8 md:gap-16 mb-6 sm:mb-8 md:mb-12">
              <div className="text-center">
                <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">{clientCount}+</div>
                <div className="text-white text-xs sm:text-sm">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">{formatFollowers(followerCount)}</div>
                <div className="text-white text-xs sm:text-sm">Instagram Followers</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">{yearsCount}+</div>
                <div className="text-white text-xs sm:text-sm">Years Experience</div>
              </div>
            </div>
            
   
            <div className="text-center sm:text-right mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Serious Branding for
                <br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>
                Serious Entreprenuers
              </h1>
            </div>

            <div className="flex  justify-center sm:justify-end md:justify-center">
              <a href="https://superprofile.bio/brandingtactics?fbclid=PAZXh0bgNhZW0CMTEAAadatm808cqzeYJghPSCZHEXDihI0qSDc2IodHxWVjWtmlOt-e_eQlOYzn0ESw_aem_i1soeOjRWKYNTb4eaAymlg"> <button className="cursor-pointer border border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-teal-400/20 transition duration-300">
               Book a Call
              </button></a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Trusted By Visionary Brands Section */}
      <div className="flex flex-col justify-center items-center bg-[#121212] dark:bg-[#121212]">
        <div className="flex flex-col w-full">
          <div className="flex gap-2 justify-center items-center mt-10 mb-10">
            <p className="text-2xl text-[#AAAAAA] ">
              Trusted By
            </p>
            <p className="text-3xl text-[#FFFFFF]">
              Visionary Brands
            </p>
          </div>

          <div className="logo-slider  overflow-hidden bg-[#DDDDDD] dark:bg-[#121212] ">
            <div className="logo-track">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className="logo  inline-block bg-[#F8F8F8] dark:bg-[#FFFFFF] " 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Problems/>
    </div>
    </>
  );
};

export default VisionaryBrand;