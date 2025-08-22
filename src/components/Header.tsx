import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-hero-gradient shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-foreground">
            WPCanvas
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#themes" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Themes
            </a>
            <a href="#plugins" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Plugins
            </a>
            <a href="#features" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Pricing
            </a>
            <Link to="/terms" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Login
            </Button>
            <Button variant="hero" size="lg">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#themes" className="text-primary-foreground/90">Themes</a>
              <a href="#plugins" className="text-primary-foreground/90">Plugins</a>
              <a href="#features" className="text-primary-foreground/90">Features</a>
              <a href="#pricing" className="text-primary-foreground/90">Pricing</a>
              <Link to="/terms" className="text-primary-foreground/90">Terms</Link>
              <Link to="/privacy" className="text-primary-foreground/90">Privacy Policy</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-primary-foreground/20">
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 justify-start">
                  Login
                </Button>
                <Button variant="hero">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;