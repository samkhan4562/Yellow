import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarIcon, Users, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-ivory px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white p-16 text-center luxury-card"
        >
          <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="w-12 h-12 text-gold" />
          </div>
          <h2 className="text-4xl font-heading text-neutral-900 mb-6">Reservation Received</h2>
          <p className="text-neutral-500 font-light text-lg mb-12 leading-relaxed">
            Your inquiry for YellowTree has been successfully submitted. Our premium event concierge will reach out to you within the next 2 hours.
          </p>
          <Button asChild className="bg-neutral-900 text-white rounded-none px-12 h-14 uppercase tracking-widest text-xs">
            <a href="/">Return to Grand Entry</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24 px-6 md:px-12 bg-white flex flex-col lg:flex-row gap-16 max-w-screen-2xl mx-auto">
        {/* Left side: Information & Summary */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-12">
           <div>
             <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Secure Your Date</span>
             <h1 className="text-5xl font-heading text-neutral-900 mb-8 leading-tight">Begin Your <br /> <span className="italic">Journey</span></h1>
             <p className="text-neutral-500 font-light text-sm leading-relaxed">
              Fill out the details below to initiate a bespoke reservation inquiry. We prioritize quality and exclusivity for every celebration.
             </p>
           </div>
           
           <div className="bg-ivory/50 p-8 space-y-8 border border-sand/20">
              <h4 className="text-xl font-heading text-neutral-900 border-b border-sand/20 pb-4">Booking Summary</h4>
              <div className="space-y-6">
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-neutral-400 font-light">Status</span>
                   <Badge className="bg-gold-light text-gold-dark rounded-none font-bold uppercase text-[9px] tracking-widest border-none">Ready</Badge>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-neutral-400 font-light">Service Area</span>
                   <span className="text-neutral-900 font-medium tracking-tight uppercase text-xs">North-East Delhi</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-neutral-400 font-light">Concierge Fee</span>
                   <span className="text-gold font-bold">Complimentary</span>
                 </div>
              </div>
              <div className="pt-8 flex items-center space-x-4 text-gold/60">
                 <Sparkles className="w-5 h-5 shrink-0" />
                 <p className="text-[10px] uppercase font-bold tracking-widest leading-relaxed">
                    Every booking includes a complimentary private tasting session for up to 4 guests.
                 </p>
              </div>
           </div>
        </div>

        {/* Right side: Modern Form */}
        <div className="w-full lg:w-2/3 max-w-3xl">
           <form onSubmit={handleSubmit} className="space-y-12">
              {/* Step 1: Basic Info */}
              <div className="space-y-10">
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-heading text-xl">1</div>
                   <h3 className="text-2xl font-heading text-neutral-900 uppercase tracking-widest text-sm">Personal Essence</h3>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Full Name</Label>
                       <Input required className="rounded-none border-none border-b border-sand/30 bg-transparent px-0 py-6 text-lg focus-visible:ring-0 focus:border-gold transition-colors placeholder:text-neutral-200" placeholder="e.g., Arjun Malhotra" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Inquiry Email</Label>
                       <Input required type="email" className="rounded-none border-none border-b border-sand/30 bg-transparent px-0 py-6 text-lg focus-visible:ring-0 focus:border-gold transition-colors placeholder:text-neutral-200" placeholder="e.g., mail@example.com" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Mobile Connection</Label>
                       <Input required className="rounded-none border-none border-b border-sand/30 bg-transparent px-0 py-6 text-lg focus-visible:ring-0 focus:border-gold transition-colors placeholder:text-neutral-200" placeholder="+91 XXXX XXX XXX" />
                    </div>
                 </div>
              </div>

              {/* Step 2: Event Details */}
              <div className="space-y-10 pt-16">
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-heading text-xl">2</div>
                   <h3 className="text-2xl font-heading text-neutral-900 uppercase tracking-widest text-sm">Celebration Details</h3>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold block mb-3">Celebration Date</Label>
                       <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal rounded-none border-none border-b border-sand/30 h-14 px-0 hover:bg-transparent",
                              !date && "text-neutral-200"
                            )}
                          >
                            <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                            {date ? format(date, "PPP") : <span>Select a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 rounded-none border-sand" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Anticipated Guests</Label>
                       <div className="relative">
                          <Users className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                          <Input className="rounded-none border-none border-b border-sand/30 bg-transparent pl-8 py-6 text-lg focus-visible:ring-0 focus:border-gold transition-colors placeholder:text-neutral-200" placeholder="e.g., 500" />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Event Category</Label>
                       <select className="w-full bg-transparent border-none border-b border-sand/30 h-14 text-neutral-800 text-lg focus:outline-none focus:border-gold transition-colors appearance-none">
                          <option>Royal Wedding</option>
                          <option>Engagement Ceremony</option>
                          <option>Corporate Gala</option>
                          <option>Social Party</option>
                          <option>Other Celebration</option>
                       </select>
                    </div>

                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Preferred Venue</Label>
                       <select className="w-full bg-transparent border-none border-b border-sand/30 h-14 text-neutral-800 text-lg focus:outline-none focus:border-gold transition-colors appearance-none">
                          <option>Grand Imperial Ballroom</option>
                          <option>Golden Leaf Hall</option>
                          <option>Ivy Terrace Garden</option>
                          <option>Undecided / Open</option>
                       </select>
                    </div>
                 </div>
              </div>

              {/* Submit */}
              <div className="pt-16 pb-24">
                 <Button 
                   disabled={isSubmitting}
                   type="submit" 
                   className="w-full lg:w-max bg-neutral-900 text-white rounded-none px-20 h-20 text-sm uppercase tracking-[0.3em] font-medium transition-all duration-700 hover:bg-gold relative overflow-hidden group"
                  >
                   <span className={cn("relative z-10 transition-transform duration-700 block", isSubmitting && "-translate-y-20")}>
                    Request Reservation
                   </span>
                   {isSubmitting && (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                           <Sparkles className="w-6 h-6 text-white" />
                        </motion.div>
                     </div>
                   )}
                 </Button>
                 <p className="text-[9px] uppercase tracking-widest text-neutral-300 mt-6 text-center lg:text-left">
                  By clicking Request Reservation, you agree to our premium service protocols.
                 </p>
              </div>
           </form>
        </div>
      </section>
    </div>
  );
};

