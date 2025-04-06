
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2, Edit, Plus, Star } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jennifer Lopez',
    role: 'Property Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    quote: 'Global Costa Invest helped me find my dream beachfront home. Their team was professional, knowledgeable, and made the entire buying process seamless.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Johnson',
    role: 'Real Estate Investor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    quote: 'As a real estate investor, I\'ve worked with many agencies, but Global Costa Invest stands out for their market knowledge and exceptional service. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'First-time Buyer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80',
    quote: 'The Global Costa Invest team guided me through my first property purchase with patience and expertise. They found the perfect coastal apartment within my budget.',
    rating: 4
  }
];

const DashboardTestimonials = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Testimonial>({
    id: 0,
    name: '',
    role: '',
    image: '',
    quote: '',
    rating: 5
  });

  useEffect(() => {
    // Load testimonials from localStorage or use defaults
    const savedTestimonials = localStorage.getItem('testimonials');
    if (savedTestimonials) {
      try {
        setTestimonials(JSON.parse(savedTestimonials));
      } catch (error) {
        console.error('Error loading testimonials:', error);
        setTestimonials([...defaultTestimonials]);
      }
    } else {
      setTestimonials([...defaultTestimonials]);
    }
  }, []);

  const handleAddTestimonial = () => {
    setIsEditing(true);
    setFormData({
      id: Date.now(),
      name: '',
      role: '',
      image: '',
      quote: '',
      rating: 5
    });
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setIsEditing(true);
    setFormData({ ...testimonial });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? parseInt(value) : value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSaveTestimonial = () => {
    // Validate all fields are complete
    if (!formData.name || !formData.role || !formData.image || !formData.quote) {
      toast({
        title: "Error",
        description: "Please complete all fields.",
        variant: "destructive"
      });
      return;
    }

    let updatedTestimonials: Testimonial[];
    const testimonialIndex = testimonials.findIndex(t => t.id === formData.id);
    
    if (testimonialIndex !== -1) {
      // Update existing testimonial
      updatedTestimonials = [...testimonials];
      updatedTestimonials[testimonialIndex] = formData;
    } else {
      // Add new testimonial
      updatedTestimonials = [...testimonials, formData];
    }

    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));

    toast({
      title: testimonialIndex !== -1 ? "Testimonial updated" : "Testimonial added",
      description: `The testimonial has been ${testimonialIndex !== -1 ? "updated" : "added"} successfully.`
    });

    setIsEditing(false);
    setFormData({
      id: 0,
      name: '',
      role: '',
      image: '',
      quote: '',
      rating: 5
    });
  };

  const handleDeleteTestimonial = (id: number) => {
    const updatedTestimonials = testimonials.filter(t => t.id !== id);
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));

    toast({
      title: "Testimonial deleted",
      description: "The testimonial has been deleted successfully."
    });
  };

  const handleReset = () => {
    setTestimonials([...defaultTestimonials]);
    localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));

    toast({
      title: "Testimonials reset",
      description: "The testimonials have been reset to default values."
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Client Testimonials</CardTitle>
            <CardDescription>
              Manage client testimonials displayed on the homepage
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={handleAddTestimonial}>
                  <Plus className="h-4 w-4 mr-2" /> Add Testimonial
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {formData.id ? "Edit Testimonial" : "Add New Testimonial"}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Client name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="role">Role or Profession</Label>
                    <Input 
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="E.g. Property Owner, Investor, etc."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="image">Photo</Label>
                    <div className="flex items-center gap-4">
                      <label 
                        htmlFor="testimonial-image" 
                        className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                      >
                        <Upload className="h-4 w-4" />
                        Upload Image
                      </label>
                      <Input 
                        id="testimonial-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <Input 
                        placeholder="Or paste image URL"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="flex-1"
                      />
                    </div>
                    {formData.image && (
                      <div className="mt-2">
                        <img 
                          src={formData.image}
                          alt="Preview"
                          className="h-32 w-32 object-cover rounded-full mx-auto"
                        />
                      </div>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="quote">Testimonial</Label>
                    <textarea 
                      id="quote"
                      name="quote"
                      rows={4}
                      value={formData.quote}
                      onChange={handleInputChange}
                      placeholder="Client testimonial"
                      className="w-full p-2 border rounded resize-none"
                    ></textarea>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="rating">Rating (1-5)</Label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`h-6 w-6 ${
                              star <= formData.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button onClick={handleSaveTestimonial}>{formData.id ? "Save Changes" : "Add"}</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="sm" onClick={handleReset} className="text-red-500 hover:text-red-700">
              Reset
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex items-start justify-between p-4 border rounded-lg">
              <div className="flex items-start space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-16 w-16 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex mt-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic">"{testimonial.quote.length > 100 ? `${testimonial.quote.substring(0, 100)}...` : testimonial.quote}"</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => handleEditTestimonial(testimonial)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDeleteTestimonial(testimonial.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardTestimonials;
