import React from 'react';
import { SectionContainer } from './SectionContainer';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Preview = () => {
  return (
    <SectionContainer id="preview" className="py-24 bg-graphite-900/30 rounded-[3rem] my-20 border border-white/5">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-neon-green rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative glass-card overflow-hidden border-white/20">
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-24 bg-white/10 rounded" />
                  <div className="h-6 w-6 bg-electric-blue rounded-full" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-5/6 bg-white/10 rounded" />
                  <div className="h-4 w-4/6 bg-white/10 rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
                    <div className="h-3 w-1/2 bg-white/20 rounded" />
                    <div className="h-6 w-3/4 bg-neon-green/20 rounded" />
                  </div>
                  <div className="h-32 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
                    <div className="h-3 w-1/2 bg-white/20 rounded" />
                    <div className="h-6 w-3/4 bg-electric-blue/20 rounded" />
                  </div>
                </div>
                <div className="h-12 w-full bg-neon-green text-graphite-950 rounded-lg flex items-center justify-center font-bold">
                  Resultado Comprovado
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Tudo o que você precisa <br />
            <span className="text-electric-blue">em um só lugar</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Nossa estrutura é desenhada para remover qualquer fricção entre você e seu cliente.
            Entregamos uma experiência fluida, rápida e visualmente impactante.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              'Otimização de Velocidade (Lighthouse 90+)',
              'Copywriting focado em vendas',
              'Integração direta com WhatsApp',
              'Design Responsivo Total'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/80">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green">
                  <Check size={14} strokeWidth={3} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <Button variant="whatsapp" className="px-10 py-4">
            Começar Agora
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};
