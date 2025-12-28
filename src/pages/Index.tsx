import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import QuoteCalculator from '@/components/QuoteCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GishDev - Strony internetowe, Sklepy e-commerce, Automatyzacje AI | Katowice</title>
        <meta 
          name="description" 
          content="Tworzymy nowoczesne strony WWW, sklepy internetowe i automatyzacje AI. Szybkie wdrożenia, indywidualne podejście, pełna opieka techniczna. Katowice i cała Polska." 
        />
        <meta name="keywords" content="strony internetowe, sklepy internetowe, e-commerce, automatyzacje AI, web design, Katowice" />
        <link rel="canonical" href="https://gishdev.pl" />
        <meta property="og:title" content="GishDev - Twój biznes w sieci zaczyna się od nas" />
        <meta property="og:description" content="Nowoczesne strony WWW, sklepy e-commerce i automatyzacje AI. Bezpłatna konsultacja!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gishdev.pl" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <WhyUs />
          <QuoteCalculator />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
