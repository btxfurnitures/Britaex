import React from 'react';

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export default function ProductCard({ name, category, price, image, description }: ProductCardProps) {
  const handleQuoteRequest = () => {
    const message = `Hi, I'm interested in ${name}. Can you provide more details?`;
    window.open(`https://wa.me/263779678160?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <span className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          {name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">{price}</span>
          <button 
            onClick={handleQuoteRequest}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
