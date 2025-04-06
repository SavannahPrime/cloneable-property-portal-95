
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define property type interface
interface PropertyType {
  id: string;
  title: string;
  count: number;
  image: string;
}

// Initial property types data
const defaultPropertyTypes: PropertyType[] = [
  {
    id: 'beachfront',
    title: 'Beachfront Properties',
    count: 24,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'luxury',
    title: 'Luxury Villas',
    count: 18,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'waterfront',
    title: 'Waterfront Estates',
    count: 32,
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'condos',
    title: 'Luxury Condos',
    count: 41,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const PropertyTypes = () => {
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  
  useEffect(() => {
    // Try to load property types from localStorage
    const savedTypes = localStorage.getItem('propertyTypes');
    if (savedTypes) {
      try {
        setPropertyTypes(JSON.parse(savedTypes));
      } catch (error) {
        console.error('Error loading property types:', error);
        setPropertyTypes(defaultPropertyTypes);
      }
    } else {
      setPropertyTypes(defaultPropertyTypes);
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Property Types</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From luxurious beachfront villas to modern waterfront apartments, find the perfect coastal property that fits your lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type) => (
            <Link 
              key={type.id}
              to={`/properties?type=${type.id}`}
              className="group"
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${type.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">{type.title}</h3>
                  <p className="text-white/80">{type.count} properties</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
