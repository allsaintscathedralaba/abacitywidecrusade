import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselImageItem {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

interface ImageCarouselProps {
  images: CarouselImageItem[];
  autoPlayInterval?: number;
  imageAspect?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlayInterval = 3800,
  imageAspect = 'aspect-[16/10] sm:aspect-[16/9]'
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // If reached end, scroll back to start smoothly
      if (scrollLeft + clientWidth >= scrollWidth - 30) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const itemWidth = clientWidth * 0.75;
        scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval]);

  return (
    <div 
      className="relative w-full group/carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Navigation Controls */}
      <div className="absolute top-1/2 -left-3 sm:left-4 -translate-y-1/2 z-20">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="p-3 rounded-full bg-slate-950/80 hover:bg-orange-600 text-white border border-white/20 backdrop-blur-md transition-all disabled:opacity-0 disabled:pointer-events-none shadow-xl"
          aria-label="Previous images"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute top-1/2 -right-3 sm:right-4 -translate-y-1/2 z-20">
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="p-3 rounded-full bg-slate-950/80 hover:bg-orange-600 text-white border border-white/20 backdrop-blur-md transition-all disabled:opacity-0 disabled:pointer-events-none shadow-xl"
          aria-label="Next images"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Track */}
      <div
        ref={scrollRef}
        onScroll={checkScrollButtons}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar px-6 sm:px-8 py-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[82vw] sm:w-[55vw] md:w-[42vw] lg:w-[32vw] snap-start relative overflow-hidden rounded-xl bg-slate-900 border border-white/10 group select-none"
          >
            <div className={`w-full ${imageAspect} overflow-hidden relative`}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Tag / Caption Overlay */}
              {(item.tag || item.caption) && (
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  {item.tag && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 block mb-1">
                      {item.tag}
                    </span>
                  )}
                  {item.caption && (
                    <p className="text-sm font-bold text-white leading-snug">
                      {item.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
