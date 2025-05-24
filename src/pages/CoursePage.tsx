import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { courses } from '../data/courseData';
import { ArrowLeft, BookOpen, Clock, Award } from 'lucide-react';
import EnquirySection from '../components/sections/EnquirySection';

const CoursePage: React.FC = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const course = courses.find((c) => c.slug === courseSlug);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold text-violet-800 mb-4">Course Not Found</h1>
            <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              <ArrowLeft size={20} />
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16 bg-gradient-to-r from-violet-600 to-blue-500">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/#courses" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Back to All Courses
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-lg text-white/90 max-w-3xl">{course.description}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-6">{course.longDescription}</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">What You'll Learn</h3>
              <ul className="space-y-2 mb-6">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                    </div>
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Course Curriculum</h3>
              <div className="space-y-4 mb-6">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 font-medium text-gray-800">
                      Module {index + 1}: {module.title}
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <BookOpen size={18} className="flex-shrink-0 text-blue-500 mt-0.5" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="flex items-center gap-3 mb-4 text-gray-700">
                <Clock size={20} className="text-violet-600" />
                <span>Duration: {course.duration}</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6 text-gray-700">
                <Award size={20} className="text-violet-600" />
                <span>Certificate: {course.certification ? "Yes" : "No"}</span>
              </div>
              
              <a 
                href="#enquiry"
                className="block text-center bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full mb-4"
              >
                Enquire Now
              </a>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Why Choose This Course?</h4>
                <ul className="space-y-2">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-blue-700">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="enquiry">
        <EnquirySection />
      </div>
      
      <Footer />
    </div>
  );
};

export default CoursePage;