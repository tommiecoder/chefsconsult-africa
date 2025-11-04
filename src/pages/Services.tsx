import {
  ChefHat,
  ClipboardCheck,
  Wrench,
  GraduationCap,
  BookOpen,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

interface ServicesProps {
  navigate: (page: string, service?: string) => void;
}

export default function Services({ navigate }: ServicesProps) {
  const services = [
    {
      id: 'culinary-consulting',
      icon: ChefHat,
      title: 'Culinary Consulting',
      summary:
        'Expert guidance to refine your kitchen operations, improve food quality, and elevate your culinary offerings to meet and exceed customer expectations.',
      features: ['Menu Development', 'Recipe Standardization', 'Quality Control', 'Cost Management'],
    },
    {
      id: 'restaurant-audits',
      icon: ClipboardCheck,
      title: 'Restaurant Operations Audits',
      summary:
        'Comprehensive assessments of your entire operation to identify inefficiencies, reduce waste, and optimize workflows for maximum profitability.',
      features: [
        'Kitchen Workflow Analysis',
        'Food Cost Analysis',
        'Staff Performance Review',
        'Health & Safety Compliance',
      ],
    },
    {
      id: 'kitchen-design',
      icon: Wrench,
      title: 'Kitchen Design & Setup',
      summary:
        'Strategic planning and design for functional, efficient kitchen spaces that support your operational goals and enhance productivity.',
      features: [
        'Layout Planning',
        'Equipment Selection',
        'Workflow Optimization',
        'Ventilation & Utilities',
      ],
    },
    {
      id: 'staff-training',
      icon: GraduationCap,
      title: 'Staff Training & Development',
      summary:
        'Hands-on training programs designed to build skilled, confident kitchen teams that consistently deliver excellence.',
      features: [
        'Culinary Skills Training',
        'Food Safety Certification',
        'Leadership Development',
        'Customer Service Excellence',
      ],
    },
    {
      id: 'menu-engineering',
      icon: BookOpen,
      title: 'Menu Engineering',
      summary:
        'Data-driven menu optimization that balances customer preferences, food costs, and profitability to maximize your bottom line.',
      features: [
        'Menu Analysis',
        'Pricing Strategy',
        'Dish Profitability',
        'Seasonal Optimization',
      ],
    },
    {
      id: 'brand-strategy',
      icon: TrendingUp,
      title: 'Brand Strategy for Food Businesses',
      summary:
        'Build a compelling brand identity and market positioning that resonates with your target audience and drives customer loyalty.',
      features: [
        'Brand Identity Development',
        'Market Positioning',
        'Marketing Strategy',
        'Social Media Planning',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive culinary consulting solutions tailored to elevate your food business
            operations
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate('services', service.id)}
                >
                  <Icon className="h-14 w-14 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4 text-[#003366]">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.summary}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#003366] mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-[#D4AF37] mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="text-[#D4AF37] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003366]">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Book a free consultation call and we'll help you identify the best solutions for your
            specific business needs.
          </p>
          <button
            onClick={() => navigate('booking')}
            className="bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">15+</div>
              <p className="text-gray-200">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">100+</div>
              <p className="text-gray-200">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">50+</div>
              <p className="text-gray-200">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
