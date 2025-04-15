import React from 'react';
import { PlayCircleIcon, RadioIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function HeroSection() {
  const navigate = useNavigate();
  return <section className="bg-gradient-to-r from-stone-900 to-stone-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Radio Studenti
            </h1>
            <p className="text-xl text-amber-200 mb-6">
              La radio degli studenti, fatta dagli studenti per gli studenti
            </p>
            <div className="flex space-x-4">
              <button onClick={() => navigate('/radio')} className="bg-amber-400 text-stone-900 px-6 py-3 rounded-full font-medium flex items-center hover:bg-amber-300 transition-colors">
                <RadioIcon size={20} className="mr-2" />
                Ascolta Live
              </button>
              <button onClick={() => navigate('/catalogue')} className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                Episodi
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Studio radio" className="rounded-lg shadow-2xl max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
}