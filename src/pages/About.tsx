import { Target, Eye, Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Chef Emmanuel',
      role: 'Lead Consultant',
      description: 'Over 15 years of culinary experience across African and international kitchens.',
    },
    {
      name: 'Chef Amara',
      role: 'Operations Specialist',
      description: 'Expert in restaurant operations optimization and kitchen efficiency systems.',
    },
    {
      name: 'Chef Kwesi',
      role: 'Training Director',
      description: 'Passionate about developing culinary talent and building high-performing teams.',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in every consultation and project.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We bring creative solutions that blend traditional expertise with modern techniques.',
    },
    {
      icon: Target,
      title: 'Practicality',
      description: 'Our recommendations are actionable, realistic, and tailored to your specific context.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We are committed to the continuous development of African food businesses.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Chefs Consult Africa</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transforming Africa's hospitality industry through expert culinary consulting
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003366] text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Chefs Consult Africa was founded by a team of passionate culinary professionals who saw
              a critical need for practical, hands-on consulting services in Africa's rapidly growing
              food and hospitality sector.
            </p>
            <p>
              With decades of combined experience working in restaurants, hotels, and food businesses
              across the continent, we understand the unique challenges faced by African hospitality
              entrepreneurs. From supply chain complexities to staff training gaps, from menu
              optimization to operational efficiency, we've been there and solved those problems.
            </p>
            <p>
              Today, we serve a diverse portfolio of clients including independent restaurants, hotel
              groups, catering companies, and emerging food brands. Our mission is simple: to elevate
              the standard of culinary operations across Africa, one kitchen at a time.
            </p>
            <p>
              What sets us apart is our commitment to practical, implementable solutions. We don't
              just write reports; we roll up our sleeves and work alongside your team to create
              lasting change. Our consultants are chefs first, bringing real-world kitchen experience
              to every engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-10 w-10 text-[#D4AF37]" />
                <h2 className="text-3xl font-bold text-[#003366]">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower African food businesses with chef-led expertise, practical systems, and
                hands-on support that drives operational excellence, profitability, and sustainable
                growth. We are committed to elevating the standard of culinary operations across the
                continent.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-10 w-10 text-[#D4AF37]" />
                <h2 className="text-3xl font-bold text-[#003366]">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be Africa's most trusted culinary consulting partner, recognized for transforming
                food businesses into models of efficiency, quality, and customer satisfaction. We
                envision a thriving African hospitality industry where every kitchen operates at its
                full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#003366]">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Chef-led experts with real-world experience in hospitality operations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#003366] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#003366]">{member.name}</h3>
                <p className="text-[#D4AF37] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#003366]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow"
                >
                  <Icon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-[#003366]">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Transform Your Business Together
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Partner with Africa's leading culinary consultants and unlock your business's full
            potential.
          </p>
          <a
            href="https://wa.me/2349027966479"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
