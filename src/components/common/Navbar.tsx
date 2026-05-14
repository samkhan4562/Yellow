import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Wedding Events', path: '/weddings' },
  { name: 'Banquet & Venue', path: '/venues' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Booking', path: '/booking' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 py-6 md:px-12',
        isScrolled 
          ? 'bg-ivory/95 backdrop-blur-md border-b border-foreground/5 py-4' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className={cn(
            "text-2xl md:text-3xl font-heading font-bold uppercase tracking-tighter transition-colors duration-500",
            "text-foreground"
          )}>
            YellowTree
          </span>
          <span className={cn(
            "text-[9px] uppercase tracking-[0.3em] leading-none transition-colors duration-500 opacity-60",
            "text-foreground"
          )}>
            The Grand Estate
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 relative group",
                "text-foreground/70 hover:text-gold",
                location.pathname === link.path && "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className={cn(
                "rounded-none border-foreground text-foreground hover:bg-foreground hover:text-white transition-all duration-700 uppercase tracking-[0.2em] text-[11px] px-8 h-12 bg-transparent"
            )}
          >
            <Link to="/booking">Reserve the Date</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-ivory z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold text-foreground tracking-tighter uppercase">YellowTree</span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-foreground/50">The Grand Estate</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-foreground" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl font-heading text-neutral-800 hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pt-12 border-t border-neutral-100 grid grid-cols-1 gap-6">
              <div className="flex items-center space-x-4 text-neutral-500">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4 text-neutral-500">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">North-East Delhi, India</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
