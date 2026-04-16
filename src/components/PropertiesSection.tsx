import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categories = [
  { img: project1, title: "Ready to Move In", desc: "Fully finished properties available for immediate occupancy" },
  { img: project2, title: "Resale", desc: "Pre-owned premium properties at competitive prices" },
  { img: project3, title: "Rental", desc: "Luxury rentals for short and long-term stays" },
  { img: project4, title: "Commercial", desc: "Office spaces, retail units, and business premises" },
  { img: project1, title: "Residential", desc: "Apartments, villas, and townhouses in prime locations" },
  { img: project2, title: "Plots", desc: "Land for sale in high-growth development zones" },
];

const PropertiesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="properties" ref={ref} className="section-padding py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <p className="fade-up text-wide text-[11px] text-muted-foreground mb-3">Browse</p>
        <h2 className="fade-up font-sans text-2xl md:text-4xl font-light text-foreground tracking-tight mb-16">
          Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="https://www.wolvesint.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up group bg-background"
            >
              <div className="overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-sm font-medium text-foreground tracking-wide uppercase mb-2">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span className="text-[11px] tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors border-b border-muted-foreground/30 pb-0.5">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
