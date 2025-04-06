
import { Heart, MapPin, Bed, Bath, SquareIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
  forSale?: boolean;
  type: string;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  featured = false,
  forSale = true,
  type
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/property/${id}`}>
      <div className="property-card h-full flex flex-col">
        <div className="relative">
          <div className="h-64 w-full">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
          
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>
          
          {featured && (
            <Badge className="absolute top-3 left-3 bg-coastal-600">
              Featured
            </Badge>
          )}
          
          <Badge className={`absolute bottom-3 left-3 ${forSale ? 'bg-green-600' : 'bg-blue-600'}`}>
            {forSale ? 'For Sale' : 'For Rent'}
          </Badge>
          
          <Badge className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur-sm">
            {type}
          </Badge>
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
            
            <div className="flex items-center justify-between border-t border-b border-gray-100 py-3 mb-3">
              <div className="flex items-center">
                <Bed className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{bedrooms} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{bathrooms} Baths</span>
              </div>
              <div className="flex items-center">
                <SquareIcon className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{area} sq ft</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-end justify-between mt-2">
            <div>
              <p className="text-coastal-600 font-bold text-xl">${price.toLocaleString()}</p>
            </div>
            <Button variant="outline" className="text-coastal-600 border-coastal-600 hover:bg-coastal-50">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
