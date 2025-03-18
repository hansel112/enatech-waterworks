
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Sun, Leaf, Factory, HardHat, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  // Stats animation
  const [countVisible, setCountVisible] = React.useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);
    
    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  // Services data
  const services = [
    {
      icon: <Droplet size={28} />,
      title: "Water Quality Testing",
      description: "Comprehensive water quality analysis to ensure safe and clean water sources for various uses.",
      link: "/services#water-quality"
    },
    {
      icon: <Sun size={28} />,
      title: "Solar Water Pumping",
      description: "Sustainable water pumping solutions powered by solar energy for agriculture and community use.",
      link: "/services#solar-pumping"
    },
    {
      icon: <Leaf size={28} />,
      title: "Agricultural Advisory",
      description: "Expert agricultural consultancy services to optimize water usage and improve crop yields.",
      link: "/services#agricultural-advisory"
    },
    {
      icon: <Factory size={28} />,
      title: "Products & Equipment",
      description: "High-quality water management equipment and products for all your water-related needs.",
      link: "/products"
    },
    {
      icon: <HardHat size={28} />,
      title: "Engineering Services",
      description: "Professional engineering solutions for water resources challenges and infrastructure development.",
      link: "/services#engineering"
    },
    {
      icon: <Briefcase size={28} />,
      title: "Consulting Services",
      description: "Strategic consulting for organizations looking to optimize their water management practices.",
      link: "/services#consulting"
    }
  ];

  // Animation utility
  const AnimatedElement: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }> = ({ children, delay = 0, className }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      
      if (ref.current) observer.observe(ref.current);
      
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);
    
    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700 ease-out",
          !isVisible && "opacity-0 translate-y-10",
          className
        )}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  };
  
  // Stats data
  const stats = [
    { value: 15, label: "Years of Experience", suffix: "+" },
    { value: 500, label: "Projects Completed", suffix: "+" },
    { value: 100, label: "Satisfied Clients", suffix: "%" },
    { value: 30, label: "Team Members", suffix: "+" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Innovative Water Resources Engineering"
        subtitle="Sustainable solutions for water management, quality testing, and agricultural development"
        ctaText="Explore Our Services"
        ctaLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
        size="large"
      />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedElement delay={100}>
              <div className="space-y-6">
                <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                  About ENATECH
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 leading-tight">
                  Pioneering Water Resource <br className="hidden md:block" /> Solutions Since 2008
                </h2>
                <p className="text-gray-600">
                  ENATECH is a leading water resources engineering company dedicated to providing innovative and sustainable solutions for water management challenges around the world. Our team of experts combines technical excellence with a deep commitment to environmental stewardship.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start">
                    <div className="rounded-full p-2 bg-enatech-green-light text-enatech-green-dark mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Quality Assured</h4>
                      <p className="text-sm text-gray-600">ISO Certified processes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full p-2 bg-enatech-green-light text-enatech-green-dark mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Expert Team</h4>
                      <p className="text-sm text-gray-600">Specialized engineers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full p-2 bg-enatech-green-light text-enatech-green-dark mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Eco-Friendly</h4>
                      <p className="text-sm text-gray-600">Sustainable practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full p-2 bg-enatech-green-light text-enatech-green-dark mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Innovative</h4>
                      <p className="text-sm text-gray-600">Cutting-edge solutions</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button asChild className="bg-enatech-blue hover:bg-enatech-blue-dark group">
                    <Link to="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300} className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                  alt="Water resources engineering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-enatech-blue-dark">15+ Years</p>
                <p className="text-gray-600">Of Excellence</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-enatech-gray-light">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Comprehensive Water Solutions
              </h2>
              <p className="text-gray-600">
                From water quality testing to solar pumping systems and agricultural advisory, 
                we offer a wide range of services to meet your water resource needs.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedElement key={service.title} delay={100 + (index * 100)}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </AnimatedElement>
            ))}
          </div>
          
          <AnimatedElement delay={800}>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-enatech-blue text-enatech-blue hover:bg-enatech-blue-light hover:text-enatech-blue-dark group">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-enatech-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  {countVisible ? (
                    <>
                      {stat.value}{stat.suffix}
                    </>
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial/CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-enatech-blue-dark/10 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1513836279014-a89f7a76ae86")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative z-10 container-custom">
          <AnimatedElement>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto text-center">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Ready to Transform Your Water Resources?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you need water quality testing, solar pumping solutions, or expert agricultural advice,
                our team of specialists is ready to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-enatech-blue hover:bg-enatech-blue-dark group">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-enatech-blue text-enatech-blue hover:bg-enatech-blue-light hover:text-enatech-blue-dark">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </main>
  );
};

export default Index;
