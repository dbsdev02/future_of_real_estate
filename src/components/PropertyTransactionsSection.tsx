import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const transactions = [
  { img: project1, title: "Skyline Penthouse", location: "Downtown Dubai", value: "AED 12.5M", type: "Sold", date: "Jan 2025" },
  { img: project2, title: "Marina Residences", location: "Dubai Marina", value: "AED 8.2M", type: "Sold", date: "Feb 2025" },
  { img: project3, title: "Palm View Villa", location: "Palm Jumeirah", value: "AED 22M", type: "Sold", date: "Mar 2025" },
  { img: project4, title: "Creek Harbour Suite", location: "Dubai Creek", value: "AED 5.8M", type: "Leased", date: "Mar 2025" },
];

const PropertyTransactionsSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-24 md:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="fade-up text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Recent</p>
            <h2 className="fade-up font-sans text-2xl md:text-4xl font-light text-foreground tracking-tight">
              Property Transactions
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transactions.map((t) => (
            <div key={t.title} className="fade-up group">
              <div className="overflow-hidden mb-4">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground">{t.type}</span>
                <span className="text-[10px] text-muted-foreground">{t.date}</span>
              </div>
              <h3 className="font-sans text-sm font-medium text-foreground mb-1">{t.title}</h3>
              <p className="font-sans text-xs text-muted-foreground mb-2">{t.location}</p>
              <p className="font-sans text-sm text-foreground">{t.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTransactionsSection;
