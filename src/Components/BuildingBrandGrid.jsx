import React from 'react'

const BuildingBrandGrid = () => {
  return (
    <>
       <div className=" flex-col text-center justify-center items-center mt-5">
            <p className="text-2xl text-[#AAAAAA]">
              A Strategic Approach to
            </p>
            <p className="text-3xl text-[#FFFFFF]">
           Building Brands
            </p>
          </div>

    <div className="flex   w-full flex-col items-center justify-center p-4 bg-[#121212]">
      
      <div className="grid w-full grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4">
        {/* 01 - Research-Backed Process */}
        <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 text-white">
          {/* <div className="absolute top-4 left-4 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">01</div> */}
          <h2 className="text-xl font-bold mb-4">Research-Backed Process</h2>
          <p>We dive deep into your business, audience, and competition to craft a strategy that ensures differentiation and market fit.</p>
        </div>

        {/* 02 - Founder-First Approach */}
        <div className="md:col-span-2 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-6 text-white">
          {/* <div className="absolute top-4 left-4 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">02</div> */}
          <h2 className="text-xl font-bold mb-4">Founder-First Approach</h2>
          <p>Your vision is at the core of our process. We align branding with your business goals and audience psychology to create meaningful connections.</p>
        </div>

        {/* 06 - Messaging & Storytelling */}
        <div className="md:row-span-2 bg-gradient-to-br from-orange-600 to-orange-800 rounded-3xl p-6 text-white">
          {/* <div className="absolute top-4 left-4 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">06</div> */}
          <h2 className="text-xl font-bold mb-4">Messaging & Storytelling</h2>
          <p>Branding isn't just about looks—it's about how your brand speaks, feels, and connects with your audience. We craft compelling brand messaging that strengthens emotional connection and customer trust—not just visuals.</p>
        </div>

        {/* 03 - Relentless Iteration */}
        <div className="md:col-span-2 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 text-white">
          {/* <div className="absolute top-4 left-4 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">03</div> */}
          <h2 className="text-xl font-bold mb-4">Relentless Iteration</h2>
          <p>Great brands aren't rushed—they're crafted. We refine obsessively, sometimes exploring 1000+ iterations to ensure precision and impact.</p>
        </div>

        {/* 04 - Rigorous Testing */}
        <div className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 text-white">
          {/* <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">04</div> */}
          <h2 className="text-xl font-bold mb-4">Rigorous Testing</h2>
          <p>We ensure functionality, legibility, and aesthetic excellence through in-depth validation across real-world use cases.</p>
        </div>

        {/* 05 - Cohesive Brand Systems */}
        <div className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-pink-600 to-pink-800 rounded-3xl p-6 text-white">
          {/* <div className="absolute top-4 left-4 bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">05</div> */}
          <h2 className="text-xl font-bold mb-4">Cohesive Brand Systems</h2>
          <p>Every element, from typography to color, is designed to work seamlessly across all touchpoints.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default BuildingBrandGrid