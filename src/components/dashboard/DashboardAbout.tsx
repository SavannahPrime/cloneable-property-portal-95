
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, Users, Edit, Trash2, Plus, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DashboardAbout = () => {
  const { toast } = useToast();
  const [isEditingMainContent, setIsEditingMainContent] = useState(false);

  const handleSaveChanges = () => {
    toast({
      title: "Cambios guardados",
      description: "Los cambios en la sección 'Nosotros' han sido guardados correctamente.",
    });
    setIsEditingMainContent(false);
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
                  <Label htmlFor="aboutTitle">Título</Label>
                  <Input 
                    id="aboutTitle" 
                    defaultValue="Sobre Global Costa Invest" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="aboutSubtitle">Subtítulo</Label>
                  <Input 
                    id="aboutSubtitle" 
                    defaultValue="Su socio de confianza para propiedades costeras premium desde 2005"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="aboutDescription">Descripción</Label>
                  <Textarea 
                    id="aboutDescription" 
                    rows={6}
                    defaultValue="Global Costa Invest se especializa en propiedades costeras exclusivas ubicadas en los destinos más atractivos del mundo. Nuestro equipo de expertos inmobiliarios está dedicado a encontrar la propiedad ideal para cada cliente, ya sea una villa de lujo frente al mar, un apartamento con vistas al océano o una casa de playa privada."
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="aboutMission">Nuestra Misión</Label>
                  <Textarea 
                    id="aboutMission" 
                    rows={4}
                    defaultValue="Nuestra misión es proporcionar un servicio excepcional y personalizado, guiando a nuestros clientes a través del proceso de compra o venta de propiedades costeras con transparencia, integridad y dedicación. Nos esforzamos por superar las expectativas y crear relaciones duraderas basadas en la confianza y la satisfacción."
                    className="mt-1"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveChanges}>
                    <Save className="h-4 w-4 mr-2" />
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Título</h3>
                  <p>Sobre Global Costa Invest</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Subtítulo</h3>
                  <p>Su socio de confianza para propiedades costeras premium desde 2005</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Descripción</h3>
                  <p>Global Costa Invest se especializa en propiedades costeras exclusivas ubicadas en los destinos más atractivos del mundo. Nuestro equipo de expertos inmobiliarios está dedicado a encontrar la propiedad ideal para cada cliente, ya sea una villa de lujo frente al mar, un apartamento con vistas al océano o una casa de playa privada.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Nuestra Misión</h3>
                  <p>Nuestra misión es proporcionar un servicio excepcional y personalizado, guiando a nuestros clientes a través del proceso de compra o venta de propiedades costeras con transparencia, integridad y dedicación. Nos esforzamos por superar las expectativas y crear relaciones duraderas basadas en la confianza y la satisfacción.</p>
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
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Añadir Miembro
            </Button>
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
                <TableRow>
                  <TableCell>
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  </TableCell>
                  <TableCell className="font-medium">Carlos Rodríguez</TableCell>
                  <TableCell>CEO y Fundador</TableCell>
                  <TableCell className="max-w-xs truncate">Con más de 20 años de experiencia en el sector inmobiliario...</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  </TableCell>
                  <TableCell className="font-medium">Elena González</TableCell>
                  <TableCell>Directora de Ventas</TableCell>
                  <TableCell className="max-w-xs truncate">Especializada en propiedades de lujo en la costa mediterránea...</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
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
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Añadir Característica
            </Button>
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
                <TableRow>
                  <TableCell>
                    <div className="p-2 bg-coastal-600 text-white rounded-md inline-flex">
                      <Award className="h-5 w-5" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">Ubicaciones Premium</TableCell>
                  <TableCell className="max-w-md">Acceso a propiedades exclusivas en los destinos costeros más deseados de todo el mundo.</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="p-2 bg-coastal-600 text-white rounded-md inline-flex">
                      <Users className="h-5 w-5" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">Agentes Expertos</TableCell>
                  <TableCell className="max-w-md">Profesionales inmobiliarios con experiencia especializados en propiedades costeras premium.</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardAbout;
