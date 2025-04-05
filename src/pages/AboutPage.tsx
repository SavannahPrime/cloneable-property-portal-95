
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import { CalendarClock, Award, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-24 bg-coastal-600">
          <div className="absolute inset-0 bg-black/30">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)'
              }}
            ></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Modern Coast Properties</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We specialize in luxury coastal real estate with a focus on exceptional service and market expertise.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Modern Coast Properties was founded in 2010 with a simple vision: to help clients find their perfect coastal home. What began as a small team of passionate real estate experts has grown into a leading agency specializing in premium waterfront properties.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, we've built a reputation for exceptional service, market expertise, and a curated portfolio of the most desirable coastal properties. Our team combines in-depth local knowledge with global connections to bring you exclusive opportunities in the world's most beautiful coastal locations.
                </p>
                <p className="text-gray-700">
                  Today, Modern Coast Properties is recognized as a trusted partner for buyers, sellers, and investors looking for exceptional coastal real estate experiences. Our commitment to excellence and personalized service continues to guide everything we do.
                </p>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Modern Coast Properties Team" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coastal-100 rounded-full mb-4">
                  <CalendarClock className="h-8 w-8 text-coastal-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coastal-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-coastal-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coastal-100 rounded-full mb-4">
                  <Users className="h-8 w-8 text-coastal-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our experienced team of real estate professionals is dedicated to helping you find your perfect coastal property.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                    alt="James Wilson" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold">James Wilson</h3>
                <p className="text-coastal-600 mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in luxury real estate, James leads our team with passion and expertise.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
                    alt="Emily Rodriguez" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold">Emily Rodriguez</h3>
                <p className="text-coastal-600 mb-2">Senior Agent</p>
                <p className="text-gray-600 text-sm">
                  Emily specializes in waterfront properties and has a keen eye for identifying exceptional investment opportunities.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="David Chen" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold">David Chen</h3>
                <p className="text-coastal-600 mb-2">Market Analyst</p>
                <p className="text-gray-600 text-sm">
                  David's deep understanding of market trends helps our clients make informed decisions in the coastal property market.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80" 
                    alt="Sophie Martinez" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold">Sophie Martinez</h3>
                <p className="text-coastal-600 mb-2">Client Relations</p>
                <p className="text-gray-600 text-sm">
                  Sophie ensures that every client receives personalized attention and support throughout their property journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <WhyChooseUs />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
