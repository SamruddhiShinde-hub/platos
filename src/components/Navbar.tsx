import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu as MenuIcon, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { items } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Curated', path: '/curated' },
    { name: 'Offers', path: '/offers' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-surface shadow-sm px-6 md:px-16 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-3">
        <img 
          src="https://assets.foodhub.com/static/694c08cce53ddc6fdf92ce34d8ea2625/img/1686654722phpZxAdLM.jpg" 
          alt="Platos Greek Chargrill" 
          className="h-10 md:h-12 w-auto object-contain rounded-lg"
        />
        <span className="text-xl md:text-2xl font-black tracking-tighter text-primary">PLATO'S</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
              location.pathname === link.path
                ? 'text-primary border-b-2 border-secondary pb-1'
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-3 md:gap-4 items-center">
        <Link to="/cart" className="relative text-primary hover:text-secondary transition-colors p-2">
          <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
          {itemCount > 0 && (
            <span className="absolute top-1 right-1 bg-secondary text-white text-[9px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center animate-in zoom-in">
              {itemCount}
            </span>
          )}
        </Link>
        <Link to="/account" className="hidden md:block text-primary hover:text-secondary transition-colors p-2">
          <User className="w-6 h-6" />
        </Link>
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-background md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-2xl font-black text-primary tracking-tight"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-surface w-full" />
            <Link 
              to="/account" 
              className="text-2xl font-black text-primary tracking-tight flex items-center gap-4" 
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-6 h-6" />
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
