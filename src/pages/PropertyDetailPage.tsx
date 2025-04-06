
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Share, MapPin, Bed, Bath, SquareIcon, Car, Camera, Grid, CalendarClock, Info } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import PropertyCard from '@/components/PropertyCard';

// Sample property data
const propertyData = {
  id: '1',
  title: 'Villa Moderna Frente al Mar',
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
  description: 'Esta espectacular villa moderna frente al mar ofrece vistas panorámicas al océano desde todas las habitaciones. Cuenta con amplias áreas de estar con ventanales del suelo al techo, una cocina gourmet con electrodomésticos de alta gama y una suite principal con terraza privada. El espacio exterior incluye una piscina infinita, jardines paisajísticos y acceso directo a la playa. Ubicada en una exclusiva comunidad cerrada con seguridad 24/7.',
  features: [
    'Piscina Infinita',
    'Acceso Directo a la Playa',
    'Vistas Panorámicas al Océano',
    'Tecnología Smart Home',
    'Cocina Gourmet',
    'Sala de Cine',
    'Bodega de Vinos',
    'Cocina Exterior',
    'Jardines Paisajísticos',
    'Comunidad Cerrada',
    'Seguridad 24/7',
    'Gimnasio Privado'
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
    title: 'Apartamento de Lujo Frente al Mar',
    location: 'Miami Beach, Florida',
    price: 1875000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: true,
    forSale: true,
    type: 'Apartamento'
  },
  {
    id: '3',
    title: 'Retiro Costero con Piscina',
    location: 'Naples, Florida',
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2800,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    featured: false,
    forSale: false,
    type: 'Casa'
  },
  {
    id: '4',
    title: 'Ático con Vista al Océano',
    location: 'La Jolla, California',
    price: 3200000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: false,
    forSale: true,
    type: 'Ático'
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

  // Format price to euros
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', { 
      style: 'currency', 
      currency: 'EUR',
      maximumFractionDigits: 0 
    }).format(price);
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
                    alt={`Vista ${index + 1}`}
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
                    <div className="text-3xl font-bold text-coastal-600">{formatPrice(property.price)}</div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 py-4 border-t border-b border-gray-200">
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.bedrooms} <span className="text-gray-600">Dormitorios</span></span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.bathrooms} <span className="text-gray-600">Baños</span></span>
                    </div>
                    <div className="flex items-center">
                      <SquareIcon className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.area} <span className="text-gray-600">m²</span></span>
                    </div>
                    <div className="flex items-center">
                      <Car className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.garages} <span className="text-gray-600">Garajes</span></span>
                    </div>
                    <div className="flex items-center">
                      <CalendarClock className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-900">{property.yearBuilt} <span className="text-gray-600">Año Construcción</span></span>
                    </div>
                  </div>
                  
                  <div className="flex mt-4 space-x-3">
                    <Button 
                      variant="outline" 
                      onClick={toggleFavorite}
                      className="border-gray-300 hover:bg-gray-50"
                    >
                      <Heart className={`h-5 w-5 mr-2 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                      {isFavorite ? 'Guardado' : 'Guardar'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 hover:bg-gray-50"
                    >
                      <Share className="h-5 w-5 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </div>
                
                {/* Tabs */}
                <Tabs defaultValue="overview">
                  <TabsList className="mb-6 bg-gray-100">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-coastal-600">
                      <Info className="h-4 w-4 mr-2" />
                      Descripción
                    </TabsTrigger>
                    <TabsTrigger value="features" className="data-[state=active]:bg-white data-[state=active]:text-coastal-600">
                      <Grid className="h-4 w-4 mr-2" />
                      Características
                    </TabsTrigger>
                    <TabsTrigger value="photos" className="data-[state=active]:bg-white data-[state=active]:text-coastal-600">
                      <Camera className="h-4 w-4 mr-2" />
                      Fotos
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-0">
                    <div className="bg-white rounded-lg p-6">
                      <h2 className="text-2xl font-semibold mb-4">Descripción de la Propiedad</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {property.description}
                      </p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h3 className="text-xl font-semibold mb-3">Detalles de la Propiedad</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tipo de Propiedad:</span>
                            <span className="font-medium">{property.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Estado:</span>
                            <span className="font-medium">{property.forSale ? 'En Venta' : 'En Alquiler'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Dormitorios:</span>
                            <span className="font-medium">{property.bedrooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Baños:</span>
                            <span className="font-medium">{property.bathrooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Superficie:</span>
                            <span className="font-medium">{property.area} m²</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Año Construcción:</span>
                            <span className="font-medium">{property.yearBuilt}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Garajes:</span>
                            <span className="font-medium">{property.garages}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
                        <div className="h-80 bg-gray-200 rounded-lg">
                          <iframe 
                            title="Ubicación de la Propiedad"
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
                      <h2 className="text-2xl font-semibold mb-4">Características de la Propiedad</h2>
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
                      <h2 className="text-2xl font-semibold mb-4">Fotos de la Propiedad</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {property.images.map((image, index) => (
                          <div key={index} className="overflow-hidden rounded-lg">
                            <img 
                              src={image} 
                              alt={`Vista ${index + 1}`}
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
                  <h3 className="text-xl font-semibold mb-4">Agente Inmobiliario</h3>
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
                      <p className="text-coastal-600">Especialista en Propiedades Costeras</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-gray-700">Teléfono</p>
                      <a href={`tel:${property.agent.phone}`} className="text-gray-900 font-medium">{property.agent.phone}</a>
                    </div>
                    <div>
                      <p className="text-gray-700">Correo</p>
                      <a href={`mailto:${property.agent.email}`} className="text-gray-900 font-medium">{property.agent.email}</a>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-coastal-600 hover:bg-coastal-700">Contactar Agente</Button>
                </div>
                
                {/* Schedule Viewing */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-semibold mb-4">Programar Visita</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block mb-1 text-gray-700">Fecha</label>
                      <input 
                        type="date" 
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Hora</label>
                      <select className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500">
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Nombre</label>
                      <input 
                        type="text"
                        placeholder="Introduce tu nombre"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Correo</label>
                      <input 
                        type="email"
                        placeholder="Introduce tu correo"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Teléfono</label>
                      <input 
                        type="tel"
                        placeholder="Introduce tu número de teléfono"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-gray-700">Mensaje (Opcional)</label>
                      <textarea
                        rows={3}
                        placeholder="Escribe tu mensaje"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-coastal-500 focus:border-coastal-500"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-coastal-600 hover:bg-coastal-700">Solicitar Visita</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Properties */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Propiedades Similares</h2>
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
