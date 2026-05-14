import { motion } from 'motion/react';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200", category: "Venues", size: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200", category: "Weddings", size: "wide" },
  { id: 3, src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200", category: "Details", size: "normal" },
  { id: 4, src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200", category: "Catering", size: "tall" },
  { id: 5, src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200", category: "Weddings", size: "normal" },
  { id: 6, src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200", category: "Venues", size: "wide" },
  { id: 7, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200", category: "Details", size: "tall" },
  { id: 8, src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200", category: "Catering", size: "normal" },
];

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-24 min-h-screen pb-32">
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-sand/30 pb-16 mb-16">
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Visual Journey</span>
            <h1 className="text-5xl md:text-7xl font-heading text-neutral-900 leading-tight">The <span className="italic">Exhibition</span></h1>
          </div>
          
          <div className="flex flex-wrap gap-6 mt-8 md:mt-0">
            {['All', 'Weddings', 'Venues', 'Catering', 'Details'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[10px] uppercase tracking-[0.3em] font-medium pb-2 transition-all duration-300 relative ${
                  filter === f ? 'text-gold' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                {f}
                {filter === f && (
                   <motion.div layoutId="filterBar" className="absolute bottom-0 left-0 w-full h-[1px] bg-gold" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="max-w-screen-2xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImg(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.category} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="text-white text-center">
                   <Maximize2 className="w-8 h-8 mx-auto mb-2" />
                   <span className="text-[10px] uppercase tracking-widest font-medium">View Impression</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedImg} onOpenChange={() => setSelectedImg(null)}>
        <DialogContent className="max-w-screen-xl p-0 border-none bg-transparent shadow-none">
          {selectedImg && (
            <div className="relative w-full h-full flex items-center justify-center">
               <img src={selectedImg} className="max-w-full max-h-[90vh] object-contain" alt="Preview" referrerPolicy="no-referrer" />
               <button 
                 onClick={() => setSelectedImg(null)}
                 className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
                >
                  <X className="w-8 h-8" />
               </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
