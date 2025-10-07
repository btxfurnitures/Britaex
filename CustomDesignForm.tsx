import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


interface FormData {
  furnitureType: string;
  length: string;
  width: string;
  height: string;
  material: string;
  color: string;
  style: string;
  budget: number[];
  additionalNotes: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  uploadedFiles: File[];
}

export default function CustomDesignForm() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    furnitureType: '',
    length: '',
    width: '',
    height: '',
    material: '',
    color: '',
    style: '',
    budget: [5000],
    additionalNotes: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    uploadedFiles: []
  });

  const totalSteps = 4;

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateEstimate = () => {
    let basePrice = 0;
    const types: any = { Sofa: 8000, Bed: 12000, 'Dining Table': 10000, Wardrobe: 15000, 'Kitchen Unit': 20000, 'TV Stand': 5000, Desk: 6000 };
    basePrice = types[formData.furnitureType] || 5000;
    
    const materials: any = { Mahogany: 1.5, Oak: 1.4, Pine: 1.0, Teak: 1.6, MDF: 0.7 };
    basePrice *= materials[formData.material] || 1;
    
    return Math.round(basePrice);
  };

  const sendToWhatsApp = async () => {
    // Save to database first
    try {
      const { error } = await supabase.from('design_inquiries').insert([{
        customer_name: formData.customerName,
        email: formData.customerEmail,
        phone: formData.customerPhone,
        furniture_type: formData.furnitureType,
        dimensions: `${formData.length}L x ${formData.width}W x ${formData.height}H cm`,
        materials: formData.material,
        color_preferences: formData.color,
        budget_range: `$${formData.budget[0]} - $${formData.budget[0] + 5000}`,
        additional_notes: formData.additionalNotes
      }]);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Your design request has been submitted!',
      });

      // Then send to WhatsApp
      const estimate = calculateEstimate();
      const message = `*BTX FURNITURE - CUSTOM DESIGN REQUEST*%0A%0A*Customer Details:*%0AName: ${formData.customerName}%0APhone: ${formData.customerPhone}%0AEmail: ${formData.customerEmail}%0A%0A*Furniture Specifications:*%0AType: ${formData.furnitureType}%0ADimensions: ${formData.length}L x ${formData.width}W x ${formData.height}H cm%0AMaterial: ${formData.material}%0AColor: ${formData.color}%0AStyle: ${formData.style}%0ABudget Range: $${formData.budget[0]} - $${formData.budget[0] + 5000}%0A%0A*Additional Notes:*%0A${formData.additionalNotes || 'None'}%0A%0A*Estimated Price: $${estimate} USD*`;
      window.open(`https://wa.me/263779678160?text=${message}`, '_blank');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };


  const nextStep = () => step < totalSteps && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Design Your Custom Furniture</h1>
          <p className="text-gray-600">Tell us your vision, and we'll bring it to life</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= num ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step > num ? <Check size={20} /> : num}
                </div>
                {num < 4 && <div className={`h-1 w-16 md:w-32 ${step > num ? 'bg-amber-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs md:text-sm text-gray-600 px-2">
            <span>Type & Size</span>
            <span>Materials</span>
            <span>Style & Budget</span>
            <span>Review</span>
          </div>
        </div>

        <Card className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Step 1: Furniture Type & Dimensions</h2>
              <div>
                <Label>Furniture Type *</Label>
                <Select value={formData.furnitureType} onValueChange={(v) => updateField('furnitureType', v)}>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sofa">Sofa</SelectItem>
                    <SelectItem value="Bed">Bed</SelectItem>
                    <SelectItem value="Dining Table">Dining Table</SelectItem>
                    <SelectItem value="Wardrobe">Wardrobe</SelectItem>
                    <SelectItem value="Kitchen Unit">Kitchen Unit</SelectItem>
                    <SelectItem value="TV Stand">TV Stand</SelectItem>
                    <SelectItem value="Desk">Desk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Length (cm) *</Label>
                  <Input type="number" value={formData.length} onChange={(e) => updateField('length', e.target.value)} placeholder="200" />
                </div>
                <div>
                  <Label>Width (cm) *</Label>
                  <Input type="number" value={formData.width} onChange={(e) => updateField('width', e.target.value)} placeholder="100" />
                </div>
                <div>
                  <Label>Height (cm) *</Label>
                  <Input type="number" value={formData.height} onChange={(e) => updateField('height', e.target.value)} placeholder="80" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Step 2: Materials & Colors</h2>
              <div>
                <Label>Primary Material *</Label>
                <RadioGroup value={formData.material} onValueChange={(v) => updateField('material', v)}>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {['Mahogany', 'Oak', 'Pine', 'Teak', 'MDF'].map(mat => (
                      <div key={mat} className="flex items-center space-x-2 border p-3 rounded-lg hover:border-amber-600 cursor-pointer">
                        <RadioGroupItem value={mat} id={mat} />
                        <Label htmlFor={mat} className="cursor-pointer">{mat}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label>Color Preference *</Label>
                <Select value={formData.color} onValueChange={(v) => updateField('color', v)}>
                  <SelectTrigger><SelectValue placeholder="Select color" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Natural Wood">Natural Wood</SelectItem>
                    <SelectItem value="Dark Walnut">Dark Walnut</SelectItem>
                    <SelectItem value="Light Oak">Light Oak</SelectItem>
                    <SelectItem value="White">White</SelectItem>
                    <SelectItem value="Black">Black</SelectItem>
                    <SelectItem value="Grey">Grey</SelectItem>
                    <SelectItem value="Custom Color">Custom Color</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Step 3: Style & Budget</h2>
              <div>
                <Label>Design Style *</Label>
                <RadioGroup value={formData.style} onValueChange={(v) => updateField('style', v)}>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {['Modern', 'Classic', 'Rustic', 'Contemporary', 'Minimalist', 'Traditional'].map(style => (
                      <div key={style} className="flex items-center space-x-2 border p-3 rounded-lg hover:border-amber-600 cursor-pointer">
                        <RadioGroupItem value={style} id={style} />
                        <Label htmlFor={style} className="cursor-pointer">{style}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label>Budget Range: ${formData.budget[0]} - ${formData.budget[0] + 5000} USD</Label>
                <Slider value={formData.budget} onValueChange={(v) => updateField('budget', v)} min={1000} max={50000} step={1000} className="mt-4" />
              </div>
              <div>
                <Label>Upload Inspiration Images (Optional)</Label>
                <Input type="file" multiple accept="image/*" onChange={(e) => updateField('uploadedFiles', Array.from(e.target.files || []))} className="mt-2" />
                <p className="text-xs text-gray-500 mt-1">Upload photos of designs you like</p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Step 4: Review & Contact Details</h2>
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl mb-4">Estimated Price: ${calculateEstimate()} USD</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="font-semibold">Type:</span> {formData.furnitureType}</div>
                  <div><span className="font-semibold">Dimensions:</span> {formData.length}×{formData.width}×{formData.height}cm</div>
                  <div><span className="font-semibold">Material:</span> {formData.material}</div>
                  <div><span className="font-semibold">Color:</span> {formData.color}</div>
                  <div><span className="font-semibold">Style:</span> {formData.style}</div>
                  <div><span className="font-semibold">Budget:</span> ${formData.budget[0]}-${formData.budget[0] + 5000}</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label>Your Name *</Label>
                  <Input value={formData.customerName} onChange={(e) => updateField('customerName', e.target.value)} placeholder="John Doe" />
                </div>
                <div>
                  <Label>Phone Number *</Label>
                  <Input value={formData.customerPhone} onChange={(e) => updateField('customerPhone', e.target.value)} placeholder="+263 77 123 4567" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" value={formData.customerEmail} onChange={(e) => updateField('customerEmail', e.target.value)} placeholder="john@example.com" />
                </div>
                <div>
                  <Label>Additional Notes</Label>
                  <Textarea value={formData.additionalNotes} onChange={(e) => updateField('additionalNotes', e.target.value)} placeholder="Any special requirements or details..." rows={4} />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button onClick={prevStep} disabled={step === 1} variant="outline">Previous</Button>
            {step < totalSteps ? (
              <Button onClick={nextStep} className="bg-amber-600 hover:bg-amber-700">Next Step</Button>
            ) : (
              <Button onClick={sendToWhatsApp} className="bg-green-600 hover:bg-green-700">Send to WhatsApp</Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
