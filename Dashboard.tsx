import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Send } from 'lucide-react';
import OrderManagement from './OrderManagement';
import ProductManagement from './ProductManagement';
import InquiryManagement from './InquiryManagement';
import { useToast } from '@/hooks/use-toast';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const sendBulkNotifications = () => {
    const message = encodeURIComponent('Hello! This is an update about your BTX Furniture order. Please check your order status for the latest information.');
    window.open(`https://wa.me/?text=${message}`, '_blank');
    toast({ title: 'Opening WhatsApp', description: 'Send bulk notifications via WhatsApp Web' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-600">BTX Furniture Admin</h1>
          <div className="flex gap-2">
            <Button onClick={sendBulkNotifications} variant="outline">
              <Send className="w-4 h-4 mr-2" />
              Bulk Notifications
            </Button>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <OrderManagement />
          </TabsContent>

          <TabsContent value="products">
            <ProductManagement />
          </TabsContent>

          <TabsContent value="inquiries">
            <InquiryManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
