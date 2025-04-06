
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] lg:h-[700px] bg-coastal-600 overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow">
            Encuentra Tu Propiedad Costera Ideal
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Descubre impresionantes casas frente al mar y propiedades exclusivas junto a la playa en las costas más bellas.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-500">
                  <option value="">Tipo de Propiedad</option>
                  <option value="apartment">Apartamento</option>
                  <option value="house">Casa</option>
                  <option value="villa">Villa</option>
                  <option value="land">Terreno</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-500">
                  <option value="">Ubicación</option>
                  <option value="malibu">Malibu</option>
                  <option value="miami">Miami</option>
                  <option value="hamptons">Los Hamptons</option>
                  <option value="newportBeach">Newport Beach</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-500">
                  <option value="">Rango de Precio</option>
                  <option value="0-500000">$0 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
                  <option value="2000000+">$2,000,000+</option>
                </select>
              </div>
              <div>
                <Button className="w-full md:w-auto bg-coastal-600 hover:bg-coastal-700">
                  <Search className="h-5 w-5 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
