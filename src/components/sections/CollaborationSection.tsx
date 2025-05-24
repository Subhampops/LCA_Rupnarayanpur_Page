import React, { useEffect, useRef } from 'react';

const partners = [
  {
    id: 1,
    name: 'Utkarsh Bangla',
    logo: 'https://www.viewtechgroups.in/wp-content/uploads/2024/05/Utkarsh-Bangla-Circular-logo.png',
  },
  {
    id: 2,
    name: 'West Bengal State Council of Technical & Vocational Education',
    logo: 'https://webscte.co.in/assets/image/logo.png',
  },
  {
    id: 3,
    name: 'IAO',
    logo: 'https://lh6.googleusercontent.com/proxy/6BS-jg-_oX-Z0ciYpb-YFQgmXgxk3E7dXPL75KNtHxONxEMs2LAaMeamR3oNUPO0zxySLcgbOQcbiN7OB-yDwg',
  },
  {
    id: 4,
    name: 'MANAS',
    logo: 'https://lh4.googleusercontent.com/proxy/8XMv8UGOexWjrDnOPkYCJLCAQtTnzYkBnC2lawYxL-nCGECNweTtZaN00OlSjht5C7B31KBqThOsWXbHj26sBFzUuW3fRnl3PP7fPgDjqu0VJxM',
  },
  {
    id: 5,
    name: 'DDU-GKY',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqEZqiooXOMyTNNhVVQC0IPj4N1EyMyH6ug&s',
  },
  {
    id: 6,
    name: 'ESSCI',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGnCPcLotgjhijO-9M6rf46MVYSfq9SYQAw&s',
  },
  {
    id: 7,
    name: 'PMKVY',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMOEnZVszvbpKjhKEzk0W_PWXBoL4AkpBsA&s',
  },
  {
    id: 8,
    name: 'NSDC',
    logo: 'https://www.presentations.gov.in/wp-content/uploads/2020/06/NSDC-Preview.png',
  },
  {
    id: 9,
    name: 'RASCI',
    logo: 'https://www.itrc.co.in/thumbnail.php?file=abstract-images/RASCI_113632396.jpg&size=article_large',
  },
  {
    id: 10,
    name: 'KRYU',
    logo: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Screenshot%202025-05-24%20at%209.35.00%20PM.png',
  },
  {
    id: 11,
    name: 'Skill India',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Skill_India.png',
  },
  {
    id: 12,
    name: 'COMPASS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3CNITAUgIN-b8Gsgq84VdbBXup6XEpGQ9A&s',
  },
  {
    id: 13,
    name: 'NITI Aayog',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/95/NITI_Aayog_logo.svg/1200px-NITI_Aayog_logo.svg.png',
  },
  {
    id: 14,
    name: 'MSME',
    logo: 'https://aartisto.com/wp-content/uploads/2020/11/msme1.png',
  },
];

const CollaborationSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let animationId: number;
    let startTime: number;
    let position = 0;
    const speed = 0.2; // pixels per millisecond
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      position = (position + speed * elapsed) % (slider.scrollWidth / 2);
      slider.scrollLeft = position;
      
      startTime = timestamp;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  
  return (
    <section id="collaborations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Collaborations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with leading companies to ensure our curriculum stays relevant and our students get the best opportunities.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient fade on left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          
          {/* Logo slider */}
          <div
            ref={sliderRef}
            className="flex space-x-12 overflow-x-auto scrollbar-hide py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Double the partners for infinite scroll effect */}
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient fade on right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-700 font-medium">
            Interested in partnering with us? <a href="#contact" className="text-violet-600 hover:text-violet-800">Contact us today</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;