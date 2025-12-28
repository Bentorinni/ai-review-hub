import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

const ReviewsPage = () => {
  return (
    <>
      <Helmet>
        <title>Opinie - GishDev | Co mówią nasi klienci</title>
        <meta 
          name="description" 
          content="Opinie klientów GishDev. Zobacz, co mówią firmy, dla których stworzyliśmy strony internetowe i rozwiązania AI." 
        />
        <meta name="keywords" content="opinie GishDev, recenzje strony internetowe, opinie klientów web design" />
        <link rel="canonical" href="https://gishdev.pl/opinie" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <Reviews />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ReviewsPage;
