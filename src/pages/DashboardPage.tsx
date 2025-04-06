
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
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 bg-white shadow-md rounded-lg p-6 h-fit">
            <div className="flex items-center gap-3 mb-8">
              <LayoutDashboard className="h-6 w-6 text-coastal-600" />
              <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
            </div>
            
            <nav className="space-y-2">
              <Button 
                variant={activeTab === "home" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("home")}
              >
                <Home className="h-5 w-5 mr-3" />
                Home
              </Button>
              
              <Button 
                variant={activeTab === "properties" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("properties")}
              >
                <Building className="h-5 w-5 mr-3" />
                Properties
              </Button>
              
              <Button 
                variant={activeTab === "about" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("about")}
              >
                <Users className="h-5 w-5 mr-3" />
                About Us
              </Button>
              
              <Button 
                variant={activeTab === "contact" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("contact")}
              >
                <Phone className="h-5 w-5 mr-3" />
                Contact
              </Button>
              
              <Button 
                variant={activeTab === "footer" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("footer")}
              >
                <FileText className="h-5 w-5 mr-3" />
                Footer
              </Button>
              
              <Button 
                variant={activeTab === "settings" ? "default" : "ghost"} 
                className="w-full justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Button>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </Button>
              </div>
            </nav>
          </aside>
          
          {/* Content */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            {activeTab === "home" && <DashboardHome />}
            {activeTab === "properties" && <DashboardProperties />}
            {activeTab === "about" && <DashboardAbout />}
            {activeTab === "contact" && <DashboardContact />}
            {activeTab === "footer" && <DashboardFooter />}
            {activeTab === "settings" && <DashboardSettings />}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
