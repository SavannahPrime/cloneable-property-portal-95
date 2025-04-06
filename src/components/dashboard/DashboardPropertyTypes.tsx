
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2, Edit, Save, Plus } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

interface PropertyType {
  id: string;
  title: string;
  count: number;
  image: string;
}

const defaultPropertyTypes: PropertyType[] = [
  {
    id: 'beachfront',
    title: 'Frente a la Playa',
    count: 24,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'luxury',
    title: 'Villas de Lujo',
    count: 18,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'waterfront',
    title: 'Frente al Mar',
    count: 32,
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'condos',
    title: 'Condominios',
    count: 41,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const DashboardPropertyTypes = () => {
  const { toast } = useToast();
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const [editingPropertyType, setEditingPropertyType] = useState<PropertyType | null>(null);
  const [formData, setFormData] = useState<PropertyType>({
    id: '',
    title: '',
    count: 0,
    image: ''
  });

  useEffect(() => {
    // Cargar los tipos de propiedades del localStorage o usar los predeterminados
    const savedTypes = localStorage.getItem('propertyTypes');
    if (savedTypes) {
      try {
        setPropertyTypes(JSON.parse(savedTypes));
      } catch (error) {
        console.error('Error al cargar los tipos de propiedades:', error);
        setPropertyTypes([...defaultPropertyTypes]);
      }
    } else {
      setPropertyTypes([...defaultPropertyTypes]);
    }
  }, []);

  const handleEditPropertyType = (propertyType: PropertyType) => {
    setEditingPropertyType(propertyType);
    setFormData({ ...propertyType });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'count' ? parseInt(value) || 0 : value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleAddPropertyType = () => {
    setEditingPropertyType(null);
    setFormData({
      id: '',
      title: '',
      count: 0,
      image: ''
    });
  };

  const handleSavePropertyType = () => {
    // Validar que todos los campos estén completos
    if (!formData.title || !formData.image || formData.count <= 0) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos correctamente.",
        variant: "destructive"
      });
      return;
    }

    // Generar ID si es un nuevo tipo de propiedad
    if (!formData.id) {
      formData.id = formData.title.toLowerCase().replace(/ /g, '-');
    }

    let updatedTypes: PropertyType[];
    if (editingPropertyType) {
      // Actualizar tipo existente
      updatedTypes = propertyTypes.map(type => 
        type.id === formData.id ? formData : type
      );
    } else {
      // Añadir nuevo tipo
      updatedTypes = [...propertyTypes, formData];
    }

    setPropertyTypes(updatedTypes);
    localStorage.setItem('propertyTypes', JSON.stringify(updatedTypes));

    toast({
      title: editingPropertyType ? "Tipo de propiedad actualizado" : "Tipo de propiedad añadido",
      description: `El tipo de propiedad ha sido ${editingPropertyType ? "actualizado" : "añadido"} correctamente.`
    });

    setEditingPropertyType(null);
    setFormData({
      id: '',
      title: '',
      count: 0,
      image: ''
    });
  };

  const handleDeletePropertyType = (id: string) => {
    const updatedTypes = propertyTypes.filter(type => type.id !== id);
    setPropertyTypes(updatedTypes);
    localStorage.setItem('propertyTypes', JSON.stringify(updatedTypes));

    toast({
      title: "Tipo de propiedad eliminado",
      description: "El tipo de propiedad ha sido eliminado correctamente."
    });
  };

  const handleReset = () => {
    setPropertyTypes([...defaultPropertyTypes]);
    localStorage.setItem('propertyTypes', JSON.stringify(defaultPropertyTypes));

    toast({
      title: "Tipos de propiedad restablecidos",
      description: "Los tipos de propiedad han sido restablecidos a los valores predeterminados."
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Tipos de Propiedades</CardTitle>
            <CardDescription>
              Gestiona los tipos de propiedades que se muestran en la página de inicio
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={handleAddPropertyType}>
                  <Plus className="h-4 w-4 mr-2" /> Añadir Tipo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingPropertyType ? "Editar Tipo de Propiedad" : "Añadir Nuevo Tipo de Propiedad"}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input 
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Ej: Villa de Lujo"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="count">Cantidad de Propiedades</Label>
                    <Input 
                      id="count"
                      name="count"
                      type="number"
                      value={formData.count}
                      onChange={handleInputChange}
                      min="1"
                      placeholder="Ej: 24"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="image">Imagen</Label>
                    <div className="flex items-center gap-4">
                      <label 
                        htmlFor="property-type-image" 
                        className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                      >
                        <Upload className="h-4 w-4" />
                        Subir Imagen
                      </label>
                      <Input 
                        id="property-type-image"
                        name="image"
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
                          className="h-40 w-full object-cover rounded"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button onClick={handleSavePropertyType}>{editingPropertyType ? "Guardar Cambios" : "Añadir"}</Button>
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
          {propertyTypes.map((propertyType) => (
            <div key={propertyType.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                {propertyType.image && (
                  <img 
                    src={propertyType.image} 
                    alt={propertyType.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                )}
                <div>
                  <h3 className="font-medium">{propertyType.title}</h3>
                  <p className="text-sm text-gray-500">{propertyType.count} propiedades</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={() => handleEditPropertyType(propertyType)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Tipo de Propiedad</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="edit-title">Título</Label>
                        <Input 
                          id="edit-title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="edit-count">Cantidad de Propiedades</Label>
                        <Input 
                          id="edit-count"
                          name="count"
                          type="number"
                          value={formData.count}
                          onChange={handleInputChange}
                          min="1"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="edit-image">Imagen</Label>
                        <div className="flex items-center gap-4">
                          <label 
                            htmlFor="edit-property-type-image" 
                            className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                          >
                            <Upload className="h-4 w-4" />
                            Cambiar Imagen
                          </label>
                          <Input 
                            id="edit-property-type-image"
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
                              className="h-40 w-full object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="destructive" onClick={() => handleDeletePropertyType(propertyType.id)}>Eliminar</Button>
                      <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                      </DialogClose>
                      <Button onClick={handleSavePropertyType}>Guardar Cambios</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button variant="ghost" size="sm" onClick={() => handleDeletePropertyType(propertyType.id)}>
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

export default DashboardPropertyTypes;
