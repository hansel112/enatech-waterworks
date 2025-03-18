
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const NavLink = ({ name, path }: { name: string, path: string }) => {
    const isActive = location.pathname === path;
    
    return (
      <Link 
        to={path} 
        className={cn(
          "px-3 py-2 text-base font-medium relative animated-underline transition-colors",
          isActive 
            ? "text-enatech-blue-dark" 
            : "text-gray-700 hover:text-enatech-blue"
        )}
      >
        {name}
      </Link>
    );
  };

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          aria-label="ENATECH - Home"
        >
          <span className="font-serif font-bold text-2xl text-enatech-blue-dark">
            ENA<span className="text-enatech-green-dark">TECH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} path={link.path} />
          ))}
          <Button 
            asChild 
            className="ml-4 bg-enatech-blue hover:bg-enatech-blue-dark transition-colors"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-[57px] bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col pt-5 px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={cn(
                "py-4 px-2 text-lg border-b border-gray-100",
                location.pathname === link.path 
                  ? "text-enatech-blue-dark font-medium" 
                  : "text-gray-700"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4">
            <Button 
              asChild 
              className="w-full bg-enatech-blue hover:bg-enatech-blue-dark"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
