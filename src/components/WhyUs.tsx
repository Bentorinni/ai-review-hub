import { motion } from 'framer-motion';
import { Zap, Paintbrush, Bot, Users, Shield, Clock } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Szybkie wdrożenia',
    description: 'Projekty realizujemy sprawnie, bez zbędnych opóźnień. Landing page w 7 dni, pełna strona w 2-3 tygodnie.',
  },
  {
    icon: Paintbrush,
    title: 'Nowoczesny design',
    description: 'Tworzymy strony, które wyróżniają się na tle konkurencji. Unikalne projekty dopasowane do Twojej marki.',
  },
  {
    icon: Bot,
    title: 'Automatyzacje AI',
    description: 'Wdrażamy rozwiązania AI, które oszczędzają Twój czas i automatyzują powtarzalne procesy.',
  },
  {
    icon: Users,
    title: 'Indywidualne podejście',
    description: 'Każdy projekt traktujemy wyjątkowo. Słuchamy Twoich potrzeb i dostosowujemy rozwiązania.',
  },
  {
    icon: Shield,
    title: 'Pełna opieka techniczna',
    description: 'Hosting, aktualizacje, backup — zajmujemy się wszystkim, żebyś mógł skupić się na biznesie.',
  },
  {
    icon: Clock,
    title: 'Dostępność 24/7',
    description: 'W razie problemów reagujemy szybko. Twoja strona jest zawsze pod naszą opieką.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Dlaczego my
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-6">
              Wybieram{' '}
              <span className="text-gradient">GishDev</span>, ponieważ...
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nie jesteśmy kolejną agencją. Łączymy pasję do technologii z praktycznym 
              podejściem biznesowym. Tworzymy strony, które naprawdę działają.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <div className="text-4xl font-bold font-space text-primary mb-2">5.0</div>
                <div className="text-muted-foreground text-sm">Ocena Google</div>
              </div>
              <div className="glass-card p-6">
                <div className="text-4xl font-bold font-space text-accent mb-2">7 dni</div>
                <div className="text-muted-foreground text-sm">Landing Page gotowy</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Advantages Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <advantage.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold font-space mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
