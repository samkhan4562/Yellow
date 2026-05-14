import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Youtube, Facebook, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 min-h-screen">
       <section className="py-24 px-6 md:px-12 bg-ivory">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
           <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Immediate Connect</span>
           <h1 className="text-5xl md:text-8xl font-heading text-neutral-900 mb-8">Let's Craft Your <span className="italic">Vision</span></h1>
           <p className="text-neutral-500 font-light max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Reach out to our premium hospitality desk for personalized inquiries, venue tours, and bespoke proposals.
           </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
         <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Details */}
            <div className="space-y-16">
               <div className="space-y-8">
                  <h3 className="text-3xl font-heading text-neutral-900">Direct Inquiries</h3>
                  <div className="space-y-8">
                     <div className="flex items-start space-x-6 group">
                        <div className="w-12 h-12 bg-ivory border border-sand/30 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                           <Phone className="w-5 h-5 text-gold group-hover:text-white" />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Call Us Anywhere</p>
                           <p className="text-xl font-medium">+91 98765 43210</p>
                           <p className="text-xs text-neutral-400 mt-1">Available 10:00 AM — 08:00 PM IST</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-6 group">
                        <div className="w-12 h-12 bg-ivory border border-sand/30 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                           <MessageSquare className="w-5 h-5 text-gold group-hover:text-white" />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">WhatsApp Chat</p>
                           <p className="text-xl font-medium">+91 98765 43211</p>
                           <p className="text-xs text-green-500 mt-1">Instant Response Team</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-6 group">
                        <div className="w-12 h-12 bg-ivory border border-sand/30 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                           <Mail className="w-5 h-5 text-gold group-hover:text-white" />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Email Correspondence</p>
                           <p className="text-xl font-medium">events@yellowtree.com</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <h3 className="text-3xl font-heading text-neutral-900">Physical Location</h3>
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-ivory border border-sand/30 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                       <MapPin className="w-5 h-5 text-gold group-hover:text-white" />
                    </div>
                    <div className="flex-grow">
                       <p className="text-xl font-medium leading-relaxed max-w-sm mb-4">
                          Main Wazirabad Road, Ghonda, North-East Delhi, Delhi 110053
                       </p>
                       <div className="w-full h-64 bg-neutral-100 rounded-none overflow-hidden border border-sand/20">
                          {/* Placeholder for Map */}
                          <div className="w-full h-full flex items-center justify-center text-neutral-400 text-[10px] uppercase tracking-widest italic bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200')] bg-cover opacity-30 grayscale">
                             Interactive Map Integration
                          </div>
                       </div>
                    </div>
                  </div>
               </div>

               <div className="space-y-6 pt-12 border-t border-sand/20">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Follow Our Story</p>
                  <div className="flex space-x-8">
                     <a href="#" className="flex items-center space-x-2 text-neutral-600 hover:text-gold transition-colors font-medium uppercase text-[10px] tracking-widest">
                        <Instagram className="w-4 h-4" /> <span>Instagram</span>
                     </a>
                     <a href="#" className="flex items-center space-x-2 text-neutral-600 hover:text-gold transition-colors font-medium uppercase text-[10px] tracking-widest">
                        <Youtube className="w-4 h-4" /> <span>Youtube</span>
                     </a>
                     <a href="#" className="flex items-center space-x-2 text-neutral-600 hover:text-gold transition-colors font-medium uppercase text-[10px] tracking-widest">
                        <Facebook className="w-4 h-4" /> <span>Facebook</span>
                     </a>
                  </div>
               </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white p-12 luxury-card h-fit">
               <h3 className="text-3xl font-heading text-neutral-900 mb-4 italic">Bespoke Proposal</h3>
               <p className="text-neutral-400 font-light text-sm mb-12">Submit your basic details and we will curate a personalized proposal for your review.</p>
               
               <form className="space-y-8">
                  <div className="space-y-2">
                     <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Your Name</Label>
                     <Input className="rounded-none border-none border-b border-sand/30 bg-transparent px-0 py-6 text-lg focus-visible:ring-0 focus:border-gold transition-colors" placeholder="e.g., Mrs. Kapoor" />
                  </div>
                  <div className="space-y-2">
                     <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Mobile</Label>
                     <Input className="rounded-none border-none border-b border-sand/30 bg-transparent px-0 py-6 text-lg focus-visible:ring-0 focus:border-gold transition-colors" placeholder="+91" />
                  </div>
                  <div className="space-y-2">
                     <Label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Inquiry Message</Label>
                     <Textarea className="rounded-none border-none border-b border-sand/30 bg-transparent px-0 py-6 text-lg focus-visible:ring-0 focus:border-gold transition-colors min-h-[150px] resize-none" placeholder="We are planning a winter wedding..." />
                  </div>
                  <Button className="w-full bg-neutral-900 text-white rounded-none h-16 text-xs uppercase tracking-widest transition-all duration-500 hover:bg-gold group">
                     Send Inquiring
                     <Send className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
};
