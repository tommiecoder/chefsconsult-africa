import { useState } from 'react';
import { Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    service: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const services = [
    'Culinary Consulting',
    'Restaurant Operations Audits',
    'Kitchen Design & Setup',
    'Staff Training & Development',
    'Menu Engineering',
    'Brand Strategy for Food Businesses',
    'General Inquiry',
  ];

  const businessTypes = [
    'Restaurant',
    'Hotel',
    'Catering Company',
    'Cafe/Bakery',
    'Food Truck',
    'Cloud Kitchen',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const { error } = await supabase.from('bookings').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business_name: formData.businessName,
          business_type: formData.businessType,
          service: formData.service,
          preferred_date: formData.preferredDate,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        businessType: '',
        service: '',
        preferredDate: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitError('There was an error submitting your booking. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Booking Request Received!</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Thank you for your interest in Chefs Consult Africa. We've received your booking request
            and will contact you within 24 hours to confirm your consultation.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="bg-[#D4AF37] text-[#003366] px-6 py-3 rounded-lg font-semibold hover:bg-[#C5A028] transition-colors"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 text-[#D4AF37] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Consultation</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Take the first step toward transforming your food business. Schedule a consultation with
            our expert team.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#003366] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#003366] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#003366] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-semibold text-[#003366] mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-semibold text-[#003366] mb-2"
                  >
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#003366] mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-semibold text-[#003366] mb-2"
                >
                  Preferred Consultation Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#003366] mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your needs and goals..."
                ></textarea>
              </div>

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] text-[#003366] py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Prefer to chat first?</p>
            <a
              href="https://wa.me/2349027966479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Message us on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
