import React from 'react';
import { Link } from 'react-router-dom';
// Uncomment these when you have these components
// import Navbar from '../Components/Navbar';
// import FooterComponent from '../Components/Footer';

const CaseStudy = () => {
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
    {
      id: 2,
      name: "Client 2",
      description: "A complete brand overhaul that resulted in 45% increased market recognition within 6 months.",
      logoUrl: "/client logo/logo2.jpg",
      industry: "Finance",
      serviceProvided: "Visual Identity Redesign",
      challenge: "Legacy financial institution struggling to appeal to younger demographic.",
      solution: "Fresh visual identity that maintained trust while introducing modern elements.",
      results: "38% increase in millennial customer acquisition."
    },
    {
      id: 3,
      name: "Client 3",
      description: "Strategic brand positioning helped this startup stand out in a crowded marketplace.",
      logoUrl: "/client logo/logo3.png",
      industry: "Healthcare",
      serviceProvided: "Brand Strategy",
      challenge: "New healthcare startup with limited brand recognition in competitive market.",
      solution: "Distinctive positioning strategy focusing on patient-first approach.",
      results: "Secured Series A funding within 8 months of rebrand launch."
    },
    {
      id: 4,
      name: "Client 4",
      description: "We crafted a cohesive visual identity that perfectly aligned with their business objectives.",
      logoUrl: "/client logo/logo4.png",
      industry: "Retail",
      serviceProvided: "Brand Identity System",
      challenge: "Inconsistent brand application across multiple retail locations.",
      solution: "Comprehensive brand guidelines and implementation strategy.",
      results: "Customer satisfaction increased by 32% with stronger brand recognition."
    },
    {
      id: 5,
      name: "Client 5",
      description: "Our research-based approach delivered a brand refresh that resonated with their target audience.",
      logoUrl: "/client logo/logo5.png",
      industry: "Education",
      serviceProvided: "Brand Research & Refresh",
      challenge: "Declining enrollment and outdated perception among prospective students.",
      solution: "Data-driven rebrand based on extensive market research.",
      results: "52% increase in application submissions following rebrand."
    },
    {
      id: 6,
      name: "Client 6",
      description: "From concept to execution, we developed a brand strategy that drove measurable business growth.",
      logoUrl: "/client logo/logo6.png",
      industry: "Manufacturing",
      serviceProvided: "Full Brand Development",
      challenge: "Traditional manufacturer seeking to modernize image while respecting heritage.",
      solution: "Evolution-based rebrand that honored history while embracing innovation.",
      results: "Successfully expanded into two new market segments within first year."
    },
    {
      id: 7,
      name: "Client 7",
      description: "This client's rebrand led to a 30% increase in customer engagement across all platforms.",
      logoUrl: "/client logo/logo7.png",
      industry: "Entertainment",
      serviceProvided: "Digital Brand Experience",
      challenge: "Disconnected brand experience across digital touchpoints.",
      solution: "Unified digital brand strategy with consistent user experience.",
      results: "Engagement metrics improved 30% across all digital platforms."
    },
    {
      id: 8,
      name: "Client 8",
      description: "We designed a flexible brand system that scaled with their rapid expansion into new markets.",
      logoUrl: "/client logo/logo8.png",
      industry: "Food & Beverage",
      serviceProvided: "Scalable Brand System",
      challenge: "Fast-growing company with branding that couldn't scale effectively.",
      solution: "Modular brand system designed for adaptation across markets.",
      results: "Successfully launched in 5 new international markets with consistent branding."
    },
    {
      id: 9,
      name: "Client 9",
      description: "Our strategic brand refresh helped reposition this established company for a new generation.",
      logoUrl: "/client logo/logo9.png",
      industry: "Automotive",
      serviceProvided: "Brand Repositioning",
      challenge: "Century-old brand perceived as outdated by younger consumers.",
      solution: "Strategic repositioning that highlighted innovation while respecting heritage.",
      results: "42% increase in market share among 25-40 age demographic."
    },
    {
      id: 10,
      name: "Client 10",
      description: "This client's distinctive visual identity helped them secure major industry partnerships.",
      logoUrl: "/client logo/logo10.png",
      industry: "Software",
      serviceProvided: "Brand Identity Design",
      challenge: "Generic visual identity that failed to communicate technical expertise.",
      solution: "Bold, distinctive visual system that highlighted innovation.",
      results: "Secured three major enterprise partnerships within 6 months of rebrand."
    },
    {
      id: 11,
      name: "Client 11",
      description: "We developed a brand voice that perfectly captured their unique service proposition.",
      logoUrl: "/client logo/logo11.jpeg",
      industry: "Professional Services",
      serviceProvided: "Brand Voice Development",
      challenge: "Struggling to differentiate from competitors through communication.",
      solution: "Distinctive brand voice and messaging framework.",
      results: "Content engagement increased 65% across all channels."
    },
    {
      id: 12,
      name: "Client 12",
      description: "Our comprehensive brand strategy helped this client double their social media following.",
      logoUrl: "/client logo/logo12.png",
      industry: "Fashion",
      serviceProvided: "Social Brand Strategy",
      challenge: "Limited social media presence despite visually-oriented industry.",
      solution: "Comprehensive social brand strategy with content guidelines.",
      results: "Follower count doubled within 90 days with 3x engagement rate."
    },
    {
      id: 13,
      name: "Client 13",
      description: "A targeted brand evolution that maintained brand equity while appealing to new markets.",
      logoUrl: "/client logo/logo13.png",
      industry: "Hospitality",
      serviceProvided: "Brand Evolution",
      challenge: "Established hotel chain seeking to attract younger travelers.",
      solution: "Subtle brand evolution that maintained recognition while refreshing image.",
      results: "Bookings from millennial travelers increased 37% year-over-year."
    },
    {
      id: 14,
      name: "Client 14",
      description: "We created a powerful visual language that communicated their innovation and expertise.",
      logoUrl: "/client logo/logo14.png",
      industry: "Telecommunications",
      serviceProvided: "Visual Language Design",
      challenge: "Technical company struggling to communicate complex offerings visually.",
      solution: "Intuitive visual system that simplified complex concepts.",
      results: "Sales cycle reduced by 22% with improved communication materials."
    },
    {
      id: 15,
      name: "Client 15",
      description: "Our brand strategy helped this client successfully pivot during challenging market conditions.",
      logoUrl: "/client logo/logo15.png",
      industry: "Real Estate",
      serviceProvided: "Brand Pivot Strategy",
      challenge: "Market downturn threatening traditional business model.",
      solution: "Strategic brand pivot that opened new revenue streams.",
      results: "Maintained profitability during industry-wide 18% downturn."
    },
    {
      id: 16,
      name: "Client 16",
      description: "This client's rebrand resulted in 50% higher conversion rates across digital channels.",
      logoUrl: "/client logo/logo16.webp",
      industry: "E-commerce",
      serviceProvided: "Conversion-Focused Rebrand",
      challenge: "High traffic but poor conversion rates across digital properties.",
      solution: "Data-driven rebrand focused on user experience and trust signals.",
      results: "Conversion rates improved 50% across all digital channels."
    },
    {
      id: 17,
      name: "Client 17",
      description: "We delivered a distinct brand identity that helped them become an industry leader.",
      logoUrl: "/client logo/logo17.png",
      industry: "Construction",
      serviceProvided: "Leadership Brand Positioning",
      challenge: "Quality service provider lost in sea of similar competitors.",
      solution: "Distinctive positioning strategy that highlighted unique capabilities.",
      results: "Recognized as industry thought leader within 12 months of rebrand."
    },
    {
      id: 18,
      name: "Client 18",
      description: "Our research-driven approach created a brand that truly connected with their audience.",
      logoUrl: "/client logo/logo18.png",
      industry: "Non-profit",
      serviceProvided: "Audience-Centered Branding",
      challenge: "Struggling to connect with donors and communicate impact effectively.",
      solution: "Research-based rebrand focused on emotional storytelling.",
      results: "Donation volume increased 65% in first year after rebrand."
    },
    {
      id: 19,
      name: "Client 19",
      description: "This brand refresh helped the client attract investment and scale their operations.",
      logoUrl: "/client logo/logo19.png",
      industry: "Fitness",
      serviceProvided: "Investment-Ready Rebranding",
      challenge: "Seeking investment for expansion with underwhelming brand presentation.",
      solution: "Professional rebrand focused on scalability and market potential.",
      results: "Secured $2.5M in funding within 6 months of new brand launch."
    },
    {
      id: 20,
      name: "Client 20",
      description: "We crafted a premium brand experience that elevated their market positioning.",
      logoUrl: "/client logo/logo20.png",
      industry: "Luxury Goods",
      serviceProvided: "Luxury Brand Development",
      challenge: "Mid-market brand seeking to enter premium segment.",
      solution: "Comprehensive luxury brand strategy and identity system.",
      results: "Successfully established in luxury market with 28% price premium."
    }
  ];

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
    window.history.back();
  };

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
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
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
              
              <div className="p-4 flex-grow">
                <h3 className="text-white font-semibold text-lg mb-2">{client.name}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {client.description}
                </p>
              </div>
              
              <div className="p-4 pt-0">
                <Link 
                  to={`/CaseStudy/${client.id}`}
                  className={`
                    inline-block px-4 py-2 rounded-full 
                    transition-colors duration-300 
                    border border-transparent
                    ${colorVariants[index % colorVariants.length]}
                    text-white
                    hover:border-white
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