
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
    name: 'Jennifer López',
    role: 'Propietaria',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    quote: 'Costa Moderna Propiedades me ayudó a encontrar mi casa de ensueño frente al mar. Su equipo fue profesional, conocedor e hizo que todo el proceso de compra fuera sin problemas.',
    rating: 5
  },
  {
    id: 2,
    name: 'Miguel Johnson',
    role: 'Inversionista Inmobiliario',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    quote: 'Como inversor inmobiliario, he trabajado con muchas agencias, pero Costa Moderna destaca por su conocimiento del mercado y servicio excepcional. ¡Altamente recomendado!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Compradora primeriza',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80',
    quote: 'El equipo de Costa Moderna Propiedades me guió durante mi primera compra de propiedad con paciencia y experiencia. Encontraron el apartamento costero perfecto dentro de mi presupuesto.',
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
    // Cargar los testimonios del localStorage o usar los predeterminados
    const savedTestimonials = localStorage.getItem('testimonials');
    if (savedTestimonials) {
      try {
        setTestimonials(JSON.parse(savedTestimonials));
      } catch (error) {
        console.error('Error al cargar los testimonios:', error);
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
    // Validar que todos los campos estén completos
    if (!formData.name || !formData.role || !formData.image || !formData.quote) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos.",
        variant: "destructive"
      });
      return;
    }

    let updatedTestimonials: Testimonial[];
    const testimonialIndex = testimonials.findIndex(t => t.id === formData.id);
    
    if (testimonialIndex !== -1) {
      // Actualizar testimonio existente
      updatedTestimonials = [...testimonials];
      updatedTestimonials[testimonialIndex] = formData;
    } else {
      // Añadir nuevo testimonio
      updatedTestimonials = [...testimonials, formData];
    }

    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));

    toast({
      title: testimonialIndex !== -1 ? "Testimonio actualizado" : "Testimonio añadido",
      description: `El testimonio ha sido ${testimonialIndex !== -1 ? "actualizado" : "añadido"} correctamente.`
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
      title: "Testimonio eliminado",
      description: "El testimonio ha sido eliminado correctamente."
    });
  };

  const handleReset = () => {
    setTestimonials([...defaultTestimonials]);
    localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));

    toast({
      title: "Testimonios restablecidos",
      description: "Los testimonios han sido restablecidos a los valores predeterminados."
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Testimonios de Clientes</CardTitle>
            <CardDescription>
              Gestiona los testimonios de clientes que se muestran en la página de inicio
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={handleAddTestimonial}>
                  <Plus className="h-4 w-4 mr-2" /> Añadir Testimonio
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {formData.id ? "Editar Testimonio" : "Añadir Nuevo Testimonio"}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nombre del cliente"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="role">Rol o Profesión</Label>
                    <Input 
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Ej: Propietario, Inversor, etc."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="image">Fotografía</Label>
                    <div className="flex items-center gap-4">
                      <label 
                        htmlFor="testimonial-image" 
                        className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                      >
                        <Upload className="h-4 w-4" />
                        Subir Imagen
                      </label>
                      <Input 
                        id="testimonial-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <Input 
                        placeholder="O pega URL de imagen"
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
                          alt="Vista previa"
                          className="h-32 w-32 object-cover rounded-full mx-auto"
                        />
                      </div>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="quote">Testimonio</Label>
                    <textarea 
                      id="quote"
                      name="quote"
                      rows={4}
                      value={formData.quote}
                      onChange={handleInputChange}
                      placeholder="Testimonio del cliente"
                      className="w-full p-2 border rounded resize-none"
                    ></textarea>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="rating">Valoración (1-5)</Label>
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
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button onClick={handleSaveTestimonial}>{formData.id ? "Guardar Cambios" : "Añadir"}</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="sm" onClick={handleReset} className="text-red-500 hover:text-red-700">
              Restablecer
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
