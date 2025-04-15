import React from 'react';
import { AboutSection } from '../components/AboutSection';
export function AboutPage() {
  return <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Chi Siamo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri la storia e la missione di Radio Studenti
          </p>
        </div>
      </div>
      <AboutSection />
    </div>;
}