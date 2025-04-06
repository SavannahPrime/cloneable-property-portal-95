import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Eye, Star, Upload, Trash2, Edit, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger
} from "@/components/ui/dialog";

const initialProperties = [
  {
    id: 1,
    title: 'Villa Moderna Frente a la Playa',
    visits: 386,
    image: ''
  },
  {
    id: 2,
    title: 'Apartamento de Lujo Frente al Mar',
    visits: 249,
    image: ''
  },
  {
    id: 3,
    title: 'Refugio Costero con Piscina',
    visits: 194,
    image: ''
  }
];

const initialActivities = [
  {
    id: 1,
    text: 'Nueva propiedad añadida: Villa Marina',
    time: 'Hace 2 horas',
    type: 'green'
  },
  {
    id: 2,
    text: 'Actualización de precio: Apartamento Seaside',
    time: 'Hace 6 horas',
    type: 'blue'
  },
  {
    id: 3,
    text: 'Nueva consulta de propiedad',
    time: 'Hace 1 día',
    type: 'yellow'
  },
  {
    id: 4,
    text: 'Actualización de la sección Nosotros',
    time: 'Hace 2 días',
    type: 'purple'
  }
];

const DashboardHome = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState({
    properties: { total: 142, increase: "+5 este mes" },
    visitors: { total: 1284, increase: "+12% respecto al mes anterior" },
    inquiries: { total: 37, increase: "+8 esta semana" },
    ratings: { total: "4.8/5", increase: "23 nuevas valoraciones" }
  });

  const [mostVisitedProperties, setMostVisitedProperties] = useState(initialProperties);
  const [recentActivities, setRecentActivities] = useState(initialActivities);
  
  const [isEditingStats, setIsEditingStats] = useState(false);
  const [editedStats, setEditedStats] = useState(stats);
  
  const [editingProperty, setEditingProperty] = useState(null);
  const [propertyFormData, setPropertyFormData] = useState({ id: 0, title: '', visits: 0, image: '' });
  
  const [editingActivity, setEditingActivity] = useState(null);
  const [activityFormData, setActivityFormData] = useState({ id: 0, text: '', time: '', type: 'green' });
  
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [headerImage, setHeaderImage] = useState('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80');
  const [headerImagePreview, setHeaderImagePreview] = useState(headerImage);

  const handleStatsChange = (category, field, value) => {
    setEditedStats(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleSaveStats = () => {
    setStats(editedStats);
    setIsEditingStats(false);
    toast({
      title: "Estadísticas actualizadas",
      description: "Los cambios han sido guardados correctamente."
    });
  };

  const handleEditProperty = (property) => {
    setEditingProperty(property);
    setPropertyFormData({ ...property });
  };

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setPropertyFormData(prev => ({
      ...prev,
      [name]: name === 'visits' ? parseInt(value) : value
    }));
  };

  const handlePropertyImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setPropertyFormData(prev => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSaveProperty = () => {
    if (editingProperty) {
      setMostVisitedProperties(prev => 
        prev.map(p => p.id === propertyFormData.id ? propertyFormData : p)
      );
    } else {
      const newProperty = {
        ...propertyFormData,
        id: Date.now()
      };
      setMostVisitedProperties(prev => [...prev, newProperty]);
    }
    
    toast({
      title: editingProperty ? "Propiedad actualizada" : "Propiedad añadida",
      description: `La propiedad ha sido ${editingProperty ? "actualizada" : "añadida"} correctamente.`
    });
    
    setEditingProperty(null);
    setPropertyFormData({ id: 0, title: '', visits: 0, image: '' });
  };

  const handleDeleteProperty = (id) => {
    setMostVisitedProperties(prev => prev.filter(p => p.id !== id));
    toast({
      title: "Propiedad eliminada",
      description: "La propiedad ha sido eliminada correctamente."
    });
  };

  const handleEditActivity = (activity) => {
    setEditingActivity(activity);
    setActivityFormData({ ...activity });
  };

  const handleActivityChange = (e) => {
    const { name, value } = e.target;
    setActivityFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveActivity = () => {
    if (editingActivity) {
      setRecentActivities(prev => 
        prev.map(a => a.id === activityFormData.id ? activityFormData : a)
      );
    } else {
      const newActivity = {
        ...activityFormData,
        id: Date.now()
      };
      setRecentActivities(prev => [...prev, newActivity]);
    }
    
    toast({
      title: editingActivity ? "Actividad actualizada" : "Actividad añadida",
      description: `La actividad ha sido ${editingActivity ? "actualizada" : "añadida"} correctamente.`
    });
    
    setEditingActivity(null);
    setActivityFormData({ id: 0, text: '', time: '', type: 'green' });
  };

  const handleDeleteActivity = (id) => {
    setRecentActivities(prev => prev.filter(a => a.id !== id));
    toast({
      title: "Actividad eliminada",
      description: "La actividad ha sido eliminada correctamente."
    });
  };

  const handleHeaderImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setHeaderImagePreview(imageUrl);
    }
  };

  const handleSaveHeaderImage = () => {
    setHeaderImage(headerImagePreview);
    setIsEditingHeader(false);
    toast({
      title: "Imagen actualizada",
      description: "La imagen de cabecera ha sido actualizada correctamente."
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Panel de Control</h1>
        <Button onClick={() => setIsEditingStats(!isEditingStats)}>
          {isEditingStats ? "Cancelar" : <><Edit className="h-4 w-4 mr-2" /> Editar Estadísticas</>}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Propiedades Totales
            </CardTitle>
            <Building className="h-4 w-4 text-coastal-600" />
          </CardHeader>
          <CardContent>
            {isEditingStats ? (
              <div className="space-y-2">
                <Input 
                  value={editedStats.properties.total}
                  onChange={(e) => handleStatsChange('properties', 'total', e.target.value)}
                  className="font-bold text-2xl"
                />
                <Input 
                  value={editedStats.properties.increase}
                  onChange={(e) => handleStatsChange('properties', 'increase', e.target.value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.properties.total}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.properties.increase}
                </p>
              </>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Visitantes
            </CardTitle>
            <Eye className="h-4 w-4 text-coastal-600" />
          </CardHeader>
          <CardContent>
            {isEditingStats ? (
              <div className="space-y-2">
                <Input 
                  value={editedStats.visitors.total}
                  onChange={(e) => handleStatsChange('visitors', 'total', e.target.value)}
                  className="font-bold text-2xl"
                />
                <Input 
                  value={editedStats.visitors.increase}
                  onChange={(e) => handleStatsChange('visitors', 'increase', e.target.value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.visitors.total}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.visitors.increase}
                </p>
              </>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Consultas
            </CardTitle>
            <Users className="h-4 w-4 text-coastal-600" />
          </CardHeader>
          <CardContent>
            {isEditingStats ? (
              <div className="space-y-2">
                <Input 
                  value={editedStats.inquiries.total}
                  onChange={(e) => handleStatsChange('inquiries', 'total', e.target.value)}
                  className="font-bold text-2xl"
                />
                <Input 
                  value={editedStats.inquiries.increase}
                  onChange={(e) => handleStatsChange('inquiries', 'increase', e.target.value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.inquiries.total}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.inquiries.increase}
                </p>
              </>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valoraciones
            </CardTitle>
            <Star className="h-4 w-4 text-coastal-600" />
          </CardHeader>
          <CardContent>
            {isEditingStats ? (
              <div className="space-y-2">
                <Input 
                  value={editedStats.ratings.total}
                  onChange={(e) => handleStatsChange('ratings', 'total', e.target.value)}
                  className="font-bold text-2xl"
                />
                <Input 
                  value={editedStats.ratings.increase}
                  onChange={(e) => handleStatsChange('ratings', 'increase', e.target.value)}
                  className="text-xs text-muted-foreground"
                />
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.ratings.total}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.ratings.increase}
                </p>
              </>
            )}
          </CardContent>
        </Card>

        {isEditingStats && (
          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-end">
            <Button onClick={handleSaveStats} className="ml-auto">
              <Save className="h-4 w-4 mr-2" />
              Guardar Estadísticas
            </Button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>Propiedades Más Visitadas</CardTitle>
              <CardDescription>
                Las propiedades con más interacciones este mes
              </CardDescription>
            </div>
            <Dialog>
              <Button variant="outline" size="sm" asChild>
                <DialogTrigger>+ Añadir Propiedad</DialogTrigger>
              </Button>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Añadir Nueva Propiedad</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input 
                      id="title" 
                      name="title"
                      value={propertyFormData.title}
                      onChange={handlePropertyChange}
                      placeholder="Título de la propiedad"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="visits">Número de visitas</Label>
                    <Input 
                      id="visits" 
                      name="visits"
                      type="number"
                      value={propertyFormData.visits}
                      onChange={handlePropertyChange}
                      placeholder="Número de visitas"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="property-image">Imagen</Label>
                    <div className="flex items-center gap-4">
                      <label 
                        htmlFor="property-image" 
                        className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                      >
                        <Upload className="h-4 w-4" />
                        Subir Imagen
                      </label>
                      <Input 
                        id="property-image"
                        type="file" 
                        accept="image/*" 
                        onChange={handlePropertyImageChange}
                        className="hidden"
                      />
                    </div>
                    {propertyFormData.image && (
                      <div className="mt-2">
                        <img 
                          src={propertyFormData.image} 
                          alt="Vista previa" 
                          className="h-24 w-full object-cover rounded"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button onClick={handleSaveProperty}>Guardar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mostVisitedProperties.map((property) => (
                <li key={property.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded bg-gray-200 mr-3 ${property.image ? "bg-cover bg-center" : ""}`} 
                         style={property.image ? { backgroundImage: `url(${property.image})` } : {}}>
                      {!property.image && <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Imagen</div>}
                    </div>
                    <span>{property.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-coastal-600 font-medium">{property.visits} visitas</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => handleEditProperty(property)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Editar Propiedad</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="edit-title">Título</Label>
                            <Input 
                              id="edit-title" 
                              name="title"
                              value={propertyFormData.title}
                              onChange={handlePropertyChange}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-visits">Número de visitas</Label>
                            <Input 
                              id="edit-visits" 
                              name="visits"
                              type="number"
                              value={propertyFormData.visits}
                              onChange={handlePropertyChange}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-property-image">Imagen</Label>
                            <div className="flex items-center gap-4">
                              <label 
                                htmlFor="edit-property-image" 
                                className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                              >
                                <Upload className="h-4 w-4" />
                                Cambiar Imagen
                              </label>
                              <Input 
                                id="edit-property-image"
                                type="file" 
                                accept="image/*" 
                                onChange={handlePropertyImageChange}
                                className="hidden"
                              />
                            </div>
                            {propertyFormData.image && (
                              <div className="mt-2">
                                <img 
                                  src={propertyFormData.image} 
                                  alt="Vista previa" 
                                  className="h-24 w-full object-cover rounded"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="destructive" onClick={() => handleDeleteProperty(property.id)}>
                            Eliminar
                          </Button>
                          <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                          </DialogClose>
                          <Button onClick={handleSaveProperty}>Guardar Cambios</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteProperty(property.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex justify-between items-center">
            <div>
              <CardTitle>Actividad Reciente</CardTitle>
              <CardDescription>
                Últimas actualizaciones de la plataforma
              </CardDescription>
            </div>
            <Dialog>
              <Button variant="outline" size="sm" asChild>
                <DialogTrigger>+ Añadir Actividad</DialogTrigger>
              </Button>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Añadir Nueva Actividad</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="text">Descripción</Label>
                    <Input 
                      id="text" 
                      name="text"
                      value={activityFormData.text}
                      onChange={handleActivityChange}
                      placeholder="Descripción de la actividad"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Tiempo</Label>
                    <Input 
                      id="time" 
                      name="time"
                      value={activityFormData.time}
                      onChange={handleActivityChange}
                      placeholder="Ej: Hace 2 horas"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Tipo</Label>
                    <select 
                      id="type"
                      name="type"
                      className="w-full p-2 border rounded"
                      value={activityFormData.type}
                      onChange={handleActivityChange}
                    >
                      <option value="green">Verde (Nueva propiedad)</option>
                      <option value="blue">Azul (Actualización)</option>
                      <option value="yellow">Amarillo (Consulta)</option>
                      <option value="purple">Morado (Cambio web)</option>
                    </select>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button onClick={handleSaveActivity}>Guardar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-center">
                  <div className={`w-2 h-2 bg-${activity.type}-500 rounded-full mr-3`}></div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => handleEditActivity(activity)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Editar Actividad</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="edit-text">Descripción</Label>
                            <Input 
                              id="edit-text" 
                              name="text"
                              value={activityFormData.text}
                              onChange={handleActivityChange}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-time">Tiempo</Label>
                            <Input 
                              id="edit-time" 
                              name="time"
                              value={activityFormData.time}
                              onChange={handleActivityChange}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-type">Tipo</Label>
                            <select 
                              id="edit-type"
                              name="type"
                              className="w-full p-2 border rounded"
                              value={activityFormData.type}
                              onChange={handleActivityChange}
                            >
                              <option value="green">Verde (Nueva propiedad)</option>
                              <option value="blue">Azul (Actualización)</option>
                              <option value="yellow">Amarillo (Consulta)</option>
                              <option value="purple">Morado (Cambio web)</option>
                            </select>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="destructive" onClick={() => handleDeleteActivity(activity.id)}>
                            Eliminar
                          </Button>
                          <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                          </DialogClose>
                          <Button onClick={handleSaveActivity}>Guardar Cambios</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteActivity(activity.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isEditingHeader} onOpenChange={setIsEditingHeader}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cambiar Imagen Principal</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="header-image">Imagen de Cabecera</Label>
              <div className="flex items-center gap-4">
                <label 
                  htmlFor="header-image" 
                  className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Subir Imagen
                </label>
                <Input 
                  id="header-image"
                  type="file" 
                  accept="image/*" 
                  onChange={handleHeaderImageChange}
                  className="hidden"
                />
              </div>
              {headerImagePreview && (
                <div className="mt-2">
                  <img 
                    src={headerImagePreview} 
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
            <Button onClick={handleSaveHeaderImage}>Guardar Cambios</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="mt-6 flex justify-end">
        <Button onClick={() => setIsEditingHeader(true)}>
          <Upload className="h-4 w-4 mr-2" />
          Cambiar Imagen Principal
        </Button>
      </div>
    </div>
  );
};

export default DashboardHome;
