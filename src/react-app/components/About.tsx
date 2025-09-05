import { MapPin, Users, Award, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, number: '500+', label: 'Clientes Satisfeitos' },
    { icon: Award, number: '10+', label: 'Anos de Experiência' },
    { icon: MapPin, number: '3', label: 'Estados Atendidos' },
    { icon: Clock, number: '24h', label: 'Suporte Técnico' }
  ];

  const locations = [
    { state: 'RN', cities: ['Mossoró', 'Natal', 'Caicó', 'Açu'] },
    { state: 'CE', cities: ['Fortaleza', 'Sobral', 'Juazeiro do Norte'] },
    { state: 'PB', cities: ['João Pessoa', 'Campina Grande', 'Patos'] }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              Sobre a Agius Solar
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Energia Solar de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Qualidade no Nordeste
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Baseada em Mossoró/RN, a Agius Solar é referência em sistemas fotovoltaicos 
              no Nordeste brasileiro. Com mais de uma década de experiência, desenvolvemos 
              projetos personalizados que atendem desde residências até grandes usinas solares.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Nossa missão é democratizar o acesso à energia solar, oferecendo soluções 
              sustentáveis e economicamente viáveis para nossos clientes em todo RN, CE e PB.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Coverage Area */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Área de Atuação
              </h3>
              
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {location.state === 'RN' && 'Rio Grande do Norte'}
                      {location.state === 'CE' && 'Ceará'}
                      {location.state === 'PB' && 'Paraíba'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.cities.map((city, cityIndex) => (
                        <span 
                          key={cityIndex}
                          className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
                <p className="text-center text-gray-700">
                  <span className="font-semibold text-orange-600">Sede:</span> Mossoró/RN
                </p>
                <p className="text-center text-gray-600 text-sm mt-1">
                  Atendimento técnico especializado em toda a região
                </p>
              </div>
            </div>
            
            {/* Company Image */}
            <div className="mt-8 relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipe Agius Solar"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold">Equipe Especializada</h4>
                <p className="text-orange-200">Engenheiros e técnicos qualificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
