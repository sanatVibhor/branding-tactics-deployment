import React from 'react';
import { 
  Rocket, 
  Heart, 
  TrendingUp, 
  Target, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  BookOpen, 
  UserCircle, 
  MessageSquare, 
  Tag, 
  Palette, 
  Type, 
  Layers, 
  Image, 
  Music, 
  Play, 
  Compass 
} from 'lucide-react';

// Group services by color category
const getServiceColor = (index) => {
  const colors = [
    "#C517E6", // Purple
    "#0DF5D0", // Cyan
    "#08EE86", // Green
    "#FFE11F", // Yellow
    "#FF4B19", // Orange
    "#FF176C"  // Pink
  ];
  return colors[index % colors.length];
};

const ServiceItem = ({ service, icon: Icon, index }) => {
  const color = getServiceColor(index);
  
  return (
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 dark:bg-[#1E1E1E] rounded flex p-4 h-full items-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-[#333333] group border-[0.4px] border-transparent hover:border-[#FFE11F]">
        <div className="bg-white  dark:bg-[#333333] p-2 rounded-lg mr-3 transition-all duration-300 flex-shrink-0"
             style={{ 
               boxShadow: `0 0 0 1px ${color}`,
             }}>
          <Icon className="w-5 h-5" style={{ color: color }} />
        </div>
        <span className="font-medium text-gray-800 dark:text-[#FFFFFF]">{service}</span>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    { name: "Brand Ideals", icon: Rocket },
    { name: "Brand Mantras", icon: Heart },
    { name: "Brand Equity", icon: TrendingUp },
    { name: "Brand Positioning", icon: Target },
    { name: "Brand Resonance", icon: Users },
    { name: "Brand Strategy", icon: Lightbulb },
    { name: "Entry Points", icon: ArrowRight },
    { name: "Brand Story", icon: BookOpen },
    { name: "Archetype", icon: UserCircle },
    { name: "Tone of voice", icon: MessageSquare },
    { name: "Naming", icon: Tag },
    { name: "Colour", icon: Palette },
    { name: "Typography", icon: Type },
    { name: "Identity Design", icon: Layers },
    { name: "Brand Imagery", icon: Image },
    { name: "Sonic Branding", icon: Music },
    { name: "Motion Branding", icon: Play },
    { name: "Creative Direction", icon: Compass }
  ];

  return (
    <div className="bg-white dark:bg-[#121212] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center mt-10 mb-10">
            <p className="text-2xl text-[#AAAAAA] ">
              Trusted By
            </p>
            <p className="text-3xl text-[#FFFFFF]">
              Visionary Brands
            </p>
          </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service.name} icon={service.icon} index={index} />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gray-100 dark:bg-[#1E1E1E] rounded-xl border border-gray-200 dark:border-[#333333] relative overflow-hidden mx-auto lg:w-4/5">
          <div className="absolute top-0 right-0 h-64 w-64 bg-indigo-500 dark:bg-[#FF4B19] opacity-5 blur-3xl rounded-full"></div>
          <h3 className="text-gray-900 dark:text-[#FFFFFF] text-2xl font-bold mb-3">Ready to transform your brand?</h3>
          <p className="text-gray-600 dark:text-[#AAAAAA] mb-6">Let's work together to build a distinctive brand that resonates with your audience.</p>
          <button className="cursor-pointer flex items-center justify-center border border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white  hover:bg-teal-400/20 transition duration-300">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;