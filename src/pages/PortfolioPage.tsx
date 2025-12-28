import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - GishDev | Nasze realizacje</title>
        <meta 
          name="description" 
          content="Zobacz nasze realizacje - strony internetowe, sklepy e-commerce i automatyzacje AI. Projekty dopasowane do potrzeb klientów." 
        />
        <meta name="keywords" content="portfolio stron internetowych, realizacje web design, projekty e-commerce, GishDev" />
        <link rel="canonical" href="https://gishdev.pl/portfolio" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <Portfolio />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
