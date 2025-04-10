
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/9108d982-d58c-4d6d-b2b0-4e4a74e90404.png" 
                alt="Global Costa Invest" 
                className="h-12"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-coastal-600 font-medium">Home</Link>
            <Link to="/properties" className="text-gray-700 hover:text-coastal-600 font-medium">Properties</Link>
            <Link to="/about" className="text-gray-700 hover:text-coastal-600 font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-coastal-600 font-medium">Contact</Link>
            <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-coastal-600 font-medium">
              <LayoutDashboard className="h-4 w-4 mr-1" />
              Admin
            </Link>
            <Button variant="default" className="bg-coastal-600 hover:bg-coastal-700 text-white">
              Schedule a Viewing
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-coastal-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3 py-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-coastal-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/properties" 
                className="text-gray-700 hover:text-coastal-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-coastal-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-coastal-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center text-gray-700 hover:text-coastal-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4 mr-1" />
                Admin
              </Link>
              <Button 
                variant="default" 
                className="bg-coastal-600 hover:bg-coastal-700 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Viewing
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
