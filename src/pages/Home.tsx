import { motion } from 'framer-motion';
import { Star, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'yiros', name: 'Yiros in Pita', image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800' },
  { id: 'in-a-box', name: 'In a Box', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800' },
  { id: 'meze', name: 'Meze & Dips', image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800' },
  { id: 'chargrill', name: 'From the Chargrill', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800' },
];

const recommendations = [
  {
    id: 'prod_001',
    name: 'Signature Lamb Yiros',
    description: 'Tender pulled lamb, house-made tzatziki, fresh tomatoes, onion, and chips wrapped in pita.',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  },
  {
    id: 'prod_006',
    name: 'Salt & Pepper Squid',
    description: 'Crispy local squid, seasoned with our signature spice blend, served with fresh lemon.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1590594460041-9960235c6751?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: 'prod_004',
    name: 'Plato’s Meat Box',
    description: 'The ultimate feast. A combination of our finest chargrilled meats served with chips and dips.',
    price: 29.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
  },
  {
    id: 'prod_010',
    name: 'Golden Loukoumades',
    description: 'Traditional Greek donuts soaked in honey syrup, topped with crushed walnuts and cinnamon.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1621801306185-df0480351785?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  }
];

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight"
          >
            Authentic Greek<br />Chargrill Heritage
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-white/90 mb-10 max-w-2xl mx-auto px-4 md:px-0"
          >
            Experience the vibrant soul of Greek cuisine. Flame-kissed meats and traditional recipes, delivered with precision to your sanctuary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link to="/menu" className="btn-secondary text-base md:text-lg px-8 md:px-12 py-4 md:py-5 shadow-2xl w-full sm:w-auto mx-4 sm:mx-0">
              Order Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curated Collections */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-primary">Curated Collections</h2>
          <Link to="/menu" className="text-primary text-sm font-bold border-b-2 border-secondary pb-1">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-64 md:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{cat.name}</h3>
                <div className="w-8 h-1 bg-secondary rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chef's Recommendations */}
      <section className="py-16 md:py-24 bg-surface-light px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-primary">Chef's Picks</h2>
            <Link to="/menu" className="text-primary text-sm font-bold border-b-2 border-secondary pb-1">
              Explore More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendations.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <Link to={`/product/${item.id}`} className="block relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-secondary text-secondary" />
                    <span className="text-xs font-bold text-primary">{item.rating}</span>
                  </div>
                </Link>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-2 line-clamp-1">{item.name}</h4>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-6 h-10">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-black text-primary">${item.price}</span>
                    <button className="bg-primary text-white p-2 rounded-xl hover:bg-secondary transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Circle */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2000" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Join the Culinary Circle</h2>
          <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Unlock access to exclusive member-only menus, priority delivery, and invitations to private tasting events.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md md:max-w-none mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary text-center md:text-left"
            />
            <button className="btn-secondary px-12 py-4">Request Access</button>
          </div>
        </div>
      </section>
    </div>
  );
};
