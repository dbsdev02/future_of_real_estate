import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 section-padding py-5 flex items-center justify-between bg-background/90 backdrop-blur-sm border-b border-border">
      <Link to="/" className="font-sans text-sm font-medium tracking-widest text-foreground uppercase">
        Future of Real Estate
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {links.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
              isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-foreground"
        aria-label="Menu"
      >
        <div className="space-y-1.5">
          <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </div>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-8 md:hidden flex flex-col gap-6">
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-widest uppercase ${
                isActive(item.href) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
