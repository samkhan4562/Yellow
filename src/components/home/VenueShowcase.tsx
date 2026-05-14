import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Maximize2, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const venues = [
  {
    id: 1,
    name: "The Grand Imperial Ballroom",
    capacity: "500 - 1000",
    size: "12,000 sq.ft",
    feature: "Crystal Chandeliers",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    description: "Opulence at its finest, perfect for grand royal weddings."
  },
  {
    id: 2,
    name: "The Golden Leaf Hall",
    capacity: "200 - 450",
    size: "6,000 sq.ft",
    feature: "Modern Art Interiors",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200",
    description: "Sophisticated minimalist design for elegant parties."
  },
  {
    id: 3,
    name: "Ivy Terrace Garden",
    capacity: "100 - 300",
    size: "4,500 sq.ft",
    feature: "Open-Air Ambiance",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200",
    description: "Lush greenery and soft lighting for romantic evenings."
  }
];

export const VenueShowcase = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-ivory">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block"
            >
              Exquisite Spaces
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-heading text-neutral-900 leading-tight"
            >
              Curated Venues for <br />
              <span className="italic text-gold">Every Vision</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Button asChild variant="link" className="text-gold hover:text-gold-dark p-0 text-xs uppercase tracking-widest group">
              <Link to="/venues" className="flex items-center">
                View All Venues <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, idx) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <Card className="luxury-card overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-white/90 backdrop-blur-md text-gold rounded-none px-3 py-1 text-[10px] uppercase tracking-widest border-none">
                      Premier Choice
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading mb-4 group-hover:text-gold transition-colors duration-500">
                    {venue.name}
                  </h3>
                  <p className="text-neutral-500 text-sm font-light mb-8 leading-relaxed">
                    {venue.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-8 border-t border-sand/20">
                    <div className="flex flex-col items-center">
                      <Users className="w-4 h-4 text-gold mb-2" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-tighter">Capacity</span>
                      <span className="text-xs font-medium">{venue.capacity}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Maximize2 className="w-4 h-4 text-gold mb-2" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-tighter">Area</span>
                      <span className="text-xs font-medium">{venue.size}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Sparkles className="w-4 h-4 text-gold mb-2" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-tighter">Theme</span>
                      <span className="text-xs font-medium">Custom</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
