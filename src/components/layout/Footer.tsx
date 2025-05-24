import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  LinkedinIcon,
  Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-lg mr-3 overflow-hidden">
  <img
    src="https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/lca_logo.jpg" 
    alt="Logo"
    className="h-full w-full object-cover"
  />
</div>
              <h3 className="font-bold text-xl">Lalani Computer Academy</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with the skills they need to succeed in the digital world. We provide high-quality computer education since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/lalanirupnarayanpur" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/lcarupnarayanpur" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Courses */}
          <div>
            <h3 className="font-bold text-xl mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/course/hardware" className="text-gray-400 hover:text-white transition-colors">
                  Hardware
                </Link>
              </li>
              <li>
                <Link to="/course/networking" className="text-gray-400 hover:text-white transition-colors">
                  Networking
                </Link>
              </li>
              <li>
                <Link to="/course/programming" className="text-gray-400 hover:text-white transition-colors">
                  Programming
                </Link>
              </li>
              <li>
                <Link to="/course/financial-accounting" className="text-gray-400 hover:text-white transition-colors">
                  Financial Accounting
                </Link>
              </li>
              <li>
                <Link to="/course/multimedia" className="text-gray-400 hover:text-white transition-colors">
                  Multimedia
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('collaborations')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="text-gray-400 hover:text-white transition-colors">
                  Collaborations
                </button>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 text-violet-400 mt-1" />
                <span className="text-gray-400">HCL Road Beside, Rajeshwari Marriage Hall, West Bengal, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-violet-400" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 9933888363
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-violet-400" />
                <a href="mailto:info@lalanicomputer.edu" className="text-gray-400 hover:text-white transition-colors">
                  subhampops2409@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 text-violet-400 mt-1" />
                <div className="text-gray-400">
                  <div>Monday - Saturday: 7:00 AM - 8:30 PM</div>
                  <div>Sunday: 9:00 AM - 12:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Lalani Computer Academy Rupnarayanpur. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/" className="text-gray-500 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;