import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Cennik - GishDev | Strony internetowe, Sklepy e-commerce, AI</title>
        <meta 
          name="description" 
          content="Orientacyjne ceny usług tworzenia stron WWW, sklepów internetowych i automatyzacji AI. Każdy projekt wyceniamy indywidualnie." 
        />
        <meta name="keywords" content="cennik stron internetowych, ceny sklepów e-commerce, wycena strony WWW, GishDev" />
        <link rel="canonical" href="https://gishdev.pl/cennik" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
