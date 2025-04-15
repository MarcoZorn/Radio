import React from 'react';
import { EpisodeCard } from './EpisodeCard';
export function EpisodesSection() {
  const episodes = [{
    title: 'La Scienza del Suono',
    description: 'Esploriamo come funzionano le onde sonore e come influenzano la nostra percezione della musica e del parlato.',
    date: '15 Ott 2023',
    duration: '32:45',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    title: 'Intervista con Musicista Locale',
    description: 'Una conversazione approfondita con la stella nascente Maria Bianchi sul suo processo creativo e la sua ispirazione.',
    date: '8 Ott 2023',
    duration: '45:12',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    title: 'Storia della Radio',
    description: "Ripercorriamo l'evoluzione della radio dai primi giorni all'era dello streaming digitale.",
    date: '1 Ott 2023',
    duration: '28:30',
    image: 'https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }];
  return <section id="episodes" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Ultimi Episodi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ascolta i nostri ultimi episodi che coprono una varietà di
            argomenti, dalla musica alla cultura, dalla scienza alla tecnologia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => <EpisodeCard key={index} {...episode} />)}
        </div>
      </div>
    </section>;
}