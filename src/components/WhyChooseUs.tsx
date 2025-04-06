
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

// Estado inicial de las características
const defaultFeatures = [
  {
    icon: 'award',
    title: 'Ubicaciones Premium',
    description: 'Acceso a propiedades exclusivas en los destinos costeros más deseados de todo el mundo.'
  },
  {
    icon: 'home',
    title: 'Propiedades Excepcionales',
    description: 'Selección curada de casas, villas y apartamentos de lujo frente al mar con vistas impresionantes.'
  },
  {
    icon: 'clock',
    title: 'Soporte 24/7',
    description: 'Nuestro equipo dedicado está disponible las 24 horas para asistir con todas sus necesidades inmobiliarias.'
  },
  {
    icon: 'users',
    title: 'Agentes Expertos',
    description: 'Profesionales inmobiliarios con experiencia especializados en propiedades costeras premium.'
  }
];

const WhyChooseUs = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  
  useEffect(() => {
    // Intentar cargar las características del localStorage
    const savedFeatures = localStorage.getItem('whyChooseUsFeatures');
    if (savedFeatures) {
      try {
        setFeatures(JSON.parse(savedFeatures));
      } catch (error) {
        console.error('Error al cargar las características:', error);
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
          <h2 className="text-3xl font-bold mb-4">Por Qué Elegir Global Costa Invest</h2>
          <p className="text-white/80">
            Combinamos amplio conocimiento del mercado con servicio personalizado para ayudarte a encontrar tu hogar costero perfecto.
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
