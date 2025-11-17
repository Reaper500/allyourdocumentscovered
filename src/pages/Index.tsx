import { Mail, MessageCircle, FileText, Star, FileCheck, Layout, FileType, Scan, Sparkles, FileEdit, Lock, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const Index = () => {
  const services = [
    {
      title: "Proofreading",
      description: "Grammar, punctuation, and clarity corrections to ensure your documents are professional and error-free. We help make your content clear and polished.",
      icon: FileCheck,
    },
    {
      title: "Formatting & Layout",
      description: "Professional adjustments to margins, headings, spacing, and pagination. We ensure your documents have a clean, consistent, and professional appearance.",
      icon: Layout,
    },
    {
      title: "File Conversion",
      description: "Seamless PDF to Word and Word to PDF conversion services. Maintain formatting and quality while converting between file formats.",
      icon: FileType,
    },
    {
      title: "OCR Services",
      description: "Convert scanned PDFs to editable text. Transform non-editable scanned documents into fully editable and searchable files.",
      icon: Scan,
    },
    {
      title: "File Cleanup & Optimization",
      description: "Optimize your documents for print or web use. Clean up files to ensure they're ready for sharing, submission, or publication.",
      icon: Sparkles,
    },
    {
      title: "Professional Layout Design",
      description: "Custom layout design for reports, resumes, eBooks, and proposals. Create visually appealing documents that stand out.",
      icon: FileEdit,
    },
  ];

  const features = [
    {
      icon: Lock,
      title: "Confidential & Secure",
      description: "Your documents stay private — 100% safe file handling",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Most edits completed within 24 hours",
    },
    {
      icon: Star,
      title: "Professional Quality",
      description: "Clear, polished documents ready for sharing",
    },
    {
      icon: Users,
      title: "Personalized Support",
      description: "Friendly editors ready to assist with your needs",
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "447398254685";
    const message = encodeURIComponent("Hi, I'd like to inquire about your PDF editing and proofreading services.");

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
    window.location.href = "mailto:enquiry@allyourdocumentscovered.com?subject=PDF Editing and Proofreading Inquiry";
  };

  return (
    <div className="min-h-screen bg-background">
      <DisclaimerBanner />
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-32 md:pt-36 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
               Need to fix layout issues, change text, spelling mistakes, or formatting in your PDF files?
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Our team helps you make your documents look clean, consistent, and professional . We specialize in improving readability, correcting typos, adjusting page structure, and converting between file formats.
                change or edit text to both pdf and hard copy
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
                  onClick={handleEmailClick}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 group text-sm sm:text-lg px-4 sm:px-8 py-4 sm:py-6"
                >
                  <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 flex-shrink-0" />
                  <span className="hidden sm:inline">enquiry@allyourdocumentscovered.com</span>
                  <span className="sm:hidden">Email Us</span>
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


      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services Include
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive document editing, proofreading, formatting, and conversion services to help your documents look professional and polished.
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

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing professional, secure, and efficient document editing services that meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/30 border-border hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary to-primary-glow rounded-full p-4 mb-4 inline-block">
                <Lock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">🔒 Confidential & Secure</h3>
              <p className="text-sm text-muted-foreground">Your documents stay private — 100% safe file handling.</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/30 border-border hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary to-primary-glow rounded-full p-4 mb-4 inline-block">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">⚡ Fast Turnaround</h3>
              <p className="text-sm text-muted-foreground">Most edits completed within 24 hours.</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/30 border-border hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary to-primary-glow rounded-full p-4 mb-4 inline-block">
                <Star className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">💼 Professional Quality</h3>
              <p className="text-sm text-muted-foreground">Clear, polished documents ready for sharing or submission.</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/30 border-border hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary to-primary-glow rounded-full p-4 mb-4 inline-block">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">💬 Personalized Support</h3>
              <p className="text-sm text-muted-foreground">Friendly editors ready to assist with your needs.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="about" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-10 md:p-16 shadow-[var(--shadow-card)] border-2 border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Important Note (Compliance Section)
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p className="leading-relaxed text-center">
                  We provide editing, proofreading, and formatting services only.
                </p>
                <p className="leading-relaxed text-center">
                  We do not alter or forge official, legal, or government documents such as IDs, licenses, certificates, or financial statements.
                </p>
                <p className="leading-relaxed text-center font-semibold text-primary">
                  By using our service, you confirm you have the right to request edits for your files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-card/50">
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
              Professional document editing, proofreading, formatting, and conversion services. Fast turnaround with confidential handling.
            </p>

            <div className="h-px bg-border w-full max-w-md"></div>

            <p className="text-center text-xs text-muted-foreground max-w-lg">
              We provide editing, proofreading, and formatting services only. We do not alter official, legal, or government documents.
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
