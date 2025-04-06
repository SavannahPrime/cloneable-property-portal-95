
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: 'award',
    title: 'Ubicaciones Premium',
    description: 'Acceso a propiedades exclusivas en los destinos costeros más deseados de todo el mundo.'
  },
  {
    icon: 'home',
    title: 'Propiedades Excepcionales',
    description: 'Selección curada de casas, villas y apartamentos de lujo frente al mar con vistas impresionantes.'
  },
  {
    icon: 'clock',
    title: 'Soporte 24/7',
    description: 'Nuestro equipo dedicado está disponible las 24 horas para asistir con todas sus necesidades inmobiliarias.'
  },
  {
    icon: 'users',
    title: 'Agentes Expertos',
    description: 'Profesionales inmobiliarios con experiencia especializados en propiedades costeras premium.'
  }
];

const DashboardFeatures = () => {
  const { toast } = useToast();
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Feature>({
    icon: 'award',
    title: '',
    description: ''
  });

  useEffect(() => {
    // Cargar las características del localStorage o usar las predeterminadas
    const savedFeatures = localStorage.getItem('whyChooseUsFeatures');
    if (savedFeatures) {
      try {
        setFeatures(JSON.parse(savedFeatures));
      } catch (error) {
        console.error('Error al cargar las características:', error);
        setFeatures([...defaultFeatures]);
      }
    } else {
      setFeatures([...defaultFeatures]);
    }
  }, []);

  const handleAddFeature = () => {
    setIsEditing(true);
    setEditingIndex(null);
    setFormData({
      icon: 'award',
      title: '',
      description: ''
    });
  };

  const handleEditFeature = (index: number) => {
    setIsEditing(true);
    setEditingIndex(index);
    setFormData({ ...features[index] });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleIconChange = (value: string) => {
    setFormData({
      ...formData,
      icon: value
    });
  };

  const handleSaveFeature = () => {
    // Validar que todos los campos estén completos
    if (!formData.title || !formData.description) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos.",
        variant: "destructive"
      });
      return;
    }

    let updatedFeatures: Feature[];
    if (editingIndex !== null) {
      // Actualizar característica existente
      updatedFeatures = [...features];
      updatedFeatures[editingIndex] = formData;
    } else {
      // Añadir nueva característica
      updatedFeatures = [...features, formData];
    }

    setFeatures(updatedFeatures);
    localStorage.setItem('whyChooseUsFeatures', JSON.stringify(updatedFeatures));

    toast({
      title: editingIndex !== null ? "Característica actualizada" : "Característica añadida",
      description: `La característica ha sido ${editingIndex !== null ? "actualizada" : "añadida"} correctamente.`
    });

    setIsEditing(false);
    setEditingIndex(null);
    setFormData({
      icon: 'award',
      title: '',
      description: ''
    });
  };

  const handleDeleteFeature = (index: number) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
    localStorage.setItem('whyChooseUsFeatures', JSON.stringify(updatedFeatures));

    toast({
      title: "Característica eliminada",
      description: "La característica ha sido eliminada correctamente."
    });
  };

  const handleReset = () => {
    setFeatures([...defaultFeatures]);
    localStorage.setItem('whyChooseUsFeatures', JSON.stringify(defaultFeatures));

    toast({
      title: "Características restablecidas",
      description: "Las características han sido restablecidas a los valores predeterminados."
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Características de la Empresa</CardTitle>
            <CardDescription>
              Gestiona las características que se muestran en la sección "Por Qué Elegir"
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={handleAddFeature}>
                  <Plus className="h-4 w-4 mr-2" /> Añadir Característica
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingIndex !== null ? "Editar Característica" : "Añadir Nueva Característica"}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="icon">Icono</Label>
                    <Select value={formData.icon} onValueChange={handleIconChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un icono" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="award">Premio</SelectItem>
                        <SelectItem value="home">Casa</SelectItem>
                        <SelectItem value="clock">Reloj</SelectItem>
                        <SelectItem value="users">Usuarios</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input 
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Ej: Servicio Premium"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Input 
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Breve descripción de la característica"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button onClick={handleSaveFeature}>{editingIndex !== null ? "Guardar Cambios" : "Añadir"}</Button>
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
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  {feature.icon === 'award' && <span className="text-lg">🏆</span>}
                  {feature.icon === 'home' && <span className="text-lg">🏠</span>}
                  {feature.icon === 'clock' && <span className="text-lg">🕒</span>}
                  {feature.icon === 'users' && <span className="text-lg">👥</span>}
                </div>
                <div>
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-gray-500 truncate max-w-xs md:max-w-md">{feature.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => handleEditFeature(index)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDeleteFeature(index)}>
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

export default DashboardFeatures;
