const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=90&auto=format&fit=crop"
        alt="Luxury waterfront apartment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 h-full flex flex-col justify-end section-padding pb-16 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground tracking-tight leading-[1.1] mb-6">
            Future of
            <br />
            Real Estate
          </h1>
          <p className="font-sans text-sm text-primary-foreground/70 max-w-sm mb-10">
            Your gateway to premium properties across the UAE and beyond.
          </p>
          <a
            href="#properties"
            className="inline-block border border-primary-foreground/50 text-primary-foreground text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
          >
            Browse Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
