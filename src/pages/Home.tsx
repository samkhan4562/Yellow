import { Hero } from '../components/home/Hero';
import { VenueShowcase } from '../components/home/VenueShowcase';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Camera, Coffee, Music } from 'lucide-react';

const homeStats = [
  { label: 'Events Hosted', value: '1,500+' },
  { label: 'Happy Families', value: '2,800+' },
  { label: 'Expert Staff', value: '150+' },
  { label: 'Years of Excellence', value: '15+' },
];

export const Home = () => {
  return (
    <div className="bg-background">
      <Hero />
      
      {/* Experience Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 border border-gold/20 rounded-full animate-spin-slow" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
                alt="Wedding Experience"
                className="w-full h-[600px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-gold p-12 hidden md:block">
                <Heart className="w-12 h-12 text-white mb-4" />
                <h3 className="text-white text-3xl font-heading leading-tight italic">
                  Crafted by <br /> Heart
                </h3>
              </div>
            </motion.div>
          </div>
          
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-heading text-neutral-900 leading-tight mb-8">
              Luxurious Elegance, <br />
              <span className="italic">Emotional Memories.</span>
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-12 text-lg">
              At YellowTree, we believe every celebration is a masterpiece in waiting. From the first consultation to the final farewell, we weave luxury, precision, and emotion into the fabric of your special day.
            </p>
            
            <div className="grid grid-cols-2 gap-12 mb-12">
              {[
                { icon: Star, title: 'Bespoke Design' },
                { icon: Camera, title: 'Cinematic Venues' },
                { icon: Coffee, title: 'Premium Catering' },
                { icon: Music, title: 'High-End AV' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <item.icon className="w-6 h-6 text-gold" />
                  <span className="text-sm font-medium uppercase tracking-widest text-neutral-800">{item.title}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-neutral-900 text-white rounded-none h-16 px-10 text-xs uppercase tracking-widest group">
              <Link to="/about">
                The Brand Story
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <VenueShowcase />

      {/* Stats Section */}
      <section className="py-24 bg-neutral-900 border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
            {homeStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <h4 className="text-4xl md:text-6xl font-heading text-gold mb-2">{stat.value}</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Gallery Preview */}
      <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">A Glimpse of Magic</span>
          <h2 className="text-4xl md:text-6xl font-heading text-neutral-900 leading-tight">The Gallery</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Gallery 1" referrerPolicy="no-referrer" />
          </div>
          <div className="relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Gallery 2" referrerPolicy="no-referrer" />
          </div>
          <div className="relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Gallery 3" referrerPolicy="no-referrer" />
          </div>
          <div className="relative group overflow-hidden md:col-span-2">
            <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Gallery 4" referrerPolicy="no-referrer" />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-none border-gold text-gold hover:bg-gold hover:text-white px-12 h-14 uppercase tracking-widest text-xs">
            <Link to="/gallery">Enter Full Gallery</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-ivory text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-heading text-neutral-900 mb-12 leading-tight">
            Ready to Plan Your <br />
            <span className="text-gold italic">Dream Event?</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <Button asChild className="bg-neutral-900 text-white rounded-none h-16 px-12 text-xs uppercase tracking-widest transition-all duration-500 w-full md:w-auto">
              <Link to="/booking">Start Reservation</Link>
            </Button>
            <Button asChild variant="outline" className="border-neutral-200 text-neutral-600 hover:bg-white rounded-none h-16 px-12 text-xs uppercase tracking-widest transition-all duration-500 w-full md:w-auto">
              <Link to="/contact">Inquire Details</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
