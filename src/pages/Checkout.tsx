import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, CreditCard, ChevronRight, CheckCircle2, ArrowLeft, Trash2, Minus, Plus } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, deliveryFee, tax, total, clearCart, removeItem, updateQuantity } = useCartStore();
  const [step, setStep] = React.useState(1);
  const [isDelivery, setIsDelivery] = React.useState(true);

  const handlePlaceOrder = () => {
    // Mock order placement
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation');
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="pt-32 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl font-black text-primary mb-6">Your collection is empty</h2>
        <button onClick={() => navigate('/menu')} className="btn-primary">Continue Browsing</button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Mini Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-surface px-6 md:px-16 py-4 md:py-6 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold uppercase tracking-widest text-xs hidden sm:inline">Back</span>
        </button>
        <div className="flex items-center gap-2">
          <img 
            src="https://assets.foodhub.com/static/694c08cce53ddc6fdf92ce34d8ea2625/img/1686654722phpZxAdLM.jpg" 
            alt="Platos Greek Chargrill" 
            className="h-8 w-auto object-contain rounded-lg"
          />
          <div className="text-xl md:text-2xl font-black tracking-tighter text-primary">PLATO'S</div>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Lock className="w-4 h-4" />
          <span className="font-bold uppercase tracking-widest text-[9px] md:text-[10px] hidden xs:inline">Secure</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* Form Sections */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* Fulfillment Toggle */}
            <div className="bg-surface-light rounded-full p-1.5 flex w-full max-w-md shadow-sm border border-surface">
              <button 
                onClick={() => setIsDelivery(true)}
                className={`flex-1 rounded-full py-3 px-6 font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  isDelivery ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Delivery
              </button>
              <button 
                onClick={() => setIsDelivery(false)}
                className={`flex-1 rounded-full py-3 px-6 font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  !isDelivery ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Pickup
              </button>
            </div>

            {/* Step 1: Contact */}
            <section className={`flex flex-col gap-6 md:gap-8 transition-opacity ${step < 1 ? 'opacity-50' : 'opacity-100'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-black text-xs md:text-sm transition-colors ${
                  step > 1 ? 'bg-primary text-white' : 'bg-surface-light text-primary'
                }`}>
                  {step > 1 ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : '1'}
                </div>
                <h2 className="text-xl md:text-2xl font-black text-primary">Contact Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pl-0 md:pl-14">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">First Name</label>
                  <input type="text" placeholder="Jane" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Last Name</label>
                  <input type="text" placeholder="Doe" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="jane@example.com" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                </div>
              </div>
            </section>

            {/* Step 2: Delivery/Pickup */}
            <section className={`flex flex-col gap-6 md:gap-8 transition-opacity ${step < 2 ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-light text-primary flex items-center justify-center font-black text-xs md:text-sm">
                  2
                </div>
                <h2 className="text-xl md:text-2xl font-black text-primary">{isDelivery ? 'Address' : 'Pickup'}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pl-0 md:pl-14">
                {isDelivery ? (
                  <>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Street Address</label>
                      <input type="text" placeholder="123 Epicurean Way" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">City</label>
                      <input type="text" placeholder="New York" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">State</label>
                        <input type="text" placeholder="NY" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Zip</label>
                        <input type="text" placeholder="10001" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="md:col-span-2 bg-surface-light p-6 rounded-2xl border border-surface">
                    <h4 className="font-bold text-primary mb-2">Flagship Atelier - Manhattan</h4>
                    <p className="text-xs md:text-sm text-on-surface-variant">123 Culinary St, New York, NY 10001</p>
                    <p className="text-xs md:text-sm text-secondary font-bold mt-4">Estimated pickup: 25-35 mins</p>
                  </div>
                )}
              </div>
            </section>

            {/* Step 3: Payment */}
            <section className={`flex flex-col gap-6 md:gap-8 transition-opacity ${step < 3 ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-light text-primary flex items-center justify-center font-black text-xs md:text-sm">
                  3
                </div>
                <h2 className="text-xl md:text-2xl font-black text-primary">Payment</h2>
              </div>
              
              <div className="pl-0 md:pl-14">
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-surface shadow-sm">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <CreditCard className="text-primary w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-bold text-primary uppercase tracking-widest text-[10px]">Secure Card</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Expiration</label>
                      <input type="text" placeholder="MM/YY" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">CVV</label>
                      <input type="text" placeholder="123" className="bg-transparent border-b border-primary py-2 md:py-3 focus:outline-none focus:border-secondary transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation Buttons */}
            <div className="pl-0 md:pl-14 flex flex-col sm:flex-row gap-4 mt-4">
              {step < 3 ? (
                <button 
                  onClick={() => setStep(step + 1)}
                  className="btn-primary !px-12 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button 
                  onClick={handlePlaceOrder}
                  className="btn-secondary !px-16 flex items-center justify-center gap-3 text-base md:text-lg w-full sm:w-auto"
                >
                  <Lock className="w-5 h-5" />
                  Place Order — ${total.toFixed(2)}
                </button>
              )}
              {step > 1 && (
                <button 
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-4 border border-surface rounded-full font-bold text-primary hover:border-primary transition-all w-full sm:w-auto order-last sm:order-first"
                >
                  Back
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/50 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-white/40 shadow-xl lg:sticky lg:top-32">
              <h3 className="text-xl md:text-2xl font-black text-primary mb-6 md:mb-8 border-b border-surface pb-4">Order Summary</h3>
              
              <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-10 max-h-[40vh] lg:max-h-[50vh] overflow-y-auto pr-2 no-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.thumbnail} alt={item.name} className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-bold text-primary text-sm md:text-base line-clamp-1">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="shrink-0 text-on-surface-variant hover:text-secondary transition-colors p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-surface flex items-center justify-center text-primary hover:border-primary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-bold text-primary w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-surface flex items-center justify-center text-primary hover:border-primary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-primary text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 text-sm font-bold text-on-surface-variant">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-primary">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="text-primary">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="text-primary">${tax.toFixed(2)}</span>
                </div>
                <hr className="border-surface my-2" />
                <div className="flex justify-between text-2xl font-black text-primary">
                  <span>Total</span>
                  <span className="text-secondary">${total.toFixed(2)}</span>
                </div>
              </div>

              <p className="text-[10px] text-on-surface-variant text-center mt-10 leading-relaxed uppercase tracking-[0.1em]">
                By placing your order, you agree to PLATO'S Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
