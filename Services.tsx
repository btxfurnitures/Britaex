import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Custom-Made Furniture",
      description: "Design and build furniture tailored to your exact specifications and style preferences.",
      icon: "🛋️"
    },
    {
      title: "Interior Design",
      description: "Professional consultation to transform your space with expert design guidance.",
      icon: "🎨"
    },
    {
      title: "Fitted Furniture",
      description: "Built-in wardrobes, kitchen units, and storage solutions perfectly fitted to your space.",
      icon: "📐"
    },
    {
      title: "Furniture Repair",
      description: "Expert restoration and repair services to bring your furniture back to life.",
      icon: "🔧"
    },
    {
      title: "Delivery & Installation",
      description: "Professional delivery and installation services throughout Zimbabwe.",
      icon: "🚚"
    },
    {
      title: "Design Your Own",
      description: "Work with our team to create completely unique, one-of-a-kind furniture pieces.",
      icon: "✏️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
          Our Services
        </h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
