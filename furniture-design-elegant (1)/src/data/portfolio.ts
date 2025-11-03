export interface PortfolioProject {
  id: number;
  title: string;
  category: 'Living Room' | 'Bedroom' | 'Kitchen' | 'Office' | 'Custom Projects';
  image: string;
  beforeImage?: string;
  location: string;
  furnitureType: string;
  completionDate: string;
  description: string;
  dimensions?: string;
  materials?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Modern Luxury Living Room",
    category: "Living Room",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832517605_bc308625.webp",
    beforeImage: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832534318_727dbd52.webp",
    location: "Nairobi, Karen",
    furnitureType: "Complete Living Room Set",
    completionDate: "March 2024",
    description: "Custom sofa set, coffee table, and entertainment unit in mahogany",
    materials: "Mahogany Wood, Premium Fabric"
  },
  {
    id: 2,
    title: "Elegant Master Bedroom",
    category: "Bedroom",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832518463_2fff214b.webp",
    beforeImage: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832536800_54250eeb.webp",
    location: "Nairobi, Westlands",
    furnitureType: "Bedroom Suite",
    completionDate: "February 2024",
    description: "King-size bed, wardrobe, and side tables with modern minimalist design",
    materials: "Oak Wood, Soft-close Hardware"
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    category: "Kitchen",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832519311_2722afae.webp",
    beforeImage: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832535263_afaf21e4.webp",
    location: "Kiambu, Runda",
    furnitureType: "Kitchen Cabinets & Island",
    completionDate: "January 2024",
    description: "Full kitchen renovation with custom cabinets and island counter",
    materials: "Teak Wood, Granite Countertops"
  },
  {
    id: 4,
    title: "Professional Home Office",
    category: "Office",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832520136_744f271d.webp",
    location: "Nairobi, Kilimani",
    furnitureType: "Office Furniture Set",
    completionDate: "April 2024",
    description: "Executive desk, bookshelf, and storage solutions",
    materials: "Mahogany Wood, Leather Accents"
  },
  {
    id: 5,
    title: "Luxurious Dining Room",
    category: "Living Room",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832521021_e6c5a18d.webp",
    location: "Nairobi, Lavington",
    furnitureType: "Dining Set",
    completionDate: "December 2023",
    description: "8-seater dining table with matching chairs and sideboard",
    materials: "Oak Wood, Velvet Upholstery"
  },
  {
    id: 6,
    title: "Custom Walk-in Closet",
    category: "Bedroom",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832522217_dbbc762f.webp",
    location: "Nairobi, Muthaiga",
    furnitureType: "Wardrobe System",
    completionDate: "November 2023",
    description: "Luxury walk-in closet with organized storage solutions",
    materials: "Pine Wood, LED Lighting"
  },
  {
    id: 7,
    title: "Cozy Reading Nook",
    category: "Custom Projects",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832532497_f8961039.webp",
    location: "Nairobi, Spring Valley",
    furnitureType: "Custom Bookshelf & Seating",
    completionDate: "October 2023",
    description: "Built-in bookshelf with comfortable reading corner",
    materials: "Mahogany Wood, Custom Cushions"
  },
  {
    id: 8,
    title: "Entertainment Center",
    category: "Living Room",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832533430_e057169a.webp",
    location: "Kiambu, Tigoni",
    furnitureType: "TV Unit & Storage",
    completionDate: "September 2023",
    description: "Modern floating entertainment unit with media storage",
    materials: "Oak Wood, Tempered Glass"
  },
  {
    id: 9,
    title: "Executive Conference Room",
    category: "Office",
    image: "https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759832537709_35d60753.webp",
    location: "Nairobi, Upper Hill",
    furnitureType: "Conference Table & Cabinets",
    completionDate: "August 2023",
    description: "Corporate boardroom with 12-seater table and built-in storage",
    materials: "Teak Wood, Leather Chairs"
  }
];
