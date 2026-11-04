import React, { useState } from 'react';
import { EVENT_DATA } from '../data/eventData';
import { UserCheck, Send, CheckCircle2, AlertCircle, ExternalLink, Calendar, MapPin, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    church: '',
    session: 'All 4 Days'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+()-\s]{8,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ea580c', '#1d4ed8', '#f59e0b', '#ffffff']
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(EVENT_DATA.registrationUrl, '_blank', 'noopener,noreferrer');
    }, 700);
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      `Join me at the ABA CITYWIDE CRUSADE 2026 organized by the Diocese of Aba Ngwa North (Anglican Communion)!\n\n` +
      `Theme: THINK BEFORE YOU BELIEVE (Acts 17:11)\n` +
      `Date: 2nd - 5th December 2026 (4:00 PM Daily)\n` +
      `Venue: Ngwa High School Playground, Aba\n\n` +
      `Register for free: ${EVENT_DATA.registrationUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <section id="register" className="py-20 lg:py-28 bg-crusade-navy-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-orange-500/10 border border-crusade-orange-500/30 text-crusade-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-4 h-4 text-crusade-orange-500" />
            <span>Attendance & Passes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            BE PART OF THIS <span className="text-crusade-orange-500">DIVINE ENCOUNTER</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Your seat awaits you. Make plans to attend and invite your family, friends, and loved ones.
          </p>
          <div className="w-16 h-1 bg-crusade-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct EventRally Portal Action */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-8 rounded-3xl bg-crusade-navy-900 border-2 border-crusade-orange-500/50 shadow-2xl">
              <span className="px-3 py-1 rounded-md bg-crusade-orange-600 text-white text-xs font-black uppercase tracking-wider inline-block mb-3">
                OFFICIAL REGISTRATION
              </span>

              <h3 className="text-2xl font-black text-white uppercase mb-3">
                EventRally Portal
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                All participant badges, reserved seating batches, and special ministers passes are secured through our official portal.
              </p>

              {/* Direct Link Button */}
              <a
                href={EVENT_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105 mb-4"
              >
                <span>OPEN OFFICIAL REGISTRATION</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleWhatsAppShare}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Invite Friends on WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-crusade-navy-900 border border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Calendar className="w-4 h-4 text-crusade-orange-400" />
                <span>{EVENT_DATA.dates} • 4:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2 text-white font-bold">
                <MapPin className="w-4 h-4 text-crusade-gold-400" />
                <span>{EVENT_DATA.venue}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Attendance Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-crusade-navy-900 border border-white/10 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white uppercase">
                  Quick Attendance RSVP
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below to confirm attendance and generate your event entry badge.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-white">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-sm text-emerald-200 leading-relaxed max-w-md mx-auto">
                    Your attendance RSVP has been captured. The official EventRally registration page has been opened to finalize your attendee badge.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={EVENT_DATA.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2"
                    >
                      <span>Open EventRally</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-white/10 text-white text-xs font-semibold"
                    >
                      Register Another Person
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Full Name <span className="text-crusade-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bro. Emmanuel Chukwuma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-crusade-navy-950 border text-white text-sm focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-white/15 focus:border-crusade-orange-500 focus:ring-crusade-orange-500/30'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Phone Number <span className="text-crusade-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 08012345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-crusade-navy-950 border text-white text-sm focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-white/15 focus:border-crusade-orange-500 focus:ring-crusade-orange-500/30'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Email Address <span className="text-slate-400 text-[10px] lowercase font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-crusade-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-crusade-orange-500 focus:ring-2 focus:ring-crusade-orange-500/30"
                    />
                  </div>

                  {/* Church or Ministry (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Church or Ministry <span className="text-slate-400 text-[10px] lowercase font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. St. Michael's Anglican Church, Aba"
                      value={formData.church}
                      onChange={(e) => setFormData({ ...formData, church: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-crusade-navy-950 border border-white/15 text-white text-sm focus:outline-none focus:border-crusade-orange-500 focus:ring-2 focus:ring-crusade-orange-500/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING RSVP...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT REGISTRATION</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
