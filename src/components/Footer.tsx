import { Link } from "react-router-dom";

const newsText = "Dubai property sales hit AED 176.7B in Q1 2026  ·  Off-plan demand surges across UAE  ·  Luxury segment records highest transactions in 5 years  ·  Indian investors lead foreign buyer rankings  ·  New waterfront projects launching in Dubai Marina  ·";

const stats = [
  { value: "1.73B", label: "Total Sales" },
  { value: "167.90M", label: "Total Mortgaged" },
  { value: "27.71M", label: "Gifts" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* News ticker */}
      <div className="flex items-stretch overflow-hidden bg-secondary">
        <div className="bg-foreground text-primary-foreground text-xs font-bold tracking-widest uppercase px-6 flex items-center shrink-0" style={{ clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)", paddingRight: "2.5rem" }}>
          NEWS
        </div>
        <div className="flex-1 overflow-hidden flex items-center py-3">
          <div className="animate-scroll-news whitespace-nowrap text-foreground text-sm font-medium">
            {newsText} &nbsp;&nbsp;&nbsp;&nbsp; {newsText}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-center gap-0 bg-foreground">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            {i !== 0 && <div className="w-px h-12 bg-primary-foreground/20 mx-10" />}
            <div className="text-center py-8 px-10">
              <p className="font-sans text-3xl md:text-4xl font-semibold text-primary-foreground">{s.value}</p>
              <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/60 mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer content */}
      <div className="section-padding py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div>
              <Link to="/" className="font-sans text-sm font-medium tracking-widest uppercase text-foreground mb-4 block">
                Future of Real Estate
              </Link>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                Your gateway to premium properties.
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">Locations</p>
              <div className="flex flex-col gap-2">
                {["Dubai", "Amritsar", "Nagpur"].map((city) => (
                  <span key={city} className="font-sans text-xs text-foreground">{city}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">Links</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Home", to: "/" },
                  { label: "Properties", to: "/properties" },
                  { label: "About", to: "/about" },
                  { label: "Contact", to: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="font-sans text-xs text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-border">
            <p className="font-sans text-[11px] text-muted-foreground">
              © 2026 Future of Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
