
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Users, Award, Globe2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Robert Johnson',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in luxury real estate, Robert founded Global Costa Invest to help clients find their perfect coastal property.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    },
    {
      name: 'Sarah Williams',
      position: 'Head of Sales',
      bio: 'Sarah specializes in luxury waterfront properties and has an unparalleled network of contacts in the most exclusive coastal markets.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80',
    },
    {
      name: 'Michael Chen',
      position: 'Property Consultant',
      bio: 'Michael has deep knowledge of international real estate markets and specializes in helping overseas investors find the perfect coastal property.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
    {
      name: 'Elena Rodriguez',
      position: 'Marketing Director',
      bio: 'Elena brings creative vision to our property marketing, ensuring each listing receives maximum exposure to qualified buyers worldwide.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-coastal-600 py-20">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80)'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Global Costa Invest</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner for premium coastal properties since 2005
          </p>
        </div>
      </section>
      
      {/* About Us Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Global Costa Invest specializes in exclusive coastal properties located in the world's most desirable destinations. Our team of real estate experts is dedicated to finding the ideal property for each client, whether it's a luxury beachfront villa, an ocean-view apartment, or a private beach house.
              </p>
              <p className="text-gray-700 mb-6">
                Founded in 2005, we have established ourselves as leaders in the premium coastal real estate market, with a portfolio that includes some of the most prestigious waterfront properties worldwide. Our success is built on our commitment to exceptional service, deep market knowledge, and our passion for coastal living.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-coastal-600">500+</p>
                  <p className="text-gray-600">Properties Sold</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-coastal-600">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-coastal-600">12</p>
                  <p className="text-gray-600">Coastal Locations</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Coastal Property" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our mission is to provide exceptional and personalized service, guiding our clients through the process of buying or selling coastal properties with transparency, integrity, and dedication. We strive to exceed expectations and build lasting relationships based on trust and satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-coastal-50 text-coastal-600 rounded-full inline-flex mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Centered Approach</h3>
              <p className="text-gray-700">
                We put our clients' needs first, taking the time to understand their requirements and preferences to find the perfect coastal property that matches their lifestyle and investment goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-coastal-50 text-coastal-600 rounded-full inline-flex mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence in Service</h3>
              <p className="text-gray-700">
                We are committed to providing the highest level of service in every aspect of the real estate process, from property search and viewings to negotiations and closing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-coastal-50 text-coastal-600 rounded-full inline-flex mb-4">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-gray-700">
                Our international network of partners and contacts allows us to offer exclusive access to some of the most prestigious coastal properties around the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our experienced team of real estate professionals is dedicated to helping you find your perfect coastal property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-coastal-600 mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      <Footer />
    </div>
  );
};

export default AboutPage;
