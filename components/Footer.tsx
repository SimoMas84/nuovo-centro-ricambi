import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

/* ============================================
   Type Definitions
   ============================================ */
interface NavLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

/* ============================================
   Footer Component
   ============================================ */
export default function Footer() {
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/prodotti", label: "Prodotti" },
    { href: "/contatti", label: "Contatti" },
  ];

  const socialLinks: SocialLink[] = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ];

  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ============================================
              Company Info
              ============================================ */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">NCR</h3>
            <p className="text-sm text-background/80">
              Nuovo Centro Ricambi <br />
              Il vostro partner di fiducia per ricambi di veicoli commerciali e
              industriali.
            </p>
          </div>

          {/* ============================================
              Quick Links
              ============================================ */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigazione</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/80 hover:text-background hover:translate-x-1 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ============================================
              Contact Info
              ============================================ */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-background/80" />
                <p className="text-sm text-background/80">
                  Via Esempio 123
                  <br />
                  00100 Roma, Italia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-background/80" />
                <p className="text-sm text-background/80">+39 06 1234 5678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-background/80" />
                <p className="text-sm text-background/80">
                  info@ncr-ricambi.it
                </p>
              </div>
            </div>
          </div>

          {/* ============================================
              Social Media
              ============================================ */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Seguici</h4>
            <div className="flex gap-4">
              {socialLinks.map((social: SocialLink) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================
            Copyright
            ============================================ */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/75">
            &copy; {currentYear} NCR Nuovo Centro Ricambi. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
