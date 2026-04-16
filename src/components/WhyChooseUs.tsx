import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  { title: "Proven Returns", desc: "Avg. 18% annual ROI across our portfolio" },
  { title: "Global Network", desc: "Presence in 12+ international markets" },
  { title: "Expert Team", desc: "30+ years of combined industry leadership" },
  { title: "Total Transparency", desc: "Real-time reporting and full disclosure" },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-24 md:py-40 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up text-wide text-xs text-charcoal-foreground/50 mb-4">Why Èlvora</p>
        <h2 className="fade-up font-display text-3xl md:text-5xl text-editorial text-charcoal-foreground mb-20">
          Confidence in Every <em className="italic">Decision</em>
        </h2>
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="fade-up">
              <div className="h-px w-8 bg-charcoal-foreground/30 mb-6" />
              <h3 className="font-display text-lg text-charcoal-foreground mb-3">{r.title}</h3>
              <p className="font-sans text-sm text-charcoal-foreground/50 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
