import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CombinedFormatSection } from './components/CombinedFormatSection';
import { CatalogSection } from './components/CatalogSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#141b3d] to-[#0f1933] text-white">
      <Header />
      
      <main className="relative">
        <HeroSection />
        <CombinedFormatSection />
        <CatalogSection />
        <PricingSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}