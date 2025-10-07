import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
          Our Story
        </h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
              Founded on Faith & Friendship
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              In 2015, best friends <strong>Tapiwanashe Gutu</strong> and <strong>Bright Nyagumbo</strong> united their passion for creativity, design, and faith to establish BTX Furniture in Karoi, Zimbabwe.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our motto, <em>"Nuestro Dios es Grande"</em> (Our God is Great), reflects our belief in divine guidance and the power of hard work. Every piece we create is a testament to quality craftsmanship and dedication.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We empower local artisans, contribute to community development, and deliver furniture that transforms houses into homes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Georgia, serif' }}>
              Our Values
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-amber-600 text-2xl mr-3">✓</span>
                <span className="text-gray-700"><strong>Quality:</strong> Premium materials and expert craftsmanship</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 text-2xl mr-3">✓</span>
                <span className="text-gray-700"><strong>Faith:</strong> Guided by divine purpose in all we do</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 text-2xl mr-3">✓</span>
                <span className="text-gray-700"><strong>Community:</strong> Supporting local artisans and growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 text-2xl mr-3">✓</span>
                <span className="text-gray-700"><strong>Innovation:</strong> Modern designs with timeless appeal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
