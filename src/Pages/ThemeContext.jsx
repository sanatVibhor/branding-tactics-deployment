import React from 'react';
import acreCenter from "/case-study/Acrements/acre-center.png";

import acreTop1 from "/case-study/Acrements/acre-top1.png";  
 import acreTop2 from "/case-study/Acrements/acre-top2.png";
    import acreBottomLeft from "/case-study/Acrements/acre-bottom-left.png";  
     import acreBottomRight from "/case-study/Acrements/acre-bottom-right.png";
         import acreBottomCenter1 from "/case-study/Acrements/acre-bottom-center1.png"; 
             import acreBottomCenter2 from "/case-study/Acrements/acre-bottom-center2.png";   

const AcrementsBentoGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-white">
      <h2 className="mb-4 text-2xl font-bold">Acrements</h2>
      
      <div className="grid grid-cols-12 gap-3">
        {/* Top row - two phone mockups */}
        <div className="col-span-6 rounded-lg overflow-hidden h-40">
          <img 
            src={acreTop1}
            alt="Phone screen with Acrements app icon" 
            className="w-full h-full object-cover bg-blue-950"
          />
        </div>
        <div className="col-span-6 rounded-lg overflow-hidden h-40">
          <img 
            src={acreTop2}
            alt="Yellow phone mockup" 
            className="w-full h-full object-cover bg-blue-950"
          />
        </div>
        
        {/* Bottom section */}
        <div className="col-span-3 rounded-lg overflow-hidden h-72">
          <img 
            src={acreBottomLeft}
            alt="Office buildings" 
            className="w-full h-full object-cover bg-gray-200"
          />
        </div>
        
        <div className="col-span-6">
          {/* Center logo banner */}
          <div className="rounded-lg overflow-hidden h-32 mb-3 bg-blue-950 flex items-center justify-center">
            <div className="flex items-center">
            
               <img 
            src={acreCenter}
            alt="Office buildings" 
            className="w-full h-full object-cover bg-gray-200"
          />
            </div>
            
          </div>
          
          {/* Two small tiles below the center logo */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg overflow-hidden h-36" style={{ backgroundColor: 'rgb(241, 199, 0)' }}>
              <div className="w-full h-full flex items-center justify-center">
              <img 
            src={acreBottomCenter1}
            alt="Office buildings" 
            className="w-full h-full object-cover bg-gray-200"
          />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-36 bg-blue-950 flex items-center justify-center">
            <img 
            src={acreBottomCenter2}
            alt="Office buildings" 
            className="w-full h-full object-cover bg-gray-200"
          />
            </div>
          </div>
        </div>
        
        <div className="col-span-3 rounded-lg overflow-hidden h-72">
          <img 
            src={acreBottomRight}
            alt="Modern building with yellow pattern" 
            className="w-full h-full object-cover bg-gray-200"
          />
        </div>
      </div>
      
      {/* Branding footer */}
      <div className="mt-4 flex items-center">
        <div className="flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
            <path d="M12 4L15.5 9.5H8.5L12 4Z" fill="#FF00FF" />
            <path d="M8.5 9.5L4 15H13L8.5 9.5Z" fill="#00FFFF" />
            <path d="M15.5 9.5L13 15H20L15.5 9.5Z" fill="#FFFF00" />
          </svg>
          <span className="text-xs font-medium text-gray-600">Branding Tactics</span>
        </div>
      </div>
    </div>
  );
};

export default AcrementsBentoGrid;