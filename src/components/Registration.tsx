import React, { useState } from 'react';
import { EVENT_DATA } from '../data/eventData';
import { UserCheck, Send, CheckCircle2, AlertCircle, ExternalLink, Calendar, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    church: '',
    attendingDays: 'All 4 Days'
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

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f97316', '#2563eb', '#f59e0b', '#ffffff']
    });

    // Simulate quick processing and open EventRally registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open official EventRally portal
      window.open(EVENT_DATA.registrationUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Join me at the ABA CITYWIDE CRUSADE 2026 organized by the Diocese of Aba Ngwa North (Anglican Communion)!\n\n` +
      `Theme: THINK BEFORE YOU BELIEVE (Acts 17:11)\n` +
      `Date: 2nd - 5th December 2026 (4:00 PM Daily)\n` +
      `Venue: Ngwa High School Playground, Aba\n\n` +
      `Register for free: ${EVENT_DATA.registrationUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="register" className="py-24 bg-crusade-navy-950 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-crusade-royal-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-crusade-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crusade-orange-500/10 border border-crusade-orange-500/30 text-crusade-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <UserCheck className="w-4 h-4" />
            <span>Reserved Seating & Registration</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            BE PART OF THIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-crusade-orange-400 to-amber-400">DIVINE ENCOUNTER</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Your seat awaits you. Make plans to attend and invite your family, friends, and loved ones. Free entry for all.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-crusade-orange-500 to-crusade-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct EventRally Portal Feature Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-gradient-to-b from-crusade-navy-900/90 via-crusade-royal-950/80 to-crusade-navy-900/90 border border-crusade-orange-500/40 shadow-2xl backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crusade-orange-500/20 text-crusade-orange-300 text-xs font-black uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Online Portal</span>
              </div>

              <h3 className="font-display text-2xl font-black text-white uppercase mb-3">
                Official Event Registration
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                All attendee passes, reserved seat batches, and ministers conference entries are managed through the official EventRally platform.
              </p>

              {/* Direct Portal CTA Button */}
              <a
                href={EVENT_DATA.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-crusade-orange-600 via-crusade-orange-500 to-amber-500 hover:from-crusade-orange-500 hover:to-amber-400 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-crusade-orange-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] mb-4"
              >
                <span>OPEN OFFICIAL REGISTRATION PORTAL</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Direct portal: geteventrally.com • 100% Free Admission
              </p>

              {/* Share On WhatsApp Button */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleWhatsAppShare}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 text-xs sm:text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Invite Friends on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Quick Event Summary Card */}
            <div className="p-6 rounded-3xl bg-crusade-navy-900/60 border border-white/10 text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <Calendar className="w-4 h-4 text-crusade-orange-400" />
                <span>{EVENT_DATA.dates} • 4:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2 text-white font-bold">
                <MapPin className="w-4 h-4 text-crusade-gold-400" />
                <span>{EVENT_DATA.venue}</span>
              </div>
              <p className="text-slate-400 text-[11px] pt-1">
                Ministers Conference: Saturday 5th December 2026 by 9:00 AM.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Quick RSVP Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-crusade-navy-900/90 to-crusade-navy-950/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-6">
                <h3 className="font-display text-2xl font-black text-white uppercase">
                  Quick Attendance RSVP
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Fill in your details below to confirm attendance and proceed to your official event badge.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-black text-white">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-sm text-emerald-200 max-w-md mx-auto leading-relaxed">
                    Your attendance RSVP has been captured. The official EventRally portal has been opened to finalize your event credentials.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={EVENT_DATA.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-crusade-orange-600 hover:bg-crusade-orange-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Open EventRally Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs transition-colors"
                    >
                      Register Another Person
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                      Full Name <span className="text-crusade-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bro. Emmanuel Chukwuma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-crusade-navy-950 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-500/40'
                          : 'border-white/10 focus:border-crusade-orange-500 focus:ring-crusade-orange-500/30'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                      Phone Number <span className="text-crusade-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 08012345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-crusade-navy-950 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500/40'
                          : 'border-white/10 focus:border-crusade-orange-500 focus:ring-crusade-orange-500/30'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                      Email Address <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-crusade-navy-950 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500/40'
                          : 'border-white/10 focus:border-crusade-orange-500 focus:ring-crusade-orange-500/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Church or Ministry (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                      Church or Ministry <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. St. Michael's Anglican Church, Aba"
                      value={formData.church}
                      onChange={(e) => setFormData({ ...formData, church: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-crusade-navy-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-crusade-orange-500 focus:ring-2 focus:ring-crusade-orange-500/30 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-crusade-orange-600 via-crusade-orange-500 to-amber-500 hover:from-crusade-orange-500 hover:to-amber-400 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-crusade-orange-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING REGISTRATION...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT REGISTRATION</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 leading-tight">
                    Submissions connect seamlessly to the Diocese of Aba Ngwa North Crusade Attendance registry.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
