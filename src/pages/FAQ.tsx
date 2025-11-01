import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Quote, Sparkles } from "lucide-react";

const FAQ = () => {
  type Review = { id: string; name: string; comment: string; createdAt: number };

  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("faqReviews");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Backward compatibility if old objects had rating
        setReviews(
          Array.isArray(parsed)
            ? parsed.map((r: any) => ({ id: r.id, name: r.name, comment: r.comment, createdAt: r.createdAt }))
            : [],
        );
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("faqReviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = () => {
    if (!name.trim() || !comment.trim()) return;
    const newReview: Review = {
      id: crypto.randomUUID(),
      name: name.trim(),
      comment: comment.trim(),
      createdAt: Date.now(),
    };
    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
  };
  const faqs = [
    {
      question: "Are your documents authentic looking?",
      answer: "We only produce high quality documents that appear just as great as the originals. Note that the final versions are without the words \"Sample\" or \"Specimen\" on them. If you'd like to see a sample first then please email us."
    },
    {
      question: "Can I be sure your site is legit?",
      answer: "Yes, because we are more than happy to send you any samples of documents. Still not satisfied? We will gladly put you in touch with some of our existing customers."
    },
    {
      question: "Do I receive a digital copy and a paper copy?",
      answer: "You receive both a digital and a paper copy. If you don't require the paper copy then let us know in advance."
    },
    {
      question: "How long will the documents take to create?",
      answer: "This depends on your order and requirements. However, you can expect a creation and delivery time of around 2 working days for the digital version."
    },
    {
      question: "What is your preferred payment method?",
      answer: "We accept two payment options. You can do a bank transfer to our UK bank or a cash deposit. Please note that paying via a cash deposit requires you to physically go into our banking branch to deposit the funds."
    },
    {
      question: "Am I able to get my own information and transactions put onto the documents?",
      answer: "Yes, you can. You'll need to fill out an order form on the website where you'll need to include around five Direct Debits/Transactions and one credit to the account. If you need more then we can supply you with a Microsoft Excel form to include any more additional information."
    },
    {
      question: "Do you offer discounts?",
      answer: "If you are a returning customer then you get a discount. We also offer discounts for customers ordering multiple documents."
    },
    {
      question: "There is no template I need, what can I do?",
      answer: "If the template isn't there then email us and we'll supply you with a custom made template for an additional cost."
    },
    {
      question: "Is there a limit on how many months I can do?",
      answer: "No. You can add as many months as you need. You do receive a discount if you purchase more months, however, the order may take longer to complete."
    },
    {
      question: "If mistakes are found, can changes be made to the document?",
      answer: "Yes. If our order is not as you'd expect then we will fix any mistakes for free. We also give you a free preview as well before we send it to you so you can verify everything is correct. However, if you approve the preview and we send the documents to you and then you notice a mistake, you'll be required to pay the fee because it's not our fault."
    },
    {
      question: "What are your postage methods?",
      answer: "We use First Class stamp and all items are posted the next day. You can expect delivery in around 2-3 days."
    },
    {
      question: "My documents haven't arrived, what can I do?",
      answer: "If your document hasn't arrived then please email us, and we'll resend it free of charge."
    },
    {
      question: "Can I be sure my information is secure?",
      answer: "Yes, because we don't sell any information to third parties or any other company. All of your information is securely held in our system and we never send out advertisements. We have first class security that ensures your personal information is secure and won't be leaked online. You can rest assured your confidentiality is guaranteed."
    },
    {
      question: "I have more questions I want clarification on. What should I do?",
      answer: "You can always feel free to contact us by email and we'll help you with any questions you may have."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our document editing services including fake documents, fake license, genuine documents, and registered documents
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/30">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-border last:border-0"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-0 overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-transparent">
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Customer Reviews</h3>
                </div>
                <p className="text-muted-foreground text-center mb-8">Share your experience with our services.</p>

                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1 space-y-4">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your review..."
                    className="min-h-[120px]"
                  />
                  <Button onClick={addReview} className="w-full">Submit Review</Button>
                  </div>

                  <div className="md:col-span-2 space-y-4 max-h-[420px] overflow-auto pr-1">
                    {reviews.length === 0 ? (
                      <p className="text-muted-foreground text-center">No reviews yet. Be the first to share yours.</p>
                    ) : (
                      reviews.map((rev) => (
                        <div key={rev.id} className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold">
                              {rev.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="font-semibold text-foreground">{rev.name}</p>
                                <span className="text-xs text-muted-foreground">{new Date(rev.createdAt).toLocaleString()}</span>
                              </div>
                              <div className="mt-2 flex items-start gap-2 text-foreground">
                                <Quote className="w-4 h-4 text-accent mt-1" />
                                <p className="text-muted-foreground whitespace-pre-wrap">{rev.comment}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </Card>
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

export default FAQ;
