import React from 'react'
import image from '/client logo/logo1.png'

const ProjectHome = () => {
  return (
    <> 
    <div className="flex  justify-center items-center mt-5 mb-10">
    <p className="text-2xl text-[#AAAAAA] mr-2">Our Work:</p>
    <p className="text-3xl text-white">Brands We've Transformed</p>
  </div>
   
    <div className=" flex flex-col justify-center items-center gap-20 lg:py-12 lg:flex lg:justify-center">
      <div className="bg-[#1E1E1E] lg:mx-8 lg:flex lg:max-w-5xl Elg:shadow-lg lg:rounded-lg">
        <div className="lg:w-1/2">
          <div 
            className="h-64 bg-cover lg:rounded-lg lg:h-full" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')` 
            }}
          ></div>
        </div>
        <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 className="text-3xl text-[#AAAAAA] font-bold">
            Sample Work <span className="text-white">Name</span>
          </h2>
          <p className="mt-4 text-[#AAAAAA]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
          </p>
        
          <div className="mx-auto flex h-30 items-center justify-center cursor-pointer">
          <button type="button" className="cursor-pointer transtion group flex h-10 w-56 items-center justify-center rounded-full bg-gradient-to-r from-[#FF4B19] to-[#FFE11F] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-3xl hover:shadow-[#0DF5D0]">
    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#121212] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">View in Detail</div>
  </button>
</div>
        </div>
      </div>
      <div className="bg-[#1E1E1E] lg:mx-8 lg:flex lg:max-w-5xl Elg:shadow-lg lg:rounded-lg">
        <div className="lg:w-1/2">
          <div 
            className="h-64 bg-cover lg:rounded-lg lg:h-full" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')` 
            }}
          ></div>
        </div>
        <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 className="text-3xl text-[#AAAAAA] font-bold">
            Sample Work <span className="text-white">Name</span>
          </h2>
          <p className="mt-4 text-[#AAAAAA]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
          </p>
        
          <div className="mx-auto flex h-30 items-center justify-center cursor-pointer">
          <button type="button" className="cursor-pointer transtion group flex h-10 w-56 items-center justify-center rounded-full bg-gradient-to-r from-[#FF4B19] to-[#FFE11F] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-3xl hover:shadow-[#0DF5D0]">
    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#121212] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">View in Detail</div>
  </button>
</div>
          
        </div>
      </div>

  
    </div>
    <div className="flex justify-center items-center cursor-pointer my-8 ">
            <button 
              type="button" 
              className="cursor-pointer transition group flex h-10 w-56 items-center justify-center rounded-full bg-gradient-to-r from-[#0DF5D0] to-[#08EE86] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-3xl hover:shadow-[#0DF5D0]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#121212] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
            View All My Work
              </div>
            </button>
          </div>
    </>
  )
}

export default ProjectHome