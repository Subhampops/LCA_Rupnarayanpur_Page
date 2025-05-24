import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side image */}
          <div className="relative">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Pic%20at%2012.32.01.jpeg" 
                alt="Students in classroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-8 border-violet-200 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-violet-600 to-blue-500 rounded-xl -z-10"></div>
            
            <div className="absolute -top-8 -left-8 bg-white rounded-lg shadow-xl p-4 flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Happy Students</p>
                <p className="font-bold text-xl">2,500+</p>
              </div>
            </div>
            
            <div className="absolute -bottom-8 left-1/4 bg-white rounded-lg shadow-xl p-4 flex items-center space-x-3">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Experience</p>
                <p className="font-bold text-xl">15+ Years</p>
              </div>
            </div>
          </div>
          
          {/* Right side content */}
          <div>
            <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm font-medium text-violet-800 mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Students With Technology Skills Since 2005
            </h2>
            <p className="text-gray-600 mb-8">
              Lalani Computer Academy was established with a vision to bridge the digital divide by providing quality computer education to students from all walks of life. Over the years, we have evolved into a premier institution for IT education in Rupnarayanpur.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Industry-Relevant Curriculum</h3>
                  <p className="text-gray-600">Our courses are regularly updated to align with industry standards and technological advancements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Experienced Faculty</h3>
                  <p className="text-gray-600">Learn from professionals with years of practical experience in their respective fields.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Hands-on Training</h3>
                  <p className="text-gray-600">Our practical approach ensures that students gain real-world skills, not just theoretical knowledge.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-bold text-3xl text-blue-700">15+</p>
                <p className="text-blue-700">Years of Excellence</p>
              </div>
              
              <div className="bg-violet-50 rounded-lg p-4 text-center">
                <p className="font-bold text-3xl text-violet-700">20+</p>
                <p className="text-violet-700">Expert Instructors</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-bold text-3xl text-blue-700">95%</p>
                <p className="text-blue-700">Job Placement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;