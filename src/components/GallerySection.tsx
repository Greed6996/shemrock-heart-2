import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, ZoomIn, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { playPopSound, playChimeSound } from '../utils/soundEffects';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'classroom', label: 'Classrooms' },
    { id: 'outdoor', label: 'Play Arena' },
    { id: 'activities', label: 'Art & Sensory' },
    { id: 'events', label: 'Celebrations' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FCFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <ImageIcon className="w-4 h-4 text-amber-600" />
            <span>Campus Moments in Guwahati</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: 'Fredoka, cursive' }}
          >
            Sneak Peek into <span className="text-rose-600">Our Colorful World</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Explore glimpses of joyous smiles, creative discoveries, and physical play inside our safe Guwahati campus.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playPopSound();
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-rose-600 text-white shadow-md scale-105'
                    : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                playChimeSound();
                setActiveItem(item);
              }}
              className="group relative rounded-3xl overflow-hidden bg-white border-2 border-slate-200/80 hover:border-amber-400 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-black tracking-tight" style={{ fontFamily: 'Fredoka, cursive' }}>
                    {item.title}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-xs text-slate-200 line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-lg font-black transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200 inline-block mb-1">
                  {activeItem.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900" style={{ fontFamily: 'Fredoka, cursive' }}>
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {activeItem.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="#contact"
                  onClick={() => setActiveItem(null)}
                  className="w-full sm:w-auto text-center px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-extrabold rounded-xl shadow-md"
                >
                  Visit This Campus
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
