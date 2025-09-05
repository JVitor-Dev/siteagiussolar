import { Home, Building, Factory, ArrowRight, Zap, Shield, TrendingDown } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Sistemas Residenciais',
      description: 'Painéis solares para residências, reduzindo sua conta de energia em até 95%.',
      features: ['Instalação completa', 'Garantia de 25 anos', 'Financiamento facilitado'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Building,
      title: 'Sistemas Empresariais',
      description: 'Soluções para empresas com alta demanda energética e necessidade de economia.',
      features: ['Projeto personalizado', 'ROI em até 4 anos', 'Suporte técnico 24h'],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Factory,
      title: 'Usinas Solares',
      description: 'Construção de usinas fotovoltaicas de grande porte para geração distribuída.',
      features: ['Megawatts de potência', 'Engenharia especializada', 'Gestão completa'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Economia Garantida',
      description: 'Reduza sua conta de energia em até 95% com sistemas fotovoltaicos de alta eficiência.'
    },
    {
      icon: Shield,
      title: 'Qualidade Comprovada',
      description: 'Equipamentos de marcas líderes mundiais com garantia estendida e suporte técnico.'
    },
    {
      icon: Zap,
      title: 'Energia Limpa',
      description: 'Contribua para um planeta mais sustentável com energia 100% renovável e limpa.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Energia Solar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da residência à indústria, oferecemos sistemas fotovoltaicos personalizados 
            para cada necessidade, com tecnologia de ponta e qualidade garantida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="group/btn flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Por que escolher a Agius Solar?
            </h3>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto">
              Somos especialistas em energia solar com anos de experiência no mercado nordestino.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-orange-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
