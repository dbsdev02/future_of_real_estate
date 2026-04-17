import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="section-padding py-16 md:py-24 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Get in Touch</p>
            <h1 className="font-sans text-3xl md:text-5xl font-light text-foreground tracking-tight">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Our Offices */}
        <section className="section-padding py-16 md:py-24 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans text-2xl md:text-3xl font-light text-foreground tracking-tight text-center mb-12">Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format&fit=crop" },
                { label: "INDIA – Amritsar", img: "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80&auto=format&fit=crop" },
                { label: "INDIA – Nagpur", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80&auto=format&fit=crop" },
              ].map((office) => (
                <div key={office.label} className="rounded-xl overflow-hidden border border-border bg-background shadow-sm">
                  <img
                    src={office.img}
                    alt={office.label}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="px-4 py-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-foreground shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="font-sans text-sm font-medium text-foreground">{office.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-20 md:py-32">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20">
            <div className="space-y-10">
              <div>
                <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">Hours</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Sunday – Thursday: 9:00 AM – 6:00 PM<br />
                  Friday – Saturday: Closed
                </p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="font-sans text-lg font-light text-foreground mb-2">Thank you</p>
                    <p className="font-sans text-sm text-muted-foreground">We'll be in touch shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">Interest</label>
                    <select className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none">
                      <option value="">Select category</option>
                      <option value="ready">Ready to Move In</option>
                      <option value="resale">Resale</option>
                      <option value="rental">Rental</option>
                      <option value="commercial">Commercial</option>
                      <option value="residential">Residential</option>
                      <option value="plots">Plots</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-foreground text-background text-xs tracking-widest uppercase py-4 hover:bg-foreground/80 transition-colors duration-300 mt-4"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
