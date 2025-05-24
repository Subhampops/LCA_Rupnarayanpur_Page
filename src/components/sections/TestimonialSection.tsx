import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Subham Bhattacharya',
    role: 'Software Developer',
    company: 'Keploy Inc.',
    image: 'https://raw.githubusercontent.com/Subhampops/Subham_assets/refs/heads/main/profile-pic.png',
    content: 'My experience at Lalani Computer Academy was transformative. The programming course equipped me with the skills I needed to land my first job as a software developer. The hands-on projects and expert guidance made all the difference.',
  },
  {
    id: 2,
    name: 'Piyush Prasad',
    role: 'Accounntant Executive',
    company: 'HDFC Finance',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'The accounting course at Lalani Computer Academy was comprehensive and practical. The faculty were knowledgeable and supportive, helping me grasp complex concepts easily. I now feel confident in my accounting skills and ready for the job market.',
  },
  {
    id: 3,
    name: 'Rupa Gope',
    role: 'Account Executive',
    company: 'More Supermarket',
    image: 'https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Accounting was never my strong suit, but the course at Lalani Computer Academy changed that. The instructors were patient and explained everything in detail. I now have a solid understanding of financial accounting principles and practices.',
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);
  
  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-violet-500 to-blue-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our students who have transformed their careers with our courses.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 relative z-10">
            <div className="absolute -top-6 left-10 w-12 h-12 bg-violet-700 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 flex flex-col items-center md:items-start">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-violet-600 mb-1">{testimonials[currentIndex].role}</p>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
              </div>
              
              <div className="md:col-span-3">
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;