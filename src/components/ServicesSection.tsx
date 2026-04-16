import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { title: "Buying & Selling", desc: "End-to-end support for property transactions." },
  { title: "Rentals", desc: "Find the perfect rental — residential or commercial." },
  { title: "Investment Advisory", desc: "Data-driven guidance for portfolio growth." },
  { title: "Property Management", desc: "Hassle-free management for your assets." },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section-padding py-20 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="fade-up text-wide text-[11px] text-muted-foreground mb-3">Services</p>
        <h2 className="fade-up font-sans text-2xl md:text-4xl font-light text-foreground tracking-tight mb-16">
          What we do
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="fade-up bg-background p-8 md:p-10">
              <h3 className="font-sans text-sm font-medium text-foreground tracking-wide uppercase mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
