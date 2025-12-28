import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Calculator, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProjectType = 'landing' | 'website' | 'ecommerce' | 'custom';
type Feature = 'blog' | 'cms' | 'ai' | 'seo' | 'copywriting' | 'hosting';

const projectTypes: { value: ProjectType; label: string; basePrice: number }[] = [
  { value: 'landing', label: 'Landing Page', basePrice: 1500 },
  { value: 'website', label: 'Strona WWW', basePrice: 3000 },
  { value: 'ecommerce', label: 'Sklep internetowy', basePrice: 5000 },
  { value: 'custom', label: 'Projekt niestandardowy', basePrice: 0 },
];

const features: { value: Feature; label: string; price: number }[] = [
  { value: 'blog', label: 'Blog', price: 500 },
  { value: 'cms', label: 'System CMS', price: 800 },
  { value: 'ai', label: 'Automatyzacje AI', price: 1500 },
  { value: 'seo', label: 'Pakiet SEO', price: 1000 },
  { value: 'copywriting', label: 'Copywriting', price: 800 },
  { value: 'hosting', label: 'Hosting + opieka (rok)', price: 600 },
];

const QuoteCalculator = () => {
  const [projectType, setProjectType] = useState<ProjectType>('website');
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);

  const toggleFeature = (feature: Feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const basePrice = projectTypes.find((p) => p.value === projectType)?.basePrice || 0;
  const featuresPrice = selectedFeatures.reduce(
    (sum, f) => sum + (features.find((feat) => feat.value === f)?.price || 0),
    0
  );
  const totalPrice = basePrice + featuresPrice;

  return (
    <section className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Kalkulator wyceny</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-space mb-4">
              Oblicz orientacyjną{' '}
              <span className="text-gradient">wycenę projektu</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Wybierz typ projektu i dodatkowe funkcje, aby zobaczyć szacunkowy koszt. 
              Pamiętaj, że finalna wycena jest ustalana indywidualnie.
            </p>

            {/* Project Type */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Typ projektu</label>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setProjectType(type.value)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      projectType === type.value
                        ? 'border-primary bg-primary/10 shadow-glow'
                        : 'border-border hover:border-primary/50 glass-card'
                    }`}
                  >
                    <div className="font-medium">{type.label}</div>
                    {type.basePrice > 0 && (
                      <div className="text-sm text-muted-foreground">
                        od {type.basePrice.toLocaleString()} PLN
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Dodatkowe funkcje</label>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <button
                    key={feature.value}
                    onClick={() => toggleFeature(feature.value)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedFeatures.includes(feature.value)
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-accent/50 glass-card'
                    }`}
                  >
                    <div className="font-medium">{feature.label}</div>
                    <div className="text-sm text-muted-foreground">
                      +{feature.price.toLocaleString()} PLN
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Result */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-medium">Orientacyjna wycena</span>
              </div>

              {projectType === 'custom' ? (
                <div className="text-center py-8">
                  <div className="text-2xl font-bold font-space mb-4">
                    Projekt niestandardowy
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Opowiedz nam o swoim projekcie, a przygotujemy indywidualną wycenę.
                  </p>
                </div>
              ) : (
                <>
                  {/* Price Breakdown */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground">
                        {projectTypes.find((p) => p.value === projectType)?.label}
                      </span>
                      <span className="font-medium">
                        {basePrice.toLocaleString()} PLN
                      </span>
                    </div>

                    {selectedFeatures.map((feature) => {
                      const feat = features.find((f) => f.value === feature);
                      return (
                        <div key={feature} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{feat?.label}</span>
                          <span className="font-medium">
                            +{feat?.price.toLocaleString()} PLN
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-end mb-8 pt-4 border-t border-border">
                    <span className="text-lg font-medium">Razem od:</span>
                    <div className="text-right">
                      <div className="text-4xl font-bold font-space text-gradient">
                        {totalPrice.toLocaleString()}
                      </div>
                      <div className="text-muted-foreground">PLN netto</div>
                    </div>
                  </div>
                </>
              )}

              <Button variant="hero" size="xl" className="w-full">
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                * Ceny orientacyjne. Ostateczna wycena po analizie wymagań.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
