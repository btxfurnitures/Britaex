import { useState, useEffect } from 'react';
import { portfolioProjects, PortfolioProject } from '../data/portfolio';
import GalleryModal from './GalleryModal';
import { MapPin, Calendar } from 'lucide-react';

interface GalleryProps {
  onRequestSimilar?: (project: PortfolioProject) => void;
}

export default function Gallery({ onRequestSimilar }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<PortfolioProject[]>([]);

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Custom Projects'];

  const filteredProjects = selectedCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === selectedCategory);

  useEffect(() => {
    setVisibleProjects([]);
    const timer = setTimeout(() => {
      setVisibleProjects(filteredProjects);
    }, 50);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleRequestSimilar = (project: PortfolioProject) => {
    setSelectedProject(null);
    if (onRequestSimilar) {
      onRequestSimilar(project);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our completed projects and see how we've transformed spaces with custom furniture
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animation: `fadeIn 0.5s ease-in ${index * 0.1}s both` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.beforeImage && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before/After
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.completionDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <GalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={handleRequestSimilar}
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
