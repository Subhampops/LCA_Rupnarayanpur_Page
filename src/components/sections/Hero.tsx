import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-blue-900/90 mix-blend-multiply"></div>
        <img 
          src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Computer lab" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-10 pt-24">
        <div className="max-w-3xl">
          <div className="bg-white/10 text-blue-100 rounded-full px-4 py-1 inline-flex items-center text-sm backdrop-blur-sm mb-6">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-blue-400"></span>
            Admissions Open for 2025 Batch
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Build Your <span className="text-blue-400">Digital Future</span> With Us
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            <span className="text-blue-400">Lalani Computer Academy Rupnarayanpur </span> offers industry-relevant courses to help you succeed in today's technology-driven world.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('courses')}
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
            >
              Explore Courses <ChevronRight size={20} className="ml-1" />
            </button>
            
            <button 
              onClick={() => scrollToSection('enquiry')}
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 backdrop-blur-sm px-6 py-3 rounded-md transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-gray-50 h-16 w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;