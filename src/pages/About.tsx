import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import rishikaImg from "@/assets/rishika.png";
import aanshulImg from "@/assets/aanshul.png";

const stats = [
  { value: "22+", label: "Years Experience" },
  { value: "1B+", label: "Sales Achieved" },
  { value: "500+", label: "Team Members Led" },
  { value: "3", label: "Global Offices" },
];

const dnaValues = [
  {
    title: "Transparency",
    desc: "Clear, honest and seamless transactions at every step.",
    icon: "01",
  },
  {
    title: "Innovation",
    desc: "Elevating service quality and efficiency through technology.",
    icon: "02",
  },
  {
    title: "Integrity",
    desc: "Unwavering commitment to excellence and client-first service.",
    icon: "03",
  },
  {
    title: "Global Reach",
    desc: "Expanding beyond borders to provide international expertise.",
    icon: "04",
  },
];

const expertise = [
  { title: "Luxury Properties", desc: "High-end residential and commercial spaces curated for discerning buyers." },
  { title: "Investment Opportunities", desc: "High-yield investments and portfolio management for global investors." },
  { title: "Global Market Insights", desc: "Data-driven intelligence across UAE and international real estate markets." },
];

const team = [
  {
    name: "Rishika M",
    role: "CEO & Founder",
    img: rishikaImg,
    bio1: "Rishika M is the CEO and Founder of Future of Real Estate, bringing over 22 years of diverse experience to the industry. Her career began in call centers and tourism, transitioned through a successful stint as a flight attendant, and later as an Indian television actress.",
    bio2: "With a vision of AI-powered, seamless real estate transactions and a commitment to exceptional customer service, Rishika is revolutionizing the industry. As CEO, she is focused on innovation and growth, striving to redefine the future of real estate.",
  },
  {
    name: "Aanshul Agarwal",
    role: "Co-Founder & Managing Partner",
    img: aanshulImg,
    bio1: "Aanshul Agarwal is the Managing Partner and Co-Founder of Future of Real Estate, a leading force in the real estate industry with over 10 years of sales experience. Having led teams of 500+ in India and 150+ internationally, he achieved over 1 billion in real estate sales.",
    bio2: "A self-proclaimed visionary, Aanshul's fearless determination drives his mission to reshape the future of real estate. He is committed to innovation, collaboration, and breaking boundaries to chart new paths for success.",
  },
];

const About = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();
  const ref4 = useScrollReveal();
  const ref5 = useScrollReveal();
  const [activeTeam, setActiveTeam] = useState(0);

  return (
    <main className="bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero — full-bleed with large type */}
      <section className="relative min-h-screen flex flex-col justify-end section-padding pb-16 md:pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 40%, hsl(var(--primary-foreground)) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-6xl">
          <p className="text-[11px] tracking-widest uppercase text-primary-foreground/40 mb-6">About Us</p>
          <h1 className="font-sans font-light text-primary-foreground leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
            Future of<br />Real Estate
          </h1>
          <p className="font-sans text-base md:text-lg font-light text-primary-foreground/60 max-w-xl">
            Revolutionizing global real estate through innovation, integrity, and excellence.
          </p>
        </div>
        {/* Decorative line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-primary-foreground/10" />
      </section>

      {/* Stats strip */}
      <section ref={ref1} className="section-padding py-0 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="fade-up text-center py-10 px-6">
              <p className="font-sans text-3xl md:text-4xl font-light text-foreground mb-1">{s.value}</p>
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission + Vision side by side */}
      <section ref={ref2} className="section-padding py-24 md:py-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div>
            <p className="fade-up text-[11px] tracking-widest uppercase text-muted-foreground mb-4">Who We Are</p>
            <h2 className="fade-up font-sans text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight mb-8">
              Built on trust.<br />Driven by results.
            </h2>
            <p className="fade-up font-sans text-sm text-muted-foreground leading-relaxed">
              Future of Real Estate is a visionary company transforming the industry through innovation, integrity, and excellence. Our mission is to empower clients, foster trust, and build lasting value across global markets.
            </p>
          </div>
          <div className="fade-up grid grid-cols-1 gap-px bg-border">
            <div className="bg-background p-8 md:p-10">
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Our Motto</p>
              <p className="font-sans text-xl md:text-2xl font-light text-foreground">Global Reach, Local Touch</p>
            </div>
            <div className="bg-background p-8 md:p-10">
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Our Vision</p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Redefine the global real estate experience by merging cutting-edge technology with deeply personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DNA — numbered cards */}
      <section ref={ref3} className="section-padding py-24 md:py-40 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="fade-up text-[11px] tracking-widest uppercase text-primary-foreground/40 mb-3">Our DNA</p>
              <h2 className="fade-up font-sans text-3xl md:text-5xl font-light text-primary-foreground tracking-tight">
                What Defines Us
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {dnaValues.map((v) => (
              <div key={v.title} className="fade-up group bg-foreground p-8 md:p-10 hover:bg-primary-foreground/5 transition-colors duration-300 cursor-default">
                <p className="font-sans text-4xl font-light text-primary-foreground/10 mb-6 group-hover:text-primary-foreground/20 transition-colors duration-300">{v.icon}</p>
                <h3 className="font-sans text-sm font-medium text-primary-foreground tracking-wide uppercase mb-3">{v.title}</h3>
                <p className="font-sans text-xs text-primary-foreground/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section ref={ref4} className="section-padding py-24 md:py-40 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="fade-up text-[11px] tracking-widest uppercase text-muted-foreground mb-3">What We Do</p>
          <h2 className="fade-up font-sans text-3xl md:text-5xl font-light text-foreground tracking-tight mb-16">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {expertise.map((e, i) => (
              <div key={e.title} className="fade-up group bg-background p-8 md:p-12 hover:bg-card transition-colors duration-300">
                <p className="font-sans text-5xl font-light text-border group-hover:text-muted-foreground/30 transition-colors duration-300 mb-6">0{i + 1}</p>
                <h3 className="font-sans text-base font-medium text-foreground tracking-wide mb-3">{e.title}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — interactive tab switcher */}
      <section ref={ref5} className="section-padding py-24 md:py-40">
        <div className="max-w-6xl mx-auto">
          <p className="fade-up text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Leadership</p>
          <h2 className="fade-up font-sans text-3xl md:text-5xl font-light text-foreground tracking-tight mb-12">The Team</h2>

          {/* Tab switcher */}
          <div className="fade-up flex gap-0 border border-border mb-12 w-fit">
            {team.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTeam(i)}
                className={`px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeTeam === i
                    ? "bg-foreground text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active team member */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="fade-up relative overflow-hidden group">
              <img
                src={team[activeTeam].img}
                alt={team[activeTeam].name}
                className="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            <div className="fade-up">
              <h3 className="font-sans text-3xl md:text-4xl font-light text-foreground tracking-tight mb-2">
                {team[activeTeam].name}
              </h3>
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-1">
                {team[activeTeam].role}
              </p>
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-10">
                Future of Real Estate
              </p>
              <div className="w-8 h-px bg-border mb-10" />
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">
                {team[activeTeam].bio1}
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {team[activeTeam].bio2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding py-32 md:py-48 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 30% 60%, hsl(var(--primary-foreground)) 0%, transparent 50%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[11px] tracking-widest uppercase text-primary-foreground/40 mb-6">Get Started</p>
          <h2 className="font-sans text-3xl md:text-5xl font-light text-primary-foreground tracking-tight mb-8">
            Ready to invest in<br />the future?
          </h2>
          <p className="font-sans text-sm text-primary-foreground/50 mb-12 max-w-md mx-auto">
            Connect with our team and discover premium properties tailored to your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-primary-foreground/40 text-primary-foreground text-xs tracking-widest uppercase px-10 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
