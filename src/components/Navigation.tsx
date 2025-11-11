import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-[48px] md:top-[55px] left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-[var(--shadow-card)] border-b border-border"
          : "bg-card/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="transition-transform group-hover:scale-110 flex items-center justify-center">
              <img 
                src="/favicon.ico.jpg" 
                alt="Logo" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground">
              All Your Documents Covered
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/samples"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Samples
            </Link>
            <Link
              to="/branding"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Branding
            </Link>
            <Link
              to="/faq"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              FAQ
            </Link>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            {isHomePage ? (
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-0.5"
              >
                Get Quote
              </Button>
            ) : (
              <Link to="/#contact">
                <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-hover)] transition-all hover:-translate-y-0.5">
                  Get Quote
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-card text-foreground space-y-2 animate-slide-down border-t border-border">
            <Link
              to="/"
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/samples"
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Samples
            </Link>
            <Link
              to="/branding"
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Branding
            </Link>
            <Link
              to="/faq"
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-5 h-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
            {isHomePage ? (
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-primary to-primary-glow"
              >
                Get Quote
              </Button>
            ) : (
              <Link to="/#contact">
                <Button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow"
                >
                  Get Quote
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
