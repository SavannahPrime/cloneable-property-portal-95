
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Home, Building, Users, Phone, Settings, LogOut, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardHome from '@/components/dashboard/DashboardHome';
import DashboardProperties from '@/components/dashboard/DashboardProperties';
import DashboardAbout from '@/components/dashboard/DashboardAbout';
import DashboardContact from '@/components/dashboard/DashboardContact';
import DashboardSettings from '@/components/dashboard/DashboardSettings';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 bg-white shadow-md rounded-lg p-6 h-fit">
            <div className="flex items-center gap-3 mb-8">
              <LayoutDashboard className="h-6 w-6 text-coastal-600" />
              <h2 className="text-xl font-bold text-gray-900">Panel Admin</h2>
            </div>
            
            <nav className="space-y-2">
              <Button 
                variant={activeTab === "inicio" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("inicio")}
              >
                <Home className="h-5 w-5 mr-3" />
                Inicio
              </Button>
              
              <Button 
                variant={activeTab === "propiedades" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("propiedades")}
              >
                <Building className="h-5 w-5 mr-3" />
                Propiedades
              </Button>
              
              <Button 
                variant={activeTab === "nosotros" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("nosotros")}
              >
                <Users className="h-5 w-5 mr-3" />
                Nosotros
              </Button>
              
              <Button 
                variant={activeTab === "contacto" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("contacto")}
              >
                <Phone className="h-5 w-5 mr-3" />
                Contacto
              </Button>
              
              <Button 
                variant={activeTab === "footer" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("footer")}
              >
                <FileText className="h-5 w-5 mr-3" />
                Pie de Página
              </Button>
              
              <Button 
                variant={activeTab === "ajustes" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("ajustes")}
              >
                <Settings className="h-5 w-5 mr-3" />
                Ajustes
              </Button>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Cerrar Sesión
                </Button>
              </div>
            </nav>
          </aside>
          
          {/* Content */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            {activeTab === "inicio" && <DashboardHome />}
            {activeTab === "propiedades" && <DashboardProperties />}
            {activeTab === "nosotros" && <DashboardAbout />}
            {activeTab === "contacto" && <DashboardContact />}
            {activeTab === "footer" && <DashboardFooter />}
            {activeTab === "ajustes" && <DashboardSettings />}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
