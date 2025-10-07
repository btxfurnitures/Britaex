import React, { useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Services from './Services';
import Gallery from './Gallery';
import CustomDesignForm from './CustomDesignForm';
import OrderTracking from './OrderTracking';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import { PortfolioProject } from '../data/portfolio';


const AppLayout: React.FC = () => {
  const designFormRef = useRef<HTMLDivElement>(null);

  const handleRequestSimilar = (project: PortfolioProject) => {
    // Scroll to design form
    designFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill form with project details
    setTimeout(() => {
      const furnitureTypeSelect = document.querySelector('select[name="furnitureType"]') as HTMLSelectElement;
      const materialsInput = document.querySelector('input[value="' + project.materials?.split(',')[0].trim() + '"]') as HTMLInputElement;
      const notesTextarea = document.querySelector('textarea[name="additionalNotes"]') as HTMLTextAreaElement;
      
      if (furnitureTypeSelect) {
        const typeMap: { [key: string]: string } = {
          'Living Room': 'sofa',
          'Bedroom': 'bed',
          'Kitchen': 'kitchen-cabinet',
          'Office': 'office-desk'
        };
        furnitureTypeSelect.value = typeMap[project.category] || 'custom';
        furnitureTypeSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
      
      if (materialsInput) {
        materialsInput.click();
      }
      
      if (notesTextarea) {
        notesTextarea.value = `I'm interested in a design similar to your "${project.title}" project (${project.location}). ${project.description}`;
        notesTextarea.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery onRequestSimilar={handleRequestSimilar} />
      <Services />
      <div id="design-form" ref={designFormRef}>
        <CustomDesignForm />
      </div>
      <OrderTracking />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );

};

export default AppLayout;


