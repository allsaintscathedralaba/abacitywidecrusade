import React, { useState } from 'react';
import { EVENT_DATA } from '../data/eventData';
import { ArrowUpRight, CheckCircle2, AlertCircle, Share2 } from 'lucide-react';

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    interest: 'General Attendance (4 Days)'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+()-\s]{8,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Direct routing to EventRally
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(EVENT_DATA.registrationUrl, '_blank', 'noopener,noreferrer');
    }, 600);
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
    <section id="register" className="py-24 sm:py-32 bg-slate-950 text-slate-100 font-sans border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
            Participation & Registration
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            BE PART OF THIS DIVINE ENCOUNTER
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Admission is 100% free. Reserve your seat and indicate your participation in the citywide crusade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Portal Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="reveal-on-scroll space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400 block">
                OFFICIAL REGISTRATION PORTAL
              </span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Attendee registrations and seating passes are powered through our official online registration portal on EventRally.
              </p>
              
              <div className="pt-2">
                <a
                  href={EVENT_DATA.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black tracking-widest uppercase text-white bg-orange-600 hover:bg-orange-500 rounded transition-all hover:scale-[1.02] shadow-lg shadow-orange-950/50"
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="reveal-on-scroll delay-100 pt-6 border-t border-white/15 space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-slate-400">Date:</span>
                <span className="font-bold text-white">{EVENT_DATA.dates}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-slate-400">Daily Crusade Time:</span>
                <span className="font-bold text-white">{EVENT_DATA.dailyTime}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-slate-400">Ministers Conference:</span>
                <span className="font-bold text-orange-400">Sat. 5th Dec @ 9:00 AM</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-slate-400">Venue:</span>
                <span className="font-bold text-white">Ngwa High School, Aba</span>
              </div>
            </div>

            <div className="reveal-on-scroll delay-150">
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share & Invite on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Registration / Participation Form */}
          <div className="lg:col-span-7">
            <div className="reveal-on-scroll delay-200 border-t sm:border sm:border-white/15 sm:p-8 sm:rounded bg-slate-900/50">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                  Quick Participation RSVP
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below to confirm attendance and complete your pass on EventRally.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-white">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your details have been captured. The official EventRally registration page has been opened to finalize your attendee badge.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold uppercase tracking-widest text-orange-400 hover:text-orange-300 underline underline-offset-4"
                    >
                      Register Another Attendee
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-slate-300 mb-1">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bro. Emmanuel Chukwuma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/20 text-white text-sm rounded focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-slate-300 mb-1">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 08012345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/20 text-white text-sm rounded focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-slate-300 mb-1">
                      Email Address <span className="text-slate-500 text-[10px] lowercase font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/20 text-white text-sm rounded focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Location / Area */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-slate-300 mb-1">
                      Location / Area <span className="text-slate-500 text-[10px] lowercase font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ogbor Hill, Aba / Umungasi"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/20 text-white text-sm rounded focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Interest in Participating */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-slate-300 mb-1">
                      Interest in Participating
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/20 text-white text-sm rounded focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="General Attendance (4 Days)">General Attendance (4 Days Evening)</option>
                      <option value="Ministers Conference (Sat. Dec 5)">Ministers Conference (Saturday Morning @ 9:00 AM)</option>
                      <option value="Both Crusade & Ministers Conference">Both Evening Crusade & Ministers Conference</option>
                      <option value="Choir / Ushering / Volunteer">Choir / Ushering / Volunteer</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-xs font-black uppercase tracking-widest text-white bg-orange-600 hover:bg-orange-500 rounded transition-colors disabled:opacity-75"
                    >
                      {isSubmitting ? 'PROCESSING...' : 'SUBMIT REGISTRATION'}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    Submissions connect directly with the Diocese of Aba Ngwa North Crusade Attendance Registry.
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
