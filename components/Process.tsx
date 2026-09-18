import React from 'react';
import { SectionContainer } from './SectionContainer';
import { motion } from 'framer-motion';
import { ArrowRight, Search, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Consultoria Inicial',
    description: 'Analisamos seu negócio, público-alvo e objetivos para criar uma estratégia personalizada.',
    icon: Search,
    number: '01',
  },
  {
    title: 'Execução Estratégica',
    description: 'Desenvolvemos sua interface com design premium e copywriting focado em conversão.',
    icon: PenTool,
    number: '02',
  },
  {
    title: 'Lançamento & Escala',
    description: 'Publicamos seu site e otimizamos a performance para atrair e converter mais clientes.',
    icon: Rocket,
    number: '03',
  },
];

export const Process = () => {
  return (
    <SectionContainer id="process" className="text-center">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Como funciona o <span className="text-electric-blue">processo?</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Um caminho simples e eficiente para tirar sua ideia do papel e transformá-la em resultados reais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Line connector for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-graphite-900 border-2 border-electric-blue flex items-center justify-center mb-6 relative">
              <step.icon className="text-electric-blue" size={32} />
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-electric-blue text-white text-xs font-bold flex items-center justify-center">
                {step.number}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
            <p className="text-white/60 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};
