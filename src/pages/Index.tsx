import {
  Shield,
  Users,
  Clock,
  Search,
  Target,
  ShieldCheck,
  TrendingUp,
  Heart as HeartIcon,
  Umbrella,
  Phone,
  Menu,
  X,
  House,
  ChevronDown,
} from "lucide-react";

import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { usePageMeta } from "@/hooks/usePageMeta";
import MedicareDisclaimer from "@/components/MedicareDisclaimer";


const Index = () => {
  usePageMeta();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const navigationMenu = {
    about: [
      { name: "Our Story", path: "/about/our-story" },
      { name: "Our Team", path: "/about/team" },
      { name: "Why Choose Us", path: "/about/why-choose-us" },
    ],
    medicare: [
      { name: "Medicare Basics", path: "/medicare/basics" },
      { name: "Medicare Supplement", path: "/medicare/supplement" },
      { name: "Medicare Advantage", path: "/medicare/advantage" },
      { name: "Part D Prescription", path: "/medicare/part-d" },
    ],
    retirement: [
      { name: "Retirement Income", path: "/retirement/income" },
      { name: "Estate Planning", path: "/retirement/estate-planning" },
      { name: "Life Insurance", path: "/retirement/life-insurance" },
      { name: "Annuities", path: "/retirement/annuities" },
      { name: "Long-Term Care", path: "/retirement/long-term-care" },
    ],
    resources: [
      { name: "Information", path: "/resources/information" },
      { name: "FAQ", path: "/resources/faq" },
      { name: "Medicare Guide", path: "/resources/medicare-guide" },
    ],
    contact: [
      { name: "Contact Us", path: "/contact/us" },
      { name: "Request Consultation", path: "/contact/consultation" },
      { name: "Locations", path: "/contact/locations" },
    ],
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#4E54C8] to-[#A8C0FF] flex flex-col">
      <nav className="w-full bg-red-500 shadow-lg">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-white">
                <img
                  src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/3339.jpg"
                  alt="Service To Security"
                  className="h-16 w-auto"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-5 py-4 text-white font-semibold text-sm">
                  About
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "about" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.about.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("medicare")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm">
                  Medicare
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "medicare" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "medicare" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.medicare.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("retirement")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm">
                  Retirement Planning
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "retirement" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "retirement" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.retirement.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm transition">
                  Resources
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "resources" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.resources.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("contact")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm">
                  Contact
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "contact" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "contact" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.contact.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="tel:816-248-1100"
                className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-bold text-sm text-white transition-all hover:bg-red-400"
              >
                <Phone className="h-4 w-4" />
                816-248-1100
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-white transition hover:bg-blue-800/50 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="mt-2 rounded-xl bg-red-500/60 p-3 shadow-inner">
                <div className="border-b border-blue-400/50 pb-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "about" ? null : "about")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    About
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "about" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.about.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-b border-blue-400/50 pb-2 pt-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "medicare" ? null : "medicare")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    Medicare
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "medicare" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "medicare" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.medicare.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-b border-blue-400/50 pb-2 pt-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "retirement" ? null : "retirement")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    Retirement Planning
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "retirement" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "retirement" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.retirement.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-b border-blue-400/50 pb-2 pt-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "resources" ? null : "resources")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    Resources
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "resources" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "resources" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.resources.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pb-2 pt-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "contact" ? null : "contact")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    Contact
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "contact" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "contact" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.contact.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="tel:816-248-1100"
                  className=" flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-400"
                  onClick={closeMobileMenu}
                >
                  <Phone className="h-4 w-4" />
                  816-248-1100
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <img
                src="/images/mike-thomas.webp"
                alt="Michael Thomas"
                className="rounded-lg shadow-lg w-48 h-48 object-cover object-top mx-auto border-4 border-blue-600"
              />
            </div>
            <h2 className="text-4xl font-bold text-blue-600 mb-3">Michael Thomas</h2>
            <p className="text-xl font-semibold text-red-500 italic mb-6">
              YourFutureMyMission!
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-red-500 font-bold uppercase tracking-wider mb-3">THE MISSION</p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              FROM SERVICE TO SECURITY
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold text-red-500">
                You spent decades working, planning, and building a life. Retirement is the time to protect it.
              </span>{" "}
              <span className="text-blue-600">
                At Service to Security, we help retirees turn years of hard work into lasting financial security. Through thoughtful planning and protection strategies, we focus on protecting your retirement income, your family’s future, and the legacy you want to leave behind.
              </span>
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Because after a {" "}
              <span className="font-bold text-blue-600">lifetime</span> of work, your future deserves to be secure.
            </p>
            <div className="border-l-4 border-red-500 pl-6 py-2 bg-blue-50">
              <p className="text-xl font-bold text-blue-700">
                Your future is our mission. We stand guard over what you've earned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="who-we-serve" className="py-16 bg-red-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">
            WHO WE SERVE
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-blue-600" />
          </div>
          <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto">
            Mission-focused financial protection for those who served and their families
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40 hover:shadow-lg cursor-pointer">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">RETIREES</h3>
              <p className="text-blue-50">
                Protect your retirement income and preserve your legacy
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40 hover:shadow-lg cursor-pointer">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">TURNING 65 SOON</h3>
              <p className="text-blue-50">
                Navigate Medicare decisions with confidence and clarity
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40 hover:shadow-lg cursor-pointer">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">VETERANS</h3>
              <p className="text-blue-50">
                Honoring those who served with specialized retirement strategies
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40 hover:shadow-lg cursor-pointer">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">FAMILIES PLANNING</h3>
              <p className="text-blue-50">
                Build a secure foundation for your family's financial future
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="defense-plan" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-red-500 font-bold uppercase tracking-wider text-center mb-3">
            OUR PROCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-3">
            THE RETIREMENT DEFENSE PLAN
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-red-500" />
          </div>
          <p className="text-center text-blue-600 text-lg mb-12 max-w-3xl mx-auto">
            A strategic, mission-focused approach to securing your financial future
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
                  <Target className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">ASSESS</h3>
              <p className="text-gray-700">
                Review your financial situation, retirement goals, and healthcare needs
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
                  <Search className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">IDENTIFY GAPS</h3>
              <p className="text-gray-700">
                Pinpoint vulnerabilities in coverage and income streams
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
                  <ShieldCheck className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">FORTIFY</h3>
              <p className="text-gray-700">
                Implement strategic solutions to protect your assets and income
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
                  <TrendingUp className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">MAINTAIN &amp; ADJUST</h3>
              <p className="text-gray-700">
                Ongoing monitoring and strategy adjustments as needed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-blue-500">
        <div className="container mx-auto px-4">
          <p className="text-white font-bold uppercase tracking-wider text-center mb-3">
            PROTECTION STRATEGIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">
            SERVICES
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-red-500" />
          </div>
          <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto">
            Comprehensive defense for every aspect of your retirement
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-4 border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:shadow-lg cursor-pointer">
                <Shield className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">MEDICARE PLANNING</h3>
              <p className="text-red-50">
                Navigate Medicare enrollment with expert guidance. Choose the right coverage
                for your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-4 border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:shadow-lg cursor-pointer">
                <HeartIcon className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">LIFE INSURANCE</h3>
              <p className="text-red-50">
                Protect your loved ones with comprehensive life insurance tailored to your
                family's needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-4 border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:shadow-lg cursor-pointer">
                <Umbrella className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">LONG-TERM CARE</h3>
              <p className="text-red-50">
                Strategic planning to preserve your assets and dignity for potential
                long-term care needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-4 border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:shadow-lg cursor-pointer">
                <TrendingUp className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">RETIREMENT INCOME</h3>
              <p className="text-red-50">
                Build reliable income streams to sustain your lifestyle throughout
                retirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              TRUSTED. CERTIFIED. MISSION-DRIVEN.
            </h2>

            <div className="flex justify-center mb-8">
              <div className="h-1 w-24 bg-blue-600" />
            </div>

            <h3 className="text-3xl font-bold text-blue-100 mb-2">Michael Thomas</h3>
            <p className="text-xl text-blue-50 mb-4">RICP® | CLTC | MMC</p>

            <p className="text-blue-50 text-lg mb-6 max-w-3xl mx-auto">
              With specialized certifications in Retirement Income Certified Professional (RICP®),
              Certified Long-Term Care (CLTC), and Medicare Masters Certified (MMC), Michael Thomas brings
              military-grade precision to financial planning.
            </p>

            <p className="text-blue-50 text-lg italic mb-6">
              Serving veterans and families across Missouri with honor, integrity, and
              unwavering commitment.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-blue-50 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-blue-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-100" />
                </div>
                <span>Licensed Professional</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-blue-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-100" />
                </div>
                <span>Veteran-Focused</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-blue-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-100" />
                </div>
                <span>Mission Driven</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-blue-600 hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded-lg transition transform hover:scale-105">
                  View License
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-white p-4 rounded-lg">
                <div className="flex justify-center">
                  <img
                    src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/368c.webp"
                    alt="Michael Thomas License"
                    className="max-h-[80vh] w-auto object-contain rounded-md"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
    </div>
  );
};

export default Index;
