// CaseStudyDetail.jsx (New component for detailed case study view)
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Uncomment these when you have these components
// import Navbar from '../Components/Navbar';
// import FooterComponent from '../Components/Footer';

const ProjectShowcase = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  // This would normally be fetched from an API, but we'll use the same data
  // You would typically move this data to a separate file or context
  const clients = [
    {
      id: 1,
      name: "Client 1",
      description: "We helped this client transform their brand identity with strategic design and precision marketing.",
      logoUrl: "/client logo/logo1.png",
      industry: "Technology",
      serviceProvided: "Brand Transformation",
      challenge: "Outdated brand identity that didn't reflect their innovative solutions.",
      solution: "Complete brand overhaul with modern design language and strategic positioning.",
      results: "45% increased brand recognition and 28% boost in qualified leads."
    },
    // ... rest of clients data (same as in CaseStudy.jsx)
    // This would be the same data from the main listing page
  ];

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    
    // Find the case study by ID
    const study = clients.find(client => client.id === parseInt(id));
    
    if (study) {
      setCaseStudy(study);
      // Set page title
      document.title = `${study.name} - Case Study | Your Brand Agency`;
    }
    
    setLoading(false);
  }, [id]);

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

  return (
    <div className="min-h-screen bg-[#121212]">
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
              <p className="text-xl text-white opacity-90">
                {caseStudy.description}
              </p>
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
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Provided Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Service Provided</h2>
          <div className={`${lightBgColorClass} p-6 rounded-xl`}>
            <p className="text-white text-lg">{caseStudy.serviceProvided}</p>
          </div>
        </div>
        
        {/* Challenge Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-white">{caseStudy.challenge}</p>
          </div>
        </div>
        
        {/* Solution Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Solution</h2>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-white">{caseStudy.solution}</p>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">The Results</h2>
          <div className={`${lightBgColorClass} p-6 rounded-xl`}>
            <p className="text-white text-lg font-medium">{caseStudy.results}</p>
          </div>
        </div>
        
        {/* Testimonial Section (hypothetical) */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Client Testimonial</h2>
          <div className="bg-gray-800 p-8 rounded-xl">
            <svg 
              className="h-10 w-10 text-gray-600 mb-4" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-white text-lg italic mb-4">
              "Working with this agency transformed our brand and business outcomes. The strategic approach they took to understanding our unique challenges resulted in a solution that exceeded our expectations."
            </p>
            <p className="text-white font-medium">CEO, {caseStudy.name}</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
          <button className={`${bgColorClass} hover:opacity-90 transition-opacity duration-300 px-8 py-4 rounded-xl text-white font-bold text-lg`}>
            Start Your Brand Journey
          </button>
        </div>
      </div>
      
      {/* Related Case Studies */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Related Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients
              .filter(client => client.id !== caseStudy.id && client.industry === caseStudy.industry)
              .slice(0, 3)
              .map((client) => (
                <div 
                  key={client.id} 
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="h-40 bg-gray-700 flex items-center justify-center p-6">
                    <img 
                      src={client.logoUrl} 
                      alt={`${client.name} Logo`} 
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/200/100";
                        e.target.alt = "Logo placeholder";
                      }}
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{client.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {client.description}
                    </p>
                    
                    <Link 
                      to={`/CaseStudy/${client.id}`}
                      className="inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      
      {/* Uncomment when you have the Footer component */}
      {/* <FooterComponent /> */}
    </div>
  );
};

export default ProjectShowcase;