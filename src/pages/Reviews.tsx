import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Heart } from 'lucide-react';

const reviews = [
  {
    name: "Arjun & Priyanka",
    event: "Royal Wedding",
    text: "YellowTree turned our dream into a reality. The Grand Imperial Ballroom was breathtaking, and the decor was beyond what we imagined. Truly world-class hospitality.",
    rating: 5,
    date: "Dec 2025"
  },
  {
    name: "Sameer Khanna",
    event: "Corporate Gala",
    text: "The tech integration and AV quality were superior. Managing 500+ guests seemed effortless for their professional staff. Highly recommended for premium corporate events.",
    rating: 5,
    date: "Jan 2026"
  },
  {
    name: "Meenakshi Sethi",
    event: "Anniversary Soirée",
    text: "Intimate, warm, and luxurious. The catering was the highlight - our guests are still talking about the signature starters. A perfect evening.",
    rating: 4.8,
    date: "Feb 2026"
  },
  {
    name: "Rahul & Simran",
    event: "Engagement Ceremony",
    text: "From the first inquiry to the event day, the communication was seamless. They really care about the emotional aspect of weddings. Five stars for the management team.",
    rating: 5,
    date: "Mar 2026"
  },
  {
    name: "Sanjay Gupta",
    event: "Silver Jubilee Celebration",
    text: "A truly magnificent venue. The attention to detail in the lighting and seating arrangement was remarkable. A class apart in Delhi.",
    rating: 5,
    date: "April 2026"
  },
  {
    name: "Karan Malhotra",
    event: "Sangeet Night",
    text: "The energy was incredible! The stage setup and sound system made our musical night legendary. Best party hall in the area.",
    rating: 4.9,
    date: "May 2026"
  }
];

export const Reviews = () => {
  return (
    <div className="pt-24 min-h-screen pb-32">
       <section className="py-24 px-6 md:px-12 bg-ivory">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-8"
           >
              <Star className="w-10 h-10 text-gold fill-gold" />
           </motion.div>
           <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Voice of Joy</span>
           <h1 className="text-5xl md:text-8xl font-heading text-neutral-900 mb-8">Unforgettable <br /> <span className="italic">Experiences</span></h1>
           <div className="flex items-center space-x-2 text-neutral-500 mb-12">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-sm">4.6/5 Based on 850+ Google Reviews</span>
           </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {reviews.map((review, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
             >
               <Card className="luxury-card p-10 h-full flex flex-col justify-between border-none shadow-sm hover:shadow-2xl transition-all duration-700 bg-white relative">
                 <Quote className="absolute top-8 right-10 w-12 h-12 text-gold/10" />
                 <CardContent className="p-0 space-y-8">
                    <div className="flex space-x-1">
                       {[...Array(5)].map((_, i) => (
                         <Star 
                           key={i} 
                           className={`w-3 h-3 ${i < Math.floor(review.rating) ? 'fill-gold text-gold' : 'text-neutral-200'}`} 
                          />
                       ))}
                    </div>
                    <p className="text-neutral-600 font-light italic text-lg leading-relaxed line-clamp-4">
                      "{review.text}"
                    </p>
                    <div className="pt-8 border-t border-sand/20 flex justify-between items-center">
                       <div>
                          <h4 className="font-heading text-xl text-neutral-900">{review.name}</h4>
                          <span className="text-[10px] uppercase tracking-widest text-gold font-medium">{review.event}</span>
                       </div>
                       <div className="text-right">
                          <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">{review.date}</span>
                          <Heart className="w-4 h-4 text-gold/30 ml-auto" />
                       </div>
                    </div>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 bg-neutral-900 text-white px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="text-center md:text-left">
              <h2 className="text-4xl font-heading mb-4">Celebrated in Luxury</h2>
              <p className="text-white/40 font-light max-w-md">Our reputation is built on the word of mouth of Delhi's most distinguished families.</p>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center p-6 border border-white/5">
                 <span className="text-3xl font-heading text-gold block mb-1">98%</span>
                 <span className="text-[9px] uppercase tracking-widest text-white/50">Returning Guests</span>
              </div>
              <div className="text-center p-6 border border-white/5">
                 <span className="text-3xl font-heading text-gold block mb-1">1k+</span>
                 <span className="text-[9px] uppercase tracking-widest text-white/50">Successful events</span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
