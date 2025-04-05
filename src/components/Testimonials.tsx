
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer Lopez',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    quote: 'Modern Coast Properties helped me find my dream beachfront home. Their team was professional, knowledgeable, and made the entire buying process seamless.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Johnson',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    quote: 'As a property investor, I\'ve worked with many agencies, but Modern Coast stands out for their market expertise and exceptional service. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'First-time Buyer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80',
    quote: 'The team at Modern Coast Properties guided me through my first property purchase with patience and expertise. They found me the perfect coastal apartment within my budget.',
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover why our clients choose Modern Coast Properties for their coastal real estate needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index}
                      className={`h-5 w-5 ${
                        index < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={handlePrevious}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
