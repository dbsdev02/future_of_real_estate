import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const categories = [
  { title: "Ready to Move In", img: project1 },
  { title: "Resale", img: project2 },
  { title: "Rental", img: project3 },
  { title: "Commercial", img: project1 },
  { title: "Residential", img: project2 },
  { title: "Plots", img: project3 },
];

const Index = () => {
  const ref = useScrollReveal();

  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />

      {/* Categories Preview */}
      <section ref={ref} className="section-padding py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="fade-up text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Browse</p>
              <h2 className="fade-up font-sans text-2xl md:text-4xl font-light text-foreground tracking-tight">
                Property Categories
              </h2>
            </div>
            <Link
              to="/properties"
              className="fade-up hidden md:block text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border pb-1"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to="/properties"
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
                <div className="p-5">
                  <h3 className="font-sans text-xs font-medium text-foreground tracking-wide uppercase">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to="/properties"
            className="md:hidden block text-center text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mt-8 border-b border-border pb-1 mx-auto w-fit"
          >
            View All →
          </Link>
        </div>
      </section>

      {/* Brief About */}
      <section className="section-padding py-20 md:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-6">About Us</p>
          <p className="font-sans text-lg md:text-xl font-light text-foreground leading-relaxed mb-8">
            Future of Real Estate connects buyers, investors, and tenants with exceptional properties across the UAE and global markets.
          </p>
          <Link
            to="/about"
            className="inline-block text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border pb-1"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-32 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-sans text-2xl md:text-4xl font-light tracking-tight mb-6">
            Ready to find your next property?
          </h2>
          <p className="font-sans text-sm text-primary-foreground/60 mb-10">
            Browse our full portfolio or get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="border border-primary-foreground/50 text-primary-foreground text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="border border-primary-foreground/20 text-primary-foreground/70 text-xs tracking-widest uppercase px-8 py-4 hover:border-primary-foreground/50 hover:text-primary-foreground transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
