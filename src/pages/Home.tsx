import { ChefHat, Users, Target, Award, MessageCircle, ArrowRight } from 'lucide-react';

interface HomeProps {
  navigate: (page: string, service?: string) => void;
}

export default function Home({ navigate }: HomeProps) {
  const services = [
    {
      id: 'culinary-consulting',
      icon: ChefHat,
      title: 'Culinary Consulting',
      description: 'Expert guidance to refine your kitchen operations and elevate your culinary offerings.',
    },
    {
      id: 'restaurant-audits',
      icon: Target,
      title: 'Restaurant Operations Audits',
      description: 'Comprehensive assessments to identify inefficiencies and optimize performance.',
    },
    {
      id: 'kitchen-design',
      icon: Award,
      title: 'Kitchen Design & Setup',
      description: 'Strategic planning and design for functional, efficient kitchen spaces.',
    },
    {
      id: 'staff-training',
      icon: Users,
      title: 'Staff Training & Development',
      description: 'Hands-on training programs to build skilled, confident kitchen teams.',
    },
    {
      id: 'menu-engineering',
      icon: ChefHat,
      title: 'Menu Engineering',
      description: 'Data-driven menu optimization for profitability and customer satisfaction.',
    },
    {
      id: 'brand-strategy',
      icon: Target,
      title: 'Brand Strategy for Food Businesses',
      description: 'Build a compelling brand identity that resonates with your target market.',
    },
  ];

  const testimonials = [
    {
      name: 'Adebayo Johnson',
      business: 'Lagos Fine Dining Restaurant',
      text: 'Chefs Consult Africa transformed our kitchen operations. Our efficiency increased by 40% and our customer satisfaction scores have never been higher.',
    },
    {
      name: 'Ngozi Okonkwo',
      business: 'Abuja Hotel Group',
      text: 'The team audit and training program was exactly what we needed. Our staff are now more confident and our service quality has improved significantly.',
    },
    {
      name: 'Kwame Mensah',
      business: 'Accra Restaurant Chain',
      text: 'Their menu engineering service helped us increase our profit margins by 25% while maintaining food quality. Highly recommended!',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#003366] via-[#004080] to-[#003366] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Africa's Food Businesses with Chef-Led Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Hands-on consulting that transforms kitchens, teams, and customer experience
          </p>
          <button
            onClick={() => navigate('booking')}
            className="bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#003366]">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your food business operations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate('services', service.id)}
                >
                  <Icon className="h-12 w-12 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3 text-[#003366]">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <button className="text-[#D4AF37] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#003366]">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#003366]">Practical Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Our consultants are experienced chefs who have worked in real kitchens and understand
                the challenges you face daily.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#003366]">African Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of the African hospitality landscape and the unique needs of
                businesses across the continent.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#003366]">Proven Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Tried and tested methodologies that deliver measurable improvements in efficiency,
                quality, and profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#003366]">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Success stories from food businesses across Africa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#D4AF37] shadow-md hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#003366]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Kitchen Operations?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Book your consultation today and start your journey toward operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('booking')}
              className="bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all duration-300 transform hover:scale-105"
            >
              Book a Consultation
            </button>
            <a
              href="https://wa.me/2349027966479"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#003366] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
