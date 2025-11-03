import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/263779678160?text=${whatsappMessage}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-amber-600 text-2xl mr-4">📞</span>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+263779678160" className="text-gray-700 hover:text-amber-600">+263 779 678 160</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-amber-600 text-2xl mr-4">📧</span>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:btxfurnitures@gmail.com" className="text-gray-700 hover:text-amber-600">btxfurnitures@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-amber-600 text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">Karoi, Zimbabwe</p>
                </div>
              </div>
            </div>
            
            <a
              href="https://wa.me/263779678160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Your Phone"
              required
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors">
              Send Message
            </button>
            {submitted && <p className="text-green-600 mt-4 text-center font-semibold">Message sent via WhatsApp!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
