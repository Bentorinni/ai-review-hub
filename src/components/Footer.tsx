import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GishDevLogo from '@/assets/GishDevLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      {/* CTA Section */}
      <div className="container-section py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-6">
              Gotowy na{' '}
              <span className="text-gradient">nowy projekt?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc 
              rozwinąć Twój biznes w internecie.
            </p>
            <Link to="/konsultacja">
              <Button variant="hero" size="xl">
                Umów konsultację
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="container-section py-12 border-t border-border">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <GishDevLogo />
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Tworzymy nowoczesne strony internetowe, sklepy e-commerce i automatyzacje AI. 
              Twój biznes w sieci zaczyna się od nas.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>NIP: 000000000</p>
              <p>REGON: 000000000</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold font-space mb-4">Usługi</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link to="/#uslugi" className="hover:text-primary transition-colors">Strony WWW</Link></li>
              <li><Link to="/#uslugi" className="hover:text-primary transition-colors">Sklepy internetowe</Link></li>
              <li><Link to="/#uslugi" className="hover:text-primary transition-colors">Automatyzacje AI</Link></li>
              <li><Link to="/#uslugi" className="hover:text-primary transition-colors">Landing Page</Link></li>
              <li><Link to="/#uslugi" className="hover:text-primary transition-colors">SEO</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold font-space mb-4">Firma</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/opinie" className="hover:text-primary transition-colors">Opinie</Link></li>
              <li><Link to="/cennik" className="hover:text-primary transition-colors">Cennik</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link to="/konsultacja" className="hover:text-primary transition-colors">Umów konsultację</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-section py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} GishDev. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-primary transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
