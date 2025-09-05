import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5584999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(84) 9 9999-9999',
      action: 'tel:+5584999999999'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(84) 9 9999-9999',
      action: 'https://wa.me/5584999999999'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@agiussolar.com.br',
      action: 'mailto:contato@agiussolar.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Mossoró/RN - Brasil',
      action: null
    }
  ];

  const businessHours = [
    { day: 'Segunda a Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: '08:00 - 12:00' },
    { day: 'Domingo', hours: 'Fechado' }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pronto para
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Economizar com Solar?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite seu orçamento gratuito e descubra quanto você pode economizar 
            com energia solar. Nossa equipe está pronta para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="(84) 9 9999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="residencial">Sistema Residencial</option>
                      <option value="empresarial">Sistema Empresarial</option>
                      <option value="usina">Usina Solar</option>
                      <option value="manutencao">Manutenção</option>
                      <option value="consultoria">Consultoria</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Conte-nos mais sobre seu projeto..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enviar via WhatsApp
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Fale Conosco</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{item.title}</div>
                      {item.action ? (
                        <a 
                          href={item.action}
                          className="text-orange-500 hover:text-orange-600 transition-colors"
                          target={item.action.startsWith('http') ? '_blank' : undefined}
                          rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.info}
                        </a>
                      ) : (
                        <div className="text-gray-600">{item.info}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 mr-3" />
                <h3 className="text-xl font-bold">Horário de Atendimento</h3>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-orange-100">{schedule.day}</span>
                    <span className="font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <p className="text-center text-sm">
                  <strong>Emergências:</strong> Atendimento 24h via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
