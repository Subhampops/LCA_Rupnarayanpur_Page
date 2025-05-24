import React from 'react';
import { History, Users, Award, Target } from 'lucide-react';

const StorySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm font-medium text-violet-800 mb-4">
            Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming a leading computer education institute in Rupnarayanpur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Untitled%20design.png" 
                alt="Our journey through the years" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-violet-600 to-blue-500 rounded-xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 border-8 border-violet-200 rounded-xl -z-10"></div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                <History className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Founded in 2005</h3>
                <p className="text-gray-600">
                  Started with a vision to provide quality computer education to the youth of Rupnarayanpur. Our first batch had just 10 students and two computers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Growing Community</h3>
                <p className="text-gray-600">
                  By 2010, we had expanded to accommodate 100 students with state-of-the-art computer labs. Our alumni network grew stronger, creating a supportive community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recognition & Excellence</h3>
                <p className="text-gray-600">
                  In 2015, we were recognized as the best computer training institute in the region. Our commitment to quality education earned us several accolades.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Looking Ahead</h3>
                <p className="text-gray-600">
                  Today, we continue to evolve and adapt to changing technology trends. Our mission remains the same - empowering students with the skills they need to succeed in the digital world.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-violet-600">18+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">2500+</p>
                <p className="text-sm text-gray-600">Alumni Network</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-violet-600">15+</p>
                <p className="text-sm text-gray-600">Industry Awards</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">95%</p>
                <p className="text-sm text-gray-600">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;