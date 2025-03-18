
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif font-bold text-2xl text-enatech-blue-dark">
                ENA<span className="text-enatech-green-dark">TECH</span>
              </span>
            </Link>
            <p className="text-gray-600 mt-4 max-w-xs">
              Pioneering water resources engineering solutions for sustainable development and environmental stewardship.
            </p>
            <div className="pt-2 flex space-x-4">
              {/* Social Media Icons (placeholders) */}
              <a href="#" className="w-10 h-10 rounded-full bg-enatech-blue-light flex items-center justify-center text-enatech-blue-dark hover:bg-enatech-blue hover:text-white transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-enatech-blue-light flex items-center justify-center text-enatech-blue-dark hover:bg-enatech-blue hover:text-white transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-enatech-blue-light flex items-center justify-center text-enatech-blue-dark hover:bg-enatech-blue hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-enatech-blue-dark flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-gray-800">Services</h3>
            <ul className="space-y-2">
              {[
                'Water Quality Testing',
                'Solar Water Pumping',
                'Agricultural Advisory',
                'Equipment Supply',
                'Engineering Consultation',
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-gray-600 hover:text-enatech-blue-dark flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-enatech-blue-dark mr-3 mt-1" />
                <span className="text-gray-600">123 Water Street, Eco City, Earth 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-enatech-blue-dark mr-3" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-enatech-blue-dark mr-3" />
                <a href="mailto:info@enatech.com" className="text-gray-600 hover:text-enatech-blue-dark">
                  info@enatech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-10 mt-10 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ENATECH Water Resources Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
