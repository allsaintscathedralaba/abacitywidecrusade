import React from 'react';
import { ImageCarousel, CarouselImageItem } from './ImageCarousel';

export const WorshipExperience: React.FC = () => {
  const images: CarouselImageItem[] = [
    {
      src: '/assets/worship-hands-raised.jpg',
      alt: 'Hands raised in worship at crusade',
      tag: 'Massive Praise',
      caption: 'Thousands lifting hands in adoration and prayer'
    },
    {
      src: '/assets/preacher-stage.jpg',
      alt: 'Minister preaching on illuminated stage',
      tag: 'Sound Doctrine',
      caption: 'Expository preaching of God’s Word with power'
    },
    {
      src: '/assets/worship-crowd.jpg',
      alt: 'Congregation participating in powerful worship',
      tag: 'Holy Atmosphere',
      caption: 'An open-air altar of revival in Aba'
    },
    {
      src: '/assets/prayer-hands.jpg',
      alt: 'Worshipers in moments of prayer and intercession',
      tag: 'Spiritual Renewal',
      caption: 'Fervent prayer for families, healing, and peace'
    },
    {
      src: '/assets/choir-worship.jpg',
      alt: 'Praise and celebration at gospel gathering',
      tag: 'Divine Joy',
      caption: 'Victorious praise and celebration of grace'
    },
    {
      src: '/assets/congregation-praise.jpg',
      alt: 'Massive crusade crowd under night sky',
      tag: 'Citywide Gathering',
      caption: 'Uniting believers across denomination lines'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 font-sans border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-orange-500 block mb-1">
              Visual Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              THE CRUSADE EXPERIENCE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Capturing the spirit, reverence, and atmosphere of citywide worship and divine encounter.
          </p>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div className="reveal-on-scroll delay-100 w-full">
        <ImageCarousel 
          images={images} 
          autoPlayInterval={3600} 
          imageAspect="aspect-[16/10]" 
        />
      </div>
    </section>
  );
};
