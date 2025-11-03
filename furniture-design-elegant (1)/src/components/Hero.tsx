import React from 'react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759683663650_6c23c82f.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          BTX Furniture
        </h1>
        <p className="text-3xl md:text-4xl mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
          Nuestro Dios es Grande
        </p>
        <p className="text-xl md:text-2xl mb-10 text-gray-200">
          Crafting Excellence Since 2015 | Karoi, Zimbabwe
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('products')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </button>
          <button 
            onClick={() => scrollToSection('design-form')}
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Design Your Own
          </button>
          <a 
            href="https://wa.me/263779678160"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Get Quote on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
