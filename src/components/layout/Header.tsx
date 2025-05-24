import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { courses } from '../../data/courseData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCoursesOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
{/* Logo */}
<Link to="/" className="flex items-center">
  <div className="flex items-center">
    <div className="h-12 w-12 rounded-lg mr-3 overflow-hidden">
      <img
        src="https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/lca_logo.jpg" // Replace with your actual image path
        alt="Logo"
        className="h-full w-full object-cover"
      />
    </div>
    <div>
      <h1 className={`text-lg font-bold transition-colors duration-300 ${
        isScrolled ? 'text-blue-700' : 'text-white'
      }`}>
        Lalani Computer Academy
      </h1>
      <p className={`text-xs transition-colors duration-300 ${
        isScrolled ? 'text-blue-600' : 'text-blue-100'
      }`}>
        Rupnarayanpur
      </p>
    </div>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-violet-700' : 'text-white hover:text-blue-100'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button 
                className={`flex items-center transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-violet-700' : 'text-white hover:text-blue-100'
                }`}
                onClick={() => scrollToSection('courses')}
              >
                Courses <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top duration-150 ease-in-out z-50">
                {courses.map((course) => (
                  <Link 
                    key={course.slug} 
                    to={`/course/${course.slug}`} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-violet-700' : 'text-white hover:text-blue-100'
              }`}
            >
              About
            </button>
            
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-violet-700' : 'text-white hover:text-blue-100'
              }`}
            >
              Gallery
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-violet-700' : 'text-white hover:text-blue-100'
              }`}
            >
              Contact
            </button>
            
            <button 
              onClick={() => scrollToSection('enquiry')}
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-md transition-colors"
            >
              Enquire Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="py-2 px-4 space-y-1">
            <Link 
              to="/" 
              className="block py-2 text-gray-800 hover:text-violet-700"
              onClick={closeMenu}
            >
              Home
            </Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 text-gray-800 hover:text-violet-700"
                onClick={toggleCourses}
              >
                Courses <ChevronDown size={16} className={`ml-1 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCoursesOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l-2 border-violet-100">
                  {courses.map((course) => (
                    <Link 
                      key={course.slug} 
                      to={`/course/${course.slug}`} 
                      className="block py-2 text-sm text-gray-700 hover:text-violet-700"
                      onClick={closeMenu}
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-800 hover:text-violet-700"
            >
              About
            </button>
            
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 text-gray-800 hover:text-violet-700"
            >
              Gallery
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-800 hover:text-violet-700"
            >
              Contact
            </button>
            
            <button 
              onClick={() => scrollToSection('enquiry')}
              className="block w-full bg-violet-600 hover:bg-violet-700 text-white py-2 mt-4 rounded-md transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;