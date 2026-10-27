import React from 'react';
import { useContent } from '../hooks/useContent';

// Quick-facts section: lets a recruiter see start date, duration,
// location, enrollment, language and CAD/GD&T fit at a glance.
const Availability = () => {
  const { availability } = useContent();
  if (!availability) return null;

  return (
    <section
      id="availability"
      className="bg-[#0a0a0a] pt-24 pb-24 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-12">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 bg-white/5">
            {availability.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] mb-4 tracking-tight">
            {availability.heading}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            {availability.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {availability.items.map((item, index) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={String(index * 60)}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/40 transition-colors duration-300"
            >
              <div className="text-[11px] font-bold tracking-widest uppercase text-blue-400 mb-2">
                {item.label}
              </div>
              <div className="text-white text-lg font-black mb-2 leading-snug">{item.value}</div>
              {item.detail && (
                <p className="text-white/55 text-sm leading-relaxed">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Availability;
