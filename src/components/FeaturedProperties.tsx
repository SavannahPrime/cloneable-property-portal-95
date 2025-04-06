
import PropertyCard from './PropertyCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const featuredProperties = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    location: 'Malibu, California',
    price: 2950000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    featured: true,
    forSale: true,
    type: 'Villa'
  },
  {
    id: '2',
    title: 'Luxury Seafront Apartment',
    location: 'Miami Beach, Florida',
    price: 1875000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: true,
    forSale: true,
    type: 'Apartment'
  },
  {
    id: '3',
    title: 'Coastal Retreat with Pool',
    location: 'Naples, Florida',
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    featured: true,
    forSale: false,
    type: 'House'
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our selection of premium coastal properties in the most sought-after locations.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="text-coastal-600 border-coastal-600 hover:bg-coastal-50 mt-4 md:mt-0"
          >
            View All Properties
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard 
              key={property.id}
              {...property}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
