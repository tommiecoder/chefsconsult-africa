import { CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';

interface ServiceDetailProps {
  service: string | null;
  navigate: (page: string, service?: string) => void;
}

export default function ServiceDetail({ service, navigate }: ServiceDetailProps) {
  const serviceData: Record<
    string,
    {
      title: string;
      description: string;
      benefits: string[];
      includes: string[];
      process: string[];
      example: {
        client: string;
        challenge: string;
        solution: string;
        result: string;
      };
    }
  > = {
    'culinary-consulting': {
      title: 'Culinary Consulting',
      description:
        'Our culinary consulting service provides expert guidance to refine your kitchen operations, improve food quality, and elevate your culinary offerings. We work hands-on with your team to implement sustainable improvements that enhance customer satisfaction and operational efficiency.',
      benefits: [
        'Enhanced food quality and consistency',
        'Improved menu appeal and customer satisfaction',
        'Better cost control and waste reduction',
        'Streamlined kitchen operations',
        'Higher staff morale and productivity',
      ],
      includes: [
        'Comprehensive kitchen assessment',
        'Recipe development and standardization',
        'Quality control systems implementation',
        'Cost analysis and optimization strategies',
        'Hands-on training with kitchen staff',
        'Follow-up support and guidance',
      ],
      process: [
        'Initial consultation to understand your goals and challenges',
        'Thorough assessment of current kitchen operations',
        'Development of customized improvement plan',
        'Hands-on implementation with your team',
        'Monitoring and adjustment period',
        'Final review and ongoing support recommendations',
      ],
      example: {
        client: 'Upscale restaurant in Lagos',
        challenge:
          'Inconsistent food quality and customer complaints about portion sizes and taste variations.',
        solution:
          'Implemented standardized recipes, portion control systems, and quality checkpoints throughout the cooking process.',
        result:
          'Customer satisfaction scores increased by 35%, food cost reduced by 12%, and kitchen efficiency improved significantly.',
      },
    },
    'restaurant-audits': {
      title: 'Restaurant Operations Audits',
      description:
        'Our comprehensive operations audits provide a detailed analysis of your entire restaurant operation. We examine everything from kitchen workflows to front-of-house service, identifying inefficiencies and opportunities for improvement that directly impact your bottom line.',
      benefits: [
        'Identify hidden inefficiencies costing you money',
        'Improve overall operational performance',
        'Enhance food safety and compliance',
        'Increase staff productivity',
        'Optimize food and labor costs',
      ],
      includes: [
        'Complete operational assessment',
        'Kitchen workflow and efficiency analysis',
        'Food cost and waste analysis',
        'Staff performance evaluation',
        'Health and safety compliance review',
        'Detailed audit report with actionable recommendations',
      ],
      process: [
        'Pre-audit consultation and goal setting',
        'On-site observation during peak and off-peak hours',
        'Staff interviews and workflow documentation',
        'Financial and operational data analysis',
        'Comprehensive report preparation',
        'Results presentation and implementation planning',
      ],
      example: {
        client: 'Mid-sized hotel restaurant in Abuja',
        challenge:
          'Rising operational costs and declining profitability despite consistent customer traffic.',
        solution:
          'Conducted full operations audit revealing excessive food waste, inefficient scheduling, and opportunities for menu optimization.',
        result:
          'Reduced operational costs by 22%, improved profit margins by 18%, and streamlined workflows resulting in better staff satisfaction.',
      },
    },
    'kitchen-design': {
      title: 'Kitchen Design & Setup',
      description:
        'Whether you are opening a new establishment or renovating an existing kitchen, our design and setup service ensures your kitchen space is optimized for efficiency, safety, and productivity. We consider workflow, equipment placement, and future scalability in every design.',
      benefits: [
        'Optimized kitchen workflow and efficiency',
        'Proper equipment selection for your needs',
        'Compliance with health and safety standards',
        'Future-proof design for business growth',
        'Cost-effective use of available space',
      ],
      includes: [
        'Detailed space planning and layout design',
        'Equipment specification and sourcing guidance',
        'Workflow optimization strategies',
        'Ventilation and utility planning',
        'Health and safety compliance consultation',
        'Project management support during setup',
      ],
      process: [
        'Initial consultation and needs assessment',
        'Space measurement and analysis',
        'Concept design and layout planning',
        'Equipment selection and specification',
        'Final design approval and documentation',
        'Implementation oversight and commissioning support',
      ],
      example: {
        client: 'New restaurant opening in Accra',
        challenge:
          'Limited space requiring efficient design to accommodate diverse menu and high volume expectations.',
        solution:
          'Created multi-functional kitchen layout with strategic equipment placement and efficient workflow zones.',
        result:
          'Successfully launched with kitchen capable of handling 150+ covers per service, with minimal bottlenecks and excellent staff feedback.',
      },
    },
    'staff-training': {
      title: 'Staff Training & Development',
      description:
        'Our hands-on training programs are designed to build skilled, confident kitchen teams that consistently deliver excellence. We focus on practical skills, safety protocols, and creating a culture of continuous improvement within your team.',
      benefits: [
        'Improved staff skills and confidence',
        'Reduced mistakes and food waste',
        'Enhanced food safety compliance',
        'Better team morale and retention',
        'Consistent execution of standards',
      ],
      includes: [
        'Customized training curriculum',
        'Hands-on culinary skills training',
        'Food safety and hygiene certification prep',
        'Leadership and team management training',
        'Standard operating procedures development',
        'Ongoing coaching and support',
      ],
      process: [
        'Training needs assessment',
        'Customized curriculum development',
        'Hands-on training sessions',
        'Skills evaluation and feedback',
        'Certification preparation (where applicable)',
        'Follow-up coaching and reinforcement',
      ],
      example: {
        client: 'Hotel group with multiple properties',
        challenge:
          'Inconsistent service quality across locations due to varying skill levels among kitchen staff.',
        solution:
          'Implemented standardized training program covering culinary techniques, safety protocols, and service standards.',
        result:
          'Achieved consistency across all locations, reduced staff turnover by 40%, and improved customer feedback scores significantly.',
      },
    },
    'menu-engineering': {
      title: 'Menu Engineering',
      description:
        'Our data-driven menu engineering service analyzes your menu performance to maximize profitability while maintaining customer satisfaction. We help you identify your stars, optimize pricing, and design menus that drive both sales and margins.',
      benefits: [
        'Increased profitability per dish',
        'Better understanding of menu performance',
        'Strategic pricing for maximum revenue',
        'Optimized ingredient usage',
        'Enhanced customer satisfaction',
      ],
      includes: [
        'Comprehensive menu analysis',
        'Food cost and profitability review',
        'Sales data analysis and insights',
        'Pricing strategy development',
        'Menu redesign recommendations',
        'Seasonal optimization strategies',
      ],
      process: [
        'Menu and sales data collection',
        'Cost analysis for all menu items',
        'Performance categorization (stars, plow horses, puzzles, dogs)',
        'Strategic recommendations development',
        'Menu redesign and pricing optimization',
        'Implementation support and monitoring',
      ],
      example: {
        client: 'Casual dining restaurant in Nairobi',
        challenge:
          'Large menu with unclear profitability and items not performing to their potential.',
        solution:
          'Analyzed full menu, identified low-margin items, optimized pricing, and strategically featured high-profit dishes.',
        result:
          'Overall profit margin increased by 25%, eliminated 15% of underperforming items, and simplified kitchen operations.',
      },
    },
    'brand-strategy': {
      title: 'Brand Strategy for Food Businesses',
      description:
        'Build a compelling brand identity and market positioning that resonates with your target audience. We help you define your unique value proposition, develop your brand story, and create a strategy that drives customer loyalty and business growth.',
      benefits: [
        'Clear brand identity and positioning',
        'Strong competitive differentiation',
        'Increased customer loyalty',
        'Better marketing effectiveness',
        'Consistent brand experience',
      ],
      includes: [
        'Brand audit and competitive analysis',
        'Target audience research',
        'Brand identity development',
        'Market positioning strategy',
        'Marketing and communication plan',
        'Social media strategy',
      ],
      process: [
        'Discovery session and business analysis',
        'Market and competitor research',
        'Brand strategy development',
        'Identity and messaging creation',
        'Marketing plan development',
        'Implementation guidance and support',
      ],
      example: {
        client: 'Emerging fast-casual chain in Nigeria',
        challenge:
          'Struggling to differentiate in crowded market and build customer loyalty beyond pricing.',
        solution:
          'Developed unique brand positioning around authentic African flavors with modern presentation, created cohesive brand identity.',
        result:
          'Customer retention increased by 50%, social media following grew 300%, and brand recognition significantly improved in target markets.',
      },
    },
  };

  const currentService = service ? serviceData[service] : null;

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Service Not Found</h2>
          <button
            onClick={() => navigate('services')}
            className="text-[#D4AF37] hover:underline flex items-center space-x-2 mx-auto"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Services</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('services')}
            className="flex items-center space-x-2 text-gray-200 hover:text-[#D4AF37] transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Services</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentService.title}</h1>
          <p className="text-xl text-gray-200 max-w-4xl leading-relaxed">
            {currentService.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#003366]">Key Benefits</h2>
              <ul className="space-y-4">
                {currentService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#003366]">What's Included</h2>
              <ul className="space-y-4">
                {currentService.includes.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#003366] text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentService.process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-[#D4AF37] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#003366] text-center">Success Story</h2>
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-[#D4AF37]">
            <div className="mb-6">
              <h3 className="font-bold text-xl text-[#003366] mb-2">Client</h3>
              <p className="text-gray-700">{currentService.example.client}</p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-xl text-[#003366] mb-2">Challenge</h3>
              <p className="text-gray-700 leading-relaxed">{currentService.example.challenge}</p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-xl text-[#003366] mb-2">Our Solution</h3>
              <p className="text-gray-700 leading-relaxed">{currentService.example.solution}</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#003366] mb-2">Results</h3>
              <p className="text-gray-700 leading-relaxed">{currentService.example.result}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Schedule a consultation to discuss how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('booking')}
              className="bg-[#D4AF37] text-[#003366] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
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
