import { X } from 'lucide-react';
import { PortfolioProject } from '../data/portfolio';
import { useState } from 'react';

interface GalleryModalProps {
  project: PortfolioProject;
  onClose: () => void;
  onRequestSimilar: (project: PortfolioProject) => void;
}

export default function GalleryModal({ project, onClose, onRequestSimilar }: GalleryModalProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100">
          <X className="w-6 h-6" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            {project.beforeImage ? (
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img src={project.beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                <img 
                  src={project.image} 
                  alt="After" 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">Before</div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">After</div>
              </div>
            ) : (
              <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-lg" />
            )}
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-3">
                {project.category}
              </span>
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Location:</strong> {project.location}</p>
                <p><strong>Furniture Type:</strong> {project.furnitureType}</p>
                <p><strong>Completion Date:</strong> {project.completionDate}</p>
                {project.materials && <p><strong>Materials:</strong> {project.materials}</p>}
                <p className="mt-4">{project.description}</p>
              </div>
            </div>
            
            <button
              onClick={() => onRequestSimilar(project)}
              className="mt-6 w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
            >
              Request Similar Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
