import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://mocha-cdn.com/019916ba-3cbd-7d1c-b453-0371ce75152e/Sol-Agius-Solar.png" 
              alt="Agius Solar" 
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">
                <span className="text-orange-500">Agius</span> Solar
              </h1>
              <p className="text-xs text-gray-600 uppercase tracking-wide">Energia Renovável</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium w-full text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium w-full text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium w-full text-left mt-2"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
