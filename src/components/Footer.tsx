import { Mail, Instagram, MessageCircle, ChefHat } from 'lucide-react';

interface FooterProps {
  navigate: (page: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-[#D4AF37]" />
              <span className="font-bold text-lg">Chefs Consult Africa</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Africa's food businesses with chef-led expertise and operational excellence.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('home')}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('about')}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('services')}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('faq')}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4AF37]">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Culinary Consulting</li>
              <li>Operations Audits</li>
              <li>Kitchen Design & Setup</li>
              <li>Staff Training</li>
              <li>Menu Engineering</li>
              <li>Brand Strategy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#D4AF37]">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:chefsconsult.ng@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>chefsconsult.ng@gmail.com</span>
              </a>
              <a
                href="https://wa.me/2349027966479"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +234 902 796 6479</span>
              </a>
              <a
                href="https://instagram.com/chefsconsult_africa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                <span>@chefsconsult_africa</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Chefs Consult Africa. All rights reserved.</p>
          <p className="mt-2">Serving restaurants, hotels, and food businesses across Africa.</p>
        </div>
      </div>
    </footer>
  );
}
