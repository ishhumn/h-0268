import { Menu, X, Lock } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800"> 
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        
        <Link to="/" className="text-xl font-semibold text-white">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/products" className="text-neutral-400 hover:text-white transition-colors">
            Products
          </Link>
          <Link to="/gallery" className="text-neutral-400 hover:text-white transition-colors">
            Gallery
          </Link>
          <Link to="/blog" className="text-neutral-400 hover:text-white transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
            Contact
          </Link>
          <Link to="/admin" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Admin
          </Link>
          <button 
            onClick={() => navigate('/schedule-demo')}
            className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Schedule Demo
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
          <div className="container-padding py-4 flex flex-col gap-4">
            <Link to="/products" className="text-neutral-400 hover:text-white transition-colors">
              Products
            </Link>
            <Link to="/gallery" className="text-neutral-400 hover:text-white transition-colors">
              Gallery
            </Link>
            <Link to="/blog" className="text-neutral-400 hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/admin" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Admin
            </Link>
            <Link 
              to="/schedule-demo"
              className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;