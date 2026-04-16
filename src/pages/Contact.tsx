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
        {/* Header */}
        <section className="section-padding py-16 md:py-24 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Get in Touch</p>
            <h1 className="font-sans text-3xl md:text-5xl font-light text-foreground tracking-tight">
              Contact Us
            </h1>
          </div>
        </section>

        <section className="section-padding py-20 md:py-32">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Call Us</p>
                <a href="tel:800-0099" className="font-sans text-lg font-light text-foreground hover:text-muted-foreground transition-colors">
                  800-0099
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Email</p>
                <a href="mailto:Info@wolvesint.ae" className="font-sans text-lg font-light text-foreground hover:text-muted-foreground transition-colors">
                  Info@wolvesint.ae
                </a>
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Visit Us</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  20th Floor, Al Moosa Tower 1<br />
                  Trade Centre, Sheikh Zayed Road<br />
                  Dubai, UAE
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Hours</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Sunday – Thursday: 9:00 AM – 6:00 PM<br />
                  Friday – Saturday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
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
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                      Interest
                    </label>
                    <select
                      className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none"
                    >
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
                    <label className="block text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                      Message
                    </label>
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

        {/* Map */}
        <section className="border-t border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786!2d55.2797!3d25.2172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEzJzAyLjAiTiA1NcKwMTYnNDcuMCJF!5e0!3m2!1sen!2sae!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="w-full grayscale"
          />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
