import { useScrollReveal } from "@/hooks/useScrollReveal";

const newsItems = [
  "New luxury waterfront apartments launching in Dubai Marina",
  "Record-breaking property sales in Q1 2024",
  "Exclusive pre-launch offers available for select projects",
  "International investors show strong interest in UAE real estate",
];

const NewsFlashSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-6 bg-foreground text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="fade-up text-[10px] tracking-widest uppercase whitespace-nowrap font-medium">
            News Flash
          </span>
          <div className="fade-up flex-1 overflow-hidden">
            <div className="animate-scroll flex gap-12">
              {[...newsItems, ...newsItems].map((item, i) => (
                <span key={i} className="text-xs text-primary-foreground/70 whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFlashSection;
