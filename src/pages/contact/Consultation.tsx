import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Calendar, Video, MapPin, Phone, Check } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useLeadForm } from '@/hooks/useLeadForm';

const Consultation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    meetingType: '',
    preferredDate: '',
    preferredTime: '',
    topics: [] as string[],
    notes: '',
    isVeteran: false
  });

  const handleCheckboxChange = (topic: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      topics: checked 
        ? [...prev.topics, topic]
        : prev.topics.filter(t => t !== topic)
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const { handleSubmit, sending, error } = useLeadForm(
    'Consultation request',
    () => setSubmitted(true),
    () =>
      Object.fromEntries(
        Object.entries({
          Name: `${formData.firstName} ${formData.lastName}`.trim(),
          Email: formData.email,
          Phone: formData.phone,
          'Meeting Preference': formData.meetingType,
          'Preferred Date': formData.preferredDate,
          'Preferred Time': formData.preferredTime,
          'Topics of Interest': formData.topics.join(', '),
          'Veteran or Active Military': formData.isVeteran ? 'Yes' : 'No',
          'Additional Notes': formData.notes,
        }).filter(([, v]) => v),
      ),
    true,
  );

  return (
  <PageLayout>
    <HeroSection
      title="REQUEST A CONSULTATION"
      subtitle="Schedule a complimentary, no-obligation consultation to discuss your retirement and insurance needs."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">In-Person</h3>
            <p className="text-gray-700">Meet at our Trenton office or a location convenient for you</p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">Virtual</h3>
            <p className="text-gray-700">Connect via video call from the comfort of your home</p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">By Phone</h3>
            <p className="text-gray-700">Discuss your needs over a scheduled phone consultation</p>
          </div>
        </div>

        <div className="mb-12 bg-blue-500 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">WHAT TO EXPECT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Comprehensive Assessment</h4>
                <p className="text-blue-100">We'll review your current situation, goals, and concerns</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Education-First Approach</h4>
                <p className="text-blue-100">We explain options clearly so you can make informed decisions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Personalized Recommendations</h4>
                <p className="text-blue-100">Tailored strategies based on your unique needs and budget</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">No Pressure Environment</h4>
                <p className="text-blue-100">Take your time to consider options - we're here to help, not push</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Schedule Form */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6" id="consultation">SCHEDULE YOUR CONSULTATION</h2>
            
            {submitted ? (
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Consultation Requested!</h3>
                <p className="text-gray-700">Thank you. We'll contact you within 24 hours to confirm your appointment.</p>
              </div>
            ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
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
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="meetingType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Meeting Type *
                </label>
                <select
                  id="meetingType"
                  required
                  value={formData.meetingType}
                  onChange={(e) => setFormData({...formData, meetingType: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                >
                  <option value="">Select meeting type...</option>
                  <option value="In-Person Meeting">In-Person Meeting</option>
                  <option value="Virtual Video Call">Virtual Video Call</option>
                  <option value="Phone Consultation">Phone Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topics" className="block text-sm font-semibold text-gray-700 mb-2">
                  Topics of Interest * (Select all that apply)
                </label>
                <div className="space-y-2 p-4 border-2 border-gray-300 rounded-lg">
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={(e) => handleCheckboxChange('Medicare Planning', e.target.checked)}
                    />
                    <span className="text-gray-700">Medicare Planning</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={(e) => handleCheckboxChange('Retirement Income Planning', e.target.checked)}
                    />
                    <span className="text-gray-700">Retirement Income Planning</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={(e) => handleCheckboxChange('Life Insurance', e.target.checked)}
                    />
                    <span className="text-gray-700">Life Insurance</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={(e) => handleCheckboxChange('Long-Term Care Planning', e.target.checked)}
                    />
                    <span className="text-gray-700">Long-Term Care Planning</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={(e) => handleCheckboxChange('Social Security Optimization', e.target.checked)}
                    />
                    <span className="text-gray-700">Social Security Optimization</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none"
                  placeholder="Any specific questions or concerns you'd like to discuss?"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="veteran"
                  checked={formData.isVeteran}
                  onChange={(e) => setFormData({...formData, isVeteran: e.target.checked})}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="veteran" className="text-sm text-gray-700">
                  I am a veteran or active military member
                </label>
              </div>

              {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
<button
                type="submit" disabled={sending}
                className="disabled:opacity-60 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {sending ? 'Sending...' : 'Request Consultation'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                After submitting, we'll contact you within 24 hours to confirm your appointment
              </p>
            </form>
            )}
          </div>

          {/* What to Bring */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">PREPARING FOR YOUR CONSULTATION</h2>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">HELPFUL DOCUMENTS (if available)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Current Medicare card (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>List of current medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Social Security statement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Existing life insurance policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Retirement account statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>DD-214 (for veterans)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Note:</strong> Don't worry if you don't have everything. We can still have a productive conversation about your needs and goals.
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-600 mb-3">QUESTIONS TO THINK ABOUT</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• What are your retirement income sources?</li>
                <li>• What are your healthcare concerns?</li>
                <li>• Do you have family members depending on you?</li>
                <li>• What are your legacy goals?</li>
                <li>• What keeps you up at night financially?</li>
              </ul>
            </div>

            <div className="mt-6 p-6 bg-blue-600 rounded-lg text-white text-center">
              <h3 className="text-xl font-bold mb-2">PREFER TO CALL?</h3>
              <p className="text-blue-100 mb-4">Talk to us directly to schedule your consultation</p>
              <a
                href="tel:816-248-1100"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                <Phone className="w-5 h-5" />
                816-248-1100
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
  );
};

export default Consultation;
