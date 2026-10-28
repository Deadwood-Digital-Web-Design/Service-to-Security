import MedicareDisclaimer from './MedicareDisclaimer';

const Footer = () => (
<footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl xl:max-w-7xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Service to Security</h3>
              <p className="mb-2">Powered by Service to Security</p>
              <p className="text-white font-semibold">#YourFutureMyMission!</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">PROTECTION STRATEGIES</h3>
              <ul className="space-y-2">
                <li>Medicare Planning</li>
                <li>Life Insurance</li>
                <li>Long-Term Care Planning</li>
                <li>Retirement Income Strategy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT</h3>
              <p className="mb-2">Michael Thomas</p>
              <p className="mb-2">RICP® | CLTC | MMC</p>

              <p>
                <a href="tel:816-248-1100" className="mb-2 text-white">
                 816-248-1100
                </a>
              </p>

              <p>
                <a
                  href="mailto:mthomas@krs.insure"
                  className="mb-2 text-white"
                >
                  mthomas@krs.insure
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <MedicareDisclaimer />
            <p className="text-sm">© 2026 Service to Security. All rights reserved.</p>
          </div>
        </div>
      </footer>
);

export default Footer;
