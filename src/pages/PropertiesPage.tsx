
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Search, ArrowUpDown, Grid3X3, LayoutList } from 'lucide-react';

// Sample properties data
const properties = [
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
    title: 'Luxury Waterfront Apartment',
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
    featured: false,
    forSale: false,
    type: 'House'
  },
  {
    id: '4',
    title: 'Oceanview Penthouse',
    location: 'La Jolla, California',
    price: 3200000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: false,
    forSale: true,
    type: 'Penthouse'
  },
  {
    id: '5',
    title: 'Beachside Cottage',
    location: 'Santa Monica, California',
    price: 1250000,
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: false,
    forSale: true,
    type: 'Cottage'
  },
  {
    id: '6',
    title: 'Marina View Condo',
    location: 'San Diego, California',
    price: 895000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    featured: false,
    forSale: true,
    type: 'Condo'
  }
];

const PropertiesPage = () => {
  const [gridView, setGridView] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [filters, setFilters] = useState({
    type: '',
    status: '',
    bedrooms: '',
    bathrooms: ''
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

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
                backgroundImage: 'url(https://images.unsplash.com/photo-1628744448840-b38ffbe2a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
              }}
            ></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Properties</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our collection of premium coastal properties in the most desirable locations.
            </p>
          </div>
        </div>
        
        {/* Properties Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Find Your Perfect Property</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                  >
                    <option value="">All Types</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Cottage">Cottage</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    name="status"
                    value={filters.status}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                  >
                    <option value="">All Status</option>
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                  <select
                    name="bedrooms"
                    value={filters.bedrooms}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                  <select
                    name="bathrooms"
                    value={filters.bathrooms}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <Slider 
                  defaultValue={priceRange}
                  max={5000000}
                  step={50000}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-coastal-600 hover:bg-coastal-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
            
            {/* Results Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <p className="text-gray-600 mb-4 md:mb-0">
                Showing <span className="font-medium">{properties.length}</span> properties
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="text-gray-600" onClick={() => setGridView(true)}>
                    <Grid3X3 className={`h-5 w-5 ${gridView ? 'text-coastal-600' : ''}`} />
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-600" onClick={() => setGridView(false)}>
                    <LayoutList className={`h-5 w-5 ${!gridView ? 'text-coastal-600' : ''}`} />
                  </Button>
                </div>
                
                <select className="p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500">
                  <option value="default">Default Sorting</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
            
            {/* Properties Grid/List */}
            <div className={gridView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {properties.map((property) => (
                <div key={property.id} className={!gridView ? "bg-white shadow rounded-lg overflow-hidden" : ""}>
                  {!gridView ? (
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <div className="h-64 md:h-full">
                          <img 
                            src={property.image} 
                            alt={property.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                        <div className="flex items-center text-gray-600 mb-3">
                          <Search className="h-4 w-4 mr-1" />
                          <span>{property.location}</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-b border-gray-100 py-3 mb-3">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600">{property.bedrooms} Beds</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600">{property.bathrooms} Baths</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600">{property.area} sq ft</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-coastal-600 font-bold text-xl">${property.price.toLocaleString()}</p>
                          <Button className="bg-coastal-600 hover:bg-coastal-700">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <PropertyCard {...property} />
                  )}
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </a>
                <a href="#" className="py-2 px-4 border border-coastal-600 bg-coastal-600 text-sm font-medium text-white">
                  1
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </a>
              </nav>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertiesPage;
