import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  'Bezpłatna analiza Twoich potrzeb',
  'Rekomendacje dopasowane do budżetu',
  'Wstępna wycena projektu',
  'Odpowiedzi na wszystkie pytania',
  'Bez zobowiązań',
];

const ConsultationPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Zgłoszenie wysłane!',
      description: 'Skontaktujemy się z Tobą, aby potwierdzić termin konsultacji.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Umów konsultację - GishDev | Bezpłatna rozmowa o Twoim projekcie</title>
        <meta 
          name="description" 
          content="Umów bezpłatną konsultację z GishDev. Porozmawiamy o Twoim projekcie strony internetowej, sklepu e-commerce lub automatyzacji AI." 
        />
        <meta name="keywords" content="konsultacja strony internetowe, bezpłatna wycena, rozmowa o projekcie web" />
        <link rel="canonical" href="https://gishdev.pl/konsultacja" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <section className="py-32 relative">
            <div className="absolute inset-0 section-gradient" />
            
            <div className="container-section relative z-10">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left - Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
                    Bezpłatna konsultacja
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-6">
                    Porozmawiajmy o{' '}
                    <span className="text-gradient">Twoim projekcie</span>
                  </h1>
                  <p className="text-muted-foreground text-lg mb-10">
                    Umów 30-minutową rozmowę, podczas której omówimy Twoje potrzeby, 
                    odpowiemy na pytania i zaproponujemy najlepsze rozwiązanie.
                  </p>

                  {/* Benefits */}
                  <div className="space-y-4 mb-10">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Meeting Details */}
                  <div className="glass-card p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Czas trwania</div>
                        <div className="text-sm text-muted-foreground">30 minut</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Video className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Forma spotkania</div>
                        <div className="text-sm text-muted-foreground">Online (Google Meet / Zoom)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Dostępność</div>
                        <div className="text-sm text-muted-foreground">Pon-Pt, 9:00-18:00</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12">
                    <h2 className="text-2xl font-bold font-space mb-6">
                      Zarezerwuj termin
                    </h2>

                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Imię i nazwisko *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Jan Kowalski"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Firma
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Nazwa firmy"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="jan@firma.pl"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="+48 123 456 789"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                            Preferowany dzień
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                            Preferowana godzina
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          >
                            <option value="">Wybierz godzinę</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          O czym chcesz porozmawiać?
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                          placeholder="Krótko opisz swój projekt lub pytania..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="xl"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Rezerwowanie...'
                        ) : (
                          <>
                            Zarezerwuj konsultację
                            <Calendar className="w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;
