
import { Award, Home, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Locations',
    description: 'Access to exclusive properties in the most desirable coastal destinations around the world.'
  },
  {
    icon: Home,
    title: 'Exceptional Properties',
    description: 'Curated selection of luxury waterfront homes, villas, and apartments with stunning views.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our dedicated team is available around the clock to assist with all your property needs.'
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Experienced real estate professionals specializing in premium coastal properties.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-coastal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Modern Coast Properties</h2>
          <p className="text-white/80">
            We combine extensive market knowledge with personalized service to help you find your perfect coastal home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-coastal-700/50 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
