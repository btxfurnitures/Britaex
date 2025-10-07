import React from 'react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>BTX Furniture</h3>
            <p className="text-gray-400 italic mb-4">Nuestro Dios es Grande</p>
            <p className="text-gray-400 text-sm">Crafting quality furniture with faith and excellence since 2015.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-amber-500 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-amber-500 transition-colors">Products</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-amber-500 transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-amber-500 transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('order-tracking')} className="text-gray-400 hover:text-amber-500 transition-colors">Track Order</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-500 transition-colors">Contact</button></li>
            </ul>
          </div>


          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 +263 779 678 160</li>
              <li>📧 btxfurnitures@gmail.com</li>
              <li>📍 Karoi, Zimbabwe</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-500 transition-colors">📘</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-500 transition-colors">📷</a>
              <a href="https://wa.me/263779678160" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-500 transition-colors">💬</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 BTX Furniture. All rights reserved. | Founded by Tapiwanashe Gutu & Bright Nyagumbo</p>
        </div>
      </div>
    </footer>
  );
}
