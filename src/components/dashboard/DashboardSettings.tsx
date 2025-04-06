
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Save } from 'lucide-react';

const DashboardSettings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");

  const handleSaveChanges = () => {
    toast({
      title: "Configuración guardada",
      description: "Cambios guardados correctamente.",
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Configuración General</h1>
      
      <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="social">Redes Sociales</TabsTrigger>
          <TabsTrigger value="advanced">Avanzado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Información del Sitio</CardTitle>
              <CardDescription>
                Configurar la información básica de su sitio web
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName">Nombre del Sitio</Label>
                <Input id="siteName" defaultValue="Global Costa Invest" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="siteTagline">Eslogan</Label>
                <Input id="siteTagline" defaultValue="Su socio en propiedades costeras de lujo" className="mt-1" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="siteEmail">Email de Contacto</Label>
                  <Input id="siteEmail" type="email" defaultValue="info@globalcostainvest.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="sitePhone">Teléfono de Contacto</Label>
                  <Input id="sitePhone" defaultValue="+34 951 123 456" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="siteLogo">Logo del Sitio</Label>
                <div className="mt-1 flex items-center gap-4">
                  <div className="h-16 w-32 bg-gray-100 flex items-center justify-center rounded border">
                    <p className="text-gray-500 text-sm">Vista previa del logo</p>
                  </div>
                  <Button variant="outline">Cambiar Logo</Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="siteFavicon">Favicon</Label>
                <div className="mt-1 flex items-center gap-4">
                  <div className="h-8 w-8 bg-gray-100 flex items-center justify-center rounded border">
                    <p className="text-gray-500 text-xs">Favicon</p>
                  </div>
                  <Button variant="outline">Cambiar Favicon</Button>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveChanges}>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>Configuración SEO</CardTitle>
              <CardDescription>
                Optimizar el sitio para los motores de búsqueda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="metaTitle">Título Meta por Defecto</Label>
                <Input id="metaTitle" defaultValue="Global Costa Invest | Premium Coastal Real Estate" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="metaDescription">Descripción Meta por Defecto</Label>
                <Input id="metaDescription" defaultValue="Find your perfect coastal property with Global Costa Invest. Luxury waterfront homes, beachside villas, and exclusive seaside properties." className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="ogImage">Imagen para Redes Sociales</Label>
                <div className="mt-1 flex items-center gap-4">
                  <div className="h-24 w-48 bg-gray-100 flex items-center justify-center rounded border">
                    <p className="text-gray-500 text-sm">Vista previa de imagen</p>
                  </div>
                  <Button variant="outline">Cambiar Imagen</Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Recomendado: 1200x630 pixeles</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <Switch id="sitemapEnabled" defaultChecked />
                  <Label htmlFor="sitemapEnabled">Generar Sitemap Automáticamente</Label>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <Switch id="robotsEnabled" defaultChecked />
                  <Label htmlFor="robotsEnabled">Permitir Indexación por Motores de Búsqueda</Label>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveChanges}>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Redes Sociales</CardTitle>
              <CardDescription>
                Configurar los enlaces a sus perfiles sociales
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="facebook">Facebook</Label>
                <Input id="facebook" defaultValue="https://facebook.com/globalcostainvest" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <Input id="instagram" defaultValue="https://instagram.com/globalcostainvest" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="twitter">Twitter / X</Label>
                <Input id="twitter" defaultValue="https://twitter.com/globalcostainvest" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input id="linkedin" defaultValue="https://linkedin.com/company/globalcostainvest" className="mt-1" />
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveChanges}>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Configuración Avanzada</CardTitle>
              <CardDescription>
                Configuraciones adicionales para usuarios avanzados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="customCss">CSS Personalizado</Label>
                <Textarea 
                  id="customCss" 
                  className="mt-1 font-mono text-sm h-32"
                  placeholder="/* Añade tu CSS personalizado aquí */"
                />
              </div>
              
              <div>
                <Label htmlFor="headerScripts">Scripts en Header</Label>
                <Textarea 
                  id="headerScripts" 
                  className="mt-1 font-mono text-sm h-32"
                  placeholder="<!-- Scripts para colocar en el header -->"
                />
                <p className="text-xs text-gray-500 mt-1">Estos scripts se cargarán en el &lt;head&gt; del sitio.</p>
              </div>
              
              <div>
                <Label htmlFor="footerScripts">Scripts en Footer</Label>
                <Textarea 
                  id="footerScripts" 
                  className="mt-1 font-mono text-sm h-32"
                  placeholder="<!-- Scripts para colocar en el footer -->"
                />
                <p className="text-xs text-gray-500 mt-1">Estos scripts se cargarán justo antes del cierre de &lt;body&gt;.</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <Switch id="maintenanceMode" />
                  <Label htmlFor="maintenanceMode">Activar Modo Mantenimiento</Label>
                </div>
                <p className="text-xs text-gray-500 ml-7 mt-1">Al activar, el sitio mostrará una página de mantenimiento a los visitantes.</p>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveChanges}>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardSettings;
