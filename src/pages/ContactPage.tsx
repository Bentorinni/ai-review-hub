import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt - GishDev | Skontaktuj się z nami</title>
        <meta 
          name="description" 
          content="Skontaktuj się z GishDev. Napisz do nas, zadzwoń lub umów bezpłatną konsultację. Katowice i cała Polska." 
        />
        <meta name="keywords" content="kontakt GishDev, tworzenie stron Katowice, web development kontakt" />
        <link rel="canonical" href="https://gishdev.pl/kontakt" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
