import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Pic%20at%2012.32.07%20(1).jpeg',
    alt: 'Computer Lab',
    category: 'Facilities'
  },
  {
    id: 2,
    src: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Pic%20at%2012.33.30.jpeg',
    alt: 'Conputer Center',
    category: 'Facilities'
  },
  {
    id: 3,
    src: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Pic%20at%2012.33.31.jpeg',
    alt: 'Best Center Award 2024',
    category: 'Award'
  },
  {
    id: 4,
    src: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Pic%20at%2012.32.03%20(2).jpeg',
    alt: 'Group Photo on Teacher\'s Day',
    category: 'Classes'
  },
  {
    id: 5,
    src: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Pic%20at%2012.33.38.jpeg',
    alt: 'Exam At Deshbandhu College, Chittaranjan',
    category: 'Exam'
  },
  {
    id: 6,
    src: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Pic%20at%2012.33.58.jpeg',
    alt: 'Anual Picnic',
    category: 'Events'
  },
  {
    id: 7,
    src: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/image1.jpeg',
    alt: 'HackTropica 2025 Sponsor',
    category: 'Events'
  },
  {
    id: 8,
    src: 'https://raw.githubusercontent.com/Subhampops/LCA_Rupnarayanpur_assets/refs/heads/main/Pic%20at%2012.33.11.jpeg',
    alt: 'Graduation ceremony',
    category: 'Events'
  }
];

const categories = ['All', 'Facilities', 'Classes', 'Events', 'Exam', 'Award'];

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);
  
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);
  
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our campus, classes, and events to get a feel for the Lalani Computer Academy experience.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-violet-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => openLightbox(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-white font-medium">{image.alt}</h3>
                  <p className="text-blue-100 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              &larr;
            </button>
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              &rarr;
            </button>
            
            <div className="max-w-4xl max-h-[80vh]">
              {filteredImages.map(image => (
                image.id === selectedImage && (
                  <div key={image.id} className="text-center">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="max-w-full max-h-[70vh] object-contain mx-auto"
                    />
                    <div className="mt-4 text-white">
                      <h3 className="text-xl font-medium">{image.alt}</h3>
                      <p className="text-blue-200">{image.category}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;