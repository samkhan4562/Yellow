import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, Utensils, Music, Camera, Users, Sparkles, 
  MapPin, Clock, ShieldCheck, Presentation
} from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    desc: "Comprehensive end-to-end planning services from concept to execution."
  },
  {
    icon: Sparkles,
    title: "Artistic Decoration",
    desc: "Bespoke floral and thematic setups designed by master artisans."
  },
  {
    icon: Utensils,
    title: "Royal Catering",
    desc: "Exquisite multi-cuisine menus prepared by award-winning chefs."
  },
  {
    icon: Music,
    title: "Entertainment & AV",
    desc: "State-of-the-art sound systems, lighting, and DJ services."
  },
  {
    icon: Camera,
    title: "Photography Partner",
    desc: "Access to the city's finest cinematic wedding photographers."
  },
  {
    icon: Users,
    title: "Guest Management",
    desc: "Professional hospitality staff for RSVPs and on-site assistance."
  },
  {
    icon: MapPin,
    title: "Valet & Parking",
    desc: "Spacious secure parking for 500+ cars with professional valet."
  },
  {
    icon: Presentation,
    title: "Corporate Events",
    desc: "Professional setups for seminars, awards, and corporate galas."
  }
];

export const Services = () => {
  return (
    <div className="pt-24 min-h-screen pb-32">
       <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-screen-2xl mx-auto text-center">
           <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Our Expertise</span>
           <h1 className="text-5xl md:text-8xl font-heading text-neutral-900 mb-8">Unparalleled <span className="italic text-gold">Services</span></h1>
           <p className="text-neutral-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Beyond providing a venue, we offer a comprehensive ecosystem of excellence to ensure every facet of your event is flawless.
           </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {services.map((service, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 0.8 }}
             >
               <Card className="luxury-card h-full p-8 group border-none shadow-sm hover:shadow-2xl transition-all duration-700 bg-white">
                 <CardContent className="p-0 space-y-6">
                    <div className="w-16 h-16 bg-gold/5 flex items-center justify-center rounded-full transition-colors duration-500 group-hover:bg-gold/20">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-heading text-neutral-900 group-hover:text-gold transition-colors duration-500">{service.title}</h3>
                    <p className="text-neutral-500 font-light text-sm leading-relaxed">
                      {service.desc}
                    </p>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Specialty Banner */}
      <section className="py-32 bg-neutral-900 px-6">
        <div className="max-w-screen-xl mx-auto text-center text-white">
           <div className="flex justify-center items-center space-x-6 mb-12">
              <div className="h-[1px] w-24 bg-gold/30" />
              <Sparkles className="w-8 h-8 text-gold" />
              <div className="h-[1px] w-24 bg-gold/30" />
           </div>
           <h2 className="text-4xl md:text-6xl font-heading mb-8 italic">Customization is our Currency</h2>
           <p className="text-white/50 font-light max-w-3xl mx-auto text-lg mb-12">
            No two weddings are the same. We offer fully customizable service packages tailored to your cultural traditions, dietary preferences, and creative vision.
           </p>
           <div className="flex flex-wrap justify-center gap-12 pt-12 border-t border-white/5">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-[10px] uppercase tracking-widest text-white/70">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span className="text-[10px] uppercase tracking-widest text-white/70">Secure Premises</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
