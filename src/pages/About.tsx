import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import rishikaImg from "@/assets/rishika.png";
import aanshulImg from "@/assets/aanshul.png";

const dnaValues = [
  { title: "Transparency", desc: "Clear, honest and seamless transactions" },
  { title: "Innovation", desc: "Elevating service quality and efficiency through technology" },
  { title: "Integrity", desc: "Unwavering commitment to excellence and client-first service" },
  { title: "Global Reach", desc: "Expanding beyond borders to provide international expertise" },
];

const expertise = [
  { title: "Luxury Properties", desc: "High-end residential and commercial spaces." },
  { title: "Investment Opportunities", desc: "High-yield investments and portfolio management." },
  { title: "Global Market Insights", desc: "Elevating service quality and efficiency through technology." },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="section-padding py-20 md:py-32 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">About Us</p>
            <h1 className="font-sans text-3xl md:text-5xl font-light text-foreground tracking-tight mb-6">
              Future of Real Estate
            </h1>
            <p className="font-sans text-base md:text-lg font-light text-foreground mb-4">
              Revolutionizing Global Real Estate
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Future of Real Estate is a visionary real estate company that's transforming the industry through innovation, integrity, and excellence. Our mission is to empower clients, foster trust, and build lasting value.
            </p>
          </div>
        </section>

        {/* Motto & Vision */}
        <section ref={ref} className="section-padding py-20 md:py-32 border-b border-border">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-px bg-border">
            <div className="fade-up bg-background p-10 md:p-16">
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">Our Motto</p>
              <p className="font-sans text-lg md:text-xl font-light text-foreground">
                Global Reach, Local Touch
              </p>
            </div>
            <div className="fade-up bg-background p-10 md:p-16">
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">Our Vision</p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Redefine the global real estate experience by merging cutting-edge technology with personalized service.
              </p>
            </div>
          </div>
        </section>

        {/* Our DNA */}
        <section className="section-padding py-20 md:py-32 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Our DNA</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {dnaValues.map((v) => (
                <div key={v.title} className="bg-background p-8 text-center">
                  <h3 className="font-sans text-sm font-medium text-foreground tracking-wide mb-3">
                    {v.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="section-padding py-20 md:py-32 border-b border-border bg-foreground text-primary-foreground">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-widest uppercase text-primary-foreground/50 mb-3">Our Expertise</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {expertise.map((e) => (
                <div key={e.title} className="text-center">
                  <h3 className="font-sans text-sm font-medium text-primary-foreground tracking-wide uppercase mb-3">
                    {e.title}
                  </h3>
                  <p className="font-sans text-xs text-primary-foreground/60 leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team - Rishika M */}
        <section className="section-padding py-20 md:py-32 border-b border-border">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-sans text-2xl md:text-3xl font-light text-foreground tracking-tight mb-2">
                Rishika M
              </h2>
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-1">
                CEO & Founder
              </p>
              <p className="font-sans text-xs text-muted-foreground mb-6">
                Wolves International Real Estate
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                Rishika M is the CEO and Founder of Wolves International Real Estate, bringing over 22 years of diverse experience to the industry. Her career began in call centers and tourism, transitioned through a successful stint as a flight attendant, and later as an Indian television actress. Her passion for real estate took root in Mumbai and flourished in Dubai, where she found her true calling and later founded Wolves International, a company built on integrity, transparency, and a client-first philosophy.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                With a vision of AI-powered, seamless real estate transactions and a commitment to exceptional customer service, Rishika is revolutionizing the industry through Wolves International. As CEO, she is focused on innovation and growth, striving to redefine the future of real estate and deliver a smoother, more trustworthy experience for clients.
              </p>
            </div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src={rishikaImg} alt="Rishika M - CEO & Founder" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </section>

        {/* Team - Aanshul Agarwal */}
        <section className="section-padding py-20 md:py-32 border-b border-border">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="aspect-[3/4] w-full overflow-hidden md:order-2">
              <img src={aanshulImg} alt="Aanshul Agarwal - Co-Founder" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="md:order-1">
              <h2 className="font-sans text-2xl md:text-3xl font-light text-foreground tracking-tight mb-2">
                Aanshul Agarwal
              </h2>
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-1">
                Co-Founder & Managing Partner
              </p>
              <p className="font-sans text-xs text-muted-foreground mb-6">
                Wolves International Real Estate
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                Aanshul Agarwal is the Managing Partner and Co-Founder of Wolves International, a leading force in the real estate industry with over 10 years of sales experience. Having led teams of 500+ in India and 150+ internationally for a UK-based company, he achieved over 1 billion in real estate sales in a remarkably short period. His leadership is defined by his philosophy of strength, unity, and adaptability, embodied in his top-performing team, "Wolves."
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                A self-proclaimed Black Wolf, Aanshul's fearless determination drives his mission to reshape the future of real estate. Through Wolves International, he is committed to innovation, collaboration, and breaking boundaries, striving to redefine the industry and chart new paths for success.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-20 md:py-32 bg-foreground text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-lg md:text-xl font-light leading-relaxed mb-8">
              Ready to invest in the future of real estate?
            </p>
            <Link
              to="/contact"
              className="inline-block border border-primary-foreground/50 text-primary-foreground text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default About;
