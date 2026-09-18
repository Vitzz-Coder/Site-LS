import React from 'react';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-graphite-950 border-t border-white/10 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-bold tracking-tighter mb-6">
            <span className="text-white">SITES</span>
            <span className="text-electric-blue">LS</span>
          </div>
          <p className="text-white/50 max-w-sm leading-relaxed mb-8">
            Transformando prestadores de serviços em referências de mercado através de design estratégico e alta performance digital.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Links Rápidos</h4>
          <ul className="space-y-4 text-white/50">
            <li><a href="#home" className="hover:text-electric-blue transition-colors">Início</a></li>
            <li><a href="#features" className="hover:text-electric-blue transition-colors">Vantagens</a></li>
            <li><a href="#preview" className="hover:text-electric-blue transition-colors">Como Funciona</a></li>
            <li><a href="#testimonials" className="hover:text-electric-blue transition-colors">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Contato</h4>
          <ul className="space-y-4 text-white/50">
            <li className="flex items-center gap-2">
              <MessageCircle size={18} className="text-neon-green" />
              WhatsApp: (00) 00000-0000
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-electric-blue" />
              contato@sitesls.com.br
            </li>
          </ul>
          <Button variant="whatsapp" className="mt-8 w-full">
            Chamar Agora
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 text-center text-white/30 text-sm">
        <p>© {new Date().getFullYear()} Sites LS. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
