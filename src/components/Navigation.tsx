import { useState } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  navigate: (page: string) => void;
}

export default function Navigation({ currentPage, navigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'booking', label: 'Book Consultation' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavigate = (page: string) => {
    navigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#003366] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <ChefHat className="h-8 w-8 text-[#D4AF37]" />
            <span className="font-bold text-xl">Chefs Consult Africa</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`hover:text-[#D4AF37] transition-colors duration-200 font-medium ${
                  currentPage === item.id ? 'text-[#D4AF37]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left py-2 px-4 hover:bg-[#004080] rounded transition-colors ${
                  currentPage === item.id ? 'text-[#D4AF37] bg-[#004080]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
