import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, Trash2, Eye, Home, Building2, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const propertiesData = [
  {
    id: '1',
    title: 'Villa Moderna Frente a la Playa',
    location: 'Malibu, California',
    price: 2950000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    type: 'Villa',
    status: 'En Venta',
    featured: true
  },
  {
    id: '2',
    title: 'Apartamento de Lujo Frente al Mar',
    location: 'Miami Beach, Florida',
    price: 1875000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    type: 'Apartamento',
    status: 'En Venta',
    featured: true
  },
  {
    id: '3',
    title: 'Refugio Costero con Piscina',
    location: 'Naples, Florida',
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2800,
    type: 'Casa',
    status: 'En Alquiler',
    featured: false
  },
  {
    id: '4',
    title: 'Ático Premium con Vista al Océano',
    location: 'San Diego, California',
    price: 2250000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2400,
    type: 'Apartamento',
    status: 'En Venta',
    featured: false
  },
  {
    id: '5',
    title: 'Casa de Playa con Acceso Privado',
    location: 'Outer Banks, Carolina del Norte',
    price: 1950000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    type: 'Casa',
    status: 'En Venta',
    featured: true
  }
];

const propertyTypes = [
  { id: 'apartment', label: 'Apartamento', icon: Building2 },
  { id: 'house', label: 'Casa', icon: Home },
  { id: 'villa', label: 'Villa', icon: Building },
];

const DashboardProperties = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("listado");
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState(propertiesData);
  const [selectedProperty, setSelectedProperty] = useState<null | any>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  
  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewProperty = (property: any) => {
    setSelectedProperty(property);
  };

  const handleDeleteProperty = (property: any) => {
    setSelectedProperty(property);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (selectedProperty) {
      setProperties(properties.filter(p => p.id !== selectedProperty.id));
      toast({
        title: "Propiedad eliminada",
        description: `La propiedad "${selectedProperty.title}" ha sido eliminada correctamente.`,
      });
      setShowDeleteDialog(false);
    }
  };

  const handleToggleFeatured = (property: any) => {
    setProperties(properties.map(p => {
      if (p.id === property.id) {
        return { ...p, featured: !p.featured };
      }
      return p;
    }));
    
    toast({
      title: property.featured ? "Propiedad eliminada de destacados" : "Propiedad añadida a destacados",
      description: `La propiedad "${property.title}" ha sido ${property.featured ? "eliminada de" : "añadida a"} destacados.`,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gestión de Propiedades</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Añadir Propiedad
        </Button>
      </div>

      <Tabs defaultValue="listado" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="listado">Listado</TabsTrigger>
          <TabsTrigger value="categorias">Categorías</TabsTrigger>
          <TabsTrigger value="destacadas">Destacadas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="listado" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar propiedades..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="apartment">Apartamento</SelectItem>
                <SelectItem value="house">Casa</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Ubicación</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-center">Destacado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.title}</TableCell>
                      <TableCell>{property.location}</TableCell>
                      <TableCell>{property.type}</TableCell>
                      <TableCell>${property.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={property.status === 'En Venta' ? 'default' : 'secondary'}>
                          {property.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={property.featured ? "text-amber-500" : "text-gray-400"}
                          onClick={() => handleToggleFeatured(property)}
                        >
                          {property.featured ? '★' : '☆'}
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => handleViewProperty(property)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>{property.title}</DialogTitle>
                                <DialogDescription>{property.location}</DialogDescription>
                              </DialogHeader>
                              <div className="grid grid-cols-2 gap-4 py-4">
                                <div>
                                  <h3 className="font-medium mb-2">Información General</h3>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Tipo:</span>
                                      <span>{property.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Precio:</span>
                                      <span>${property.price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Estado:</span>
                                      <span>{property.status}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Destacado:</span>
                                      <span>{property.featured ? 'Sí' : 'No'}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-medium mb-2">Características</h3>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Habitaciones:</span>
                                      <span>{property.bedrooms}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Baños:</span>
                                      <span>{property.bathrooms}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Área:</span>
                                      <span>{property.area} m²</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cerrar</Button>
                                </DialogClose>
                                <Button>Editar</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Editar Propiedad</DialogTitle>
                                <DialogDescription>
                                  Modifica los detalles de esta propiedad
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="title">Título</Label>
                                  <Input id="title" defaultValue={selectedProperty?.title || ''} />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="location">Ubicación</Label>
                                  <Input id="location" defaultValue={selectedProperty?.location || ''} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="price">Precio</Label>
                                    <Input 
                                      id="price" 
                                      type="number"
                                      defaultValue={selectedProperty?.price || ''} 
                                    />
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="type">Tipo</Label>
                                    <Select defaultValue={selectedProperty?.type || ''}>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar tipo" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Villa">Villa</SelectItem>
                                        <SelectItem value="Apartamento">Apartamento</SelectItem>
                                        <SelectItem value="Casa">Casa</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancelar</Button>
                                </DialogClose>
                                <Button onClick={() => toast({
                                  title: "Propiedad actualizada",
                                  description: "Los cambios se han guardado correctamente."
                                })}>Guardar cambios</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDeleteProperty(property)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t px-6 py-3">
              <p className="text-sm text-gray-500">Mostrando {filteredProperties.length} de {properties.length} propiedades</p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="categorias">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertyTypes.map((type) => (
              <Card key={type.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-coastal-50 rounded-md">
                      <type.icon className="h-5 w-5 text-coastal-600" />
                    </div>
                    <CardTitle>{type.label}s</CardTitle>
                  </div>
                  <Badge variant="outline">24</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Gestiona todas las propiedades de tipo {type.label.toLowerCase()}.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setActiveTab("listado");
                      toast({
                        title: `Propiedades de tipo ${type.label}`,
                        description: `Mostrando propiedades de tipo ${type.label}.`
                      });
                    }}
                  >
                    Ver {type.label}s
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="destacadas">
          <Card>
            <CardHeader>
              <CardTitle>Propiedades Destacadas</CardTitle>
              <CardDescription>
                Gestiona las propiedades que aparecen en la sección destacada de la página de inicio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Ubicación</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties
                    .filter(property => property.featured)
                    .map((property) => (
                      <TableRow key={property.id}>
                        <TableCell className="font-medium">{property.title}</TableCell>
                        <TableCell>{property.location}</TableCell>
                        <TableCell>{property.type}</TableCell>
                        <TableCell>${property.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleToggleFeatured(property)}
                          >
                            Quitar de destacados
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esta eliminará permanentemente la propiedad
              "{selectedProperty?.title}" de la base de datos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DashboardProperties;

const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </label>
  );
};
