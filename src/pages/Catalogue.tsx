import React, { useState } from 'react';
import { EpisodeCard } from '../components/EpisodeCard';
export function Catalogue() {
  const [sortBy, setSortBy] = useState('date');
  const episodes = [{
    title: 'The Science of Sound',
    description: 'Exploring how sound waves work and how they affect our perception of music and speech.',
    date: 'Oct 15, 2023',
    duration: '32:45',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3'
  }
  // Add more episodes here
  ];
  return <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Content Catalogue</h1>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border border-gray-300 rounded-md shadow-sm p-2">
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="duration">Sort by Duration</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {episodes.map((episode, index) => <EpisodeCard key={index} {...episode} />)}
      </div>
    </div>;
}