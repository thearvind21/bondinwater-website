import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Worlds } from './components/Worlds';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { DesignedForLife } from './components/DesignedForLife';
import { ContactFooter } from './components/ContactFooter';
import { LightboxModal } from './components/LightboxModal';
import { InquiryModal } from './components/InquiryModal';
import { GalleryItem } from './types';

export function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Active section observer for top navigation links highlight
  useEffect(() => {
    const sectionNavMap: { [key: string]: string } = {
      hero: 'hero',
      philosophy: 'philosophy',
      worlds: 'worlds',
      gallery: 'worlds',
      process: 'process',
      life: 'philosophy',
      contact: 'contact',
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sectionElements = ['hero', 'philosophy', 'worlds', 'gallery', 'process', 'life', 'contact'];

      for (const id of sectionElements) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.2) {
            const mapped = sectionNavMap[id];
            if (mapped) {
              setActiveSection(mapped);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C1E14] text-[#1A211D] relative selection:bg-coral selection:text-white">
      {/* 00 — Preloader / Centred Logo Reveal */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Persistent Navigation */}
      <Navigation
        isLoaded={preloaderDone}
        activeSection={activeSection}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <main>
        {/* 01 — Hero / The Art of Living Worlds */}
        <Hero
          isLoaded={preloaderDone}
          onExploreClick={() => {
            const el = document.getElementById('worlds');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 02 — Our Approach / Philosophy */}
        <Philosophy />

        {/* 03 — Worlds We Create / Interactive Feature */}
        <Worlds />

        {/* 04 — A Living Canvas / Image Gallery */}
        <Gallery onSelectImage={(item) => setSelectedImage(item)} />

        {/* 05 — From Imagination to Reality / Process (Chapter 04) */}
        <Process />

        {/* 06 — Designed for Life / Animal & Botanical Feature */}
        <DesignedForLife />

        {/* 07 — Contact / Final CTA and Footer */}
        <ContactFooter onOpenInquiry={() => setIsInquiryOpen(true)} />
      </main>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* Client Conversation / Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}

export default App;
