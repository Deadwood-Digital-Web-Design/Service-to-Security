import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';

const Schedule = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', preferredDate: '', notes: '' });

  const { handleSubmit, sending, error } = useLeadForm('Appointment request', () => setSubmitted(true));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageLayout>
      <HeroSection
        title="SCHEDULE APPOINTMENT"
        subtitle="Book your complimentary consultation and take the first step toward securing your financial future."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">WHAT TO EXPECT</h2>
                <div className="space-y-3">
                  {[
                    'A friendly, no-pressure conversation about your needs',
                    'Review of your current coverage and retirement goals',
                    'Clear explanation of your options with pros and cons',
                    'Personalized recommendations based on your situation',
                    'Answers to all your questions -- no rush',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <p className="text-blue-700 font-semibold italic text-sm">"Your Future. My Mission."</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-blue-50 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Appointment Requested!</h3>
                  <p className="text-gray-700">Thank you, {formData.name}. We'll confirm your appointment within 24 hours via email or phone.</p>
                </div>
              ) : (
                <div className="bg-white border-2 border-blue-200 rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Request Your Consultation</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Preferred Date</label>
                      <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-600 mb-2">Notes or Questions</label>
                      <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none" />
                    </div>
                    {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
<button type="submit" disabled={sending} className="disabled:opacity-60 w-full bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-4 rounded-lg transition">
                      {sending ? 'SENDING...' : 'REQUEST APPOINTMENT'}
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

export default Schedule;
