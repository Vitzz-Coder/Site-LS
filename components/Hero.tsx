import React from 'react';
import { Button } from './ui/Button';
import { SectionContainer } from './SectionContainer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <SectionContainer id="home" className="pt-32 md:pt-48 pb-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue"></span>
          </span>
          Disponível para novos projetos
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
          Eleve seu serviço ao <br />
          <span className="text-gradient">Próximo Nível</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Ajudamos prestadores de serviços a atrair clientes de alto valor através de
          presença digital estratégica, design moderno e processos otimizados.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Button variant="whatsapp" className="w-full sm:w-auto text-lg px-8 py-4 flex items-center justify-center gap-2">
            Quero crescer agora
            <ArrowRight size={20} />
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto px-8 py-4">
            Ver Portfólio
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 opacity-60">
          {['+100 Clientes Satisfeitos', 'Suporte VIP', 'Entrega Ágil'].map((text) => (
            <div key={text} className="flex items-center gap-2 text-sm">
              <CheckCircle2 size={16} className="text-neon-green" />
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-2xl">
        {/* Mockup Visual em Código */}
        <div className="relative z-10 glass-card p-4 shadow-2xl animate-float">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-graphite-800 to-graphite-950 border border-white/5 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="mt-8 p-6 space-y-4">
              <div className="h-4 w-1/3 bg-electric-blue/20 rounded-full animate-pulse" />
              <div className="h-8 w-3/4 bg-white/10 rounded-lg" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
              </div>
              <div className="h-32 w-full bg-gradient-to-r from-electric-blue/10 to-neon-green/10 rounded-xl border border-white/5" />
            </div>
          </div>
        </div>
        {/* Glow Background */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-electric-blue/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-green/10 blur-[100px] rounded-full" />
      </div>
    </SectionContainer>
  );
};
