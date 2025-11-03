export interface OrderStage {
  id: number;
  name: string;
  status: 'completed' | 'in-progress' | 'pending';
  date: string;
  estimatedDate?: string;
  photo?: string;
  description: string;
}

export interface Order {
  orderId: string;
  customerName: string;
  furnitureType: string;
  orderDate: string;
  currentStage: number;
  stages: OrderStage[];
  estimatedCompletion: string;
}

export const mockOrders: Record<string, Order> = {
  'BTX2025001': {
    orderId: 'BTX2025001',
    customerName: 'John Smith',
    furnitureType: 'Custom Dining Table',
    orderDate: '2025-09-15',
    currentStage: 2,
    estimatedCompletion: '2025-10-25',
    stages: [
      {
        id: 1,
        name: 'Design Approved',
        status: 'completed',
        date: '2025-09-18',
        photo: 'https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759833687476_c05f2f53.webp',
        description: 'Design specifications approved and finalized'
      },
      {
        id: 2,
        name: 'In Production',
        status: 'in-progress',
        date: '2025-09-20',
        estimatedDate: '2025-10-15',
        photo: 'https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759833688779_13377e52.webp',
        description: 'Craftsmen are building your custom furniture'
      },
      {
        id: 3,
        name: 'Quality Check',
        status: 'pending',
        estimatedDate: '2025-10-18',
        description: 'Thorough inspection and finishing touches'
      },
      {
        id: 4,
        name: 'Ready for Delivery',
        status: 'pending',
        estimatedDate: '2025-10-25',
        description: 'Packed and ready for shipment'
      }
    ]
  },
  'BTX2025002': {
    orderId: 'BTX2025002',
    customerName: 'Sarah Johnson',
    furnitureType: 'Bedroom Set',
    orderDate: '2025-08-20',
    currentStage: 4,
    estimatedCompletion: '2025-10-10',
    stages: [
      {
        id: 1,
        name: 'Design Approved',
        status: 'completed',
        date: '2025-08-25',
        photo: 'https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759833687476_c05f2f53.webp',
        description: 'Design specifications approved and finalized'
      },
      {
        id: 2,
        name: 'In Production',
        status: 'completed',
        date: '2025-09-01',
        photo: 'https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759833688779_13377e52.webp',
        description: 'Craftsmen are building your custom furniture'
      },
      {
        id: 3,
        name: 'Quality Check',
        status: 'completed',
        date: '2025-10-01',
        photo: 'https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759833689658_8a08d156.webp',
        description: 'Thorough inspection and finishing touches'
      },
      {
        id: 4,
        name: 'Ready for Delivery',
        status: 'completed',
        date: '2025-10-05',
        photo: 'https://d64gsuwffb70l.cloudfront.net/68e2a3822847aa7725d72e71_1759833690510_90ad4896.webp',
        description: 'Packed and ready for shipment'
      }
    ]
  }
};
