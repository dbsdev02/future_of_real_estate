import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-20 md:py-32 bg-foreground text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="fade-up font-sans text-2xl md:text-4xl font-light tracking-tight mb-6">
          Ready to find your next property?
        </h2>
        <p className="fade-up font-sans text-sm text-primary-foreground/60 mb-10">
          Browse our full portfolio or get in touch with our team.
        </p>
        <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.wolvesint.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary-foreground/50 text-primary-foreground text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
          >
            View All Properties
          </a>
          <a
            href="#contact"
            className="border border-primary-foreground/20 text-primary-foreground/70 text-xs tracking-widest uppercase px-8 py-4 hover:border-primary-foreground/50 hover:text-primary-foreground transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
