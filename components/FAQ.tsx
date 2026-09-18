'use client';
import React, { useState } from 'react';
import { SectionContainer } from './SectionContainer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto tempo leva para o site ficar pronto?',
    answer: 'Dependendo da complexidade, entregamos a estrutura completa e revisada em média entre 7 a 15 dias úteis.',
  },
  {
    question: 'Eu precisarei pagar mensalidade?',
    answer: 'Não cobramos mensalidade pelo site. Você paga apenas a hospedagem e o domínio, que são serviços externos.',
  },
  {
    question: 'O site funciona bem em celulares?',
    answer: 'Sim! Utilizamos a abordagem Mobile-First, garantindo que seu site seja perfeito em qualquer tamanho de tela.',
  },
  {
    question: 'Como funciona a integração com WhatsApp?',
    answer: 'Criamos botões de CTA estratégicos que abrem a conversa diretamente no seu número com uma mensagem personalizada.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionContainer id="faq">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Dúvidas <span className="text-electric-blue">Frequentes</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Tudo o que você precisa saber antes de começarmos a transformar seu negócio.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-card overflow-hidden transition-all duration-300">
            <button
              className="w-full p-6 flex justify-between items-center text-left font-bold text-lg hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.question}
              {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === idx ? 'max-h-40 opacity-100 p-6' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-white/60 leading-relaxed border-t border-white/10 pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
