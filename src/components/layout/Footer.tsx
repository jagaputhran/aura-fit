import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "For Tailors", href: "#tailors" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Data Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-charcoal font-display text-xl font-bold">R</span>
              </div>
              <span className="font-display text-2xl font-semibold text-ivory">
                Riva <span className="text-gold">AI</span>
              </span>
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed mb-6">
              AI-powered body measurements for perfectly fitted Indian ethnic wear. 
              Made for every body, designed for elegance.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-ivory/50">Made with ❤️ in India</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-ivory/70 hover:text-ivory transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-ivory/70 hover:text-ivory transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Legal & Privacy</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-ivory/70 hover:text-ivory transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-ivory/5 border border-ivory/10">
              <p className="text-xs text-ivory/60">
                🔒 Your images are deleted immediately after measurement extraction. 
                We never store your photos.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/50 text-sm">
            © {new Date().getFullYear()} Riva AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-ivory/50 text-xs">DPDP Compliant</span>
            <span className="text-ivory/50 text-xs">GDPR Ready</span>
            <span className="text-ivory/50 text-xs">ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
