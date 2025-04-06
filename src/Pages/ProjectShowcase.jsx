// // CaseStudyDetail.jsx (Renamed from ProjectShowcase)
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useCaseStudyContext } from '../context/CaseStudyContext';
// // Uncomment these when you have these components
// // import Navbar from '../Components/Navbar';
// import FooterComponent from '../Components/Footer';

// const CaseStudyDetail = () => {
//   const { id } = useParams();
//   const [caseStudy, setCaseStudy] = useState(null);
//   const { getCaseStudyById, getRelatedCaseStudies, loading, setLoading } = useCaseStudyContext();

//   useEffect(() => {
//     setLoading(true);
    
//     // Find the case study by ID
//     const study = getCaseStudyById(id);
    
//     if (study) {
//       setCaseStudy(study);
//       // Set page title
//       document.title = `${study.name} - Case Study | Your Brand Agency`;
//     }
    
//     setLoading(false);
//   }, [id, getCaseStudyById, setLoading]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#121212] flex items-center justify-center">
//         <div className="text-white text-xl">Loading case study...</div>
//       </div>
//     );
//   }

//   if (!caseStudy) {
//     return (
//       <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-6">
//         <div className="text-white text-xl mb-6">Case study not found</div>
//         <Link 
//           to="/caseStudy" 
//           className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
//         >
//           Return to Case Studies
//         </Link>
//       </div>
//     );
//   }

//   // Generate a background color class based on the client ID
//   const colorClasses = [
//     'bg-purple-500', 'bg-red-500', 'bg-blue-500', 'bg-green-500',
//     'bg-yellow-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'
//   ];
//   const bgColorClass = colorClasses[(caseStudy.id - 1) % colorClasses.length];
  
//   // Generate a lighter color for sections
//   const lightColorClasses = [
//     'bg-purple-900', 'bg-red-900', 'bg-blue-900', 'bg-green-900',
//     'bg-yellow-900', 'bg-orange-900', 'bg-pink-900', 'bg-indigo-900'
//   ];
//   const lightBgColorClass = lightColorClasses[(caseStudy.id - 1) % lightColorClasses.length];

//   // Get related case studies
//   const relatedCaseStudies = getRelatedCaseStudies(caseStudy.id, caseStudy.industry);

//   return (
//     <div className="min-h-screen bg-[#121212]">
//       {/* Uncomment when you have the Navbar component */}
//       {/* <Navbar /> */}
      
//       {/* Hero Section */}
//       <div className={`${bgColorClass} py-16`}>
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex items-center justify-between mb-6">
//             <Link
//               to="/CaseStudy"
//               className="flex items-center text-white bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors duration-300 px-4 py-2 rounded-lg"
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="h-5 w-5 mr-2" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M10 19l-7-7m0 0l7-7m-7 7h18" 
//                 />
//               </svg>
//               Back to Case Studies
//             </Link>
//           </div>
          
//           <div className="md:flex items-center">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 {caseStudy.name}
//               </h1>
              
//               <div className="mt-6 inline-block bg-white text-black px-4 py-2 rounded-lg font-medium">
//                 {caseStudy.industry}
//               </div>
//             </div>
            
//             <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-end">
//               <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex items-center justify-center h-64">
//                 <img 
//                   src={caseStudy.logoUrl} 
//                   alt={`${caseStudy.name} Logo`}
//                   className="max-h-full max-w-full object-contain"
//                   onError={(e) => {
//                     e.target.src = "/api/placeholder/300/150";
//                     e.target.alt = "Logo placeholder";
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Content Sections */}
   
      
//       {/* Related Case Studies */}

      
//       {/* Uncomment when you have the Footer component */}
//       {/* <FooterComponent /> */}
//       <FooterComponent/>
//     </div>
//   );
// };

// export default CaseStudyDetail;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCaseStudyContext } from '../context/CaseStudyContext';
// Uncomment these when you have these components
// import Navbar from '../Components/Navbar';
import FooterComponent from '../Components/Footer';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const { getCaseStudyById, getRelatedCaseStudies, loading, setLoading } = useCaseStudyContext();

  useEffect(() => {
    setLoading(true);
    
    // Find the case study by ID
    const study = getCaseStudyById(id);
    
    if (study) {
      setCaseStudy(study);
      // Set page title
      document.title = `${study.name} - Case Study | Your Brand Agency`;
    }
    
    setLoading(false);
  }, [id, getCaseStudyById, setLoading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-white text-xl">Loading case study...</div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-6">
        <div className="text-white text-xl mb-6">Case study not found</div>
        <Link 
          to="/caseStudy" 
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
        >
          Return to Case Studies
        </Link>
      </div>
    );
  }

  // Generate a background color class based on the client ID
  const colorClasses = [
    'bg-purple-500', 'bg-red-500', 'bg-blue-500', 'bg-green-500',
    'bg-yellow-500', 'bg-orange-500', 'bg-pink-500', 'bg-indigo-500'
  ];
  const bgColorClass = colorClasses[(caseStudy.id - 1) % colorClasses.length];
  
  // Generate a lighter color for sections
  const lightColorClasses = [
    'bg-purple-900', 'bg-red-900', 'bg-blue-900', 'bg-green-900',
    'bg-yellow-900', 'bg-orange-900', 'bg-pink-900', 'bg-indigo-900'
  ];
  const lightBgColorClass = lightColorClasses[(caseStudy.id - 1) % lightColorClasses.length];

  // Get related case studies
  const relatedCaseStudies = getRelatedCaseStudies(caseStudy.id, caseStudy.industry);

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <div className="flex-grow">
        {/* Uncomment when you have the Navbar component */}
        {/* <Navbar /> */}
        
        {/* Hero Section */}
        <div className={`${bgColorClass} py-16`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/CaseStudy"
                className="flex items-center text-white bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors duration-300 px-4 py-2 rounded-lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                Back to Case Studies
              </Link>
            </div>
            
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {caseStudy.name}
                </h1>
                
                <div className="mt-6 inline-block bg-white text-black px-4 py-2 rounded-lg font-medium">
                  {caseStudy.industry}
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-end">
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex items-center justify-center h-64">
                  <img 
                    src={caseStudy.logoUrl} 
                    alt={`${caseStudy.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/300/150";
                      e.target.alt = "Logo placeholder";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Sections */}
        
        {/* Related Case Studies */}
      </div>
      
      {/* Footer at the bottom */}
      <FooterComponent />
    </div>
  );
};

export default CaseStudyDetail;