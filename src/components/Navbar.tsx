import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktopDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDesktopDropdown(null), 150);
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <nav className="w-full bg-red-500 shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-white">
                <img
                  src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/3339.jpg"
                  alt="Service To Security"
                  className="h-16 w-auto"
                  crossOrigin="anonymous"
                />
              </a>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* About */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm">
                About
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDesktopDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "about" && (
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

            {/* Medicare */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("medicare")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm">
                Medicare
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDesktopDropdown === "medicare" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "medicare" && (
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

            {/* Retirement Planning */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("retirement")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm">
                Retirement Planning
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDesktopDropdown === "retirement" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "retirement" && (
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

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm transition">
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDesktopDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "resources" && (
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

            {/* Contact */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-white font-semibold text-sm">
                Contact
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDesktopDropdown === "contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "contact" && (
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

            {/* Desktop Phone Button */}
            <a
              href="tel:816-248-1100"
              className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-bold text-sm text-white transition-all hover:bg-red-400"
            >
              <Phone className="h-4 w-4" />
              816-248-1100
            </a>
          </div>

          {/* Mobile Menu Button */}
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
              {/* About */}
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

              {/* Medicare */}
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

              {/* Retirement */}
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

              {/* Resources */}
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

              {/* Contact */}
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

              {/* Mobile Phone Button */}
              <a
                href="tel:816-248-1100"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-400"
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
  );
};

export default Navbar;
