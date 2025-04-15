import React from 'react';
import { RadioIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <RadioIcon size={24} className="text-amber-400" />
            <span className="text-xl font-bold">Radio Studenti</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/episodes" className="text-amber-200 hover:text-white">
              Episodi
            </Link>
            <Link to="/radio" className="text-amber-200 hover:text-white">
              Radio Live
            </Link>
            <Link to="/about" className="text-amber-200 hover:text-white">
              Chi Siamo
            </Link>
            <Link to="/team" className="text-amber-200 hover:text-white">
              Team
            </Link>
            <Link to="/login" className="text-amber-200 hover:text-white">
              Login
            </Link>
          </nav>
        </div>
        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Radio Studenti. Un progetto
            scolastico.
          </p>
        </div>
      </div>
    </footer>;
}