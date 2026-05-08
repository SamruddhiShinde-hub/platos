import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-epilogue selection:bg-secondary selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/curated" element={<Menu />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-surface-light border-t border-surface py-16 md:py-24 px-6 md:px-16 mt-20 md:mt-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <img 
                  src="https://assets.foodhub.com/static/694c08cce53ddc6fdf92ce34d8ea2625/img/1686654722phpZxAdLM.jpg" 
                  alt="Platos Greek Chargrill" 
                  className="h-12 w-auto object-contain rounded-xl"
                />
                <div className="text-3xl font-black tracking-tighter text-primary">PLATO'S</div>
              </div>
              <p className="text-on-surface-variant max-w-sm mb-8 text-sm md:text-base">
                Authentic Greek Chargrill in Glenunga. Bringing the traditional flavors of Greece directly to your sanctuary.
              </p>
              <div className="flex flex-col gap-4 mb-8 text-sm text-primary font-bold">
                <p>Shop 3, 563 Portrush Road, Glenunga, SA 5064</p>
                <p>(08) 8342 3338</p>
              </div>
              <div className="flex gap-6">
                {['Instagram', 'Twitter', 'Facebook'].map(social => (
                  <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6 md:mb-8">Experience</h4>
              <ul className="flex flex-col gap-4 text-sm font-bold text-primary">
                <li><a href="#" className="hover:text-secondary transition-colors">Our Menu</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Catering</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Chargrill Heritage</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Order Online</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6 md:mb-8">Operating Hours</h4>
              <ul className="flex flex-col gap-2 text-xs font-bold text-on-surface-variant">
                <li>Mon - Thu: 11:30 AM - 8:30 PM</li>
                <li>Fri: 11:30 AM - 10:00 PM</li>
                <li>Sat: 12:00 PM - 10:00 PM</li>
                <li>Sun: 12:00 PM - 2:30 PM, 5:00 PM - 8:30 PM</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-surface mt-16 md:mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center md:text-left">
            <span>© 2024 PLATO'S GREEK CHARGRILL. ALL RIGHTS RESERVED.</span>
            <span>CRAFTED FOR CULINARY EXCELLENCE.</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
