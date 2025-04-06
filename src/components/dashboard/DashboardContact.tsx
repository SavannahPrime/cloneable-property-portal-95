
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, MapPin, Phone, Mail, Save, Eye, Trash2, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DashboardContact = () => {
  const { toast } = useToast();
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingHours, setIsEditingHours] = useState(false);

  const handleSaveChanges = () => {
    toast({
      title: "Cambios guardados",
      description: "La información de contacto ha sido actualizada correctamente.",
    });
    setIsEditingContact(false);
  };

  const handleSaveHours = () => {
    toast({
      title: "Horario actualizado",
      description: "El horario de oficina ha sido actualizado correctamente.",
    });
    setIsEditingHours(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gestión de Contacto</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {/* Información de Contacto */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>
                Editar la información de contacto principal
              </CardDescription>
            </div>
            <Button 
              variant={isEditingContact ? "ghost" : "outline"} 
              onClick={() => setIsEditingContact(!isEditingContact)}
            >
              {isEditingContact ? "Cancelar" : <><Edit className="h-4 w-4 mr-2" /> Editar</>}
            </Button>
          </CardHeader>
          <CardContent>
            {isEditingContact ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contactTitle">Título</Label>
                  <Input 
                    id="contactTitle" 
                    defaultValue="Póngase en Contacto" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contactSubtitle">Descripción</Label>
                  <Textarea 
                    id="contactSubtitle" 
                    rows={3}
                    defaultValue="Estamos aquí para ayudarle con todas sus necesidades inmobiliarias. No dude en contactarnos para cualquier consulta."
                    className="mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="contactAddress">Dirección</Label>
                    <Input 
                      id="contactAddress" 
                      defaultValue="Avenida del Mar 123, Marbella, España" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactPhone">Teléfono</Label>
                    <Input 
                      id="contactPhone" 
                      defaultValue="+34 951 123 456" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input 
                      id="contactEmail" 
                      defaultValue="info@globalcostainvest.com" 
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="contactMapEmbed">Código de Mapa Embebido</Label>
                  <Textarea 
                    id="contactMapEmbed" 
                    rows={4}
                    defaultValue="<iframe src='https://www.google.com/maps/embed?...' width='100%' height='450' style='border:0;' allowfullscreen='' loading='lazy'></iframe>"
                    className="mt-1 font-mono text-sm"
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
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Información Actual</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-coastal-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Dirección:</p>
                        <p className="text-gray-600">Avenida del Mar 123, Marbella, España</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-coastal-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Teléfono:</p>
                        <p className="text-gray-600">+34 951 123 456</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-coastal-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Email:</p>
                        <p className="text-gray-600">info@globalcostainvest.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Vista Previa del Mapa</h3>
                  <div className="border border-gray-200 rounded-md h-48 bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">Vista previa del mapa</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Horario de Oficina */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Horario de Oficina</CardTitle>
              <CardDescription>
                Gestiona los horarios de atención al cliente
              </CardDescription>
            </div>
            <Button 
              variant={isEditingHours ? "ghost" : "outline"} 
              onClick={() => setIsEditingHours(!isEditingHours)}
            >
              {isEditingHours ? "Cancelar" : <><Edit className="h-4 w-4 mr-2" /> Editar</>}
            </Button>
          </CardHeader>
          <CardContent>
            {isEditingHours ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mondayFridayLabel">Etiqueta Lunes - Viernes</Label>
                    <Input 
                      id="mondayFridayLabel" 
                      defaultValue="Lunes - Viernes" 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mondayFridayHours">Horario Lunes - Viernes</Label>
                    <Input 
                      id="mondayFridayHours" 
                      defaultValue="9:00 AM - 6:00 PM" 
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="saturdayLabel">Etiqueta Sábado</Label>
                    <Input 
                      id="saturdayLabel" 
                      defaultValue="Sábado" 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="saturdayHours">Horario Sábado</Label>
                    <Input 
                      id="saturdayHours" 
                      defaultValue="10:00 AM - 4:00 PM" 
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sundayLabel">Etiqueta Domingo</Label>
                    <Input 
                      id="sundayLabel" 
                      defaultValue="Domingo" 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sundayHours">Horario Domingo</Label>
                    <Input 
                      id="sundayHours" 
                      defaultValue="Cerrado" 
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={handleSaveHours}>
                    <Save className="h-4 w-4 mr-2" />
                    Guardar Horarios
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-start space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-coastal-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Horario Actual:</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Mensajes de contacto */}
        <Card>
          <CardHeader>
            <CardTitle>Mensajes Recibidos</CardTitle>
            <CardDescription>
              Consultas y mensajes recibidos a través del formulario de contacto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Asunto</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">María López</TableCell>
                  <TableCell>maria.lopez@ejemplo.com</TableCell>
                  <TableCell>Consulta sobre Villa Moderna</TableCell>
                  <TableCell>12/04/2023</TableCell>
                  <TableCell>
                    <Badge>Nuevo</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Juan García</TableCell>
                  <TableCell>juan.garcia@ejemplo.com</TableCell>
                  <TableCell>Interesado en propiedades en Miami</TableCell>
                  <TableCell>10/04/2023</TableCell>
                  <TableCell>
                    <Badge variant="outline">Respondido</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ana Martínez</TableCell>
                  <TableCell>ana.martinez@ejemplo.com</TableCell>
                  <TableCell>Solicitud de información</TableCell>
                  <TableCell>05/04/2023</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Archivado</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
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

export default DashboardContact;
