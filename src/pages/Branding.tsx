import Navigation from "@/components/Navigation";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Palette, Lightbulb, Zap } from "lucide-react";
import logoPortfolio from "@/assets/logo-portfolio.png";
import tshirtDesign1 from "@/assets/tshirt-design-1.jpg";
import tshirtDesign2 from "@/assets/tshirt-design-2.jpg";
import tshirtDesign3 from "@/assets/tshirt-design-3.jpg";
import hoodieDesign1 from "@/assets/hoodie-design-1.jpg";
import dockerLogo from "@/assets/docker_mark-logo_brandlogos.net_yetav.png";
import inkscapeLogo from "@/assets/inkscape-logo_brandlogos.net_tl7le.png";
import dominosLogo from "@/assets/dominos_pizza-logo_brandlogos.net_asztd.png";
import paysanduLogo from "@/assets/paysandu_sport_club-logo_brandlogos.net_x8lp1.png";
import guaranaLogo from "@/assets/guarana_antarctica_2020-logo_brandlogos.net_hrbif.png";
import horlicksLogo from "@/assets/horlicks-logo_brandlogos.net_xyyzl.png";
import zusCoffeeLogo from "@/assets/zus_coffee-logo_brandlogos.net_cziqy.png";

const Branding = () => {
  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <DisclaimerBanner />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-36 md:pt-40 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Creative Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Elevate Your Brand Identity
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just design — we build identities that connect, inspire, and last. 
              From bold logos to comprehensive brand strategies, we help you stand out with a timeless presence.
            </p>
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-0.5"
            >
              Start Your Brand Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Logos Strip */}
      <section className="px-4 pb-6">
        <div className="container mx-auto">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-transparent rounded-3xl hover:shadow-[var(--shadow-hover)] transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {[
              { src: horlicksLogo, alt: "Horlicks" },
              { src: zusCoffeeLogo, alt: "ZUS Coffee" },
              { src: guaranaLogo, alt: "Guaraná Antarctica" },
              { src: dominosLogo, alt: "Domino's Pizza" },
              { src: dockerLogo, alt: "Docker" },
              { src: paysanduLogo, alt: "Paysandu Sport Club" },
              { src: inkscapeLogo, alt: "Inkscape" },
            ].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={`${logo.alt} logo`}
                className="h-14 md:h-16 lg:h-20 object-contain opacity-90 hover:opacity-100 transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Branding Service */}
            <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Branding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your brand is more than just visuals — it's the story, emotion, and personality behind your business. 
                  We help you define that story through:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Brand strategy & voice development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Color palettes & typography systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Comprehensive brand style guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete visual identity systems</span>
                  </li>
                </ul>
                <p className="text-sm text-foreground/80 italic">
                  Every element is crafted to reflect who you are and speak to who you serve.
                </p>
              </CardContent>
            </Card>

            {/* Logo Design Service */}
            <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Logo Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your logo is the face of your brand — simple, memorable, and powerful. 
                  We design logos that:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Capture your brand's core essence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Work seamlessly across all platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Are modern, scalable, and unique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Stand the test of time</span>
                  </li>
                </ul>
                <p className="text-sm text-foreground/80 italic">
                  From concept sketches to final delivery, we ensure every detail embodies your vision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Logo Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trusted by Leading Brands
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've had the privilege of working with diverse clients across industries, 
              creating memorable brand identities that drive success.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-border/50">
              <CardContent className="p-0">
                <img 
                  src={logoPortfolio} 
                  alt="Portfolio of logo designs for various brands including Lunar, Revolve, Tako, and many more" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Examples Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Creative Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From apparel designs to brand merchandise, we bring creative visions to life 
              with attention to detail and artistic excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { src: tshirtDesign1, alt: "Goku SSJ anime character t-shirt design with Japanese typography" },
              { src: tshirtDesign2, alt: "Fly in the Sky astronaut themed oversized t-shirt design" },
              { src: tshirtDesign3, alt: "Success is the Fruit of Hard Work motivational t-shirt design" },
              { src: hoodieDesign1, alt: "Can't Stop Won't Stop graphic hoodie design with tropical elements" }
            ].map((design, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img 
                      src={design.src} 
                      alt={design.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-transparent">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Let's create something unforgettable together. Whether you're starting fresh or rebranding, 
                our team is ready to bring your vision to life.
              </p>
              <Button 
                onClick={handleContactClick}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-0.5"
              >
                Get Your Free Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 All Your Documents Covered. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Branding;
