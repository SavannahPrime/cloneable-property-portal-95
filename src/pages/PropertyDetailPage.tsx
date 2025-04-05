
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Share, MapPin, Bed, Bath, SquareFeet, Car, Camera, Grid, CalendarClock, Info } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import PropertyCard from '@/components/PropertyCard';

// Sample property data
const propertyData = {
  id: '1',
  title: 'Modern Beachfront Villa',
  location: 'Malibu, California',
  price: 2950000,
  bedrooms: 4,
  bathrooms: 3.5,
  area: 3200,
  garages: 2,
  yearBuilt: 2018,
  images: [
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c4b98681f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ],
  featured: true,
  forSale: true,
  type: 'Villa',
  description: 'This stunning modern beachfront villa offers panoramic ocean views from every room. Featuring spacious living areas with floor-to-ceiling windows, a gourmet kitchen with high-end appliances, and a master suite with a private terrace. The outdoor space includes an infinity pool, landscaped gardens, and direct beach access. Located in an exclusive gated community with 24/7 security.',
  features: [
    'Infinity Pool',
    'Direct Beach Access',
    'Panoramic Ocean Views',
    'Smart Home Technology',
    'Gourmet Kitchen',
    'Home Theater',
    'Wine Cellar',
    'Outdoor Kitchen',
    'Landscaped Gardens',
    'Gated Community',
    '24/7 Security',
    'Private Gym'
  ],
  agent: {
    name: 'Emily Rodriguez',
    phone: '+1 (234) 567-8901',
    email: 'emily@moderncoast.com',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80'
  }
};

// Similar properties data
const similarProperties = [
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
  }
];

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // In a real application, we would fetch property data based on the ID
  const property = propertyData; // For now, always show the sample property

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Property Gallery */}
        <section className="relative bg-gray-100">
          <div className="h-[500px] md:h-[600px] overflow-hidden">
            <img 
              src={property.images[currentImageIndex]} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-lg shadow p-2">
            <div className="flex space-x-2">
              {property.images.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-12 overflow-hidden rounded ${index === currentImageIndex ? 'ring-2 ring-coastal-600' : ''}`}
                >
                  <img 
                    src={image} 
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Property Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.title}</h1>
                    <div className="text-3xl font-bold text-coastal-600">${property.price.toLocaleString()}</div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 py-4 border-t border-b border-gray-200">
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.bedrooms} <span className="text-gray-600">Bedrooms</span></span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.bathrooms} <span className="text-gray-600">Bathrooms</span></span>
                    </div>
                    <div className="flex items-center">
                      <SquareFeet className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.area} <span className="text-gray-600">sq ft</span></span>
                    </div>
                    <div className="flex items-center">
                      <Car className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.garages} <span className="text-gray-600">Garages</span></span>
                    </div>
                    <div className="flex items-center">
                      <CalendarClock className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.yearBuilt} <span className="text-gray-600">Year Built</span></span>
                    </div>
                  </div>
                  
                  <div className="flex mt-4 space-x-3">
                    <Button 
                      variant="outline" 
                      onClick={toggleFavorite}
                      className="border-gray-300 hover:bg-gray-50"
                    >
                      <Heart className={`h-5 w-5 mr-2 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                      {isFavorite ? 'Saved' : 'Save'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 hover:bg-gray-50"
                    >
                      <Share className="h-5 w-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
                
                {/* Tabs */}
                <Tabs defaultValue="overview">
                  <TabsList className="mb-6 bg-gray-100">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-coastal-600">
                      <Info className="h-4 w-4 mr-2" />
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="features" className="data-[state=active]:bg-white data-[state=active]:text-coastal-600">
                      <Grid className="h-4 w-4 mr-2" />
                      Features
                    </TabsTrigger>
                    <TabsTrigger value="photos" className="data-[state=active]:bg-white data-[state=active]:text-coastal-600">
                      <Camera className="h-4 w-4 mr-2" />
                      Photos
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-0">
                    <div className="bg-white rounded-lg p-6">
                      <h2 className="text-2xl font-semibold mb-4">Property Overview</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {property.description}
                      </p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h3 className="text-xl font-semibold mb-3">Property Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Property Type:</span>
                            <span className="font-medium">{property.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Status:</span>
                            <span className="font-medium">{property.forSale ? 'For Sale' : 'For Rent'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bedrooms:</span>
                            <span className="font-medium">{property.bedrooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bathrooms:</span>
                            <span className="font-medium">{property.bathrooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Area:</span>
                            <span className="font-medium">{property.area} sq ft</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Year Built:</span>
                            <span className="font-medium">{property.yearBuilt}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Garages:</span>
                            <span className="font-medium">{property.garages}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Location</h3>
                        <div className="h-80 bg-gray-200 rounded-lg">
                          <iframe 
                            title="Property Location"
                            className="w-full h-full rounded-lg"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52894.15263848123!2d-118.8376501727283!3d34.02554215263053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e81da9f908d63f%3A0x93b72d71b2ea8c5a!2sMalibu%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca"
                            allowFullScreen
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-0">
                    <div className="bg-white rounded-lg p-6">
                      <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {property.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-coastal-600 rounded-full mr-2"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="photos" className="mt-0">
                    <div className="bg-white rounded-lg p-6">
                      <h2 className="text-2xl font-semibold mb-4">Property Photos</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {property.images.map((image, index) => (
                          <div key={index} className="overflow-hidden rounded-lg">
                            <img 
                              src={image} 
                              alt={`Property view ${index + 1}`}
                              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3 mt-8 lg:mt-0">
                {/* Agent Info */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Property Agent</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={property.agent.image} 
                        alt={property.agent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{property.agent.name}</h4>
                      <p className="text-coastal-600">Coastal Property Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-gray-700">Phone</p>
                      <a href={`tel:${property.agent.phone}`} className="text-gray-900 font-medium">{property.agent.phone}</a>
                    </div>
                    <div>
                      <p className="text-gray-700">Email</p>
                      <a href={`mailto:${property.agent.email}`} className="text-gray-900 font-medium">{property.agent.email}</a>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-coastal-600 hover:bg-coastal-700">Contact Agent</Button>
                </div>
                
                {/* Schedule Viewing */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-semibold mb-4">Schedule a Viewing</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block mb-1 text-gray-700">Date</label>
                      <input 
                        type="date" 
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Time</label>
                      <select className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500">
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>1:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Your Name</label>
                      <input 
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Email</label>
                      <input 
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Phone</label>
                      <input 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Message (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Enter your message"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-coastal-600 hover:bg-coastal-700">Request a Viewing</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Properties */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((property) => (
                <PropertyCard 
                  key={property.id}
                  {...property}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
