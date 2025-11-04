import { useState } from 'react';
import { Mail, MessageCircle, Instagram, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          business_type: formData.businessType,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        businessType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError('There was an error submitting your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have questions or ready to start your culinary transformation? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#003366]">Contact Information</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Reach out to us through any of these channels. We typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:chefsconsult.ng@gmail.com"
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#D4AF37] transition-all group"
                >
                  <Mail className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-[#003366] mb-1">Email</h3>
                    <p className="text-gray-700">chefsconsult.ng@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Send us an email anytime. We'll get back to you soon.
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/2349027966479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#D4AF37] transition-all group"
                >
                  <MessageCircle className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-[#003366] mb-1">WhatsApp</h3>
                    <p className="text-gray-700">+234 902 796 6479</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Get instant responses via WhatsApp chat.
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/chefsconsult_africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#D4AF37] transition-all group"
                >
                  <Instagram className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-[#003366] mb-1">Instagram</h3>
                    <p className="text-gray-700">@chefsconsult_africa</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Follow us for tips, insights, and success stories.
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border-2 border-gray-200">
                  <MapPin className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#003366] mb-1">Service Coverage</h3>
                    <p className="text-gray-700">Serving clients across Africa</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We work with food businesses throughout the continent, offering both on-site
                      and remote consulting services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#003366] to-[#004080] rounded-lg text-white">
                <h3 className="font-bold text-xl mb-3">Quick Connect</h3>
                <p className="mb-4 text-gray-200">
                  For immediate assistance, chat with us on WhatsApp
                </p>
                <a
                  href="https://wa.me/2349027966479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-[#003366]">Send Us a Message</h2>

                {submitSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#003366] mb-3">Message Sent!</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-[#D4AF37] font-semibold hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#003366] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                      />
                    </div>

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
                        <option value="">Select your business type</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Catering Company">Catering Company</option>
                        <option value="Cafe/Bakery">Cafe/Bakery</option>
                        <option value="Food Truck">Food Truck</option>
                        <option value="Cloud Kitchen">Cloud Kitchen</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#003366] mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your business and how we can help..."
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
                      className="w-full bg-[#D4AF37] text-[#003366] py-4 rounded-lg font-bold text-lg hover:bg-[#C5A028] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
