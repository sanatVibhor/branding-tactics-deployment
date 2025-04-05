import React from 'react';

const BuildingBrandGrid = () => {
  return (
    <>
      <div className="flex-col text-center justify-center items-center mt-10 mb-10">
        <p className="text-2xl text-[#AAAAAA]">
          A Strategic Approach to
        </p>
        <p className="text-3xl text-[#FFFFFF]">
          Building Brands
        </p>
      </div>

      {/* Mobile view (single column) */}
      <div className="md:hidden flex w-full flex-col items-center justify-center p-4 bg-[#121212]">
        <div className="grid w-full grid-cols-1 gap-4">
          {/* 01 - Research-Backed Process */}
          <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#C517E6] h-6 w-6 rounded-full flex items-center justify-center'>01</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Research-Backed Process
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                We dive deep into your business, audience, and competition to craft a strategy that ensures differentiation and market fit.
              </p>
            </div>
          </div>

          {/* 02 - Founder-First Approach */}
          <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#FF176C] h-6 w-6 rounded-full flex items-center justify-center'>02</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Founder-First Approach
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                Your vision is at the core of our process. We align branding with your business goals and audience psychology to create meaningful connections.
              </p>
            </div>
          </div>

          {/* 03 - Relentless Iteration */}
          <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#FF4B19] h-6 w-6 rounded-full flex items-center justify-center'>03</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Relentless Iteration
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                Great brands aren't rushed—they're crafted. We refine obsessively, sometimes exploring 1000+ iterations to ensure precision and impact.
              </p>
            </div>
          </div>

          {/* 04 - Rigorous Testing */}
          <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#4B19FF] h-6 w-6 rounded-full flex items-center justify-center'>04</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Rigorous Testing
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                We ensure functionality, legibility, and aesthetic excellence through in-depth validation across real-world use cases.
              </p>
            </div>
          </div>

          {/* 05 - Cohesive Brand Systems */}
          <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#E617C5] h-6 w-6 rounded-full flex items-center justify-center'>05</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Cohesive Brand Systems
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                Every element, from typography to color, is designed to work seamlessly across all touchpoints.
              </p>
            </div>
          </div>

          {/* 06 - Messaging & Storytelling */}
          <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#FF8019] h-6 w-6 rounded-full flex items-center justify-center'>06</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Messaging & Storytelling
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                Branding isn't just about looks—it's about how your brand speaks, feels, and connects with your audience. We craft compelling brand messaging that strengthens emotional connection and customer trust—not just visuals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop bento grid view */}
      <div className="hidden md:flex w-full flex-col items-center justify-center p-4 bg-[#121212]">
        <div className="grid w-full grid-cols-10 grid-rows-2 gap-4">
          {/* 01 - Research-Backed Process */}
          <div className="col-span-4 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#C517E6] h-6 w-6 rounded-full flex items-center justify-center'>01</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Research-Backed Process
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA]'>
                We dive deep into your business, audience, and competition to craft a strategy that ensures differentiation and market fit.
              </p>
            </div>
          </div>

          {/* 02 - Founder-First Approach */}
          <div className="col-span-4 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#FF176C] h-6 w-6 rounded-full flex items-center justify-center'>02</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Founder-First Approach
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA]'>
                Your vision is at the core of our process. We align branding with your business goals and audience psychology to create meaningful connections.
              </p>
            </div>
          </div>

          {/* 06 - Messaging & Storytelling */}
          <div className="col-span-2 row-span-2 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#FF8019] h-6 w-6 rounded-full flex items-center justify-center'>06</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Messaging & Storytelling
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA]'>
                Branding isn't just about looks—it's about how your brand speaks, feels, and connects with your audience. We craft compelling brand messaging that strengthens emotional connection and customer trust—not just visuals.
              </p>
            </div>
          </div>

          {/* 03 - Relentless Iteration */}
          <div className="col-span-4 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#FF4B19] h-6 w-6 rounded-full flex items-center justify-center'>03</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Relentless Iteration
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA]'>
                Great brands aren't rushed—they're crafted. We refine obsessively, sometimes exploring 1000+ iterations to ensure precision and impact.
              </p>
            </div>
          </div>

          {/* 04 - Rigorous Testing */}
          <div className="col-span-2 row-span-2 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#4B19FF] h-6 w-6 rounded-full flex items-center justify-center'>04</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Rigorous Testing
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA]'>
                We ensure functionality, legibility, and aesthetic excellence through in-depth validation across real-world use cases.
              </p>
            </div>
          </div>

          {/* 05 - Cohesive Brand Systems */}
          <div className="col-span-2 row-span-2 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
            <div className='flex justify-start mb-4'>
              <p className='text-center text-white bg-[#E617C5] h-6 w-6 rounded-full flex items-center justify-center'>05</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Cohesive Brand Systems
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA]'>
                Every element, from typography to color, is designed to work seamlessly across all touchpoints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingBrandGrid;