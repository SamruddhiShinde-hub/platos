import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Minus, Plus, ShoppingBag, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

const products = [
  {
    id: 'prod_001',
    name: 'Signature Lamb Yiros',
    description: 'An avant-garde interpretation of a Greek classic. Featuring tender, flame-grilled lamb, house-made tzatziki with extra virgin olive oil, vine-ripened tomatoes, and red onions. Served elegantly wrapped in a hand-crafted artisanal pita with a side of golden chips.',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=2000',
    rating: 4.9,
    reviews: 124,
    options: {
      protein: [
        { id: 'lamb', name: 'Premium Lamb', price: 0 },
        { id: 'chicken', name: 'Chargrilled Chicken', price: -2.00 },
        { id: 'combo', name: 'Mixed Grill Combo', price: 3.00 }
      ],
      extras: [
        { id: 'feta', name: 'Crumbled Greek Feta', price: 3.00 },
        { id: 'olives', name: 'Kalamata Olives', price: 2.00 },
        { id: 'tzatziki', name: 'Extra Tzatziki Dip', price: 2.00 }
      ]
    }
  }
];

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedProtein, setSelectedProtein] = React.useState('wagyu');
  const [selectedExtras, setSelectedExtras] = React.useState<string[]>([]);

  const product = products.find(p => p.id === id) || products[0]; // Fallback for demo

  const totalPrice = product.price + 
    (product.options.protein.find(p => p.id === selectedProtein)?.price || 0) +
    selectedExtras.reduce((acc, extraId) => {
      const extra = product.options.extras.find(e => e.id === extraId);
      return acc + (extra?.price || 0);
    }, 0);

  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) ? prev.filter(e => e !== extraId) : [...prev, extraId]
    );
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: totalPrice,
      quantity,
      customizations: {
        protein: product.options.protein.find(p => p.id === selectedProtein)?.name,
        extras: selectedExtras.map(eId => ({
          name: product.options.extras.find(e => e.id === eId)?.name || '',
          price: product.options.extras.find(e => e.id === eId)?.price || 0
        }))
      },
      imageUrl: product.image,
      thumbnail: product.image
    });
    navigate('/menu');
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 md:mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Hero Image */}
          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/70 backdrop-blur-xl border border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 shadow-sm">
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-secondary text-secondary" />
                <span className="text-[9px] md:text-xs font-black text-primary uppercase tracking-[0.2em]">Chef's Signature</span>
              </div>
            </motion.div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">
            <div>
              <div className="flex items-center gap-2 text-on-surface-variant text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-secondary text-secondary" />
                <span>{product.rating} ({product.reviews} Reviews)</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-primary mb-4 md:mb-6 leading-tight tracking-tight">{product.name}</h1>
              <div className="text-2xl md:text-3xl font-black text-primary mb-6 md:mb-8">${product.price.toFixed(2)}</div>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            <hr className="border-surface" />

            {/* Protein Selection */}
            <div>
              <h3 className="text-lg md:text-xl font-black text-primary mb-6">Meat Selection</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.options.protein.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProtein(p.id)}
                    className={`relative p-5 md:p-6 rounded-2xl border-2 text-left transition-all ${
                      selectedProtein === p.id 
                        ? 'border-secondary bg-surface-light shadow-md' 
                        : 'border-surface bg-white hover:border-primary'
                    }`}
                  >
                    {selectedProtein === p.id && (
                      <CheckCircle2 className="absolute top-4 right-4 w-5 h-5 text-secondary" />
                    )}
                    <div className="font-bold text-sm md:text-base text-primary mb-1">{p.name}</div>
                    <div className="text-xs md:text-sm text-on-surface-variant">
                      {p.price === 0 ? 'Included' : `+$${p.price.toFixed(2)}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Epicurean Extras */}
            <div>
              <h3 className="text-lg md:text-xl font-black text-primary mb-6">Traditional Sides</h3>
              <div className="flex flex-col gap-3">
                {product.options.extras.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => toggleExtra(e.id)}
                    className="flex items-center justify-between p-4 md:p-5 rounded-2xl border border-surface bg-white hover:border-primary transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 flex items-center justify-center transition-all ${
                        selectedExtras.includes(e.id) ? 'bg-secondary border-secondary' : 'border-surface group-hover:border-primary'
                      }`}>
                        {selectedExtras.includes(e.id) && <Plus className="w-3 h-3 md:w-4 md:h-4 text-white" />}
                      </div>
                      <span className="font-bold text-sm md:text-base text-primary">{e.name}</span>
                    </div>
                    <span className="text-on-surface-variant text-sm md:text-base font-bold">+$${e.price.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Order */}
            <div className="mt-4">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4 md:gap-6 bg-surface-light p-1.5 md:p-2 rounded-2xl border border-surface">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:text-secondary transition-colors"
                  >
                    <Minus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                  <span className="text-lg md:text-xl font-black text-primary w-6 md:w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:text-secondary transition-colors"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Total</div>
                  <div className="text-2xl md:text-3xl font-black text-primary">${(totalPrice * quantity).toFixed(2)}</div>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full btn-secondary !py-5 md:!py-6 flex items-center justify-center gap-3 text-base md:text-lg tracking-[0.1em] uppercase"
              >
                <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                Add — ${(totalPrice * quantity).toFixed(2)}
              </button>
              <p className="text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-6">
                Includes white-glove packaging
              </p>
            </div>
          </div>
        </div>

        {/* Artisan Bento Section */}
        <section className="mt-20 md:mt-32 bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 shadow-sm border border-surface">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-light flex items-center justify-center text-primary">
                <Star className="w-6 h-6 md:w-8 md:h-8 fill-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-primary">Chef Curated</h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                Designed by culinary experts to deliver an unparalleled flavor profile.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-light flex items-center justify-center text-primary">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-primary">Locally Sourced</h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                We partner with boutique regional farms to ensure maximum freshness.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-light flex items-center justify-center text-primary">
                <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-primary">Pristine Delivery</h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                Transported in thermal-regulated, humidity-controlled artisanal packaging.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
