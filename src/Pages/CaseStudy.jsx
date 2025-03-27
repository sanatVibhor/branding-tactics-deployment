// import React from 'react'

// const CaseStudies = () => {
//   const caseStudiesData = [
//     {
//       id: 1,
//       color: 'purple',
//       description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."
//     },
//     {
//       id: 2,
//       color: 'red',
//       description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."    },
//     {
//       id: 3,
//       color: 'orange',
//       description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."    },
//     {
//       id: 4,
//       color: 'green',
//       description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."
//     },
//     {
//       id: 5,
//       color: 'yellow',
//       description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."    },
//     {
//       id: 6,
//       color: 'blue',
//        description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."
//     }
//   ]

//   const colorVariants = {
//     purple: 'bg-purple-500 text-purple-500 hover:bg-purple-600',
//     red: 'bg-red-500 text-red-500 hover:bg-red-600',
//     orange: 'bg-orange-500 text-orange-500 hover:bg-orange-600',
//     green: 'bg-green-500 text-green-500 hover:bg-green-600',
//     yellow: 'bg-yellow-500 text-yellow-500 hover:bg-yellow-600',
//     blue: 'bg-blue-500 text-blue-500 hover:bg-blue-600'
//   }

//   return (
//     <div className="bg-black p-6">
//       <div className="text-center text-white mb-12">
//         <h1 className="text-4xl font-bold mb-4">
//           "Branding That Works, Not Just Looks."
//         </h1>
//         <p className="text-xl">Real Brands, Real Results: Our Case Studies</p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {caseStudiesData.map((study) => (
//           <div 
//             key={study.id} 
//             className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg"
//           >
//             <div className="aspect-square bg-gray-700 flex items-center justify-center">
//               <svg 
//                 className="w-1/2 h-1/2 text-gray-500" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24" 
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                 <circle cx="8.5" cy="8.5" r="1.5"></circle>
//                 <polyline points="21 15 16 10 5 21"></polyline>
//               </svg>
//             </div>
            
//             <div className="p-6">
//               <p className="text-white mb-4">
//                 {study.description}
//               </p>
              
//               <button 
//                 className={`
//                   px-4 py-2 rounded-full 
//                   transition-colors duration-300 
//                   border border-transparent
//                   ${colorVariants[study.color]}
//                   text-white
//                   hover:border-white
//                 `}
//               >
//                 View More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CaseStudies


import React from 'react'
import Navbar from '../Components/Navbar'
import FooterComponent from '../Components/Footer'

const CaseStudy = () => {
    const caseStudiesData = [
    {
      id: 1,
      color: 'purple',
      description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."
    },
    {
      id: 2,
      color: 'red',
      description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."    },
    {
      id: 3,
      color: 'orange',
      description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."    },
    {
      id: 4,
      color: 'green',
      description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."
    },
    {
      id: 5,
      color: 'yellow',
      description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."    },
    {
      id: 6,
      color: 'blue',
       description:"We don't just design brands—we craft them with strategy, research, and precision. Every detail is refined to ensure impact, differentiation, and lasting success."
    }
  ]

  const colorVariants = {
    purple: 'bg-purple-500 text-purple-500 hover:bg-purple-600',
    // ... (rest of the color variants)
  }

  return (
    <div>
      <Navbar />
      <div className="bg-black p-6">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">
            "Branding That Works, Not Just Looks."
          </h1>
          <p className="text-xl">Real Brands, Real Results: Our Case Studies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudiesData.map((study) => (
            <div 
              key={study.id} 
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="aspect-square bg-gray-700 flex items-center justify-center">
                <svg 
                  className="w-1/2 h-1/2 text-gray-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              
              <div className="p-6">
                <p className="text-white mb-4">
                  {study.description}
                </p>
                
                <button 
                  className={`
                    px-4 py-2 rounded-full 
                    transition-colors duration-300 
                    border border-transparent
                    ${colorVariants[study.color]}
                    text-white
                    hover:border-white
                  `}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}

export default CaseStudy