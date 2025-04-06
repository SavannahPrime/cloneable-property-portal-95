
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Acerca de Costa Moderna Propiedades</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nos especializamos en inmuebles costeros de lujo con un enfoque en servicio excepcional y experiencia en el mercado.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                <p className="text-gray-700 mb-4">
                  Costa Moderna Propiedades fue fundada en 2010 con una visión simple: ayudar a los clientes a encontrar su hogar costero perfecto. Lo que comenzó como un pequeño equipo de apasionados expertos en bienes raíces se ha convertido en una agencia líder especializada en propiedades premium frente al mar.
                </p>
                <p className="text-gray-700 mb-4">
                  A lo largo de los años, hemos construido una reputación de servicio excepcional, experiencia en el mercado y un portafolio seleccionado de las propiedades costeras más deseables. Nuestro equipo combina un profundo conocimiento local con conexiones globales para brindarte oportunidades exclusivas en las ubicaciones costeras más hermosas del mundo.
                </p>
                <p className="text-gray-700">
                  Hoy, Costa Moderna Propiedades es reconocida como un socio de confianza para compradores, vendedores e inversores que buscan experiencias inmobiliarias costeras excepcionales. Nuestro compromiso con la excelencia y el servicio personalizado continúa guiando todo lo que hacemos.
                </p>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Equipo de Costa Moderna Propiedades" 
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
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coastal-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-coastal-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Propiedades Vendidas</div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coastal-100 rounded-full mb-4">
                  <Users className="h-8 w-8 text-coastal-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Satisfacción del Cliente</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conoce a Nuestro Equipo</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Nuestro experimentado equipo de profesionales inmobiliarios está dedicado a ayudarte a encontrar tu propiedad costera perfecta.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                    alt="Jaime Wilson" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold">Jaime Wilson</h3>
                <p className="text-coastal-600 mb-2">Fundador y Director</p>
                <p className="text-gray-600 text-sm">
                  Con más de 20 años de experiencia en inmuebles de lujo, Jaime lidera nuestro equipo con pasión y experiencia.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
                    alt="Emilia Rodríguez" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold">Emilia Rodríguez</h3>
                <p className="text-coastal-600 mb-2">Agente Senior</p>
                <p className="text-gray-600 text-sm">
                  Emilia se especializa en propiedades frente al mar y tiene un ojo agudo para identificar oportunidades de inversión excepcionales.
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
                <p className="text-coastal-600 mb-2">Analista de Mercado</p>
                <p className="text-gray-600 text-sm">
                  La profunda comprensión de David sobre las tendencias del mercado ayuda a nuestros clientes a tomar decisiones informadas en el mercado inmobiliario costero.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80" 
                    alt="Sofía Martínez" 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold">Sofía Martínez</h3>
                <p className="text-coastal-600 mb-2">Relaciones con Clientes</p>
                <p className="text-gray-600 text-sm">
                  Sofía asegura que cada cliente reciba atención personalizada y apoyo durante todo su recorrido inmobiliario.
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
