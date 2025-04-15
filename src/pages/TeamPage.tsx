import React from 'react';
interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}
function TeamMember({
  name,
  role,
  bio,
  image
}: TeamMemberProps) {
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center">
        <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-amber-100" />
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-amber-600 mb-3">{role}</p>
        <p className="text-gray-600 text-center">{bio}</p>
      </div>
    </div>;
}
export function TeamPage() {
  const teamMembers = [{
    name: 'Alessandro Romano',
    role: 'Conduttore Principale & Produttore',
    bio: 'Studente di Comunicazione con una passione per lo storytelling e la produzione audio.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3'
  }, {
    name: 'Laura Bianchi',
    role: 'Tecnico Audio',
    bio: 'Studentessa di tecnologia musicale che gestisce il suono e il mixaggio.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
  }, {
    name: 'Marco Rossi',
    role: 'Ricerca & Contenuti',
    bio: 'Studente di giornalismo che eccelle nel trovare storie affascinanti e condurre ricerche approfondite.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3'
  }, {
    name: 'Sofia Conti',
    role: 'Marketing & Comunicazione',
    bio: 'Studentessa di business che gestisce i social media e il coinvolgimento della comunità.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3'
  }];
  return <div className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Il Nostro Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Incontra i talentuosi studenti dietro i microfoni e i mixer che
            danno vita a Radio Studenti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <TeamMember key={index} {...member} />)}
        </div>
      </div>
    </div>;
}