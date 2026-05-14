import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col mb-10">
              <span className="text-3xl font-heading font-bold tracking-tighter text-white uppercase">
                YellowTree
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mt-1">
                The Grand Estate
              </span>
            </Link>
            <p className="text-white/40 text-xs md:text-sm font-light leading-relaxed mb-10 max-w-xs">
              Crafting timeless celebrations where luxury meets artistic precision. The premier destination for grand heritage events.
            </p>
            <div className="flex space-x-8">
              {/* Added subtle dots like in design */}
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                 <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Luxury Verified</span>
              </div>
            </div>
          </div>

          {/* Navigation with design's underline style */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-10 opacity-30">Curation</h4>
            <ul className="space-y-4">
              {['Venues', 'Services', 'Gallery', 'About'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm font-light text-white/50 hover:text-gold transition-all duration-500 underline underline-offset-8 decoration-transparent hover:decoration-gold/50">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-10 opacity-30">Heritage</h4>
            <ul className="space-y-4">
              {['Royal Weddings', 'Engagements', 'Receptions', 'Corporate Galas'].map((item) => (
                <li key={item}>
                  <Link to="/weddings" className="text-sm font-light text-white/50 hover:text-gold transition-all duration-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-10 opacity-30">Correspondence</h4>
            <div className="space-y-8">
               <p className="text-sm font-light text-white/50 leading-relaxed">
                  Main Wazirabad Road, Ghonda,<br />North-East Delhi, Delhi 110053
               </p>
               <div className="flex flex-col space-y-2">
                  <a href="tel:+919876543210" className="text-lg font-heading italic text-white hover:text-gold transition-colors">+91 98765 43210</a>
                  <a href="mailto:concierge@yellowtree.com" className="text-xs uppercase tracking-widest text-gold font-bold">Contact Concierge</a>
               </div>
            </div>
          </div>
        </div>

        {/* Minimal Bar like in design */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-[9px] tracking-[0.2em] uppercase font-bold">
          <div className="flex gap-10 items-center mb-6 md:mb-0">
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Luxury Catering Included</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Parking & Valet</span>
             </div>
          </div>
          <div className="flex gap-8">
            <Link to="/admin" className="opacity-40 hover:opacity-100 hover:text-gold transition-all">Staff Access</Link>
            <span className="opacity-40">Delhi, India</span>
            <p>© 2026 YellowTree. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>

  );
};
