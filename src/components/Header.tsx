import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-black">
            WPCanvas
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#themes" className="text-black hover:text-gray-700 transition-colors">
              Themes
            </Link>
            <Link to="/#plugins" className="text-black hover:text-gray-700 transition-colors">
              Plugins
            </Link>
            <Link to="/#features" className="text-black hover:text-gray-700 transition-colors">
              Features
            </Link>
            <Link to="/#pricing" className="text-black hover:text-gray-700 transition-colors">
              Pricing
            </Link>
            <Link to="/full-list" className="text-black hover:text-gray-700 transition-colors">
              Full List
            </Link>
            <Link to="/privacy" className="text-black hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-black hover:bg-gray-100">
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
          <div className="md:hidden mt-4 pb-4 border-t border-black/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/#themes" className="text-black">Themes</Link>
              <Link to="/#plugins" className="text-black">Plugins</Link>
              <Link to="/#features" className="text-black">Features</Link>
              <Link to="/#pricing" className="text-black">Pricing</Link>
              <Link to="/privacy" className="text-black">Privacy Policy</Link>
              <Link to="/full-list" className="text-black">Full List</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-black/20">
                <Button variant="ghost" className="text-gray-800 hover:bg-gray-100 justify-start">
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