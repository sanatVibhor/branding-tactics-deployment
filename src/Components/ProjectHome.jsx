import React from 'react'
import image from '/client logo/logo1.png'
import fizmaa from '/Home/Fizmaa-home.png'
import acrements from '/Home/Acrements-home.png'

const ProjectHome = () => {
  return (
    <> 
      <div className="flex justify-center items-center mt-5 mb-10">
        <p className="text-2xl text-[#AAAAAA] mr-2">Our Work:</p>
        <p className="text-3xl text-white">Brands We've Transformed</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-20 lg:py-12">
        {/* First Project */}
        <div className="bg-[#1E1E1E] lg:mx-8 lg:flex lg:max-w-5xl shadow-lg rounded-lg">
          <div className="lg:w-1/2">
            <img src={fizmaa} alt="Fizmaa Home" className="h-64 w-full object-cover rounded-lg lg:h-full" />
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-[#AAAAAA] font-bold">
              Sample Work <span className="text-white">Fizmaa</span>
            </h2>
            <p className="mt-4 text-[#AAAAAA]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur.
            </p>
            <div className="mx-auto flex h-30 items-center justify-center cursor-pointer mt-4">
              <button className="flex items-center justify-center border border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-teal-400/20 transition duration-300">
                View in Detail
              </button>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="bg-[#1E1E1E] lg:mx-8 lg:flex lg:max-w-5xl shadow-lg rounded-lg">
          <div className="lg:w-1/2">
            <img src={acrements} alt="Acrements Home" className="h-64 w-full object-cover rounded-lg lg:h-full" />
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-[#AAAAAA] font-bold">
              Sample Work <span className="text-white">Acrements</span>
            </h2>
            <p className="mt-4 text-[#AAAAAA]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur.
            </p>
            <div className="mx-auto flex h-30 items-center justify-center cursor-pointer mt-4">
              <button className="flex items-center justify-center border border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-teal-400/20 transition duration-300">
                View in Detail
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Button */}
      <div className="flex justify-center items-center cursor-pointer my-8">
        <button className="flex items-center justify-center border border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-teal-400/20 transition duration-300">
          Get Started
        </button>
      </div>
    </>
  )
}

export default ProjectHome
