import React from 'react';

const About = () => {
  return (
    <div className="w-full py-16">
      <div className="flex justify-center items-center mb-12">
        <p className="text-3xl text-white">Meet the Strategist Behind the Brand</p>
      </div>
      
      <div className="flex justify-center px-4">
        <div className="bg-[#1E1E1E] w-full max-w-5xl lg:flex lg:shadow-lg lg:rounded-lg overflow-hidden">
          <div className="py-12 px-6 lg:w-1/2">
            <h2 className="text-3xl text-[#AAAAAA] font-bold">
              Build Your New <span className="text-white">Idea</span>
            </h2>
            <p className="mt-4 text-[#AAAAAA]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
            
           
          </div>
          
          <div className="lg:w-1/2 h-64 lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" 
              className="w-full h-full object-cover"
              alt="Person working on laptop" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;