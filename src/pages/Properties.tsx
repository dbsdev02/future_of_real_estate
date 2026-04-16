import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categories = ["All", "Ready to Move In", "Resale", "Rental", "Commercial", "Residential", "Plots"];

const listings = [
  { id: 1, title: "Skyline Tower Apartment", location: "Downtown Dubai", price: "AED 2,500,000", category: "Ready to Move In", img: project1, beds: 2, type: "Apartment" },
  { id: 2, title: "Marina View Penthouse", location: "Dubai Marina", price: "AED 8,900,000", category: "Ready to Move In", img: project2, beds: 4, type: "Penthouse" },
  { id: 3, title: "Palm Jumeirah Villa", location: "Palm Jumeirah", price: "AED 15,000,000", category: "Resale", img: project3, beds: 5, type: "Villa" },
  { id: 4, title: "Business Bay Office", location: "Business Bay", price: "AED 3,200,000", category: "Commercial", img: project4, beds: 0, type: "Office" },
  { id: 5, title: "JVC Studio", location: "Jumeirah Village Circle", price: "AED 45,000/yr", category: "Rental", img: project1, beds: 0, type: "Studio" },
  { id: 6, title: "Creek Harbour Residence", location: "Dubai Creek Harbour", price: "AED 1,800,000", category: "Residential", img: project2, beds: 1, type: "Apartment" },
  { id: 7, title: "Al Furjan Townhouse", location: "Al Furjan", price: "AED 2,100,000", category: "Residential", img: project3, beds: 3, type: "Townhouse" },
  { id: 8, title: "Dubai Hills Plot", location: "Dubai Hills Estate", price: "AED 5,500,000", category: "Plots", img: project4, beds: 0, type: "Land" },
  { id: 9, title: "DIFC Retail Space", location: "DIFC", price: "AED 180,000/yr", category: "Rental", img: project1, beds: 0, type: "Retail" },
  { id: 10, title: "MBR City Villa", location: "Mohammed Bin Rashid City", price: "AED 12,000,000", category: "Resale", img: project2, beds: 6, type: "Villa" },
  { id: 11, title: "JLT Office Suite", location: "Jumeirah Lake Towers", price: "AED 1,400,000", category: "Commercial", img: project3, beds: 0, type: "Office" },
  { id: 12, title: "Arabian Ranches Plot", location: "Arabian Ranches", price: "AED 3,800,000", category: "Plots", img: project4, beds: 0, type: "Land" },
];

const Properties = () => {
  const [active, setActive] = useState("All");
  const ref = useScrollReveal();

  const filtered = active === "All" ? listings : listings.filter((l) => l.category === active);

  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <section className="section-padding py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Browse</p>
            <h1 className="font-sans text-3xl md:text-5xl font-light text-foreground tracking-tight">
              Properties
            </h1>
          </div>
        </section>

        {/* Filters */}
        <section className="section-padding py-6 border-b border-border sticky top-[61px] bg-background/90 backdrop-blur-sm z-40">
          <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[11px] tracking-widest uppercase whitespace-nowrap pb-1 transition-colors duration-300 ${
                  active === cat
                    ? "text-foreground border-b border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Listings */}
        <section ref={ref} className="section-padding py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-8">
              {filtered.length} {filtered.length === 1 ? "property" : "properties"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {filtered.map((listing) => (
                <a
                  key={listing.id}
                  href="https://www.wolvesint.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fade-up group bg-background"
                >
                  <div className="overflow-hidden">
                    <img
                      src={listing.img}
                      alt={listing.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                        {listing.category}
                      </span>
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                        {listing.type}
                      </span>
                    </div>
                    <h3 className="font-sans text-sm font-medium text-foreground mb-1">
                      {listing.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground mb-3">
                      {listing.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-sm text-foreground">
                        {listing.price}
                      </p>
                      {listing.beds > 0 && (
                        <span className="text-[10px] text-muted-foreground">
                          {listing.beds} {listing.beds === 1 ? "bed" : "beds"}
                        </span>
                      )}
                    </div>
                    <span className="block mt-4 text-[11px] tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors border-b border-border pb-0.5 w-fit">
                      Enquire →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Properties;
