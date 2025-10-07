import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockOrders, Order } from '@/data/orders';
import { Search, CheckCircle2, Clock, Package, MessageCircle } from 'lucide-react';

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState('');

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const foundOrder = mockOrders[orderId.toUpperCase()];
    if (foundOrder) {
      setOrder(foundOrder);
      setError('');
    } else {
      setOrder(null);
      setError('Order not found. Please check your order ID.');
    }
  };

  const sendWhatsAppUpdate = () => {
    if (!order) return;
    const message = `Hi BTX Team, I'd like an update on my order ${order.orderId} (${order.furnitureType}). Current status: ${order.stages[order.currentStage - 1].name}`;
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="order-tracking" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Track Your Order</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your order ID to check the status of your custom furniture
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 mb-12">
          <form onSubmit={handleTrackOrder} className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter Order ID (e.g., BTX2025001)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="lg">
              <Search className="w-4 h-4 mr-2" />
              Track Order
            </Button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </Card>

        {order && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{order.furnitureType}</h3>
                  <p className="text-gray-600">Order ID: {order.orderId}</p>
                  <p className="text-gray-600">Customer: {order.customerName}</p>
                  <p className="text-gray-600">Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
                <Button onClick={sendWhatsAppUpdate} variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Request Update
                </Button>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Estimated Completion</p>
                <p className="text-xl font-semibold text-blue-600">
                  {new Date(order.estimatedCompletion).toLocaleDateString()}
                </p>
              </div>
            </Card>

            <div className="space-y-6">
              {order.stages.map((stage, index) => (
                <Card key={stage.id} className={`p-6 ${stage.status === 'in-progress' ? 'border-blue-500 border-2' : ''}`}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        stage.status === 'completed' ? 'bg-green-500' :
                        stage.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                      }`}>
                        {stage.status === 'completed' ? (
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        ) : stage.status === 'in-progress' ? (
                          <Clock className="w-6 h-6 text-white" />
                        ) : (
                          <Package className="w-6 h-6 text-white" />
                        )}
                      </div>
                      {index < order.stages.length - 1 && (
                        <div className={`w-1 h-20 ${stage.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`} />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{stage.name}</h4>
                        <Badge variant={
                          stage.status === 'completed' ? 'default' :
                          stage.status === 'in-progress' ? 'secondary' : 'outline'
                        }>
                          {stage.status === 'completed' ? 'Completed' :
                           stage.status === 'in-progress' ? 'In Progress' : 'Pending'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{stage.description}</p>
                      {stage.date && (
                        <p className="text-sm text-gray-500">
                          Completed: {new Date(stage.date).toLocaleDateString()}
                        </p>
                      )}
                      {stage.estimatedDate && !stage.date && (
                        <p className="text-sm text-gray-500">
                          Estimated: {new Date(stage.estimatedDate).toLocaleDateString()}
                        </p>
                      )}
                      {stage.photo && (
                        <img
                          src={stage.photo}
                          alt={stage.name}
                          className="mt-4 rounded-lg w-full h-48 object-cover"
                        />
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
