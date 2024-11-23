import { Sun } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass rounded-full py-4 px-6 flex items-center justify-between">
        <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
          <Sun className="w-6 h-6 text-secondary-dark" />
          <span className="font-semibold text-lg">Glowtique</span>
        </Link>
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
      </div>
    </header>
  );
};