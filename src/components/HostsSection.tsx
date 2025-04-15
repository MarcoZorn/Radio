import React from 'react';
interface HostProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}
function Host({
  name,
  role,
  bio,
  image
}: HostProps) {
  return <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center">
        <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-100" />
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-indigo-600 mb-3">{role}</p>
        <p className="text-gray-600 text-center">{bio}</p>
      </div>
    </div>;
}
export function HostsSection() {
  const hosts = [{
    name: 'Alex Rivera',
    role: 'Lead Host & Producer',
    bio: 'Communications major with a passion for storytelling and audio production. Alex has been with the project since its inception.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
  }, {
    name: 'Jordan Lee',
    role: 'Audio Engineer',
    bio: 'Music technology student who handles sound design and mixing. Jordan ensures every episode sounds professional and engaging.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
  }, {
    name: 'Taylor Kim',
    role: 'Research & Content',
    bio: 'Journalism major who excels at finding fascinating stories and conducting in-depth research for each episode.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
  }, {
    name: 'Morgan Chen',
    role: 'Marketing & Outreach',
    bio: 'Business student who manages social media, community engagement, and helps grow our listener base.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
  }];
  return <section id="hosts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The talented students behind the microphones and mixing boards who
            bring WaveLength to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hosts.map((host, index) => <Host key={index} {...host} />)}
        </div>
      </div>
    </section>;
}