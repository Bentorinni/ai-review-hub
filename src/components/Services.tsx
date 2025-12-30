import { motion } from 'framer-motion';
import { 
  Globe, 
  ShoppingCart, 
  Bot, 
  Rocket, 
  Search, 
  Server,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Strony WWW',
    description: 'Nowoczesne, responsywne strony internetowe zaprojektowane z myślą o konwersji i doświadczeniu użytkownika.',
    features: ['Custom design', 'Responsywność', 'SEO-ready'],
  },
  {
    icon: ShoppingCart,
    title: 'Sklepy internetowe',
    description: 'E-commerce gotowe na sukces — od prostych sklepów po zaawansowane platformy sprzedażowe.',
    features: ['Integracje płatności', 'Panel admina', 'Automatyzacje'],
  },
  {
    icon: Bot,
    title: 'Automatyzacje AI',
    description: 'Wykorzystaj moc sztucznej inteligencji do automatyzacji procesów i zwiększenia efektywności.',
    features: ['Chatboty', 'Generowanie treści', 'Workflow'],
  },
  {
    icon: Rocket,
    title: 'Landing Page',
    description: 'Strony lądowania zoptymalizowane pod konwersję — idealne do kampanii marketingowych.',
    features: ['Szybka realizacja', 'A/B testing', 'Analityka'],
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Pozycjonowanie, które przynosi realne wyniki — więcej ruchu, więcej klientów.',
    features: ['Audyt SEO', 'Optymalizacja', 'Content'],
  },
  {
    icon: Server,
    title: 'Hosting & Opieka',
    description: 'Niezawodny hosting z pełną opieką techniczną — Twoja strona zawsze działa.',
    features: ['99.9% uptime', 'SSL gratis', 'Backup'],
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Nasze usługi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-6">
            Wszystko, czego potrzebujesz{' '}
            <span className="text-gradient">w jednym miejscu</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Od projektu po wdrożenie i opiekę — zapewniamy kompleksową obsługę 
            Twojej obecności w internecie.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold font-space mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center text-primary font-medium group/link">
                <span className="group-hover/link:mr-2 transition-all">Dowiedz się więcej</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/konsultacja">
            <Button variant="hero" size="xl">
              Umów bezpłatną konsultację
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
