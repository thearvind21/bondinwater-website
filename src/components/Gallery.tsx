import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from './Icons';
import { BotanicalBranch } from './BotanicalArtwork';
import { GalleryItem } from '../types';

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const galleryItems: GalleryItem[] = [
    {
      id: 'oceanarium',
      title: 'Oceanarium Coral Reef Tunnel',
      category: 'Marine Biotope',
      image: '/assets/generated/oceanarium-gallery.jpg',
      aspect: 'col-span-12 sm:col-span-6 lg:col-span-5 row-span-2',
      caption: 'Public Oceanarium • Curved Acrylic Marine Ecosystem',
    },
    {
      id: 'iguana',
      title: 'Rainforest Canopy Iguana',
      category: 'Herpetological Habitat',
      image: '/assets/generated/iguana-gallery.jpg',
      aspect: 'col-span-6 sm:col-span-3 lg:col-span-4',
      caption: 'Tropical Vivarium • Species-Appropriate Microclimate',
    },
    {
      id: 'water-lilies',
      title: 'Nymphaea Blossom Basin',
      category: 'Aquatic Flora',
      image: '/assets/images/water-lilies.jpg',
      aspect: 'col-span-6 sm:col-span-3 lg:col-span-3',
      caption: 'Natural Pond • Flora & Filtration Symbiosis',
    },
    {
      id: 'parrots',
      title: 'Tropical Aviary Pair',
      category: 'Aviary Engineering',
      image: '/assets/generated/parrots-gallery.jpg',
      aspect: 'col-span-6 sm:col-span-3 lg:col-span-3',
      caption: 'Geodesic Aviary • Flight & Foraging Freedom',
    },
    {
      id: 'underwater-aquarium',
      title: 'Aquascaped Forest Basin',
      category: 'Freshwater Biotope',
      image: '/assets/images/underwater-aquarium.jpg',
      aspect: 'col-span-6 sm:col-span-3 lg:col-span-4',
      caption: 'Nature Aquarium • Submerged Botanical Artistry',
    },
    {
      id: 'clownfish',
      title: 'Amphiprion Anemone Reef',
      category: 'Marine Symbiosis',
      image: '/assets/generated/clownfish-gallery.jpg',
      aspect: 'col-span-12 sm:col-span-6 lg:col-span-5',
      caption: 'Reef Ecology • High-Purity Water Chemistry',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-28 lg:py-36 bg-[#FAF7F0] text-[#1A211D] overflow-hidden"
      aria-label="A Living Canvas Gallery"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-14 items-start">
          
          {/* Left Side: Chapter Eyebrow, Large Headline, and Botanical Accent */}
          <div className="md:col-span-4 flex flex-col justify-start md:sticky md:top-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-coral font-medium">
                CHAPTER 03
              </span>
              <span className="w-8 h-[1px] bg-coral/50" />
            </div>

            <h2 className="text-5xl sm:text-6xl font-serif font-light text-[#1A211D] leading-[1.05] tracking-tight mb-6">
              A living
              <br />
              <span className="italic font-normal">canvas</span>
            </h2>

            <p className="text-base sm:text-lg text-[#68736B] font-sans font-light leading-relaxed max-w-sm mb-8">
              A glimpse into the diverse ecosystems we design and build.
            </p>

            <div className="pt-4 border-t border-[#1A211D]/10">
              <p className="text-xs text-[#8A968E] font-mono tracking-wider mb-2">
                CURATED MOSAIC • 6 INSTALLATIONS
              </p>
              <p className="text-xs text-[#68736B]">
                Click any tile to inspect high-resolution detail.
              </p>
            </div>

            {/* Botanical Line Illustration */}
            <div className="mt-8 select-none pointer-events-none opacity-40">
              <BotanicalBranch className="w-48 h-60 text-[#68736B]/40" />
            </div>
          </div>

          {/* Right Side: Asymmetrical Editorial Image Mosaic */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-12 gap-4 sm:gap-5">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  onClick={() => onSelectImage(item)}
                  className={`group relative overflow-hidden rounded-xl bg-[#EBE5D8] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${item.aspect}`}
                  style={{ minHeight: index === 0 ? '360px' : '200px' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Editorial Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 text-white" />

                  {/* Caption & Metadata */}
                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white transition-transform duration-300">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-coral font-medium block mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-serif font-light text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#C9D9CF] font-sans truncate opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                      {item.caption}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
