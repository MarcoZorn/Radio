import React from 'react';
import { EpisodesSection } from '../components/EpisodesSection';
export function EpisodesPage() {
  return <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">I Nostri Episodi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Esplora la nostra collezione di episodi e contenuti audio
          </p>
        </div>
      </div>
      <EpisodesSection />
    </div>;
}