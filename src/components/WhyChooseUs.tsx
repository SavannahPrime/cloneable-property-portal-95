
import { useEffect, useState } from 'react';
import { Award, Home, Clock, Users } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const icons = {
  award: Award,
  home: Home,
  clock: Clock,
  users: Users,
};

// Initial features data
const defaultFeatures = [
  {
    icon: 'award',
    title: 'Premium Locations',
    description: 'Access to exclusive properties in the most desired coastal destinations worldwide.'
  },
  {
    icon: 'home',
    title: 'Exceptional Properties',
    description: 'Curated selection of luxury houses, villas, and apartments with stunning sea views.'
  },
  {
    icon: 'clock',
    title: '24/7 Support',
    description: 'Our dedicated team is available around the clock to assist with all your real estate needs.'
  },
  {
    icon: 'users',
    title: 'Expert Agents',
    description: 'Experienced real estate professionals specializing in premium coastal properties.'
  }
];

const WhyChooseUs = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  
  useEffect(() => {
    // Try to load features from localStorage
    const savedFeatures = localStorage.getItem('whyChooseUsFeatures');
    if (savedFeatures) {
      try {
        setFeatures(JSON.parse(savedFeatures));
      } catch (error) {
        console.error('Error loading features:', error);
        setFeatures(defaultFeatures);
      }
    } else {
      setFeatures(defaultFeatures);
    }
  }, []);
  
  return (
    <section className="py-20 bg-coastal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Global Costa Invest</h2>
          <p className="text-white/80">
            We combine extensive market knowledge with personalized service to help you find your perfect coastal home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = icons[feature.icon as keyof typeof icons] || Award;
            
            return (
              <div key={index} className="bg-coastal-700/50 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
