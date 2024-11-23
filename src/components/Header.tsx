import { Menu, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass rounded-full py-4 px-6 flex items-center justify-between">
        <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
          <Sun className="w-6 h-6 text-secondary-dark" />
          <span className="font-semibold text-lg">Glowtique</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={scrollToTop} className="hover:text-secondary-dark transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-secondary-dark transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-secondary-dark transition-colors">
            Contact
          </button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 mt-2 p-4 glass rounded-lg md:hidden">
            <div className="flex flex-col gap-4">
              <button onClick={scrollToTop} className="hover:text-secondary-dark transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-secondary-dark transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-secondary-dark transition-colors">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};