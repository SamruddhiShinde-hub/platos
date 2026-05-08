import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

const products = [
  {
    id: 'prod_001',
    name: 'Signature Lamb Yiros',
    description: 'Tender pulled lamb, house-made tzatziki, fresh tomatoes, onion, and chips wrapped in warm pita.',
    price: 21.00,
    category: 'yiros',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800',
    tags: ['Best Seller'],
    dietary: []
  },
  {
    id: 'prod_002',
    name: 'Classic Chicken Yiros',
    description: 'Marinated chicken breast from the chargrill, tzatziki, tomatoes, and chips in pita.',
    price: 21.00,
    category: 'yiros',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800',
    tags: [],
    dietary: []
  },
  {
    id: 'prod_003',
    name: 'Combination Yiros',
    description: 'A mix of lamb and chicken, with tzatziki, tomatoes, onions, and chips in warm pita.',
    price: 21.00,
    category: 'yiros',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    tags: ['Popular'],
    dietary: []
  },
  {
    id: 'prod_004',
    name: 'Plato’s Meat Box',
    description: 'A generous serving of lamb and chicken yiros meat, chips, pita bread, and two choice of dips.',
    price: 29.00,
    category: 'in-a-box',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    tags: ['Premium'],
    dietary: ['gluten-free']
  },
  {
    id: 'prod_005',
    name: 'AB Box',
    description: 'A cult classic. Chips topped with yiros meat and your choice of three sauces.',
    price: 27.00,
    category: 'in-a-box',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    tags: ['Cult Favorite'],
    dietary: []
  },
  {
    id: 'prod_006',
    name: 'Traditional Moussaka',
    description: 'Layers of eggplant, potato, and spiced minced beef topped with a rich, creamy béchamel sauce.',
    price: 26.00,
    category: 'classics',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    tags: [],
    dietary: []
  },
  {
    id: 'prod_007',
    name: 'Pastitsio',
    description: 'The Greek version of lasagna. Tubular pasta with spiced meat sauce and thick béchamel.',
    price: 24.00,
    category: 'classics',
    image: 'https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?auto=format&fit=crop&q=80&w=800',
    tags: [],
    dietary: []
  },
  {
    id: 'prod_008',
    name: 'Salt & Pepper Squid',
    description: 'Tender squid rings lightly dusted in salt and pepper flour, flash-fried and served with lemon.',
    price: 32.00,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1590594460041-9960235c6751?auto=format&fit=crop&q=80&w=800',
    tags: ['Fresh'],
    dietary: ['gluten-free']
  },
  {
    id: 'prod_009',
    name: 'Greek Salad',
    description: 'Fresh cucumbers, tomatoes, red onions, kalamata olives, and premium feta with oregano dressing.',
    price: 18.00,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800',
    tags: ['Vegetarian', 'Healthy'],
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 'prod_010',
    name: 'Golden Loukoumades',
    description: 'Bite-sized Greek donuts, served warm with honey syrup, cinnamon, and walnuts.',
    price: 15.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1621801306185-df0480351785?auto=format&fit=crop&q=80&w=800',
    tags: ['Sweet'],
    dietary: ['vegetarian']
  },
  {
    id: 'prod_011',
    name: 'Meze Platter',
    description: 'A selection of traditional Greek dips (Tzatziki, Taramasalata, Hummus) served with warm pita.',
    price: 22.00,
    category: 'meze',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800',
    tags: ['Shareable'],
    dietary: ['vegetarian']
  },
  {
    id: 'prod_012',
    name: 'Chargrilled Octopus',
    description: 'Tender octopus tentacles marinated in lemon and herbs, grilled to perfection.',
    price: 36.00,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    tags: ['Premium'],
    dietary: ['gluten-free']
  },
  {
    id: 'prod_013',
    name: 'Lamb Souvlaki',
    description: 'Two skewers of prime lamb, marinated in traditional Greek herbs and chargrilled to perfection.',
    price: 28.00,
    category: 'chargrill',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800',
    tags: ['Chargrilled'],
    dietary: ['gluten-free']
  },
  {
    id: 'prod_014',
    name: 'Chicken Souvlaki',
    description: 'Two skewers of succulent chicken breast, marinated and grilled over an open flame.',
    price: 26.00,
    category: 'chargrill',
    image: 'https://images.unsplash.com/photo-1598514983318-291419f67c76?auto=format&fit=crop&q=80&w=800',
    tags: ['Chargrilled'],
    dietary: ['gluten-free']
  }
];

const categories = [
  { id: 'all', name: 'All Collections' },
  { id: 'yiros', name: 'Yiros in Pita' },
  { id: 'in-a-box', name: 'In a Box' },
  { id: 'chargrill', name: 'From the Chargrill' },
  { id: 'classics', name: 'Platos Classics' },
  { id: 'meze', name: 'Meze & Dips' },
  { id: 'seafood', name: 'Seafood' },
  { id: 'salads', name: 'Salads' },
  { id: 'desserts', name: 'Homemade Desserts' },
];

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filters, setFilters] = React.useState<string[]>([]);
  const addItem = useCartStore(state => state.addItem);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilters = filters.length === 0 || filters.every(f => product.dietary.includes(f));
    
    return matchesCategory && matchesSearch && matchesFilters;
  });

  const toggleFilter = (filter: string) => {
    setFilters(prev => prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]);
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-12">
        <header className="mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">Curated Menu</h1>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search our selection..." 
                className="w-full pl-12 pr-4 py-4 bg-surface-light border-none rounded-2xl focus:ring-2 focus:ring-primary/10 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              {['vegetarian', 'vegan', 'gluten-free'].map((f) => (
                <button
                  key={f}
                  onClick={() => toggleFilter(f)}
                  className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                    filters.includes(f) 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-on-surface-variant border-surface hover:border-primary'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Category Filter */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24 z-10 bg-background/80 backdrop-blur-md lg:bg-transparent -mx-6 px-6 py-4 lg:p-0 lg:static">
              <h3 className="text-[10px] md:text-xs font-black text-on-surface-variant tracking-[0.2em] uppercase mb-4 lg:mb-8">Collections</h3>
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-4 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-2 lg:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap text-sm lg:text-lg font-bold transition-all hover:translate-x-1 lg:hover:translate-x-2 ${
                      selectedCategory === cat.id ? 'text-secondary' : 'text-primary'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-surface group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        {product.tags.map(tag => (
                          <span key={tag} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-start mb-2 md:mb-4">
                        <h3 className="text-xl md:text-2xl font-black text-primary group-hover:text-secondary transition-colors line-clamp-1">{product.name}</h3>
                        <span className="text-lg md:text-xl font-black text-primary">${product.price}</span>
                      </div>
                      <p className="text-sm md:text-base text-on-surface-variant mb-6 md:mb-8 line-clamp-2 h-10 md:h-12">{product.description}</p>
                      <button 
                        onClick={() => addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          quantity: 1,
                          customizations: {},
                          imageUrl: product.image,
                          thumbnail: product.image
                        })}
                        className="w-full btn-primary !py-4 flex items-center justify-center gap-2 group-hover:bg-secondary border-none"
                      >
                        <Plus className="w-5 h-5" />
                        Add to Order
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-24">
                <h3 className="text-2xl font-bold text-primary mb-4">No epicurean delights found</h3>
                <p className="text-on-surface-variant">Try adjusting your filters or search query.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
