
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import PropertyTypes from '@/components/PropertyTypes';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <PropertyTypes />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
