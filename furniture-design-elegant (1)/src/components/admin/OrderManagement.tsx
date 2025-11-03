import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Package, Upload } from 'lucide-react';

interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  furniture_type: string;
  current_stage: string;
  estimated_completion: string;
  total_amount: number;
}

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };

  const updateOrderStage = async (orderId: string, newStage: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ current_stage: newStage, updated_at: new Date().toISOString() })
      .eq('id', orderId);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Order status updated' });
      fetchOrders();
    }
  };

  const stages = ['Design Approved', 'In Production', 'Quality Check', 'Ready for Delivery', 'Delivered'];

  if (loading) return <div>Loading orders...</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Package className="w-6 h-6" />
        Order Management
      </h2>
      <div className="grid gap-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle className="text-lg">Order #{order.id}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><strong>Customer:</strong> {order.customer_name}</div>
                <div><strong>Email:</strong> {order.customer_email}</div>
                <div><strong>Phone:</strong> {order.customer_phone}</div>
                <div><strong>Furniture:</strong> {order.furniture_type}</div>
              </div>
              <div className="flex gap-2 items-center">
                <Select value={order.current_stage} onValueChange={(val) => updateOrderStage(order.id, val)}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {stages.map((stage) => (
                      <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
