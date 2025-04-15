import React from 'react';
import { RadioIcon, MicIcon, HeadphonesIcon } from 'lucide-react';
export function AboutSection() {
  const features = [{
    icon: <MicIcon size={24} className="text-amber-600" />,
    title: 'Produzione Studentesca',
    description: 'Tutti gli episodi sono ricercati, registrati e prodotti da studenti appassionati di storytelling audio.'
  }, {
    icon: <HeadphonesIcon size={24} className="text-amber-600" />,
    title: 'Trasmissioni Settimanali',
    description: 'Sintonizzati ogni settimana per nuovi contenuti che esplorano diversi argomenti con ospiti speciali.'
  }, {
    icon: <RadioIcon size={24} className="text-amber-600" />,
    title: 'Formazione Professionale',
    description: 'Gli studenti acquisiscono esperienza pratica con attrezzature professionali e tecniche di broadcasting.'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Il Nostro Progetto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Radio Studenti è un progetto radiofonico gestito da studenti
            dedicato all'esplorazione di suoni, storie e società attraverso
            contenuti audio coinvolgenti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="text-center p-6 bg-stone-50 rounded-lg">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}