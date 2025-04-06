
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, Users, Edit, Trash2, Plus, Save, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Datos iniciales para el equipo
const initialTeamMembers = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    position: "CEO y Fundador",
    description: "Con más de 20 años de experiencia en el sector inmobiliario...",
    image: ""
  },
  {
    id: 2,
    name: "Elena González",
    position: "Directora de Ventas",
    description: "Especializada en propiedades de lujo en la costa mediterránea...",
    image: ""
  }
];

// Datos iniciales para características
const initialFeatures = [
  {
    id: 1,
    icon: "Award",
    title: "Ubicaciones Premium",
    description: "Acceso a propiedades exclusivas en los destinos costeros más deseados de todo el mundo."
  },
  {
    id: 2,
    icon: "Users",
    title: "Agentes Expertos",
    description: "Profesionales inmobiliarios con experiencia especializados en propiedades costeras premium."
  }
];

// Iconos disponibles para las características
const availableIcons = [
  { id: "Award", label: "Premio" },
  { id: "Users", label: "Usuarios" },
  { id: "Home", label: "Casa" },
  { id: "Building", label: "Edificio" },
  { id: "Clock", label: "Reloj" },
  { id: "Star", label: "Estrella" },
  { id: "CheckCircle", label: "Verificado" },
  { id: "Shield", label: "Escudo" }
];

const DashboardAbout = () => {
  const { toast } = useToast();
  const [isEditingMainContent, setIsEditingMainContent] = useState(false);
  const [mainContent, setMainContent] = useState({
    title: "Sobre Global Costa Invest",
    subtitle: "Su socio de confianza para propiedades costeras premium desde 2005",
    description: "Global Costa Invest se especializa en propiedades costeras exclusivas ubicadas en los destinos más atractivos del mundo. Nuestro equipo de expertos inmobiliarios está dedicado a encontrar la propiedad ideal para cada cliente, ya sea una villa de lujo frente al mar, un apartamento con vistas al océano o una casa de playa privada.",
    mission: "Nuestra misión es proporcionar un servicio excepcional y personalizado, guiando a nuestros clientes a través del proceso de compra o venta de propiedades costeras con transparencia, integridad y dedicación. Nos esforzamos por superar las expectativas y crear relaciones duraderas basadas en la confianza y la satisfacción."
  });
  const [editedContent, setEditedContent] = useState({...mainContent});

  // Estado para miembros del equipo
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [editingMember, setEditingMember] = useState(null);
  const [memberFormData, setMemberFormData] = useState({
    id: 0,
    name: "",
    position: "",
    description: "",
    image: ""
  });
  const [showDeleteMemberDialog, setShowDeleteMemberDialog] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  // Estado para características
  const [features, setFeatures] = useState(initialFeatures);
  const [editingFeature, setEditingFeature] = useState(null);
  const [featureFormData, setFeatureFormData] = useState({
    id: 0,
    icon: "Award",
    title: "",
    description: ""
  });
  const [showDeleteFeatureDialog, setShowDeleteFeatureDialog] = useState(false);
  const [featureToDelete, setFeatureToDelete] = useState(null);

  // Manejadores para contenido principal
  const handleContentInputChange = (e) => {
    const { id, value } = e.target;
    setEditedContent(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSaveMainContent = () => {
    setMainContent(editedContent);
    setIsEditingMainContent(false);
    toast({
      title: "Cambios guardados",
      description: "Los cambios en la sección 'Nosotros' han sido guardados correctamente.",
    });
  };

  // Manejadores para miembros del equipo
  const handleOpenAddMember = () => {
    setEditingMember(null);
    setMemberFormData({
      id: 0,
      name: "",
      position: "",
      description: "",
      image: ""
    });
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setMemberFormData({ ...member });
  };

  const handleMemberInputChange = (e) => {
    const { id, value } = e.target;
    setMemberFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleMemberImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setMemberFormData(prev => ({
        ...prev,
        image: imageUrl
      }));
    }
  };

  const handleSaveMember = () => {
    if (editingMember) {
      // Actualizar miembro existente
      setTeamMembers(prev => prev.map(m => 
        m.id === memberFormData.id ? memberFormData : m
      ));
      toast({
        title: "Miembro actualizado",
        description: "El miembro del equipo ha sido actualizado correctamente."
      });
    } else {
      // Añadir nuevo miembro
      const newMember = {
        ...memberFormData,
        id: Date.now()
      };
      setTeamMembers(prev => [...prev, newMember]);
      toast({
        title: "Miembro añadido",
        description: "El nuevo miembro ha sido añadido al equipo correctamente."
      });
    }
    setEditingMember(null);
  };

  const handleDeleteMember = (member) => {
    setMemberToDelete(member);
    setShowDeleteMemberDialog(true);
  };

  const confirmDeleteMember = () => {
    if (memberToDelete) {
      setTeamMembers(prev => prev.filter(m => m.id !== memberToDelete.id));
      toast({
        title: "Miembro eliminado",
        description: `El miembro "${memberToDelete.name}" ha sido eliminado correctamente.`
      });
      setShowDeleteMemberDialog(false);
      setMemberToDelete(null);
    }
  };

  // Manejadores para características
  const handleOpenAddFeature = () => {
    setEditingFeature(null);
    setFeatureFormData({
      id: 0,
      icon: "Award",
      title: "",
      description: ""
    });
  };

  const handleEditFeature = (feature) => {
    setEditingFeature(feature);
    setFeatureFormData({ ...feature });
  };

  const handleFeatureInputChange = (e) => {
    const { id, value } = e.target;
    setFeatureFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFeatureIconChange = (e) => {
    const { value } = e.target;
    setFeatureFormData(prev => ({
      ...prev,
      icon: value
    }));
  };

  const handleSaveFeature = () => {
    if (editingFeature) {
      // Actualizar característica existente
      setFeatures(prev => prev.map(f => 
        f.id === featureFormData.id ? featureFormData : f
      ));
      toast({
        title: "Característica actualizada",
        description: "La característica ha sido actualizada correctamente."
      });
    } else {
      // Añadir nueva característica
      const newFeature = {
        ...featureFormData,
        id: Date.now()
      };
      setFeatures(prev => [...prev, newFeature]);
      toast({
        title: "Característica añadida",
        description: "La nueva característica ha sido añadida correctamente."
      });
    }
    setEditingFeature(null);
  };

  const handleDeleteFeature = (feature) => {
    setFeatureToDelete(feature);
    setShowDeleteFeatureDialog(true);
  };

  const confirmDeleteFeature = () => {
    if (featureToDelete) {
      setFeatures(prev => prev.filter(f => f.id !== featureToDelete.id));
      toast({
        title: "Característica eliminada",
        description: `La característica "${featureToDelete.title}" ha sido eliminada correctamente.`
      });
      setShowDeleteFeatureDialog(false);
      setFeatureToDelete(null);
    }
  };

  // Función para renderizar el icono correspondiente
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Award": return <Award className="h-5 w-5" />;
      case "Users": return <Users className="h-5 w-5" />;
      // Aquí añadir más iconos si es necesario
      default: return <Award className="h-5 w-5" />;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gestión de Sección Nosotros</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {/* Contenido Principal */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Contenido Principal</CardTitle>
              <CardDescription>
                Editar la información principal de la sección Nosotros
              </CardDescription>
            </div>
            <Button 
              variant={isEditingMainContent ? "ghost" : "outline"} 
              onClick={() => setIsEditingMainContent(!isEditingMainContent)}
            >
              {isEditingMainContent ? "Cancelar" : <><Edit className="h-4 w-4 mr-2" /> Editar</>}
            </Button>
          </CardHeader>
          <CardContent>
            {isEditingMainContent ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Título</Label>
                  <Input 
                    id="title" 
                    value={editedContent.title} 
                    onChange={handleContentInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subtitle">Subtítulo</Label>
                  <Input 
                    id="subtitle" 
                    value={editedContent.subtitle}
                    onChange={handleContentInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea 
                    id="description" 
                    rows={6}
                    value={editedContent.description}
                    onChange={handleContentInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="mission">Nuestra Misión</Label>
                  <Textarea 
                    id="mission" 
                    rows={4}
                    value={editedContent.mission}
                    onChange={handleContentInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveMainContent}>
                    <Save className="h-4 w-4 mr-2" />
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Título</h3>
                  <p>{mainContent.title}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Subtítulo</h3>
                  <p>{mainContent.subtitle}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Descripción</h3>
                  <p>{mainContent.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Nuestra Misión</h3>
                  <p>{mainContent.mission}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Equipo */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Nuestro Equipo</CardTitle>
              <CardDescription>
                Gestionar los miembros del equipo que aparecen en la sección Nosotros
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={handleOpenAddMember}>
                  <Plus className="h-4 w-4 mr-2" />
                  Añadir Miembro
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{editingMember ? "Editar Miembro" : "Añadir Miembro"}</DialogTitle>
                  <DialogDescription>
                    {editingMember 
                      ? "Actualice los detalles del miembro del equipo." 
                      : "Complete los detalles para añadir un nuevo miembro al equipo."}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      value={memberFormData.name}
                      onChange={handleMemberInputChange}
                      placeholder="Nombre completo"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="position">Cargo</Label>
                    <Input
                      id="position"
                      value={memberFormData.position}
                      onChange={handleMemberInputChange}
                      placeholder="Cargo o posición"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      value={memberFormData.description}
                      onChange={handleMemberInputChange}
                      placeholder="Breve descripción o biografía"
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="member-image">Foto</Label>
                    <div className="flex items-center gap-4">
                      <label
                        htmlFor="member-image"
                        className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                      >
                        <Upload className="h-4 w-4" />
                        Subir Imagen
                      </label>
                      <Input
                        id="member-image"
                        type="file"
                        accept="image/*"
                        onChange={handleMemberImageChange}
                        className="hidden"
                      />
                    </div>
                    {memberFormData.image && (
                      <div className="mt-2">
                        <img
                          src={memberFormData.image}
                          alt="Vista previa"
                          className="h-24 w-auto object-cover rounded"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <DialogFooter>
                  {editingMember && (
                    <Button 
                      variant="destructive" 
                      onClick={() => {
                        handleDeleteMember(editingMember);
                      }}
                    >
                      Eliminar
                    </Button>
                  )}
                  <Button type="button" onClick={handleSaveMember}>
                    Guardar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Foto</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Cargo</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover" 
                          />
                        ) : null}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.position}</TableCell>
                    <TableCell className="max-w-xs truncate">{member.description}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleEditMember(member)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Editar Miembro</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="edit-name">Nombre</Label>
                                <Input
                                  id="name"
                                  value={memberFormData.name}
                                  onChange={handleMemberInputChange}
                                />
                              </div>
                              
                              <div className="grid gap-2">
                                <Label htmlFor="edit-position">Cargo</Label>
                                <Input
                                  id="position"
                                  value={memberFormData.position}
                                  onChange={handleMemberInputChange}
                                />
                              </div>
                              
                              <div className="grid gap-2">
                                <Label htmlFor="edit-description">Descripción</Label>
                                <Textarea
                                  id="description"
                                  value={memberFormData.description}
                                  onChange={handleMemberInputChange}
                                  rows={3}
                                />
                              </div>
                              
                              <div className="grid gap-2">
                                <Label htmlFor="edit-member-image">Foto</Label>
                                <div className="flex items-center gap-4">
                                  <label
                                    htmlFor="edit-member-image"
                                    className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded flex items-center gap-2"
                                  >
                                    <Upload className="h-4 w-4" />
                                    Cambiar Imagen
                                  </label>
                                  <Input
                                    id="edit-member-image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleMemberImageChange}
                                    className="hidden"
                                  />
                                </div>
                                {memberFormData.image && (
                                  <div className="mt-2">
                                    <img
                                      src={memberFormData.image}
                                      alt="Vista previa"
                                      className="h-24 w-auto object-cover rounded"
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="destructive" onClick={() => handleDeleteMember(member)}>
                                Eliminar
                              </Button>
                              <Button type="button" onClick={handleSaveMember}>
                                Guardar Cambios
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleDeleteMember(member)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {teamMembers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                      No hay miembros en el equipo. Añada uno con el botón "Añadir Miembro".
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        {/* Por qué elegirnos */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Por Qué Elegirnos</CardTitle>
              <CardDescription>
                Editar las características destacadas de la empresa
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={handleOpenAddFeature}>
                  <Plus className="h-4 w-4 mr-2" />
                  Añadir Característica
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{editingFeature ? "Editar Característica" : "Añadir Característica"}</DialogTitle>
                  <DialogDescription>
                    {editingFeature 
                      ? "Actualice los detalles de la característica." 
                      : "Complete los detalles para añadir una nueva característica."}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="icon">Icono</Label>
                    <select
                      id="icon"
                      className="w-full p-2 border rounded"
                      value={featureFormData.icon}
                      onChange={handleFeatureIconChange}
                    >
                      {availableIcons.map(icon => (
                        <option key={icon.id} value={icon.id}>
                          {icon.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input
                      id="title"
                      value={featureFormData.title}
                      onChange={handleFeatureInputChange}
                      placeholder="Título de la característica"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      value={featureFormData.description}
                      onChange={handleFeatureInputChange}
                      placeholder="Descripción de la característica"
                      rows={3}
                    />
                  </div>
                </div>
                <DialogFooter>
                  {editingFeature && (
                    <Button 
                      variant="destructive" 
                      onClick={() => {
                        handleDeleteFeature(editingFeature);
                      }}
                    >
                      Eliminar
                    </Button>
                  )}
                  <Button type="button" onClick={handleSaveFeature}>
                    Guardar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Icono</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature) => (
                  <TableRow key={feature.id}>
                    <TableCell>
                      <div className="p-2 bg-coastal-600 text-white rounded-md inline-flex">
                        {renderIcon(feature.icon)}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{feature.title}</TableCell>
                    <TableCell className="max-w-md">{feature.description}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleEditFeature(feature)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Editar Característica</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid gap-2">
                                <Label htmlFor="edit-icon">Icono</Label>
                                <select
                                  id="edit-icon"
                                  className="w-full p-2 border rounded"
                                  value={featureFormData.icon}
                                  onChange={handleFeatureIconChange}
                                >
                                  {availableIcons.map(icon => (
                                    <option key={icon.id} value={icon.id}>
                                      {icon.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              
                              <div className="grid gap-2">
                                <Label htmlFor="edit-title">Título</Label>
                                <Input
                                  id="title"
                                  value={featureFormData.title}
                                  onChange={handleFeatureInputChange}
                                />
                              </div>
                              
                              <div className="grid gap-2">
                                <Label htmlFor="edit-description">Descripción</Label>
                                <Textarea
                                  id="description"
                                  value={featureFormData.description}
                                  onChange={handleFeatureInputChange}
                                  rows={3}
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="destructive" onClick={() => handleDeleteFeature(feature)}>
                                Eliminar
                              </Button>
                              <Button type="button" onClick={handleSaveFeature}>
                                Guardar Cambios
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleDeleteFeature(feature)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {features.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                      No hay características. Añada una con el botón "Añadir Característica".
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Diálogo de confirmación para eliminar miembro */}
      <AlertDialog open={showDeleteMemberDialog} onOpenChange={setShowDeleteMemberDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. ¿Estás seguro de que quieres eliminar a este miembro del equipo?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteMember} className="bg-red-600 hover:bg-red-700">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Diálogo de confirmación para eliminar característica */}
      <AlertDialog open={showDeleteFeatureDialog} onOpenChange={setShowDeleteFeatureDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. ¿Estás seguro de que quieres eliminar esta característica?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteFeature} className="bg-red-600 hover:bg-red-700">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DashboardAbout;
