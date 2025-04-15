import React, { useState } from 'react';
import { MenuIcon, XIcon, RadioIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <RadioIcon size={24} className="text-amber-400" />
          <span className="text-xl font-bold">Radio Studenti</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/episodes" className="hover:text-amber-400 transition-colors">
            Episodi
          </Link>
          <Link to="/radio" className="hover:text-amber-400 transition-colors">
            Radio Live
          </Link>
          <Link to="/about" className="hover:text-amber-400 transition-colors">
            Chi Siamo
          </Link>
          <Link to="/team" className="hover:text-amber-400 transition-colors">
            Team
          </Link>
          <Link to="/login" className="hover:text-amber-400 transition-colors">
            Login
          </Link>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-stone-800 px-4 py-2">
          <div className="flex flex-col space-y-3 pb-3">
            <Link to="/episodes" className="hover:text-amber-400 transition-colors" onClick={toggleMenu}>
              Episodi
            </Link>
            <Link to="/radio" className="hover:text-amber-400 transition-colors" onClick={toggleMenu}>
              Radio Live
            </Link>
            <Link to="/about" className="hover:text-amber-400 transition-colors" onClick={toggleMenu}>
              Chi Siamo
            </Link>
            <Link to="/team" className="hover:text-amber-400 transition-colors" onClick={toggleMenu}>
              Team
            </Link>
            <Link to="/login" className="hover:text-amber-400 transition-colors" onClick={toggleMenu}>
              Login
            </Link>
          </div>
        </nav>}
    </header>;
}