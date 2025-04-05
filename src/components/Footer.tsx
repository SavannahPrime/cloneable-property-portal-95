
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
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-coastal-400">Modern Coast</span>
              <span className="text-2xl ml-1 font-light text-gray-400">Properties</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Premium coastal real estate for discerning buyers. Find your perfect waterfront home with our expert team.
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/properties?type=beachfront" className="text-gray-400 hover:text-white">Beachfront</Link>
              </li>
              <li>
                <Link to="/properties?type=luxury" className="text-gray-400 hover:text-white">Luxury Villas</Link>
              </li>
              <li>
                <Link to="/properties?type=waterfront" className="text-gray-400 hover:text-white">Waterfront</Link>
              </li>
              <li>
                <Link to="/properties?type=condos" className="text-gray-400 hover:text-white">Condos</Link>
              </li>
              <li>
                <Link to="/properties?type=investment" className="text-gray-400 hover:text-white">Investment Properties</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest property listings and market updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
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
            &copy; {new Date().getFullYear()} Modern Coast Properties. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
