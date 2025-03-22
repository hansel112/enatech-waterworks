
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ProductSlideCard from '@/components/ProductSlideCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Sun, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  // Services data - Updated with the three core services
  const services = [
    {
      icon: <Droplet size={28} />,
      title: "Smart Digital Water Quality Testing",
      description: "We offer advanced, real-time water quality monitoring using smart digital tools and IoT-bluetooth enabled devices. Our testing systems provide instant and accurate analysis of key water parameters, ensuring early detection of contaminants and enabling proactive water management.",
      link: "/services#water-quality"
    },
    {
      icon: <Sun size={28} />,
      title: "Water Treatment Solutions",
      description: "Our comprehensive water treatment services cater to domestic, commercial, and agricultural needs. We specialize in the design, installation and maintenance of Online Chemical Dosing Pumps for real time, automated water treatment across various applications.",
      link: "/services#water-treatment"
    },
    {
      icon: <Leaf size={28} />,
      title: "Agricultural Advisory Services",
      description: "We empower farmers and agribusinesses with expert guidance on water-efficient irrigation, soil health, and crop management. By integrating water analytics with agronomic expertise, we help optimize yield, reduce water waste, and promote sustainable farming practices.",
      link: "/services#agricultural-advisory"
    }
  ];

  // Product slider data - Updated with the requested products
  const featuredProducts = [
    {
      title: "5-Way Water Check Eco Packs (NCW-480115) (W4H)",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "/products#testing-kits"
    },
    {
      title: "Free & Total Chlorine Eco Packs (NCW-480655-W4H)",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "/products#testing-kits"
    },
    {
      title: "Free Chlorine Water Check (NCW-481026-W4H)",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "/products#testing-kits"
    },
    {
      title: "ITS Complete Home Water Quality Test Kit (NCW-481199)",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      link: "/products#testing-kits"
    },
    {
      title: "Pool Check 3in1 Eco pack (NCW-484335)",
      imageSrc: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      link: "/products#testing-kits"
    },
    {
      title: "Safe Well Check Home Well Water Test Kit (NCW-487941)",
      imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      link: "/products#testing-kits"
    },
    {
      title: "UV Light (NCW-487199)",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      link: "/products#equipment"
    },
    {
      title: "ITS Water Quality Test Kit (NCW-487986)",
      imageSrc: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      link: "/products#testing-kits"
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
  
  // Stats data - Updated to reflect a startup
  const stats = [
    { value: 6, label: "Years of Experience", suffix: "+" },
    { value: 10, label: "Projects Completed", suffix: "+" },
    { value: 100, label: "Customer Satisfaction", suffix: "%" },
    { value: 5, label: "Team Members", suffix: "+" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Innovative Water Resources Engineering"
        subtitle="Smart solutions for water quality testing, treatment, and agricultural development"
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
                  Pioneering Smart Water <br className="hidden md:block" /> Solutions Since 2025
                </h2>
                <p className="text-gray-600">
                  ENATECH is an innovative water resources engineering company dedicated to providing smart and sustainable solutions for water management challenges. Our team of experts combines technical excellence with a deep commitment to environmental stewardship.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start">
                    <div className="rounded-full p-2 bg-enatech-green-light text-enatech-green-dark mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Quality Assured</h4>
                      <p className="text-sm text-gray-600">Rigorous standards</p>
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
                      <p className="text-sm text-gray-600">Smart digital solutions</p>
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
                <p className="text-2xl font-bold text-enatech-blue-dark">Founded</p>
                <p className="text-gray-600">March 2025</p>
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
                From smart digital water quality testing to water treatment solutions and agricultural advisory, 
                we offer specialized services to meet your water resource needs.
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
      
      {/* Products Slider Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                Our Products
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Water Quality Testing Equipment
              </h2>
              <p className="text-gray-600">
                Explore our range of high-quality water testing kits and equipment designed to meet diverse needs across industries.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <div className="relative px-4 sm:px-8 md:px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  autoplay: true,
                  interval: 5000,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {featuredProducts.map((product, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <ProductSlideCard
                        title={product.title}
                        description="" 
                        imageSrc={product.imageSrc}
                        link={product.link}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden sm:block">
                  <CarouselPrevious className="left-1" />
                  <CarouselNext className="right-1" />
                </div>
              </Carousel>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={400}>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-enatech-blue text-enatech-blue hover:bg-enatech-blue-light hover:text-enatech-blue-dark group">
                <Link to="/products">
                  View All Products
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
