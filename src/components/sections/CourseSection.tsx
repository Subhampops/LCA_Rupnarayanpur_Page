import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Network, Code, FileSpreadsheet, PaintBucket, ArrowRight } from 'lucide-react';
import { courses } from '../../data/courseData';

const CourseSection: React.FC = () => {
  const getCourseIcon = (slug: string) => {
    switch (slug) {
      case 'hardware':
        return <Monitor className="w-8 h-8 text-violet-600" />;
      case 'networking':
        return <Network className="w-8 h-8 text-violet-600" />;
      case 'programming':
        return <Code className="w-8 h-8 text-violet-600" />;
      case 'financial-accounting':
        return <FileSpreadsheet className="w-8 h-8 text-violet-600" />;
      case 'multimedia':
        return <PaintBucket className="w-8 h-8 text-violet-600" />;
      default:
        return <Monitor className="w-8 h-8 text-violet-600" />;
    }
  };
  
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of courses designed to give you the skills and knowledge needed in today's digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  <p className="text-sm text-blue-100">{course.duration}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4 flex items-start gap-3">
                  {getCourseIcon(course.slug)}
                  <div className="bg-violet-100 text-violet-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {course.level}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                
                <div className="space-y-2 mb-4">
                  {course.keyPoints.slice(0, 3).map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>
                      <p className="text-sm text-gray-600">{point}</p>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={`/course/${course.slug}`}
                  className="inline-flex items-center text-violet-700 hover:text-violet-900 font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;