import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { FileText, Download } from 'lucide-react';
import { useState } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';

const guides = [
  { title: 'The Complete Medicare Enrollment Guide', desc: 'Step-by-step walkthrough of the Medicare enrollment process, timelines, and key decisions.', category: 'Medicare' },
  { title: 'Medicare Advantage vs. Medigap: A Comparison Guide', desc: 'A detailed comparison of both options to help you decide which path is right for your healthcare.', category: 'Medicare' },
  { title: 'Social Security Claiming Strategies', desc: 'Explore the pros and cons of filing early, at FRA, or delaying to age 70.', category: 'Retirement' },
  { title: 'Retirement Income Planning Workbook', desc: 'A hands-on workbook to help you map out your income sources, expenses, and withdrawal strategy.', category: 'Retirement' },
  { title: 'Long-Term Care Planning Essentials', desc: 'Understanding your risk, options, and strategies for protecting your assets from care costs.', category: 'Retirement' },
  { title: 'Veterans\' Benefits & Medicare Guide', desc: 'How veterans can coordinate VA benefits with Medicare for comprehensive healthcare coverage.', category: 'Medicare' },
];

const Guides = () => {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { handleSubmit, sending, error } = useLeadForm(
    'Guide request',
    () => {
      setSubmitted(true);
      setSelectedGuide(null);
    },
    () => ({ 'Guide requested': selectedGuide ?? '' }),
  );

  return (
    <PageLayout>
      <HeroSection
        title="DOWNLOADABLE GUIDES"
        subtitle="Free educational resources to help you make informed decisions about Medicare and retirement planning."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition flex flex-col">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-semibold text-red-500 uppercase mb-1">{guide.category}</span>
                <h3 className="text-lg font-bold text-blue-600 mb-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{guide.desc}</p>
                <button
                  onClick={() => { setSelectedGuide(guide.title); setSubmitted(false); }}
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:text-red-500 transition text-sm"
                >
                  <Download className="w-4 h-4" /> Download Guide
                </button>
              </div>
            ))}
          </div>

          {selectedGuide && !submitted && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Download: {selectedGuide}</h3>
                <p className="text-gray-600 text-sm mb-4">Enter your email to receive the free guide.</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  />
                  <div className="flex gap-3">
                    {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
<button type="submit" disabled={sending} className="disabled:opacity-60 flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                      {sending ? 'Sending...' : 'Send Guide'}
                    </button>
                    <button type="button" onClick={() => setSelectedGuide(null)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-lg transition">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {submitted && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
              <p className="text-blue-700 font-semibold">Thank you! We'll email your copy shortly.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Guides;
