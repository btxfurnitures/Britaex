import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function Products() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Sofas', 'Dining', 'Wardrobes', 'Beds', 'Kitchen'];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
          Our Collections
        </h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat 
                  ? 'bg-amber-600 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
