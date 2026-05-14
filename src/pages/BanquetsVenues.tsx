import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Maximize2, Users, Sliders, ShieldCheck } from 'lucide-react';

const venues = [
  {
    name: "Emperor Ballroom",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    cap: "800 - 1500",
    area: "15,000 sq.ft",
    features: ["Crystal chandeliers", "Hydraulic stage", "Acoustic walls"],
    price: "Custom Quote"
  },
  {
    name: "Regent Hall",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200",
    cap: "300 - 600",
    area: "8,000 sq.ft",
    features: ["Mirror finish floors", "Ambient lighting", "Private lounge"],
    price: "Custom Quote"
  },
  {
    name: "Cedar Pavilion",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    cap: "150 - 350",
    area: "5,000 sq.ft",
    features: ["Intimate garden access", "Wooden accents", "Natural light"],
    price: "Custom Quote"
  }
];

export const BanquetsVenues = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-screen-2xl mx-auto text-center">
           <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Collection</span>
           <h1 className="text-5xl md:text-8xl font-heading text-neutral-900 mb-12">Magnificent <span className="italic">Spaces</span></h1>
           <p className="text-neutral-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            From the grandest of galas to the most intimate of soirées, our venues are designed to adapt, impress, and deliver excellence.
           </p>
        </div>
      </section>

      {/* Venues Detail List */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto space-y-24">
          {venues.map((venue, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 aspect-[16/10] overflow-hidden">
                <img 
                  src={venue.image} 
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-heading text-neutral-900">{venue.name}</h2>
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-sand/20">
                  <div className="flex items-center space-x-4">
                    <Users className="text-gold w-6 h-6" />
                    <div>
                      <p className="text-[10px] uppercase text-neutral-400 tracking-widest">Capacity</p>
                      <p className="text-lg font-medium">{venue.cap} Guests</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Maximize2 className="text-gold w-6 h-6" />
                    <div>
                      <p className="text-[10px] uppercase text-neutral-400 tracking-widest">Area</p>
                      <p className="text-lg font-medium">{venue.area}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-[10px] uppercase text-neutral-400 tracking-widest">Key Highlights</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {venue.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-3 text-neutral-600 font-light">
                        <ShieldCheck className="w-4 h-4 text-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <Button className="bg-neutral-900 text-white rounded-none h-16 px-10 text-xs uppercase tracking-widest w-full md:w-auto">
                    Inquire Availability
                  </Button>
                  <span className="text-gold font-heading text-xl">{venue.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparisons/Features */}
      <section className="py-32 bg-ivory border-t border-sand/30 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: Sliders, title: 'Modular Layouts', desc: 'Flexible seating and stage arrangements to fit your specific event needs.' },
              { icon: ShieldCheck, title: 'Safe & Accessible', desc: 'Fully wheelchair accessible with premium security throughout the venue.' },
              { icon: Users, title: 'VIP Lounges', desc: 'Private spaces for distinguished guests and bridal preparations.' },
              { icon: Maximize2, title: 'Ample Parking', desc: 'Valet services and spacious parking for over 500+ vehicles.' }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <feature.icon className="w-10 h-10 text-gold mx-auto" />
                <h4 className="text-xl font-heading text-neutral-900">{feature.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
