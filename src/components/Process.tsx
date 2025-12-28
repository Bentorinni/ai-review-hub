import { motion } from 'framer-motion';
import { MessageSquare, Search, Palette, Code, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Konsultacja',
    description: 'Omawiamy Twoje cele, potrzeby i wizję projektu podczas bezpłatnej rozmowy.',
  },
  {
    icon: Search,
    title: 'Analiza potrzeb',
    description: 'Dokładnie analizujemy branżę, konkurencję i określamy najlepsze rozwiązania.',
  },
  {
    icon: Palette,
    title: 'Projekt',
    description: 'Tworzymy makiety i projekt graficzny zgodny z Twoją wizją i najnowszymi trendami.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Programujemy stronę z wykorzystaniem nowoczesnych technologii i najlepszych praktyk.',
  },
  {
    icon: Rocket,
    title: 'Wdrożenie',
    description: 'Uruchamiamy stronę na serwerze, konfigurujemy domenę i certyfikat SSL.',
  },
  {
    icon: HeartHandshake,
    title: 'Opieka i rozwój',
    description: 'Zapewniamy wsparcie techniczne, aktualizacje i rozwijamy projekt według potrzeb.',
  },
];

const Process = () => {
  return (
    <section className="py-32 relative">
      <div className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Proces współpracy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-6">
            Jak{' '}
            <span className="text-gradient">pracujemy</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Przejrzysty proces, który gwarantuje sukces projektu. 
            Od pierwszej rozmowy do gotowego produktu.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`lg:flex items-center gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="glass-card p-8 inline-block lg:block">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Krok {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-space mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-glow pulse-glow" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
