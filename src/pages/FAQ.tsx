import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What types of businesses do you work with?',
      answer:
        'We work with a wide range of food and hospitality businesses across Africa, including restaurants, hotels, catering companies, cafes, bakeries, food trucks, cloud kitchens, and emerging food brands. Whether you are a startup or an established business, we tailor our services to meet your specific needs.',
    },
    {
      question: 'Do you offer remote consultations?',
      answer:
        'Yes! We offer both on-site and remote consulting services. Remote consultations are particularly effective for initial assessments, menu engineering, brand strategy, and follow-up coaching. For services like kitchen design, operations audits, and hands-on training, we typically recommend on-site visits for the best results.',
    },
    {
      question: 'How long does a typical audit take?',
      answer:
        'A comprehensive restaurant operations audit typically takes 2-3 days, depending on the size and complexity of your operation. This includes observation during peak and off-peak hours, staff interviews, documentation review, and data analysis. We then provide a detailed report with actionable recommendations within 5-7 business days.',
    },
    {
      question: 'Can you help with kitchen staff recruitment?',
      answer:
        'While our primary focus is on consulting and training existing teams, we can provide guidance on recruitment strategies, help you develop job descriptions, and advise on skills assessment during the hiring process. For hands-on recruitment, we can recommend trusted partners through our network.',
    },
    {
      question: "What's your consulting process like?",
      answer:
        'Our process typically begins with an initial consultation to understand your goals and challenges. We then conduct a thorough assessment, develop a customized action plan, and work hands-on with your team to implement improvements. We provide ongoing support and follow-up to ensure sustainable results. Every engagement is tailored to your specific needs.',
    },
    {
      question: 'How much do your services cost?',
      answer:
        'Our fees vary depending on the scope and duration of the project, the type of service, and your location. We offer flexible packages and can work within various budget ranges. Book a free consultation call, and we will provide you with a customized quote based on your specific needs and goals.',
    },
    {
      question: 'How quickly can you start working with us?',
      answer:
        'We can typically begin an engagement within 1-2 weeks of your initial consultation, depending on our current project schedule and your availability. For urgent needs, we may be able to accommodate faster timelines. Contact us to discuss your specific timeline requirements.',
    },
    {
      question: 'Do you provide ongoing support after the initial consultation?',
      answer:
        'Yes! We believe in building long-term partnerships with our clients. After the initial project, we offer ongoing support packages, periodic check-ins, and are always available for follow-up questions. Many of our clients work with us on a retainer basis for continuous improvement and growth.',
    },
    {
      question: 'What makes Chefs Consult Africa different from other consultants?',
      answer:
        'Our consultants are experienced chefs who have worked in real kitchens and understand the day-to-day challenges you face. We focus on practical, implementable solutions rather than just theoretical recommendations. We also have deep expertise in the African hospitality landscape and understand the unique context and opportunities of operating in this market.',
    },
    {
      question: 'Can you help with menu development for specific cuisines?',
      answer:
        'Absolutely! Our team has experience with a wide range of cuisines, including African, Continental, Asian, and fusion concepts. We work with you to develop menus that reflect your brand identity, appeal to your target market, and are operationally feasible and profitable.',
    },
    {
      question: 'Do you offer training certification programs?',
      answer:
        'We provide comprehensive training programs and can prepare your team for food safety certifications. While we do not directly issue certifications, we work with accredited partners to ensure your staff can obtain necessary credentials. We also provide certificates of completion for our training programs.',
    },
    {
      question: 'What if I am not sure which service I need?',
      answer:
        'No problem! Book a free consultation call with us. We will discuss your business, challenges, and goals, and help you identify the best service or combination of services to meet your needs. We are here to guide you through the process and ensure you get the support that will have the greatest impact.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and how we can help your
            business.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200 hover:border-[#D4AF37] transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#003366] pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#003366]">Didn't Find Your Answer?</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We're here to help! Reach out to us directly and we'll be happy to answer any additional
            questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2349027966479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="mailto:chefsconsult.ng@gmail.com"
              className="inline-flex items-center justify-center space-x-2 bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-lg font-semibold hover:bg-[#C5A028] transition-colors"
            >
              <span>Send us an Email</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Book a free consultation to discuss your needs and discover how we can help.
          </p>
          <a
            href="/booking"
            className="inline-block bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all duration-300 transform hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
