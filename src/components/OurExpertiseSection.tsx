import { useScrollReveal } from "@/hooks/useScrollReveal";

const expertise = [
  {
    title: "Luxury Properties",
    desc: "High-end residential and commercial spaces.",
    icon: (
      <svg className="w-8 h-8 text-primary-foreground mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "Investment Opportunities",
    desc: "High-yield investments and portfolio management.",
    icon: (
      <svg className="w-8 h-8 text-primary-foreground mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Global Market Insights",
    desc: "Elevating service quality and efficiency through technology.",
    icon: (
      <svg className="w-8 h-8 text-primary-foreground mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const OurExpertiseSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-24 md:py-40 bg-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <p className="fade-up text-wide text-xs text-primary-foreground/70 mb-4">Our Expertise</p>
        <h2 className="fade-up font-display text-3xl md:text-5xl text-editorial text-primary-foreground mb-16">
          What We <em className="italic">Excel At</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {expertise.map((e) => (
            <div key={e.title} className="fade-up text-center">
              {e.icon}
              <h3 className="font-display text-lg text-primary-foreground mb-2">{e.title}</h3>
              <p className="font-sans text-xs text-primary-foreground/60 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertiseSection;
