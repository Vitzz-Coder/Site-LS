import React from 'react';
import { Zap, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { SectionContainer } from './SectionContainer';

const features = [
  {
    title: 'Alta Performance',
    description: 'Sites ultra-rápidos que não deixam seu cliente esperando, otimizando a conversão.',
    icon: Zap,
  },
  {
    title: 'Design Premium',
    description: 'Estética moderna e minimalista que transmite autoridade e confiança imediata.',
    icon: ShieldCheck,
  },
  {
    title: 'Foco em Conversão',
    description: 'Estratégias de UX focadas em levar o usuário diretamente para o seu WhatsApp.',
    icon: TrendingUp,
  },
  {
    title: 'Suporte Especializado',
    description: 'Acompanhamento próximo para garantir que sua presença digital esteja sempre atualizada.',
    icon: Users,
  },
];

export const Features = () => {
  return (
    <SectionContainer id="features" className="text-center">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Por que escolher <span className="text-electric-blue">nossa solução?</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Combinamos tecnologia de ponta com estratégias de marketing para transformar seu site em uma máquina de vendas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="glass-card p-8 text-left group hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-6 group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300">
              <feat.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
            <p className="text-white/60 leading-relaxed">{feat.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
