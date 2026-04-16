import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  {
    title: "Transparency",
    desc: "Clear, honest and seamless transactions",
    icon: (
      <svg className="w-8 h-8 text-foreground mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "Elevating service quality and efficiency through technology",
    icon: (
      <svg className="w-8 h-8 text-foreground mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    desc: "Unwavering commitment to excellence and client-first service",
    icon: (
      <svg className="w-8 h-8 text-foreground mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    desc: "Expanding beyond borders to provide international expertise",
    icon: (
      <svg className="w-8 h-8 text-foreground mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const OurDNASection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-24 md:py-40">
      <div className="max-w-6xl mx-auto text-center">
        <p className="fade-up text-wide text-xs text-muted-foreground mb-4">Our DNA</p>
        <h2 className="fade-up font-display text-3xl md:text-5xl text-editorial text-foreground mb-6">
          What <em className="italic">Defines Us</em>
        </h2>
        <p className="fade-up font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-16">
          Our core values drive every decision, every partnership, and every property we touch.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {values.map((v) => (
            <div key={v.title} className="fade-up text-center">
              {v.icon}
              <h3 className="font-display text-lg text-foreground mb-2">{v.title}</h3>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDNASection;
