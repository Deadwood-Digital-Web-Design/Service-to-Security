import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Phone, Mail, MessageSquare, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const { handleSubmit, sending, error } = useLeadForm('Contact Us form', () => setSubmitted(true));
  return (
    <PageLayout>
      <HeroSection
        title="CONTACT US"
        subtitle="Ready to secure your retirement? We're here to help answer your questions and guide you forward."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-8">GET IN TOUCH</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 text-lg mb-1">Phone</h3>
                    <a href="tel:816-248-1100" className="text-gray-700 hover:text-blue-600 transition text-lg">
                      816-248-1100
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 text-lg mb-1">Text Message</h3>
                    <a href="sms:816-248-1100" className="text-gray-700 hover:text-blue-600 transition text-lg">
                      816-248-1100
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Text us anytime for quick questions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 text-lg mb-1">Email</h3>
                    <a href="mailto:dylant5323@gmail.com" className="text-gray-700 hover:text-blue-600 transition">
                      dylant5323@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 text-lg mb-1">Location</h3>
                    <p className="text-gray-700">Trenton, Missouri</p>
                    <a href="/contact/locations" className="text-blue-600 hover:underline text-sm">
                      View service area →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 text-lg mb-1">Office Hours</h3>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">PREFER TO MEET IN PERSON?</h3>
                <p className="text-gray-700 mb-4">
                  We offer both in-office and virtual consultations. Schedule a meeting that works best for you.
                </p>
                <a
                  href="/contact/consultation"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition"
                >
                  Schedule Appointment
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white border-2 border-blue-600 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">SEND US A MESSAGE</h2>
              
              {submitted ? (
                <div className="bg-blue-50 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">Thank you for reaching out. We'll respond within one business day.</p>
                </div>
              ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    placeholder="(816) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    What can we help you with? *
                  </label>
                  <select
                    id="interest"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  >
                    <option value="">Select a topic...</option>
                    <option value="medicare">Medicare Planning</option>
                    <option value="retirement">Retirement Income Planning</option>
                    <option value="life">Life Insurance</option>
                    <option value="ltc">Long-Term Care Planning</option>
                    <option value="social-security">Social Security Optimization</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none"
                    placeholder="Tell us about your situation or what questions you have..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="veteran"
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="veteran" className="text-sm text-gray-700">
                    I am a veteran or active military member
                  </label>
                </div>

                {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
<button
                  type="submit" disabled={sending}
                  className="disabled:opacity-60 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-lg transition transform hover:scale-105"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you consent to be contacted by Service to Security. We respect your privacy and will never share your information.
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-500">
        <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">READY TO TAKE THE NEXT STEP?</h2>
          <p className="text-blue-50 text-lg mb-8">
            Don't leave your retirement to chance. Let's build a comprehensive defense plan for your financial future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:816-248-1100"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-lg transition hover:bg-blue-50"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="/contact/consultation"
              className="inline-flex items-center gap-2 bg-red-500 text-white font-bold px-8 py-4 rounded-lg transition hover:bg-red-600"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
