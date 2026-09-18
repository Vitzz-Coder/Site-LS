import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Preview } from '@/components/Preview';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Glows for the whole page */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-electric-blue/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <Navbar />

      <Hero />

      <FadeIn delay={0.1}>
        <Features />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Preview />
      </FadeIn>

      <FadeIn delay={0.3}>
        <Process />
      </FadeIn>

      <FadeIn delay={0.4}>
        <Testimonials />
      </FadeIn>

      <FadeIn delay={0.5}>
        <FAQ />
      </FadeIn>

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
