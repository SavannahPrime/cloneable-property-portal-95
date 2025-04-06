
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-coastal-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-coastal-600 hover:bg-coastal-700">
              <Home className="mr-2 h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
