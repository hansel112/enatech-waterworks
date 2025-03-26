import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Droplet, Sun, Leaf, Check, ArrowRight } from 'lucide-react';

const Services = () => {
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
        className={`transition-all duration-700 ease-out ${
          !isVisible ? "opacity-0 translate-y-10" : ""
        } ${className || ""}`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  };
  
  // Updated services data with the new images
  const services = [
    {
      id: "water-quality",
      icon: <Droplet size={32} />,
      title: "Smart Digital Water Quality Testing",
      subtitle: "Advanced real-time monitoring solutions",
      description: "We offer advanced, real-time water quality monitoring using smart digital tools and IoT-bluetooth enabled devices. Our testing systems provide instant and accurate analysis of key water parameters, ensuring early detection of contaminants and enabling proactive water management.",
      features: [
        "Real-time data access and remote monitoring",
        "Customizable alerts and reporting",
        "Compliance with local and international water quality standards"
      ],
      image: "/lovable-uploads/1332f562-684c-4e33-98c5-b4c7a4e94c4b.png"
    },
    {
      id: "water-treatment",
      icon: <Sun size={32} />,
      title: "Water Treatment Solutions",
      subtitle: "Comprehensive treatment for all water needs",
      description: "Our comprehensive water treatment services cater to domestic, commercial, and agricultural needs. We specialize in the design, installation and maintenance of Online Chemical Dosing Pumps for real time, automated water treatment across various applications.",
      features: [
        "Online Dosing Pumps for Disinfection, PH Control, and Scaling Prevention",
        "Maintenance and Technical Support",
        "Cost-Effective and Sustainable Treatment Solutions"
      ],
      image: "/lovable-uploads/f2ec8468-b8fe-4251-a187-444c312153c9.png"
    },
    {
      id: "agricultural-advisory",
      icon: <Leaf size={32} />,
      title: "Agricultural Advisory Services",
      subtitle: "Expert guidance for sustainable farming",
      description: "We empower farmers and agribusinesses with expert guidance on water-efficient irrigation, soil health, and crop management. By integrating water analytics with agronomic expertise, we help optimize yield, reduce water waste, and promote sustainable farming practices.",
      features: [
        "Smart irrigation planning",
        "Solar Water Pumping Systems",
        "Sustainable Water Use Strategies",
        "Training and Capacity Building for Farmers"
      ],
      image: "/lovable-uploads/b2d71bcc-e856-4def-acf8-1fd22dc69df2.png"
    }
  ];

  // Scroll to service section if there's a hash in the URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section - Updated background image */}
      <HeroSection 
        title="Our Services"
        subtitle="Smart solutions for water quality, treatment, and agricultural advisory"
        backgroundImage="/lovable-uploads/9e6049cf-cfb5-4cb7-8a72-bbb39e614f78.png"
        size="medium"
      />
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Smart Water Resource Solutions
              </h2>
              <p className="text-gray-600">
                We provide innovative services for water quality testing, water treatment, 
                and agricultural advisory to help you manage water resources efficiently and sustainably.
              </p>
            </div>
          </AnimatedElement>
          
          {/* Services List */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`scroll-mt-24 ${index !== 0 ? 'pt-8' : ''}`}
              >
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr] md:flex-row-reverse'} gap-12 items-center`}>
                  <AnimatedElement delay={100}>
                    <div className="space-y-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-enatech-blue-light text-enatech-blue-dark">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-xl text-enatech-blue">{service.subtitle}</p>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 pt-4">
                        <h4 className="font-medium text-gray-800">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="text-enatech-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-6">
                        <Button asChild className="bg-enatech-blue hover:bg-enatech-blue-dark group">
                          <Link to="/contact">
                            Get a Consultation
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </AnimatedElement>
                  
                  <AnimatedElement delay={300}>
                    <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </AnimatedElement>
                </div>
                
                {index < services.length - 1 && (
                  <div className="flex justify-center mt-16">
                    <div className="w-24 h-px bg-gray-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-enatech-blue-light">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-700 mb-8">
                Contact us today to discuss your water quality needs and discover how ENATECH can provide 
                the perfect solution for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-enatech-blue hover:bg-enatech-blue-dark group">
                  <Link to="/contact">
                    Contact Our Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-enatech-blue text-enatech-blue hover:bg-white hover:text-enatech-blue-dark">
                  <Link to="/about">
                    Learn About Us
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

export default Services;
