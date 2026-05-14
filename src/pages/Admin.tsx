import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut,
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

// Mock data for inquiries
const MOCK_INQUIRIES = [
  {
    id: 'REQ-001',
    name: 'Arjun Malhotra',
    email: 'arjun@example.com',
    event: 'Royal Wedding',
    date: '2026-11-12',
    guests: 500,
    status: 'pending',
    timestamp: '2 hours ago'
  },
  {
    id: 'REQ-002',
    name: 'Priya Sharma',
    email: 'priya.s@mail.com',
    event: 'Engagement Ceremony',
    date: '2026-12-05',
    guests: 200,
    status: 'approved',
    timestamp: '5 hours ago'
  },
  {
    id: 'REQ-003',
    name: 'Vikram Singh',
    email: 'vikram@corp.com',
    event: 'Corporate Gala',
    date: '2026-10-20',
    guests: 800,
    status: 'contacted',
    timestamp: '1 day ago'
  },
  {
    id: 'REQ-004',
    name: 'Sneha Kapoor',
    email: 'sneha@social.com',
    event: 'Social Party',
    date: '2026-09-15',
    guests: 150,
    status: 'pending',
    timestamp: '2 days ago'
  }
];

export const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-ivory/50">
      {/* Sidebar */}
      <aside className="w-64 bg-foreground text-white flex flex-col fixed inset-y-0 left-0">
        <div className="p-8 border-b border-white/5">
          <span className="text-xl font-heading font-bold tracking-tighter uppercase block">YellowTree</span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/40 block mt-1">Concierage Access</span>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'bookings', label: 'Inquiries', icon: Calendar },
            { id: 'clients', label: 'Clients', icon: Users },
            { id: 'messages', label: 'Messages', icon: MessageSquare },
            { id: 'settings', label: 'Management', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-none text-xs uppercase tracking-widest transition-all ${
                activeTab === item.id 
                  ? 'bg-gold text-white font-bold' 
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <Button variant="ghost" className="w-full justify-start text-white/50 hover:text-white hover:bg-transparent p-0">
            <LogOut className="w-4 h-4 mr-3" />
            <span className="text-[10px] uppercase tracking-widest font-bold">End Session</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-heading text-foreground mb-2">Concierge <span className="italic">Overview</span></h1>
            <p className="text-foreground/50 text-sm font-light uppercase tracking-widest">Managing The Grand Estate Operations</p>
          </div>
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
              <Input className="bg-white border-foreground/10 pl-10 w-64 rounded-none h-11 text-xs uppercase tracking-widest" placeholder="Search Inquiries..." />
            </div>
            <Button className="bg-foreground text-white rounded-none px-8 h-11 text-[10px] uppercase tracking-widest">
              Export Report
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            { label: 'Total Inquiries', value: '128', change: '+12%', icon: Users },
            { label: 'Confirmed Events', value: '42', change: '+5%', icon: Calendar },
            { label: 'Avg. Guest Count', value: '450', change: '-2%', icon: Users },
            { label: 'Pending Response', value: '08', change: 'Urgent', icon: Clock },
          ].map((stat, idx) => (
            <Card key={idx} className="luxury-card border-none rounded-none">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <stat.icon className="w-5 h-5 text-gold" />
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${idx === 3 ? 'text-red-500' : 'text-green-500'}`}>
                    {stat.change}
                  </span>
                </div>
                <h4 className="text-xs uppercase tracking-widest text-foreground/40 font-bold mb-1">{stat.label}</h4>
                <p className="text-3xl font-heading">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Inquiries List */}
        <Card className="luxury-card border-none rounded-none bg-white">
          <CardHeader className="p-8 border-b border-foreground/5 flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-heading italic">Recent Inquiries</CardTitle>
            <Button variant="ghost" className="text-[10px] uppercase tracking-widest h-auto p-0 hover:bg-transparent">
              View All Arrivals
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-ivory/50">
                    {['Inquiry ID', 'Client Details', 'Celebration', 'Guests', 'Status', 'Actions'].map((h) => (
                      <th key={h} className="text-left py-4 px-8 text-[10px] uppercase tracking-widest text-foreground/50 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/5">
                  {MOCK_INQUIRIES.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-ivory/20 transition-colors group">
                      <td className="py-6 px-8 text-xs font-mono text-foreground/50">{inquiry.id}</td>
                      <td className="py-6 px-8">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-foreground">{inquiry.name}</span>
                          <span className="text-[10px] text-foreground/40">{inquiry.email}</span>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex flex-col">
                          <span className="text-sm text-foreground">{inquiry.event}</span>
                          <span className="text-[10px] text-gold font-bold uppercase tracking-widest">{inquiry.date}</span>
                        </div>
                      </td>
                      <td className="py-6 px-8 text-sm font-light">{inquiry.guests}</td>
                      <td className="py-6 px-8">
                        <Badge className={`
                          rounded-none text-[8px] uppercase tracking-widest font-bold px-3 py-1 border-none shadow-none
                          ${inquiry.status === 'approved' ? 'bg-green-100 text-green-700' : ''}
                          ${inquiry.status === 'pending' ? 'bg-orange-100 text-orange-700' : ''}
                          ${inquiry.status === 'contacted' ? 'bg-blue-100 text-blue-700' : ''}
                        `}>
                          {inquiry.status}
                        </Badge>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-foreground/40 hover:text-gold"><CheckCircle2 className="w-4 h-4" /></button>
                          <button className="text-foreground/40 hover:text-gold"><ExternalLink className="w-4 h-4" /></button>
                          <button className="text-foreground/40 hover:text-gold"><MoreVertical className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-ivory/30 text-center">
              <p className="text-[9px] uppercase tracking-[0.4em] text-foreground/30 font-bold">
                End of recent records • End-to-end encrypted session
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
