
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Eye, Star } from "lucide-react";

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Panel de Control</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Propiedades Totales
            </CardTitle>
            <Building className="h-4 w-4 text-coastal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">
              +5 este mes
            </p>
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
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">
              +12% respecto al mes anterior
            </p>
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
            <div className="text-2xl font-bold">37</div>
            <p className="text-xs text-muted-foreground">
              +8 esta semana
            </p>
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
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-muted-foreground">
              23 nuevas valoraciones
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Propiedades Más Visitadas</CardTitle>
            <CardDescription>
              Las propiedades con más interacciones este mes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-gray-200 mr-3"></div>
                  <span>Villa Moderna Frente a la Playa</span>
                </div>
                <span className="text-coastal-600 font-medium">386 visitas</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-gray-200 mr-3"></div>
                  <span>Apartamento de Lujo Frente al Mar</span>
                </div>
                <span className="text-coastal-600 font-medium">249 visitas</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-gray-200 mr-3"></div>
                  <span>Refugio Costero con Piscina</span>
                </div>
                <span className="text-coastal-600 font-medium">194 visitas</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>
              Últimas actualizaciones de la plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm">Nueva propiedad añadida: Villa Marina</p>
                  <p className="text-xs text-gray-500">Hace 2 horas</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm">Actualización de precio: Apartamento Seaside</p>
                  <p className="text-xs text-gray-500">Hace 6 horas</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm">Nueva consulta de propiedad</p>
                  <p className="text-xs text-gray-500">Hace 1 día</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm">Actualización de la sección Nosotros</p>
                  <p className="text-xs text-gray-500">Hace 2 días</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
