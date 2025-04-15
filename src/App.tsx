import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Radio } from './pages/Radio';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import { Catalogue } from './pages/Catalogue';
import { TeamPage } from './pages/TeamPage';
import { AboutPage } from './pages/AboutPage';
import { EpisodesPage } from './pages/EpisodesPage';
export function App() {
  return <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}