import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Landing Page',
    price: 'od 1 500',
    description: 'Strona lądowania idealna do kampanii marketingowych.',
    features: [
      'Responsywny design',
      'Formularz kontaktowy',
      'Optymalizacja SEO',
      'Integracja z analytics',
      'Certyfikat SSL',
    ],
    popular: false,
  },
  {
    name: 'Strona WWW',
    price: 'od 3 000',
    description: 'Pełnowymiarowa strona firmowa z wieloma podstronami.',
    features: [
      'Do 10 podstron',
      'System CMS',
      'Blog',
      'Galeria / Portfolio',
      'Integracje social media',
      'Szkolenie z obsługi',
    ],
    popular: true,
  },
  {
    name: 'Sklep internetowy',
    price: 'od 5 000',
    description: 'E-commerce z pełną funkcjonalnością sprzedażową.',
    features: [
      'Nieograniczona liczba produktów',
      'System płatności',
      'Panel administracyjny',
      'Integracje kurierskie',
      'Automatyzacje zamówień',
      'Wsparcie techniczne',
    ],
    popular: false,
  },
  {
    name: 'Automatyzacja AI',
    price: 'od 2 000',
    description: 'Wdrożenie AI do automatyzacji procesów biznesowych.',
    features: [
      'Analiza potrzeb',
      'Chatbot AI',
      'Integracje z narzędziami',
      'Automatyzacja workflow',
      'Generowanie treści',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="cennik" className="py-32 relative">
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
            Cennik
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-6">
            Orientacyjne{' '}
            <span className="text-gradient">ceny usług</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Każdy projekt jest wyceniany indywidualnie po rozmowie. 
            Poniższe ceny to orientacyjne widełki dla standardowych realizacji.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-card-hover p-8 flex flex-col ${
                plan.popular ? 'border-primary/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Popularne
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-semibold font-space mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold font-space text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">PLN</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/konsultacja" className="w-full">
                <Button
                  variant={plan.popular ? 'hero' : 'outline'}
                  className="w-full"
                >
                  Wyceń projekt
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-space mb-4">
              Potrzebujesz niestandardowego rozwiązania?
            </h3>
            <p className="text-muted-foreground mb-6">
              Każdy projekt jest inny. Opowiedz nam o swoich potrzebach, 
              a przygotujemy indywidualną wycenę.
            </p>
            <Link to="/konsultacja">
              <Button variant="hero" size="lg">
                Uzyskaj indywidualną wycenę
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
