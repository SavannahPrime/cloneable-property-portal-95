
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-16 bg-coastal-600">
          <div className="absolute inset-0 bg-black/30">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80)'
              }}
            ></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contáctanos</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ponte en contacto con nuestro equipo de expertos para todas tus necesidades de propiedades costeras.
            </p>
          </div>
        </div>
        
        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative">
              {/* Office Location */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-coastal-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-coastal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ubicación de la Oficina</h3>
                <address className="text-gray-600 not-italic">
                  123 Avenida Costera<br />
                  Malibu, CA 90265
                </address>
              </div>
              
              {/* Email Us */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-coastal-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-coastal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Envíanos un Email</h3>
                <a href="mailto:info@costamoderna.com" className="text-gray-600">info@costamoderna.com</a>
                <a href="mailto:soporte@costamoderna.com" className="text-gray-600">soporte@costamoderna.com</a>
              </div>
              
              {/* Call Us */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-coastal-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-coastal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Llámanos</h3>
                <a href="tel:+12345678900" className="text-gray-600">+1 (234) 567-8900</a>
                <a href="tel:+12345678901" className="text-gray-600">+1 (234) 567-8901</a>
              </div>
              
              {/* Working Hours */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-coastal-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-coastal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Horario de Atención</h3>
                <p className="text-gray-600">Lunes - Viernes: 9AM - 6PM</p>
                <p className="text-gray-600">Sábado: 10AM - 4PM</p>
                <p className="text-gray-600">Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visita Nuestra Oficina</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nuestra oficina está ubicada convenientemente en el corazón de Malibu. Acércate para una consulta con nuestro equipo experto.
              </p>
            </div>
            
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                title="Ubicación de la Oficina"
                className="w-full h-full"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52894.15263848123!2d-118.8376501727283!3d34.02554215263053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e81da9f908d63f%3A0x93b72d71b2ea8c5a!2sMalibu%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
