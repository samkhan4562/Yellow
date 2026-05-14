import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-24 px-6 md:px-12 bg-ivory">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block"
          >
            Since 2011
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-heading text-neutral-900 mb-8"
          >
            The Art of <br />
            <span className="italic">Exquisite Celebration</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] w-48 bg-gold mx-auto" 
          />
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto space-y-32">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" 
                alt="Brand Story"
                className="w-full aspect-[4/5] object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading text-neutral-900">A Vision of Grandeur</h2>
              <p className="text-neutral-600 font-light text-lg leading-relaxed">
                YellowTree was founded with a singular purpose: to rewrite the narrative of event spaces in Delhi. We didn't just want to build a banquet hall; we wanted to create a sanctuary where dreams find their physical form.
              </p>
              <p className="text-neutral-500 font-light">
                Our legacy is built on the pillars of impeccable service, architectural brilliance, and an unwavering commitment to the emotional significance of every event.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center lg:flex-row-reverse">
            <div className="space-y-8 lg:order-2">
               <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 text-right">Meticulous Hospitality</h2>
               <p className="text-neutral-600 font-light text-lg leading-relaxed text-right">
                Every member of the YellowTree family is a curator of joy. From our award-winning culinary team to our expert event coordinators, we move in harmony to ensure your celebration is flawless.
              </p>
              <div className="flex justify-end pt-8">
                <div className="border-r-2 border-gold pr-8">
                  <span className="block text-3xl font-heading text-neutral-900">4.6/5</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400">Average Rating</span>
                </div>
                <div className="pl-8">
                   <span className="block text-3xl font-heading text-neutral-900">15+</span>
                   <span className="text-[10px] uppercase tracking-widest text-neutral-400">Years of Service</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200" 
                alt="Hospitality"
                className="w-full aspect-[4/5] object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 md:px-12 bg-neutral-900 text-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-6xl font-heading">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Luxury', desc: 'Crafting spaces that resonate with wealth of detail and richness of atmosphere.' },
              { title: 'Emotion', desc: 'Every corner of our venue is designed to heighten the emotional resonance of your celebration.' },
              { title: 'Excellence', desc: 'A relentless pursuit of perfection in service, catering, and management.' }
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-6 p-8 border border-white/5 hover:border-gold/30 transition-all duration-500">
                <h3 className="text-2xl font-heading text-gold italic">{value.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
