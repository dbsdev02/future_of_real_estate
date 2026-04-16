import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Future of Real Estate transformed how I approach property investment. Their insight into emerging markets is unparalleled.",
    name: "Alexander Reinholt",
    role: "Private Investor, Zurich",
  },
  {
    quote: "The level of curation and attention to detail sets them apart from any firm I've worked with globally.",
    name: "Sophia Nakamura",
    role: "CEO, Nakamura Holdings",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-24 md:py-40">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up text-wide text-xs text-muted-foreground mb-16">Testimonials</p>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {testimonials.map((t) => (
            <div key={t.name} className="fade-up">
              <blockquote className="font-display text-xl md:text-2xl text-foreground leading-snug mb-8 italic">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-sans text-sm text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
