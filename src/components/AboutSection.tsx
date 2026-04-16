import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding py-20 md:py-32 border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="fade-up text-wide text-[11px] text-muted-foreground mb-3">About</p>
          <h2 className="fade-up font-sans text-2xl md:text-4xl font-light text-foreground tracking-tight">
            Built on trust.
            <br />
            Driven by results.
          </h2>
        </div>
        <div className="space-y-6">
          <p className="fade-up font-sans text-sm text-muted-foreground leading-relaxed">
            Future of Real Estate connects buyers, investors, and tenants with exceptional properties across the UAE and global markets. We simplify real estate with transparency, expertise, and a commitment to quality.
          </p>
          <div className="fade-up flex gap-12 pt-6">
            <div>
              <p className="font-sans text-2xl font-light text-foreground">12+</p>
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mt-1">Markets</p>
            </div>
            <div>
              <p className="font-sans text-2xl font-light text-foreground">340+</p>
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mt-1">Properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
