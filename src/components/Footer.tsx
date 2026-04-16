import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-padding py-16 md:py-20 border-t border-border">
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
            <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">Contact</p>
            <div className="flex flex-col gap-2">
              <a href="tel:800-0099" className="font-sans text-xs text-foreground hover:text-muted-foreground transition-colors">
                800-0099
              </a>
              <a href="mailto:Info@wolvesint.ae" className="font-sans text-xs text-foreground hover:text-muted-foreground transition-colors">
                Info@wolvesint.ae
              </a>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                20th Floor, Al Moosa Tower 1,<br />Sheikh Zayed Road, Dubai
              </p>
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
              <a
                href="https://www.wolvesint.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-foreground hover:text-muted-foreground transition-colors"
              >
                Wolves International ↗
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border">
          <p className="font-sans text-[11px] text-muted-foreground">
            © 2026 Future of Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
