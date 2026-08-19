import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CombinedFormatSection } from './components/CombinedFormatSection';
import { AboutSection } from './components/AboutSection';
import { CatalogSection } from './components/CatalogSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section:not(:first-child)'));
    document.querySelector('main > section:first-child')?.classList.remove('scroll-reveal', 'scroll-reveal--visible');
    document.querySelector('.movies-footer')?.classList.remove('scroll-reveal', 'scroll-reveal--visible');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobileLayout = window.matchMedia('(max-width: 767px)').matches;

    if (reduceMotion || mobileLayout || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('scroll-reveal--visible'));
      return;
    }

    sections.forEach((section) => section.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('scroll-reveal--visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -7% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#141b3d] to-[#0f1933] text-white">
      <Header />
      
      <main className="relative">
        <HeroSection />
        <CombinedFormatSection />
        <AboutSection />
        <CatalogSection />
        <PricingSection />
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
}
