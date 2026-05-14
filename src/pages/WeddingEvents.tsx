import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const weddingEvents = [
  {
    title: "Royal Weddings",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    desc: "Grand celebrations that echo majesty. Perfect for families looking for heritage and scale."
  },
  {
    title: "Engagements",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    desc: "Intimate and sophisticated ceremonies to mark the beginning of your eternal journey."
  },
  {
    title: "Receptions",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200",
    desc: "Glamorous evenings with premium catering and artistic stage setups for your first appearance."
  },
  {
    title: "Mehndi & Haldi",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200",
    desc: "Vibrant, colorful, and culturally rich pre-wedding festivities in our specialized halls."
  },
  {
    title: "Sangeet Nights",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    desc: "Energetic musical nights with state-of-the-art sound systems and spacious dance floors."
  },
  {
    title: "Anniversary Luxury",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    desc: "Revisiting vows in a setting that reflects the growth and beauty of your bond."
  }
];

export const WeddingEvents = () => {
  return (
    <div className="pt-24 min-h-screen pb-32">
      {/* Editorial Header */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-sand/30 pb-20">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block"
            >
              Wedding Collections
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-heading text-neutral-900 leading-[1.1]"
            >
              Memories Crafted <br />
              With <span className="italic">Artistry</span>
            </motion.h1>
          </div>
          <div className="md:max-w-xs mt-12 md:mt-0">
             <p className="text-neutral-500 font-light text-sm leading-relaxed">
              From the vibrant energy of a Sangeet to the regal solemnity of the Phere, we curate environments that honor every tradition with luxury.
             </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {weddingEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <Card className="rounded-none border-none shadow-none group bg-transparent">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Button asChild className="w-full bg-white text-neutral-900 rounded-none h-12 text-[10px] uppercase tracking-widest hover:bg-gold hover:text-white">
                      <Link to="/booking">Inquire Package</Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-0">
                  <h3 className="text-3xl font-heading mb-4 group-hover:text-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-sm">
                    {event.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-32 px-6 md:px-12 py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale" />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-heading mb-12">The Royal Experience</h2>
            <div className="space-y-12">
               {[
                 { title: 'Custom Decor', text: 'Work with our in-house artistic decorators to design a theme that reflects your personal style.' },
                 { title: 'Signature Catering', desc: 'World-class multi-cuisine catering featuring live stations and bespoke menus.' },
                 { title: 'End-to-End Management', desc: 'Your private event manager ensures every micro-detail is executed seamlessly.' }
               ].map((feature, idx) => (
                 <div key={idx} className="flex space-x-8 items-start border-l border-gold pl-12 py-2">
                   <div>
                     <h4 className="text-gold font-heading text-xl mb-2">{feature.title}</h4>
                     <p className="text-white/50 font-light text-sm">{feature.desc || feature.text}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
