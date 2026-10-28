import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const { handleSubmit, sending, error } = useLeadForm('Contact form', () => setSubmitted(true));

  return (
    <PageLayout>
      <HeroSection
        title="CONTACT US"
        subtitle="We're here to help you navigate Medicare, retirement planning, and financial security."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">GET IN TOUCH</h2>

              <div className="space-y-6">
                <a href="tel:816-248-1100" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600">Phone</h3>
                    <p className="text-gray-700">816-248-1100</p>
                  </div>
                </a>

                <a href="mailto:mthomas@krs.insure" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition">
                    <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600">Email</h3>
                    <p className="text-gray-700">mthomas@krs.insure</p>
                  </div>
                </a>

                <a href="sms:816-248-1100" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition">
                    <MessageSquare className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600">Text</h3>
                    <p className="text-gray-700">816-248-1100</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: By appointment</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-blue-50 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">Thank you for reaching out. We'll respond within one business day.</p>
                </div>
              ) : (
                <div className="bg-white border-2 border-blue-200 rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-blue-600 mb-2">First Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-blue-600 mb-2">Last Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Email <span className="text-red-500">*</span></label>
                      <input type="email" className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Subject <span className="text-red-500">*</span></label>
                      <select className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" required>
                        <option value="">Select a topic</option>
                        <option>Medicare Questions</option>
                        <option>Retirement Planning</option>
                        <option>Long-Term Care</option>
                        <option>Schedule Consultation</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Message <span className="text-red-500">*</span></label>
                      <textarea rows={4} className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none" required />
                    </div>
                    {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
<button type="submit" disabled={sending} className="disabled:opacity-60 w-full bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-4 rounded-lg transition">
                      {sending ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
