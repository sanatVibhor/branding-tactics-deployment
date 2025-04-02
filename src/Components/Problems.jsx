import React from 'react'

const Problems = () => {
  return (
    <>
      <div className='bg-[#DDDDDD] dark:bg-[#121212] px-4 py-8'>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 my-10">
          <p className="text-xl md:text-2xl text-[#AAAAAA]">
            Are you facing
          </p>
          <p className="text-2xl md:text-3xl text-[#FFFFFF]">
            These Problems?
          </p>
        </div>

        <div className='flex flex-col justify-center items-center gap-6 md:flex-row md:flex-wrap lg:flex-nowrap p-4'>
          <div className='bg-[#1E1E1E] p-4 rounded-lg w-full sm:w-4/5 md:w-1/3 border-[#FFE11F] border-[0.4px] flex flex-col h-full'>
            <div className='flex justify-center mb-4'>
              <p className='text-center text-white bg-[#C517E6] h-6 w-6 rounded-full flex items-center justify-center'>1</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Lack of Clear Brand Strategy
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                Most designers focus only on visuals, missing the deeper strategy needed for differentiation.
              </p>
            </div>
          </div>

          <div className='bg-[#1E1E1E] p-4 rounded-lg w-full sm:w-4/5 md:w-1/3 border-[#FFE11F] border-[0.4px] flex flex-col h-full'>
            <div className='flex justify-center mb-4'>
              <p className='text-center text-white bg-[#FF176C] h-6 w-6 rounded-full flex items-center justify-center'>2</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Inconsistent Brand Identity
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                Without a cohesive approach, branding becomes fragmented, leading to weak positioning and lost revenue.
              </p>
            </div>
          </div>

          <div className='bg-[#1E1E1E] p-4 rounded-lg w-full sm:w-4/5 md:w-1/3 border-[#FFE11F] border-[0.4px] flex flex-col h-full'>
            <div className='flex justify-center mb-4'>
              <p className='text-center text-white bg-[#FF4B19] h-6 w-6 rounded-full flex items-center justify-center'>2</p>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
                Superficial, Intuition-Based Design
              </h3>
              <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
                Design without research and strategy lacks clarity, depth, and impact—failing to connect with the right audience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end lg:justify-center my-10 px-4">
          <button className="cursor-pointer border border-teal-400 rounded-full px-6 py-2 md:px-8 md:py-3 text-sm md:text-base text-white hover:bg-teal-400/20 transition duration-300">
            Let's work Together
          </button>
        </div>
      </div>
    </>
  )
}

export default Problems