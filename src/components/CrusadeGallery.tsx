import React from 'react';
import { ImageCarousel, CarouselImageItem } from './ImageCarousel';

export const CrusadeGallery: React.FC = () => {
  const images: CarouselImageItem[] = [
    {
      src: '/assets/mega-rally-bus.jpg',
      alt: 'Youth mega rally celebrating crusade with billboard on bus',
      tag: 'Mega Rally',
      caption: 'Passionate youth mobilizing the city of Aba'
    },
    {
      src: '/assets/crusade-lens-art.jpg',
      alt: 'Crusade lens reflection artwork',
      tag: 'Revival Vision',
      caption: 'Look through the lens of faith and divine expectation'
    },
    {
      src: '/assets/ministers-auditorium.jpg',
      alt: 'Ministers Conference auditorium gathering',
      tag: 'Ministers Conference',
      caption: 'Saturday morning strategic leadership impartation'
    },
    {
      src: '/assets/bible-study.jpg',
      alt: 'Open Scriptures and biblical teaching',
      tag: 'Biblical Truth',
      caption: 'Examining the Scriptures daily (Acts 17:11)'
    },
    {
      src: '/assets/crusade-stage.jpg',
      alt: 'Outdoor crusade grounds under stage lights',
      tag: 'Crusade Grounds',
      caption: 'Ngwa High School Playground prepared for thousands'
    },
    {
      src: '/assets/crusade-flyer.jpg',
      alt: 'Official crusade publicity artwork',
      tag: 'Official Mandate',
      caption: 'Diocese of Aba Ngwa North (Anglican Communion)'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 font-sans border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-orange-500 block mb-1">
              Photographic Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              CITYWIDE REVIVAL IN MOTION
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Experiencing the energy, publicity, and expectant atmosphere across the city.
          </p>
        </div>
      </div>

      {/* Horizontal Carousel 2 */}
      <div className="reveal-on-scroll delay-100 w-full">
        <ImageCarousel 
          images={images} 
          autoPlayInterval={4200}
          imageAspect="aspect-[4/3] sm:aspect-[16/11]"
        />
      </div>
    </section>
  );
};
