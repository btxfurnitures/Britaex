import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Phone, Mail } from 'lucide-react';

interface Inquiry {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  furniture_type: string;
  materials: string;
  budget_range: string;
  additional_notes: string;
  status: string;
  created_at: string;
}

export default function InquiryManagement() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    const { data } = await supabase
      .from('design_inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    setInquiries(data || []);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('design_inquiries')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Status updated' });
      fetchInquiries();
    }
  };

  const getStatusColor = (status: string) => {
    const colors: any = {
      pending: 'bg-yellow-500',
      reviewed: 'bg-blue-500',
      contacted: 'bg-purple-500',
      converted: 'bg-green-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <MessageSquare className="w-6 h-6" />
        Customer Inquiries
      </h2>
      <div className="grid gap-4">
        {inquiries.map((inquiry) => (
          <Card key={inquiry.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{inquiry.customer_name}</CardTitle>
                <Badge className={getStatusColor(inquiry.status)}>{inquiry.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {inquiry.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {inquiry.phone}
                </div>
              </div>
              <div className="text-sm">
                <strong>Furniture:</strong> {inquiry.furniture_type}<br />
                <strong>Materials:</strong> {inquiry.materials}<br />
                <strong>Budget:</strong> {inquiry.budget_range}
              </div>
              {inquiry.additional_notes && (
                <p className="text-sm text-gray-600">{inquiry.additional_notes}</p>
              )}
              <Select value={inquiry.status} onValueChange={(val) => updateStatus(inquiry.id, val)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
