
import { Award, Home, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Ubicaciones Premium',
    description: 'Acceso a propiedades exclusivas en los destinos costeros más deseados de todo el mundo.'
  },
  {
    icon: Home,
    title: 'Propiedades Excepcionales',
    description: 'Selección curada de casas, villas y apartamentos de lujo frente al mar con vistas impresionantes.'
  },
  {
    icon: Clock,
    title: 'Soporte 24/7',
    description: 'Nuestro equipo dedicado está disponible las 24 horas para asistir con todas sus necesidades inmobiliarias.'
  },
  {
    icon: Users,
    title: 'Agentes Expertos',
    description: 'Profesionales inmobiliarios con experiencia especializados en propiedades costeras premium.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-coastal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Por Qué Elegir Costa Moderna Propiedades</h2>
          <p className="text-white/80">
            Combinamos amplio conocimiento del mercado con servicio personalizado para ayudarte a encontrar tu hogar costero perfecto.
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
