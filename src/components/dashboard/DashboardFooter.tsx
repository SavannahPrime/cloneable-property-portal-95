
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Facebook, Instagram, Twitter, Youtube, Mail, Save } from 'lucide-react';

const DashboardFooter = () => {
  const { toast } = useToast();
  const [generalInfo, setGeneralInfo] = useState({
    description: 'Propiedades costeras premium para compradores exigentes. Encuentra tu hogar frente al mar perfecto con nuestro equipo de expertos.',
    email: 'info@globalcostainvest.com',
    phone: '+34 123 456 789'
  });
  
  const [socialLinks, setSocialLinks] = useState({
    facebook: 'https://facebook.com/globalcostainvest',
    instagram: 'https://instagram.com/globalcostainvest',
    twitter: 'https://twitter.com/globalcostainvest',
    youtube: 'https://youtube.com/globalcostainvest'
  });
  
  const [legalPages, setLegalPages] = useState({
    privacyPolicy: '',
    termsOfService: ''
  });
  
  const handleGeneralInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSocialLinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLegalPagesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLegalPages(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSave = () => {
    toast({
      title: "Guardado con éxito",
      description: "Los cambios en el pie de página han sido guardados.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestión del Pie de Página</h2>
        <Button onClick={handleSave} className="bg-coastal-600 hover:bg-coastal-700">
          <Save className="h-4 w-4 mr-2" />
          Guardar Cambios
        </Button>
      </div>
      
      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">Información General</TabsTrigger>
          <TabsTrigger value="social">Redes Sociales</TabsTrigger>
          <TabsTrigger value="legal">Páginas Legales</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Información General</CardTitle>
              <CardDescription>
                Actualiza la información general que aparece en el pie de página de tu sitio web.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Descripción de la Empresa</Label>
                <Textarea 
                  id="description" 
                  name="description"
                  value={generalInfo.description}
                  onChange={handleGeneralInfoChange}
                  rows={4}
                  placeholder="Breve descripción de tu empresa..."
                  className="resize-none"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input 
                    id="email" 
                    name="email"
                    value={generalInfo.email}
                    onChange={handleGeneralInfoChange}
                    placeholder="Email de contacto"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={generalInfo.phone}
                    onChange={handleGeneralInfoChange}
                    placeholder="Número de teléfono"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Redes Sociales</CardTitle>
              <CardDescription>
                Gestiona los enlaces a tus perfiles en redes sociales.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <Input 
                    name="facebook"
                    value={socialLinks.facebook}
                    onChange={handleSocialLinksChange}
                    placeholder="URL de Facebook"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <Input 
                    name="instagram"
                    value={socialLinks.instagram}
                    onChange={handleSocialLinksChange}
                    placeholder="URL de Instagram"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <Twitter className="h-5 w-5 text-blue-400" />
                  <Input 
                    name="twitter"
                    value={socialLinks.twitter}
                    onChange={handleSocialLinksChange}
                    placeholder="URL de Twitter"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <Youtube className="h-5 w-5 text-red-600" />
                  <Input 
                    name="youtube"
                    value={socialLinks.youtube}
                    onChange={handleSocialLinksChange}
                    placeholder="URL de YouTube"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="legal">
          <Card>
            <CardHeader>
              <CardTitle>Páginas Legales</CardTitle>
              <CardDescription>
                Gestiona el contenido de tus páginas legales mostradas en el pie de página.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="privacyPolicy">Política de Privacidad</Label>
                <Textarea 
                  id="privacyPolicy" 
                  name="privacyPolicy"
                  value={legalPages.privacyPolicy}
                  onChange={handleLegalPagesChange}
                  rows={10}
                  placeholder="Escribe aquí tu política de privacidad..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="termsOfService">Términos de Servicio</Label>
                <Textarea 
                  id="termsOfService" 
                  name="termsOfService"
                  value={legalPages.termsOfService}
                  onChange={handleLegalPagesChange}
                  rows={10}
                  placeholder="Escribe aquí tus términos de servicio..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardFooter;
