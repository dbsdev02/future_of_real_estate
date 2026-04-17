import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const roadshows = [
  { city: "Dubai", img: project1, label: "UAE" },
  { city: "Amritsar", img: project2, label: "India" },
  { city: "Nagpur", img: project3, label: "India" },
];

const RoadshowsSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-24 md:py-40 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="fade-up text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Where We Are</p>
          <h2 className="fade-up font-sans text-2xl md:text-4xl font-light text-foreground tracking-tight">
            Roadshows
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadshows.map((r) => (
            <div key={r.city} className="fade-up group relative overflow-hidden">
              <img
                src={r.img}
                alt={r.city}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[10px] tracking-widest uppercase text-primary-foreground/60 mb-1">{r.label}</p>
                <h3 className="font-sans text-xl font-light text-primary-foreground tracking-wide">{r.city}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadshowsSection;
