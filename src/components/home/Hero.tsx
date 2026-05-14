import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] w-full pt-32 pb-20 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 max-w-screen-2xl mx-auto overflow-hidden">
      {/* Editorial Decorative Backgrounds */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/[0.02] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,_#EFECE6,_transparent_70%)] -z-10" />

      {/* Content Side */}
      <div className="flex-1 z-10 w-full">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="mb-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold font-bold"
        >
          <span className="w-8 h-[1px] bg-gold"></span>
          <span>Est. 2024 • North-East Delhi</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl xl:text-9xl font-heading leading-[0.9] mb-12 italic text-foreground"
        >
          <span className="block translate-x-0">Where</span>
          <span className="block ml-16 md:ml-32">Celebrations</span>
          <span className="block translate-x-0">Become</span>
          <span className="block text-right -mr-4 md:-mr-12 text-gold">Timeless.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="max-w-md text-sm md:text-base leading-relaxed text-foreground/70 font-light mb-12"
        >
          Experience luxury weddings, premium banquets, and unforgettable celebrations crafted with artistic precision. From royal engagement ceremonies to grand receptions, YellowTree defines the pinnacle of hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-wrap gap-10 items-center"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-heading font-medium">4.6</span>
            <div className="flex gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-[9px] uppercase tracking-widest mt-1 opacity-50 font-bold">Google Rating</span>
          </div>
          <div className="w-px h-12 bg-foreground/10 hidden sm:block" />
          <div className="flex flex-col">
            <span className="text-3xl font-heading italic font-medium">1200+</span>
            <span className="text-[9px] uppercase tracking-widest mt-1 opacity-50 font-bold">Guest Capacity</span>
          </div>
          <div className="w-px h-12 bg-foreground/10 hidden sm:block" />
          <div className="flex flex-col">
            <span className="text-3xl font-heading font-medium">850+</span>
            <span className="text-[9px] uppercase tracking-widest mt-1 opacity-50 font-bold">Events Hosted</span>
          </div>
        </motion.div>

        <div className="mt-16 flex gap-6">
           <Button asChild className="rounded-none px-10 h-14 bg-foreground text-white hover:bg-gold transition-all duration-500 uppercase tracking-widest text-[10px]">
              <Link to="/booking">Reserve the Date</Link>
           </Button>
           <Button asChild variant="outline" className="rounded-none px-10 h-14 border-foreground/20 hover:border-foreground transition-all duration-500 uppercase tracking-widest text-[10px]">
              <Link to="/venues">Our Portfolios</Link>
           </Button>
        </div>
      </div>

      {/* Visual Side */}
      <div className="flex-1 w-full h-[600px] lg:h-[800px] relative">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-beige-dark overflow-hidden rounded-t-[200px]"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#D4AF37,_transparent_70%)]" />
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-12 z-20">
            <span className="text-[10px] uppercase tracking-[0.5em] block mb-4 text-foreground opacity-60">The Ballroom Collection</span>
            <div className="flex justify-between items-end border-t border-foreground/20 pt-6">
              <div className="text-left">
                <h3 className="text-xl font-heading italic">The Gilded Pavilion</h3>
                <p className="text-[9px] uppercase tracking-widest opacity-60 font-bold">Capacity: 500 Guests</p>
              </div>
              <div className="w-12 h-12 border border-foreground rounded-full flex items-center justify-center text-xl transition-all hover:bg-foreground hover:text-white cursor-pointer translate-y-2">
                →
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-[4/5] shadow-2xl flex items-center justify-center group overflow-hidden">
             <motion.img 
               src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200"
               alt="Gilded Pavilion"
               className="w-full h-full object-cover border-[12px] border-ivory transition-transform duration-[3s] group-hover:scale-110"
               referrerPolicy="no-referrer"
             />
             <div className="absolute top-8 left-8 text-white text-[10px] uppercase tracking-[0.2em] font-bold drop-shadow-md">
                Featured Heritage
             </div>
          </div>
        </motion.div>
        
        {/* Vertical Text Decoration */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 vertical-text text-[10px] uppercase tracking-[0.8em] opacity-20 select-none font-bold">
           UNFORGETTABLE • ARTISTIC • PREMIUM
        </div>
      </div>
    </section>

  );
};
