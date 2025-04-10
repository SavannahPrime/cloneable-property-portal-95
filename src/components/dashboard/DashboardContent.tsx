
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHome from "./DashboardHome";
import DashboardProperties from "./DashboardProperties";
import DashboardAbout from "./DashboardAbout";
import DashboardContact from "./DashboardContact";
import DashboardFooter from "./DashboardFooter";
import DashboardSettings from "./DashboardSettings";
import DashboardPropertyTypes from "./DashboardPropertyTypes";
import DashboardFeatures from "./DashboardFeatures";
import DashboardTestimonials from "./DashboardTestimonials";

const DashboardContent = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  return (
    <div className="p-4 md:p-8">
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 flex flex-wrap">
          <TabsTrigger value="general" className="mr-2 mb-2">Dashboard</TabsTrigger>
          <TabsTrigger value="properties" className="mr-2 mb-2">Properties</TabsTrigger>
          <TabsTrigger value="propertyTypes" className="mr-2 mb-2">Property Types</TabsTrigger>
          <TabsTrigger value="features" className="mr-2 mb-2">Features</TabsTrigger>
          <TabsTrigger value="testimonials" className="mr-2 mb-2">Testimonials</TabsTrigger>
          <TabsTrigger value="about" className="mr-2 mb-2">About Us</TabsTrigger>
          <TabsTrigger value="contact" className="mr-2 mb-2">Contact</TabsTrigger>
          <TabsTrigger value="footer" className="mr-2 mb-2">Footer</TabsTrigger>
          <TabsTrigger value="settings" className="mr-2 mb-2">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <DashboardHome />
        </TabsContent>
        
        <TabsContent value="properties">
          <DashboardProperties />
        </TabsContent>

        <TabsContent value="propertyTypes">
          <DashboardPropertyTypes />
        </TabsContent>
        
        <TabsContent value="features">
          <DashboardFeatures />
        </TabsContent>
        
        <TabsContent value="testimonials">
          <DashboardTestimonials />
        </TabsContent>
        
        <TabsContent value="about">
          <DashboardAbout />
        </TabsContent>
        
        <TabsContent value="contact">
          <DashboardContact />
        </TabsContent>
        
        <TabsContent value="footer">
          <DashboardFooter />
        </TabsContent>
        
        <TabsContent value="settings">
          <DashboardSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardContent;
