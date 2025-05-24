import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import CourseSection from '../components/sections/CourseSection';
import AboutSection from '../components/sections/AboutSection';
import StorySection from '../components/sections/StorySection';
import TestimonialSection from '../components/sections/TestimonialSection';
import GallerySection from '../components/sections/GallerySection';
import CollaborationSection from '../components/sections/CollaborationSection';
import EnquirySection from '../components/sections/EnquirySection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CourseSection />
      <AboutSection />
      <StorySection />
      <TestimonialSection />
      <GallerySection />
      <CollaborationSection />
      <EnquirySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;