import { Sun } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass rounded-full py-4 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Sun className="w-6 h-6 text-secondary-dark" />
          <span className="font-semibold text-lg">SolariHub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-secondary-dark transition-colors">
            Home
          </Link>
          <Link to="#services" className="hover:text-secondary-dark transition-colors">
            Services
          </Link>
          <Link to="#contact" className="hover:text-secondary-dark transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};