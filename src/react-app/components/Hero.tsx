import { Sun, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-yellow-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <Sun className="h-32 w-32 text-orange-400 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Sun className="h-24 w-24 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
              <Sun className="h-4 w-4 mr-2" />
              Energia Solar no Nordeste
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Energia Solar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Sustentável
              </span>
              para o Futuro
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transforme a energia do sol em economia para sua casa, empresa ou usina. 
              Atendemos todo RN, CE e PB com tecnologia de ponta e qualidade garantida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contato')}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="tel:+5584999999999"
                className="group bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center border-2 border-gray-200 hover:border-orange-300 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5 text-orange-500" />
                (84) 9 9999-9999
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-gray-600">Projetos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">3</div>
                <div className="text-gray-600">Estados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">10+</div>
                <div className="text-gray-600">Anos</div>
              </div>
            </div>
          </div>
          
          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Painéis solares"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl border border-orange-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">100% Limpa</div>
                    <div className="text-gray-600">Energia Renovável</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
