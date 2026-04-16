import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "The Skyward Penthouse", location: "Manhattan, New York", type: "Residential" },
  { img: project2, title: "Villa Serenità", location: "Mallorca, Spain", type: "Waterfront" },
  { img: project3, title: "Lumière Tower", location: "Dubai Marina, UAE", type: "Mixed-Use" },
  { img: project4, title: "Terracotta Gardens", location: "Lisbon, Portugal", type: "Development" },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="section-padding py-24 md:py-40 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="fade-up text-wide text-xs text-muted-foreground mb-4">Featured</p>
            <h2 className="fade-up font-display text-3xl md:text-5xl text-editorial text-foreground">
              Selected <em className="italic">Projects</em>
            </h2>
          </div>
          <a href="#" className="fade-up hidden md:block text-wide text-xs text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 pb-1">
            View All
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`fade-up group relative overflow-hidden cursor-pointer ${i === 0 || i === 3 ? "md:aspect-[4/5]" : "md:aspect-[4/5]"}`}
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-wide text-[10px] text-primary-foreground/60 mb-2">{project.type}</p>
                <h3 className="font-display text-xl md:text-2xl text-primary-foreground mb-1">{project.title}</h3>
                <p className="font-sans text-xs text-primary-foreground/70">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
