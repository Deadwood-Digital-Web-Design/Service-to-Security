import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { CheckSquare, Download } from 'lucide-react';
import { useState } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';

const checklistItems = [
  'Verify your Social Security work history (40 quarters minimum)',
  'Confirm your Initial Enrollment Period dates (3 months before/after turning 65)',
  'List all current medications with dosages and pharmacy preferences',
  'Gather current insurance information (employer, VA, TRICARE, Marketplace)',
  'Review your doctors and confirm they accept Medicare',
  'Research Medicare Advantage vs. Original Medicare + Medigap options',
  'Compare Part D prescription drug plans for your specific medications',
  'Understand premium costs for Part B and any supplemental plans',
  'Check for late enrollment penalties (Part B and Part D)',
  'Set up your Medicare.gov account and review your Medicare & You handbook',
  'Schedule a consultation with a certified Medicare specialist',
  'Prepare questions about coverage gaps, dental, vision, and hearing',
];

const Checklist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { handleSubmit, sending, error } = useLeadForm('Medicare checklist request', () => setSubmitted(true));

  return (
    <PageLayout>
      <HeroSection
        title="MEDICARE CHECKLIST"
        subtitle="Everything you need to prepare for Medicare enrollment -- organized, clear, and ready to use."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">YOUR MEDICARE PREPARATION CHECKLIST</h2>
              <div className="space-y-3">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-28 bg-blue-600 rounded-lg p-6 text-white">
                <Download className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Download the Full Checklist</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get a printable PDF version of this checklist, plus additional tips and timeline guidance.
                </p>
                {submitted ? (
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="font-semibold">Thank you! We'll email your copy shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                    {error && <p role="alert" className="text-sm font-semibold text-white bg-red-700 rounded p-2">{error}</p>}
<button type="submit" disabled={sending} className="disabled:opacity-60 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition">
                      {sending ? 'Sending...' : 'Send Me the Checklist'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Checklist;
