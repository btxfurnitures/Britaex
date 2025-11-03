import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const openDesignForm = () => {
    scrollToSection('design-form');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <button onClick={scrollToTop} className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
            BTX Furniture
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={scrollToTop} className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">About</button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">Products</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">Services</button>
            <button onClick={openDesignForm} className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">Design Your Own</button>
            <button onClick={() => scrollToSection('order-tracking')} className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">Track Order</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">Contact</button>
            <a href="https://wa.me/263779678160" target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Quote
            </a>
            <a href="/admin/login" className="text-gray-700 hover:text-amber-600 font-semibold transition-colors">Admin</a>

          </div>

          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">☰</button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <button onClick={scrollToTop} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 font-semibold">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 font-semibold">About</button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 font-semibold">Products</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 font-semibold">Gallery</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 font-semibold">Services</button>
            <button onClick={openDesignForm} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 font-semibold">Design Your Own</button>
            <button onClick={() => scrollToSection('order-tracking')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 font-semibold">Track Order</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600 font-semibold">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}

