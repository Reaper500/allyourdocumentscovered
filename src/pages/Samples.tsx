import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import payslipPrsi from "@/assets/payslip-prsi.jpg";
import utilityBill from "@/assets/utility-bill.png";
import bankStatement1 from "@/assets/bank-statement-1.png";
import bankStatement2 from "@/assets/bank-statement-2.png";
import bankStatement3 from "@/assets/bank-statement-3.png";
import taxCalculation from "@/assets/tax-calculation.jpg";
import hmrcLetter from "@/assets/hmrc-letter.jpg";

const Samples = () => {
  const sampleCategories = [
    {
      title: "Bank Statements",
      description: "Professional bank statement editing services including fake documents, genuine documents, and registered documents for all major UK banks",
      images: [
        { src: bankStatement1, alt: "Bank statement sample showing detailed transaction history" },
        { src: bankStatement2, alt: "Bank statement sample with account summary" },
        { src: bankStatement3, alt: "Current account bank statement example" },
      ]
    },
    {
      title: "Payslips & Wage Documents",
      description: "Accurate payslip and wage documentation editing. We provide fake documents and genuine documents that look authentic",
      images: [
        { src: payslipPrsi, alt: "PAYE-PRSI certificate payslip sample" },
      ]
    },
    {
      title: "Utility Bills",
      description: "Utility bill editing for all major providers",
      images: [
        { src: utilityBill, alt: "Utility bill sample from Severn Trent Water" },
      ]
    },
    {
      title: "Tax Documents",
      description: "Tax calculation and HMRC document editing services",
      images: [
        { src: taxCalculation, alt: "Tax calculation document sample" },
        { src: hmrcLetter, alt: "HM Revenue & Customs letter sample" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Document <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Samples</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please be aware that the following samples below are in a low quality format and that the final documents you purchase will be of a much higher quality. We create fake documents, fake license, genuine documents, and registered documents. If you'd like to see a sample before purchasing then please feel free to email us.
            </p>
          </div>
        </div>
      </section>

      {/* Samples Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {sampleCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {category.images.map((image, imageIndex) => (
                    <Card 
                      key={imageIndex}
                      className="overflow-hidden group transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2"
                    >
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Important Notice</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Providing inaccurate or incorrect information that deliberately misleads others is committing fraud.</strong>
                </p>
                <p className="leading-relaxed">
                  You need to be the original owner of any documents to place an order.
                </p>
                <p className="leading-relaxed">
                  We are in no way affiliated or connected with any of the official companies. You must contact your original provider for the original documents.
                </p>
                <p className="leading-relaxed">
                  All of our documents are purely for <strong className="text-foreground">practical use, educational, theatrical, or novelty use only.</strong>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 All Your Documents Covered. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Samples;
