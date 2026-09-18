import React from 'react';
import { SectionContainer } from './SectionContainer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Silva',
    role: 'Consultor Financeiro',
    text: 'Meu faturamento aumentou em 40% no primeiro mês após a nova landing page. A conversão via WhatsApp é surreal!',
    rating: 5,
  },
  {
    name: 'Ana Beatriz',
    role: 'Designer de Interiores',
    text: 'O design é impecável. Meus clientes agora percebem o valor do meu serviço antes mesmo de eu falar o preço.',
    rating: 5,
  },
  {
    name: 'Marcos Oliveira',
    role: 'Engenheiro Civil',
    text: 'Suporte fantástico e entrega rápida. Finalmente tenho um site que passa a autoridade que eu precisava.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <SectionContainer id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Quem já <span className="text-electric-blue">confia no nosso trabalho</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Resultados reais de profissionais que transformaram sua presença digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="glass-card p-8 flex flex-col justify-between relative">
            <div className="absolute -top-4 -right-4 bg-electric-blue p-2 rounded-lg rotate-12 opacity-20">
              <Star size={24} fill="white" />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-neon-green" fill="currentColor" />
              ))}
            </div>
            <p className="text-white/80 italic mb-8 leading-relaxed">"{t.text}"</p>
            <div>
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-white/50 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
