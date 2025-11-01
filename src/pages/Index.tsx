import { Mail, MessageCircle, FileText, Shield, Clock, CheckCircle, Star, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import banksStorefront from "@/assets/banks-storefront.jpg";
import bankScotlandBusiness from "@/assets/bank-scotland-business.jpg";
import payslipExample from "@/assets/payslip-example.jpg";
import wageSlip from "@/assets/wage-slip.jpg";

const Index = () => {
  const services = [
    {
      title: "Bank Statements Editing",
      description: "Professional editing of bank statements with attention to detail and accuracy. We create genuine-looking documents and registered documents that meet your specific requirements for research purposes.",
      icon: FileText,
    },
    {
      title: "Payslips Edition",
      description: "Comprehensive payslip editing services tailored to your needs. We provide fake documents and genuine documents that look authentic, with quick turnaround and confidentiality guaranteed.",
      icon: FileText,
    },
    {
      title: "Business Accounts",
      description: "Expert handling of business account documentation. We create registered documents and genuine documents that look authentic, with meticulous editing services for all your business financial documents.",
      icon: Shield,
    },
    {
      title: "ID Editing",
      description: "Specialized ID document editing services including fake documents and genuine documents. High-quality results with professional handling of all types of identification documents.",
      icon: Shield,
    },
    {
      title: "Drivers License Editing",
      description: "Professional drivers license editing including fake license creation and genuine documents. Precise attention to detail with fast delivery without compromising on quality.",
      icon: Clock,
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality",
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "Your privacy is our top priority",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Meticulous attention to every detail",
    },
    {
      icon: Star,
      title: "Expert Team",
      description: "Experienced professionals at your service",
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "447398254685";
    const message = encodeURIComponent("Hi, I'd like to inquire about your document editing services.");

    const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`; // opens native app if available
    const webUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`; // official click-to-chat fallback

    let opened = false;
    const onVisibilityChange = () => {
      if (document.hidden) {
        opened = true;
        clearTimeout(fallback);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Try to open the native app first
    window.location.href = appUrl;

    // Fallback to web if app didn't open
    const fallback = window.setTimeout(() => {
      if (!opened) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }, 1200);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:enquiry@allyourdocumentscovered.com?subject=Document Editing Inquiry";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Professional{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Document Editing
                </span>
                <br />
                Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fast, reliable, and confidential document editing for all your needs. We specialize in fake documents, fake license, genuine documents, and registered documents for research and design purposes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-accent to-accent-hover hover:shadow-[var(--shadow-accent)] transition-all hover:-translate-y-1 group text-lg px-8 py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  WhatsApp Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 text-lg px-8 py-6"
                >
                  View Services
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl p-4 mb-3 inline-block">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Institutions Section */}
      <section className="py-16 md:py-20 bg-card/80 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              We handle documents from all major institutions
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <img
              src={banksStorefront}
              alt="Major UK banks including Bank of Scotland, Lloyds, Halifax, RBS"
              className="rounded-2xl shadow-[var(--shadow-card)] w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We cater for all documents including fake documents, fake license, genuine documents, and registered documents with professional expertise and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group p-8 transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/30 border-border cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-4 mb-6 inline-block transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Examples Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Documents We Handle
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional editing for all types of financial and identity documents. We create fake documents, fake license, genuine documents, and registered documents that meet your research and design needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden group transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2">
              <div className="relative">
                <img
                  src={bankScotlandBusiness}
                  alt="Bank of Scotland Business Credit documents"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Business Accounts</h3>
                    <p className="text-muted-foreground">Corporate banking and credit documentation</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2">
              <div className="relative">
                <img
                  src={payslipExample}
                  alt="Payslip and wage documentation examples"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Payslips & Wage Slips</h3>
                    <p className="text-muted-foreground">Employment income verification documents</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2">
              <div className="relative">
                <img
                  src={wageSlip}
                  alt="Detailed wage slip with tax information"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Detailed Wage Documents</h3>
                    <p className="text-muted-foreground">Complete salary and deduction statements</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-2 border-primary/20 flex flex-col justify-center items-center text-center transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary to-primary-glow rounded-full p-6 mb-6">
                <Building2 className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                And Many More...
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Bank statements, ID documents, drivers licenses, fake documents, fake license, genuine documents, registered documents, and all other financial documentation
              </p>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-hover)] transition-all"
              >
                Get Your Quote
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-10 md:p-16 shadow-[var(--shadow-card)] border border-border">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
                About Us
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 text-center">
                <p className="leading-relaxed">
                  We are a <span className="font-semibold text-primary">UK-based company</span> specializing in professional document editing services with meticulous attention to detail.
                </p>
                <p className="leading-relaxed">
                  We cater for <span className="font-semibold text-primary">all documents</span> with professional expertise, from bank statements and payslips to ID documents and business accounts. Our services include fake documents, fake license, genuine documents, and registered documents for research and design purposes.
                </p>
                <p className="leading-relaxed">
                  Send an inquiry via <span className="font-semibold text-primary">email or WhatsApp</span> and we'll send you a quote for the job within hours.
                </p>
                <div className="pt-6">
                  <div className="inline-block bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl px-8 py-4 border-2 border-primary/20">
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      Fast, Reliable & UK-Based
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to get started? Contact us today for a quick quote
            </p>

            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-10 md:p-12 shadow-[var(--shadow-card)] border border-border mb-10">
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">Email:</p>
                  <a
                    href="mailto:enquiry@allyourdocumentscovered.com"
                    className="text-xl md:text-2xl text-primary hover:text-primary-glow transition-colors font-semibold"
                  >
                    enquiry@allyourdocumentscovered.com
                  </a>
                </div>

                <div className="h-px bg-border w-full"></div>

                <div className="flex flex-col items-center gap-3">
                  <div className="bg-accent/10 rounded-full p-3">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-muted-foreground font-medium">Phone (WhatsApp):</p>
                  <a
                    href="tel:+447398254685"
                    className="text-xl md:text-2xl text-primary hover:text-primary-glow transition-colors font-semibold"
                  >
                    +44 7398 254685
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-accent to-accent-hover hover:shadow-[var(--shadow-accent)] transition-all hover:-translate-y-1 group text-lg px-10 py-7"
              >
                <MessageCircle className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
                Message on WhatsApp
              </Button>

              <Button
                onClick={handleEmailClick}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 group text-lg px-10 py-7"
              >
                <Mail className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
                Send an Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-primary-glow p-2 rounded-lg">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">All Your Documents Covered</span>
            </div>
            
            <p className="text-center text-muted-foreground max-w-md">
              Professional document editing services including fake documents, fake license, genuine documents, and registered documents. Fast turnaround with confidential handling.
            </p>

            <div className="h-px bg-border w-full max-w-md"></div>

            <p className="text-center text-xs text-muted-foreground max-w-lg">
              Any documents provided are not for official use.
            </p>

            <p className="text-center text-sm text-muted-foreground">
              © 2025 All Your Documents Covered. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
