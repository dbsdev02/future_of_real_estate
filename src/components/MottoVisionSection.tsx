import { useScrollReveal } from "@/hooks/useScrollReveal";

const MottoVisionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-20 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="fade-up border border-border p-10 md:p-14">
          <p className="text-wide text-xs text-muted-foreground mb-4">Our Motto</p>
          <h3 className="font-display text-2xl md:text-3xl text-foreground">
            Global Reach, <em className="italic">Local Touch</em>
          </h3>
        </div>
        <div className="fade-up border border-border p-10 md:p-14">
          <p className="text-wide text-xs text-muted-foreground mb-4">Our Vision</p>
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
            Redefine the global real estate experience by merging cutting-edge technology with personalized service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MottoVisionSection;
