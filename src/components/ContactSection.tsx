
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question about a property or want to schedule a viewing? Get in touch with our expert team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-coastal-600 rounded-full p-3">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-coastal-600">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-coastal-600 rounded-full p-3">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a href="mailto:info@globalcostainvest.com" className="text-gray-600 hover:text-coastal-600">info@globalcostainvest.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-coastal-600 rounded-full p-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Office</h4>
                  <address className="text-gray-600 not-italic">
                    123 Coastal Avenue<br />
                    Malibu, CA 90265
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-medium mb-4">Office Hours</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                  Your Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                  Email Address
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                  Phone Number
                </label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in learning more about..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-coastal-600 hover:bg-coastal-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
