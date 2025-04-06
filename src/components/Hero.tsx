
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const propertyTypes = [
  { id: 'villa', label: 'Villa' },
  { id: 'apartment', label: 'Apartment' },
  { id: 'penthouse', label: 'Penthouse' },
  { id: 'house', label: 'House' },
  { id: 'chalet', label: 'Chalet' },
  { id: 'townhouse', label: 'Townhouse' },
  { id: 'flat', label: 'Flat' },
  { id: 'plot', label: 'Plot' },
  { id: 'land', label: 'Land' },
  { id: 'commercial', label: 'Commercial Property' }
];

const locations = [
  { id: 'malibu', label: 'Malibu' },
  { id: 'miami', label: 'Miami' },
  { id: 'hamptons', label: 'The Hamptons' },
  { id: 'newportBeach', label: 'Newport Beach' },
  { id: 'sanDiego', label: 'San Diego' },
  { id: 'outerBanks', label: 'Outer Banks' }
];

const priceRanges = [
  { id: '0-500000', label: '$0 - $500,000' },
  { id: '500000-1000000', label: '$500,000 - $1,000,000' },
  { id: '1000000-2000000', label: '$1,000,000 - $2,000,000' },
  { id: '2000000-3000000', label: '$2,000,000 - $3,000,000' },
  { id: '3000000+', label: '$3,000,000+' }
];

const Hero = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const handleSearch = () => {
    // Build search parameters
    const params = new URLSearchParams();
    
    if (selectedType) {
      params.append('type', selectedType);
      console.log("Searching type:", selectedType);
    }
    
    if (selectedLocation) {
      params.append('location', selectedLocation);
      console.log("Searching location:", selectedLocation);
    }
    
    if (selectedPriceRange) {
      params.append('price', selectedPriceRange);
      console.log("Searching price range:", selectedPriceRange);
    }

    // Navigate to properties page with filters
    console.log("Navigating to:", `/properties?${params.toString()}`);
    navigate(`/properties?${params.toString()}`);
  };

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
            Find Your Ideal Coastal Property
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Discover stunning beachfront homes and exclusive seaside properties on the world's most beautiful coastlines.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <select 
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-500"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">Property Type</option>
                  {propertyTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <select 
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-500"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">Location</option>
                  {locations.map(location => (
                    <option key={location.id} value={location.id}>{location.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <select 
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-500"
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                >
                  <option value="">Price Range</option>
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>{range.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <Button 
                  className="w-full md:w-auto bg-coastal-600 hover:bg-coastal-700" 
                  onClick={handleSearch}
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
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
