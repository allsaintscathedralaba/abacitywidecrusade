import React from 'react';
import { X, Download, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

interface FlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-3xl w-full bg-crusade-navy-950 border border-crusade-gold-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-crusade-navy-900/90">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-crusade-gold-400 block">
              Official Publicity Artwork
            </span>
            <h3 className="font-display font-extrabold text-white text-base sm:text-lg">
              ABA CITYWIDE CRUSADE 2026 FLYER
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/assets/crusade-flyer.jpg"
              download="Aba-Citywide-Crusade-2026-Flyer.jpg"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              title="Download Flyer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image */}
        <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-black/40">
          <img
            src="/assets/crusade-flyer.jpg"
            alt="Official Crusade 2026 Flyer"
            className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-lg border border-white/10"
          />
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-crusade-navy-900/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-crusade-orange-400" /> {EVENT_DATA.dates}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-crusade-gold-300">
              <MapPin className="w-3.5 h-3.5" /> Ngwa High School, Aba
            </span>
          </div>

          <a
            href={EVENT_DATA.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-crusade-orange-400 hover:text-crusade-orange-300 font-bold flex items-center gap-1 text-xs"
          >
            <span>Register on EventRally</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
