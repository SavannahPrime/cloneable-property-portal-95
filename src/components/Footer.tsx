
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    
    toast({
      title: "¡Suscripción exitosa!",
      description: "Gracias por suscribirte a nuestro boletín.",
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/9108d982-d58c-4d6d-b2b0-4e4a74e90404.png" 
                alt="Global Costa Invest" 
                className="h-12"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Propiedades costeras premium para compradores exigentes. Encuentra tu hogar frente al mar perfecto con nuestro equipo de expertos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-coastal-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-coastal-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-coastal-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-coastal-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Inicio</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white">Propiedades</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">Nosotros</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contacto</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tipos de Propiedades</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/properties?type=beachfront" className="text-gray-400 hover:text-white">Frente a la Playa</Link>
              </li>
              <li>
                <Link to="/properties?type=luxury" className="text-gray-400 hover:text-white">Villas de Lujo</Link>
              </li>
              <li>
                <Link to="/properties?type=waterfront" className="text-gray-400 hover:text-white">Frente al Mar</Link>
              </li>
              <li>
                <Link to="/properties?type=condos" className="text-gray-400 hover:text-white">Condominios</Link>
              </li>
              <li>
                <Link to="/properties?type=investment" className="text-gray-400 hover:text-white">Propiedades de Inversión</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Boletín</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete a nuestro boletín para recibir las últimas propiedades y actualizaciones del mercado.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 focus:border-coastal-500 text-white"
                />
                <Button type="submit" className="ml-2 bg-coastal-600 hover:bg-coastal-700">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Global Costa Invest. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white">Política de Privacidad</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Términos de Servicio</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white">Mapa del Sitio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
