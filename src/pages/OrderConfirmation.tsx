import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Package, Bike, Home as HomeIcon, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const stages = [
  { id: 'confirmed', label: 'Confirmed', icon: CheckCircle2, time: '7:42 PM' },
  { id: 'preparing', label: 'Preparing', icon: Package, time: 'Est. 25 mins' },
  { id: 'transit', label: 'In Transit', icon: Bike, time: 'Pending' },
  { id: 'delivered', label: 'Delivered', icon: HomeIcon, time: 'Pending' },
];

export const OrderConfirmation = () => {
  const [currentStage] = React.useState(1); // Mock: Preparing

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-12 flex flex-col gap-12">
        {/* Success Header */}
        <section className="text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <CheckCircle2 className="w-12 h-12" />
          </motion.div>
          <h1 className="text-5xl font-black text-primary mb-4">Bon Appétit!</h1>
          <p className="text-lg text-on-surface-variant max-w-lg mx-auto">
            Your epicurean experience is confirmed. Order <span className="font-bold text-primary">#SVR-8924</span> is being meticulously prepared.
          </p>
        </section>

        {/* Live Tracking */}
        <section className="bg-white rounded-[3rem] p-12 shadow-xl border border-surface">
          <h2 className="text-2xl font-black text-primary mb-12 text-center">Live Status</h2>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-surface" />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(currentStage / (stages.length - 1)) * 80}%` }}
              className="absolute top-6 left-[10%] h-0.5 bg-secondary"
            />

            <div className="flex justify-between relative z-10">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                const isActive = i === currentStage;
                const isCompleted = i < currentStage;
                
                return (
                  <div key={stage.id} className="flex flex-col items-center gap-4 w-24">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'bg-secondary text-white ring-8 ring-secondary/20 shadow-xl' : 
                      isCompleted ? 'bg-primary text-white' : 'bg-surface-light text-on-surface-variant border border-surface'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <h4 className={`text-sm font-black uppercase tracking-widest ${isActive ? 'text-secondary' : 'text-primary'}`}>
                        {stage.label}
                      </h4>
                      <p className="text-[10px] font-bold text-on-surface-variant mt-1">{stage.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Map and Courier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="relative h-96 rounded-[3rem] overflow-hidden shadow-xl border border-surface bg-surface-light">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
              alt="Map" 
              className="w-full h-full object-cover opacity-50 grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping" />
                <MapPin className="w-8 h-8 text-secondary relative z-10 fill-secondary" />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-[3rem] p-10 shadow-xl border border-surface flex flex-col justify-center">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-surface shadow-md">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" alt="Courier" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-black text-primary">Marcus T.</h4>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Premium Delivery Concierge</p>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(s => <CheckCircle2 key={s} className="w-3 h-3 text-secondary fill-secondary" />)}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-surface-light p-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-primary hover:bg-surface transition-colors">
                <MessageSquare className="w-5 h-5" />
                Chat
              </button>
              <button className="flex-1 bg-primary p-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-white hover:bg-primary-light transition-colors shadow-lg">
                <Phone className="w-5 h-5" />
                Call
              </button>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="text-primary font-bold border-b-2 border-secondary pb-1 uppercase tracking-widest text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
