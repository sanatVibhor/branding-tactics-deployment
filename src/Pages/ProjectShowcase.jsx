import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCaseStudyContext } from '../context/CaseStudyContext';
// import Navbar from '../Components/Navbar';
import FooterComponent from '../Components/Footer';
import Footer from '../Components/Footer';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const { getCaseStudyById, getRelatedCaseStudies, loading, setLoading } = useCaseStudyContext();

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      try {
        const study = await getCaseStudyById(id);
        if (study) {
          setCaseStudy(study);
          document.title = `${study.name} - Case Study | Your Brand Agency`;
        } else {
          setCaseStudy(null);
        }
      } catch (error) {
        console.error("Error fetching case study:", error);
        setCaseStudy(null);
      }
      setLoading(false);
    };

    fetchCaseStudy();
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

  const colorClasses = [
    'bg-yellow-300', 'bg-yellow-900', 'bg-red-950', 'bg-orange-200',
    'bg-blue-900', 'bg-yellow-400', 'bg-red-600', 'bg-lime-950','bg-blue-800'
  ];
  const bgColorClass = colorClasses[(caseStudy.id - 1) % colorClasses.length];

  const lightColorClasses = [
    'bg-purple-900', 'bg-red-900', 'bg-blue-900', 'bg-green-900',
    'bg-yellow-900', 'bg-orange-900', 'bg-pink-900', 'bg-indigo-900'
  ];
  const lightBgColorClass = lightColorClasses[(caseStudy.id - 1) % lightColorClasses.length];

  const relatedCaseStudies = getRelatedCaseStudies(caseStudy.id, caseStudy.industry);

  const renderImage = (imageUrl, alt, className = "w-full h-full object-cover") => {
    return (
      <img 
        src={imageUrl || "/api/placeholder/400/300"}
        alt={alt}
        className={className}
        onError={(e) => {
          e.target.src = "/api/placeholder/400/300";
          e.target.alt = "Image placeholder";
        }}
      />
    );
  };

  // Function to render YouTube video embed
  const renderYoutubeEmbed = (youtubeUrl) => {
    // Example URL conversion: https://www.youtube.com/watch?v=VIDEO_ID to embed format
    // This is a simple implementation - you may need to handle different YouTube URL formats
    const videoId = youtubeUrl?.includes('watch?v=') 
      ? youtubeUrl.split('watch?v=')[1].split('&')[0]
      : youtubeUrl?.includes('youtu.be/') 
        ? youtubeUrl.split('youtu.be/')[1]
        : '';
    
    if (!videoId) return null;
    
    return (
      <div className="relative w-full overflow-hidden shadow-lg rounded-lg" style={{ paddingBottom: '56.25%', height: '0' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Case Study Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          style={{ height: '500px' }}
        ></iframe>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <div className="flex-grow">
        {/* <Navbar /> */}

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
              </div>
              
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-end">
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex items-center justify-center h-64">
                  {renderImage(
                    caseStudy.logoUrl, 
                    `${caseStudy.name} Logo`,
                    "max-h-full max-w-full object-contain"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content with bento grid and description */}
        <div className="w-full max-w-6xl mx-auto p-4 md:p-6 bg-white mt-10 rounded-md">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Bento grid section - takes full width on mobile, 2/3 on medium+ */}
            <div className="md:w-2/3">
              <h2 className="mb-4 text-2xl font-bold">{caseStudy.name} Showcase</h2>
              
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6 rounded-lg overflow-hidden h-40 bg-blue-950">
                  {renderImage(caseStudy.top1img, "Project showcase")}
                </div>
                <div className="col-span-6 rounded-lg overflow-hidden h-40 bg-blue-950">
                  {renderImage(caseStudy.top2img, "Project showcase")}
                </div>
                
                <div className="col-span-3 rounded-lg overflow-hidden h-72 bg-gray-200">
                  {renderImage(caseStudy.bottomLeftImg, "Project showcase")}
                </div>
                
                <div className="col-span-6">
                  <div className="rounded-lg overflow-hidden h-32 mb-3 bg-blue-950 flex items-center justify-center">
                    {renderImage(caseStudy.centerImg, "Project showcase")}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg overflow-hidden h-36" style={{ backgroundColor: 'rgb(241, 199, 0)' }}>
                      {renderImage(caseStudy.bottomCenter1, "Project showcase")}
                    </div>
                    <div className="rounded-lg overflow-hidden h-36 bg-blue-950 flex items-center justify-center">
                      {renderImage(caseStudy.bottomCenter2, "Project showcase")}
                    </div>
                  </div>
                </div>
                
                <div className="col-span-3 rounded-lg overflow-hidden h-72 bg-gray-200">
                  {renderImage(caseStudy.bottomRightImg, "Project showcase")}
                </div>
              </div>
            </div>
            
            {/* Description section - takes full width on mobile, 1/3 on medium+ */}
            {caseStudy.description && (
              <div className="md:w-1/3 mt-6 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-800">{caseStudy.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Video section with increased height */}
        <div className="w-full max-w-6xl mx-auto p-6 bg-white mt-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Case Study Video</h2>
          {caseStudy.videoUrl ? (
            <div className="video-container">
              {renderYoutubeEmbed(caseStudy.videoUrl)}
            </div>
          ) : (
            <div className="bg-gray-100 p-8 rounded-lg text-center h-96 flex items-center justify-center">
              <p className="text-gray-600">Video coming soon</p>
            </div>
          )}
        </div>
        
        {/* Related case studies section */}
        {relatedCaseStudies.length > 0 && (
          <div className="w-full max-w-6xl mx-auto p-6 bg-gray-100 mt-6">
            <h2 className="text-2xl font-bold mb-4">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map(study => (
                <Link 
                  to={`/caseStudy/${study.id}`} 
                  key={study.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-4 h-24 flex items-center justify-center bg-gray-50">
                    {renderImage(
                      study.logoUrl, 
                      `${study.name} Logo`, 
                      "max-h-full max-w-full object-contain h-16"
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{study.name}</h3>
                    <p className="text-sm text-gray-600">{study.industry}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
<Footer/>
    </div>
  );
};

export default CaseStudyDetail;