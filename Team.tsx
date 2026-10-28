import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Shield, Award, Heart } from 'lucide-react';

const Team = () => (
  <PageLayout>
    <HeroSection
      title="MEET THE TEAM"
      subtitle="Dedicated professionals committed to securing your financial future with honor and integrity."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-blue-600 overflow-hidden shadow-xl">
              <img
                src="/images/mike-thomas.webp"
                alt="Michael Thomas"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-2">Michael Thomas</h2>
            <p className="text-red-500 font-semibold mb-4">RICP® | CLTC | MMC</p>
            <p className="text-gray-700 mb-4">
              Michael Thomas is the founder of Service to Security and brings a unique combination of military discipline and financial expertise to every client relationship. With specialized certifications in Retirement Income Certified Professional (RICP®), Certified Long-Term Care (CLTC), and Medicare Masters Certified (MMC), Michael provides comprehensive guidance for retirees and pre-retirees.
            </p>
            <p className="text-gray-700 mb-4">
              His mission-driven approach ensures every client receives personalized strategies built on education, transparency, and trust. Michael is passionate about serving veterans and their families, bringing the same dedication to financial planning that defined his commitment to service.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Retirement Income Certified Professional', 'Certified Long-Term Care', 'Medicare Masters Certified'].map((cert) => (
                <span key={cert} className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <h2 className="text-3xl font-bold text-white text-center mb-10">OUR VALUES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield, title: 'Integrity', desc: 'We do what\'s right for our clients -- always.' },
            { icon: Award, title: 'Excellence', desc: 'We pursue continuous education and the highest professional standards.' },
            { icon: Heart, title: 'Service', desc: 'We serve our clients like family, with genuine care and commitment.' },
          ].map((item) => (
            <div key={item.title} className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-white/50 bg-white/10 flex items-center justify-center">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl lg:max-w-6xl xl:max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">GROWING OUR TEAM</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          As Service to Security continues to grow, we're building a team of professionals who share our commitment to service, integrity, and client-first planning. Stay tuned for new team members joining the mission.
        </p>
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600 inline-block">
          <p className="text-blue-700 font-semibold italic">"Your Future. My Mission."</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Team;
