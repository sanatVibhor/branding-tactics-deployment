// import React from 'react'

// const Problems = () => {
//   return (
//     <>
//       <div className='bg-[#DDDDDD] dark:bg-[#121212] px-4 py-8'>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-2 my-10">
//           <p className="text-xl md:text-2xl text-[#AAAAAA]">
//             Are you facing
//           </p>
//           <p className="text-2xl md:text-3xl text-[#FFFFFF]">
//             These Problems?
//           </p>
//         </div>

//         <div className='flex flex-col justify-center items-center gap-6 md:flex-row md:flex-wrap lg:flex-nowrap p-4'>
//           <div className='bg-[#1E1E1E] p-4 rounded-lg w-full sm:w-4/5 md:w-1/3 border-[#FFE11F] border-[0.4px] flex flex-col h-full'>
//             <div className='flex justify-center mb-4'>
//               <p className='text-center text-white bg-[#C517E6] h-6 w-6 rounded-full flex items-center justify-center'>1</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Lack of Clear Brand Strategy
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 Most designers focus only on visuals, missing the deeper strategy needed for differentiation.
//               </p>
//             </div>
//           </div>

//           <div className='bg-[#1E1E1E] p-4 rounded-lg w-full sm:w-4/5 md:w-1/3 border-[#FFE11F] border-[0.4px] flex flex-col h-full'>
//             <div className='flex justify-center mb-4'>
//               <p className='text-center text-white bg-[#FF176C] h-6 w-6 rounded-full flex items-center justify-center'>2</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Inconsistent Brand Identity
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 Without a cohesive approach, branding becomes fragmented, leading to weak positioning and lost revenue.
//               </p>
//             </div>
//           </div>

//           <div className='bg-[#1E1E1E] p-4 rounded-lg w-full sm:w-4/5 md:w-1/3 border-[#FFE11F] border-[0.4px] flex flex-col h-full'>
//             <div className='flex justify-center mb-4'>
//               <p className='text-center text-white bg-[#FF4B19] h-6 w-6 rounded-full flex items-center justify-center'>2</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Superficial, Intuition-Based Design
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 Design without research and strategy lacks clarity, depth, and impact—failing to connect with the right audience.
//               </p>
//             </div>
//           </div>
//         </div>
// {/* 
//         <div className="flex justify-center md:justify-end lg:justify-center my-10 px-4">
//           <button className="cursor-pointer border border-teal-400 rounded-full px-6 py-2 md:px-8 md:py-3 text-sm md:text-base text-white hover:bg-teal-400/20 transition duration-300">
//             Let's work Together
//           </button>
//         </div> */}
//       </div>
//     </>
//   )
// }

// export default Problems

import React from 'react';
import { useState, useEffect } from 'react';

const Problems = () => {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null);
  // State for initial load animations
  const [isVisible, setIsVisible] = useState(false);
  
  // Set visibility after component mounts for animations
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Problem cards data
  const problems = [
    {
      id: 1,
      number: 1,
      title: "Lack of Clear Brand Strategy",
      description: "Most designers focus only on visuals, missing the deeper strategy needed for differentiation.",
      color: "#C517E6",
      hoverColor: "#D93DFA",
      shadow: "rgba(197, 23, 230, 0.3)"
    },
    {
      id: 2,
      number: 2,
      title: "Inconsistent Brand Identity",
      description: "Without a cohesive approach, branding becomes fragmented, leading to weak positioning and lost revenue.",
      color: "#FF176C",
      hoverColor: "#FF4889",
      shadow: "rgba(255, 23, 108, 0.3)"
    },
    {
      id: 3,
      number: 3,
      title: "Superficial, Intuition-Based Design",
      description: "Design without research and strategy lacks clarity, depth, and impact—failing to connect with the right audience.",
      color: "#FF4B19",
      hoverColor: "#FF6E45",
      shadow: "rgba(255, 75, 25, 0.3)"
    }
  ];

  return (
    <>
      <div className='bg-[#DDDDDD] dark:bg-[#121212] px-4 py-12 relative overflow-hidden'>
        {/* Background design elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #C517E6 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #FF176C 0%, transparent 70%)' }}></div>
        
        {/* Subtle grid pattern overlay */}
        {/* <div className="absolute inset-0 bg-[#121212] opacity-5" style={{ 
          backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div> */}
        
        <div className="max-w-6xl mx-auto">
          <div className={`flex flex-col md:flex-row justify-center items-center gap-2 my-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-[#AAAAAA] relative z-10">
              Are you facing
            </p>
            <p className="text-2xl md:text-3xl text-[#FFFFFF] font-semibold relative z-10">
              These Problems?
              <span className="absolute -bottom-2 left-0 h-1 w-0 bg-[#FFE11F] transition-all duration-1000" style={{ width: isVisible ? '100%' : '0%' }}></span>
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-8 md:flex-row md:flex-wrap lg:flex-nowrap p-4'>
            {problems.map((problem, index) => (
              <div 
                key={problem.id}
                className='relative bg-[#1E1E1E] p-6 rounded-lg w-full sm:w-4/5 md:w-1/3 flex flex-col h-full transition-all duration-500'
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 30}px) scale(${hoveredCard === problem.id ? 1.03 : 1})`,
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: hoveredCard === problem.id ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${problem.shadow}` : '0 8px 20px rgba(0, 0, 0, 0.15)',
                  border: hoveredCard === problem.id ? `1.5px solid ${problem.hoverColor}` : '0.4px solid rgba(255, 225, 31, 0.5)'
                }}
                onMouseEnter={() => setHoveredCard(problem.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Corner accent */}
                <div 
                  className="absolute top-0 right-0 w-0 h-0 transition-all duration-500"
                  style={{ 
                    borderTop: hoveredCard === problem.id ? `40px solid ${problem.hoverColor}` : `20px solid ${problem.color}`,
                    borderLeft: hoveredCard === problem.id ? '40px solid transparent' : '20px solid transparent',
                    opacity: hoveredCard === problem.id ? 1 : 0.7
                  }}
                ></div>
                
                <div 
                  className='flex justify-center mb-6 transition-all duration-300'
                  style={{
                    transform: hoveredCard === problem.id ? 'translateY(-5px) scale(1.2)' : 'translateY(0) scale(1)'
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-sm" style={{ 
                      backgroundColor: problem.color,
                      opacity: hoveredCard === problem.id ? 0.4 : 0,
                      transform: hoveredCard === problem.id ? 'scale(1.5)' : 'scale(1)',
                      transition: 'all 0.5s ease'
                    }}></div>
                    <p 
                      className='text-center text-white h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 text-sm font-medium'
                      style={{ 
                        backgroundColor: hoveredCard === problem.id ? problem.hoverColor : problem.color
                      }}
                    >
                      {problem.number}
                    </p>
                  </div>
                </div>
                
                <div className='flex flex-col justify-between flex-grow'>
                  <h3 
                    className='text-center mb-4 text-white text-lg md:text-xl font-semibold transition-all duration-300'
                    style={{ 
                      color: hoveredCard === problem.id ? problem.hoverColor : '#FFFFFF',
                      transform: hoveredCard === problem.id ? 'translateY(-2px)' : 'translateY(0px)'
                    }}
                  >
                    {problem.title}
                  </h3>
                  
                  {/* Divider line */}
                  <div className="w-16 h-0.5 mx-auto mb-4 transition-all duration-500" style={{ 
                    backgroundColor: hoveredCard === problem.id ? problem.hoverColor : '#333333',
                    width: hoveredCard === problem.id ? '80px' : '50px'
                  }}></div>
                  
                  <p 
                    className='text-center mx-auto max-w-xs transition-all duration-300'
                    style={{ 
                      color: hoveredCard === problem.id ? '#DDDDDD' : '#AAAAAA',
                      lineHeight: '1.6'
                    }}
                  >
                    {problem.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-1/2 h-0.5 transition-all duration-500"
                  style={{ 
                    backgroundColor: problem.color,
                    width: hoveredCard === problem.id ? '90%' : '0%',
                    transform: 'translateX(-50%)',
                    opacity: 0.8,
                    borderRadius: '4px'
                  }}
                ></div>
              </div>
            ))}
          </div>
          
          {/* Optional action button */}
      
        </div>
      </div>
    </>
  );
};

export default Problems;