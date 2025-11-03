import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Package2, Plus, Pencil, Trash2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock_quantity: number;
  is_available: boolean;
}

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', category: '', price: '', stock_quantity: '', description: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    setProducts(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('products').insert([{
      ...formData,
      price: parseFloat(formData.price),
      stock_quantity: parseInt(formData.stock_quantity)
    }]);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Product added' });
      setShowForm(false);
      setFormData({ name: '', category: '', price: '', stock_quantity: '', description: '' });
      fetchProducts();
    }
  };

  const toggleAvailability = async (id: string, current: boolean) => {
    await supabase.from('products').update({ is_available: !current }).eq('id', id);
    fetchProducts();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Package2 className="w-6 h-6" />
          Product Inventory
        </h2>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input placeholder="Product Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <Input placeholder="Category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} required />
              <Input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
              <Input type="number" placeholder="Stock Quantity" value={formData.stock_quantity} onChange={(e) => setFormData({...formData, stock_quantity: e.target.value})} required />
              <Button type="submit">Add Product</Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="pt-6 flex justify-between items-center">
              <div>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.category} - ₦{product.price.toLocaleString()}</p>
                <p className="text-sm">Stock: {product.stock_quantity}</p>
              </div>
              <Button size="sm" variant={product.is_available ? "default" : "outline"} onClick={() => toggleAvailability(product.id, product.is_available)}>
                {product.is_available ? 'Available' : 'Unavailable'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
