import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';

const MedicareGuide = () => {
  const [submitted, setSubmitted] = useState(false);
  const { handleSubmit, sending, error } = useLeadForm('Medicare Planning Guide request', () => setSubmitted(true));
  return (
  <PageLayout>
    <HeroSection
      title="MEDICARE PLANNING GUIDE"
      subtitle="Your comprehensive resource for understanding Medicare and making informed enrollment decisions."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center mb-12">
        <div className="inline-block p-8 bg-blue-50 rounded-lg border-2 border-blue-600">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-600 mb-3">DOWNLOAD YOUR FREE MEDICARE GUIDE</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get our comprehensive Medicare planning guide delivered straight to your inbox. Learn about enrollment periods, coverage options, and how to avoid costly penalties.
          </p>
          {submitted ? (
            <p className="text-blue-700 font-semibold">Thank you! We'll email your copy shortly.</p>
          ) : (
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none mb-4"
              required
            />
            {error && <p role="alert" className="text-sm text-red-600 mb-3">{error}</p>}
<button
              type="submit" disabled={sending}
              className="disabled:opacity-60 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {sending ? 'Sending...' : 'Download Free Guide'}
            </button>
          </form>
          )}
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">WHAT'S INCLUDED IN THE GUIDE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Medicare Parts A, B, C, & D explained in plain English",
            "Step-by-step enrollment timeline and deadlines",
            "Medicare Advantage vs. Medicare Supplement comparison",
            "How to avoid late enrollment penalties",
            "Understanding out-of-pocket costs and coverage gaps",
            "Prescription drug plan selection strategies",
            "What to do if you're still working past 65",
            "Special enrollment periods and qualifying events",
            "Medicare and Medicaid coordination",
            "Resources for veterans and low-income assistance",
            "Common Medicare mistakes to avoid",
            "Checklist for your initial enrollment decision"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">QUICK MEDICARE REFERENCE</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Medicare Part A (Hospital Insurance)</h3>
            <p className="text-gray-700 mb-2">
              <strong>Covers:</strong> Inpatient hospital stays, skilled nursing facility care, hospice care, some home health care
            </p>
            <p className="text-gray-700">
              <strong>Cost:</strong> Usually premium-free if you or your spouse paid Medicare taxes for 10+ years
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Medicare Part B (Medical Insurance)</h3>
            <p className="text-gray-700 mb-2">
              <strong>Covers:</strong> Doctor visits, outpatient care, preventive services, medical equipment, ambulance services
            </p>
            <p className="text-gray-700">
              <strong>Cost:</strong> Monthly premium (standard $202.90 in 2026, higher for high earners)
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Medicare Part C (Medicare Advantage)</h3>
            <p className="text-gray-700 mb-2">
              <strong>Covers:</strong> All Part A & B benefits plus usually Part D; often includes extras like dental, vision, hearing
            </p>
            <p className="text-gray-700">
              <strong>Cost:</strong> Varies by plan; some have $0 premium plus your Part B premium
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Medicare Part D (Prescription Drug Coverage)</h3>
            <p className="text-gray-700 mb-2">
              <strong>Covers:</strong> Prescription medications according to plan formulary
            </p>
            <p className="text-gray-700">
              <strong>Cost:</strong> Varies by plan; average ~$40/month; penalty for late enrollment
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Medicare Supplement (Medigap)</h3>
            <p className="text-gray-700 mb-2">
              <strong>Covers:</strong> Out-of-pocket costs that Original Medicare doesn't cover (deductibles, copays, coinsurance)
            </p>
            <p className="text-gray-700">
              <strong>Cost:</strong> Monthly premium varies by plan and location; no network restrictions
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-red-500 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-3">NEED PERSONALIZED GUIDANCE?</h3>
          <p className="text-red-50 mb-6">
            Medicare planning can be complex. Let us help you navigate your options and find the right coverage for your needs and budget.
          </p>
          <a
            href="/contact/consultation"
            className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition"
          >
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
  );
};

export default MedicareGuide;
