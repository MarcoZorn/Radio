import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { EpisodesSection } from '../components/EpisodesSection';
import { AboutSection } from '../components/AboutSection';
export function Home() {
  return <>
      <HeroSection />
      <EpisodesSection />
      <AboutSection />
    </>;
}