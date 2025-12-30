import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Anna Kowalska',
    company: 'Lumière Studio',
    avatar: 'AK',
    rating: 5,
    text: 'Profesjonalna współpraca od początku do końca. Strona wygląda niesamowicie i już po pierwszym tygodniu mamy więcej zapytań!',
  },
  {
    name: 'Marcin Nowak',
    company: 'MediCare',
    avatar: 'MN',
    rating: 5,
    text: 'Szybka realizacja, świetny kontakt i rewelacyjny efekt końcowy. Polecam wszystkim, którzy szukają profesjonalistów.',
  },
  {
    name: 'Katarzyna Wiśniewska',
    company: 'EduMentor',
    avatar: 'KW',
    rating: 5,
    text: 'Zespół GishDev doskonale zrozumiał nasze potrzeby. Strona jest nie tylko piękna, ale też świetnie konwertuje.',
  },
  {
    name: 'Piotr Zieliński',
    company: 'Classic Barber',
    avatar: 'PZ',
    rating: 5,
    text: 'Najlepsza inwestycja w mój biznes. Strona przyciąga klientów, a system rezerwacji działa idealnie.',
  },
  {
    name: 'Joanna Dąbrowska',
    company: 'Sweet Dreams Bakery',
    avatar: 'JD',
    rating: 5,
    text: 'Fantastyczna współpraca! Strona e-commerce działa bezawaryjnie, a sprzedaż wzrosła o 40% w pierwszym miesiącu.',
  },
  {
    name: 'Robert Lewandowski',
    company: 'Tech Solutions',
    avatar: 'RL',
    rating: 5,
    text: 'Automatyzacje AI, które wdrożyli, oszczędzają mi godziny pracy tygodniowo. Gorąco polecam!',
  },
];

const Reviews = () => {
  return (
    <section id="opinie" className="py-32 relative overflow-hidden">
      <div className="container-section relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Opinie
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-6">
            Co mówią{' '}
            <span className="text-gradient">nasi klienci</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold font-space">5.0</span>
            <span className="text-muted-foreground">na podstawie 9 opinii Google</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://g.page/r/gishdev/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Zobacz wszystkie opinie na Google
            <Star className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
