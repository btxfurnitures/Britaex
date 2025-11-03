import React, { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Tendai Moyo",
      location: "Harare",
      text: "BTX Furniture transformed our home! The custom dining set is absolutely stunning and the craftsmanship is exceptional.",
      rating: 5
    },
    {
      name: "Sarah Ncube",
      location: "Karoi",
      text: "Professional service from start to finish. The team listened to our needs and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "James Chikwanha",
      location: "Chinhoyi",
      text: "Best furniture company in Zimbabwe! Quality materials, beautiful designs, and excellent customer service.",
      rating: 5
    },
    {
      name: "Grace Mutasa",
      location: "Harare",
      text: "Our custom wardrobe is perfect! BTX understood exactly what we wanted and delivered on time.",
      rating: 5
    },
    {
      name: "Michael Sibanda",
      location: "Bulawayo",
      text: "Highly recommend BTX Furniture. Their attention to detail and commitment to quality is unmatched.",
      rating: 5
    }
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="relative bg-gray-800 p-12 rounded-2xl shadow-2xl">
          <div className="text-center">
            <div className="text-amber-500 text-4xl mb-4">
              {'★'.repeat(testimonials[currentIndex].rating)}
            </div>
            <p className="text-xl italic mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <h4 className="text-2xl font-bold mb-1">{testimonials[currentIndex].name}</h4>
            <p className="text-gray-400">{testimonials[currentIndex].location}</p>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-lg font-semibold">
              Previous
            </button>
            <button onClick={next} className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-lg font-semibold">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
