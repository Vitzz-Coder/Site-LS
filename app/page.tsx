import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Preview } from '@/components/Preview';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Glows for the whole page */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-electric-blue/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <Navbar />

      <Hero />
      <Features />
      <Preview />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
