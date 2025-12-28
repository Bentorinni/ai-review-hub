import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import lumiereStudio from '@/assets/portfolio/lumiere-studio.png';
import medicare from '@/assets/portfolio/medicare.png';
import edumentor from '@/assets/portfolio/edumentor.png';
import classicBarber from '@/assets/portfolio/classic-barber.png';

const projects = [
  {
    name: 'Lumière Studio',
    category: 'Salon fryzjerski',
    image: lumiereStudio,
    url: 'https://strong-baklava-a82be3.netlify.app',
  },
  {
    name: 'MediCare',
    category: 'Gabinet medyczny',
    image: medicare,
    url: 'https://vermillion-taiyaki-f95cd0.netlify.app',
  },
  {
    name: 'EduMentor',
    category: 'Platforma edukacyjna',
    image: edumentor,
    url: 'https://moonlit-starship-e76ece.netlify.app',
  },
  {
    name: 'Classic Barber',
    category: 'Barber shop',
    image: classicBarber,
    url: 'https://teal-nougat-e0742e.netlify.app',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 section-gradient" />
      
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-6">
            Nasze ostatnie{' '}
            <span className="text-gradient">realizacje</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Zobacz projekty, które stworzyliśmy dla naszych klientów. 
            Każdy z nich to unikalne podejście dopasowane do potrzeb.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-card-hover"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-space mt-1 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
