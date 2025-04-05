import React from 'react';
import { Link } from 'react-router-dom';
import { useCaseStudyContext } from '../context/CaseStudyContext';
import { useNavigate } from 'react-router-dom';
// Uncomment these when you have these components
// import Navbar from '../Components/Navbar';
// import FooterComponent from '../Components/Footer';

const CaseStudy = () => {
  // Get clients data from context
  const { clients, loading } = useCaseStudyContext();
  const navigate = useNavigate();

  const colorVariants = [
    'bg-purple-500 hover:bg-purple-600',
    'bg-red-500 hover:bg-red-600',
    'bg-blue-500 hover:bg-blue-600',
    'bg-green-500 hover:bg-green-600',
    'bg-yellow-500 hover:bg-yellow-600',
    'bg-orange-500 hover:bg-orange-600',
    'bg-pink-500 hover:bg-pink-600',
    'bg-indigo-500 hover:bg-indigo-600',
    'bg-teal-500 hover:bg-teal-600',
    'bg-cyan-500 hover:bg-cyan-600'
  ];

  // Function to handle going back to previous page
  const handleGoBack = () => {
    navigate('/');
  };
  
  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-white text-xl">Loading case studies...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Uncomment when you have the Navbar component */}
      {/* <Navbar /> */}
      
      {/* Go Back Button */}
      <div className="max-w-7xl mx-auto pt-6 px-6">
        <button
          onClick={handleGoBack}
          className="flex items-center text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded-lg mb-6"
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
          Go Back
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pb-6">
        {/* Header Section */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">
            "Branding That Works, Not Just Looks."
          </h1>
          <p className="text-xl">Real Brands, Real Results: Our Client Success Stories</p>
        </div>
        
        {/* Client Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div 
              key={client.id} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col transition-transform duration-300 hover:transform hover:scale-105"
            >
              {/* Image Container - Fixed height for consistency */}
              <div className="h-48 bg-gray-700 flex items-center justify-center p-6">
                <img 
                  src={client.logoUrl} 
                  alt={`${client.name} Logo`} 
                  className="max-h-full max-w-full object-contain"
                  // Fallback to placeholder if image fails to load
                  onError={(e) => {
                    e.target.src = "/api/placeholder/200/100";
                    e.target.alt = "Logo placeholder";
                  }}
                />
              </div>
              
              {/* Content Area */}
              <div className="p-4 flex-grow">
                <h3 className="text-white font-semibold text-lg mb-2 truncate">{client.name}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {client.description}
                </p>
              </div>
              
              {/* Button Area */}
              <div className="p-4 pt-0 flex justify-start">
                <Link 
                  to={`/CaseStudy/${client.id}`}
                  className={`
                    inline-block w-full text-center px-4 py-2 rounded-full 
                    transition-all duration-300 
                    border border-transparent
                    ${colorVariants[index % colorVariants.length]}
                    text-white
                    hover:border-white hover:shadow-lg
                    text-sm font-medium
                  `}
                >
                  View Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Uncomment when you have the Footer component */}
      {/* <FooterComponent /> */}
    </div>
  );
};

export default CaseStudy;