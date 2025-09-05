import { Sun, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Sistemas Residenciais',
    'Sistemas Empresariais', 
    'Usinas Solares',
    'Manutenção',
    'Consultoria'
  ];

  const coverage = [
    'Rio Grande do Norte',
    'Ceará',
    'Paraíba',
    'Mossoró (Sede)',
    'Natal',
    'Fortaleza'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://mocha-cdn.com/019916ba-3cbd-7d1c-b453-0371ce75152e/Sol-Agius-Solar.png" 
                alt="Agius Solar" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-orange-400">Agius</span> Solar
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Energia Renovável</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialistas em energia solar no Nordeste brasileiro. 
              Transformando luz solar em economia e sustentabilidade.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">Mossoró/RN - Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+5584999999999" className="text-gray-400 hover:text-orange-400 transition-colors">
                  (84) 9 9999-9999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:contato@agiussolar.com.br" className="text-gray-400 hover:text-orange-400 transition-colors">
                  contato@agiussolar.com.br
                </a>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coverage Area */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Área de Atuação</h4>
            <ul className="space-y-3">
              {coverage.map((location, index) => (
                <li key={index}>
                  <span className="text-gray-400">
                    {location}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Entre em Contato</h4>
            <p className="text-gray-400 mb-6">
              Solicite seu orçamento gratuito e comece a economizar com energia solar hoje mesmo.
            </p>
            
            <div className="space-y-3">
              <a
                href="https://wa.me/5584999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition-colors group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              
              <a
                href="tel:+5584999999999"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition-colors group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Agius Solar. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Energia Solar • Sustentabilidade • Economia</span>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-orange-400" />
                <span>Energia 100% Limpa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
