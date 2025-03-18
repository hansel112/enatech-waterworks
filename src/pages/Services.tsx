
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Droplet, Sun, Plant, Factory, HardHat, Briefcase, ArrowRight, Check } from 'lucide-react';

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
  
  // Detailed service data
  const services = [
    {
      id: "water-quality",
      icon: <Droplet size={32} />,
      title: "Water Quality Testing",
      subtitle: "Comprehensive analysis for all water sources",
      description: "Our water quality testing services provide accurate, reliable analysis of water sources for various applications including drinking water, irrigation, industrial use, and environmental monitoring.",
      features: [
        "Complete chemical and biological analysis",
        "On-site testing and laboratory services",
        "Regulatory compliance monitoring",
        "Customized testing protocols",
        "Detailed reporting and recommendations"
      ],
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
    },
    {
      id: "solar-pumping",
      icon: <Sun size={32} />,
      title: "Solar Water Pumping",
      subtitle: "Sustainable water access solutions",
      description: "We design and implement solar-powered water pumping systems that provide reliable, eco-friendly water access for agricultural, community, and commercial applications, even in remote locations.",
      features: [
        "Custom system design and sizing",
        "High-efficiency solar panels and pumps",
        "Battery storage options for 24/7 operation",
        "Remote monitoring capabilities",
        "Professional installation and maintenance"
      ],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    },
    {
      id: "agricultural-advisory",
      icon: <Plant size={32} />,
      title: "Agricultural Advisory",
      subtitle: "Optimize water use for better yields",
      description: "Our agricultural advisory services help farmers and agricultural businesses optimize water usage, improve irrigation efficiency, and implement sustainable water management practices.",
      features: [
        "Irrigation system assessment and optimization",
        "Water conservation strategies",
        "Crop-specific water management plans",
        "Soil moisture monitoring solutions",
        "Training and capacity building"
      ],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      id: "equipment",
      icon: <Factory size={32} />,
      title: "Products & Equipment",
      subtitle: "High-quality water management equipment",
      description: "We supply a comprehensive range of water management equipment and products, from water quality testing kits to advanced pumping systems, filtration units, and monitoring devices.",
      features: [
        "Water quality testing equipment",
        "Pumping and distribution systems",
        "Water treatment and filtration units",
        "Monitoring and control devices",
        "Irrigation equipment and accessories"
      ],
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
    },
    {
      id: "engineering",
      icon: <HardHat size={32} />,
      title: "Engineering Services",
      subtitle: "Expert solutions for water challenges",
      description: "Our engineering services cover all aspects of water resources planning, design, and implementation, from small-scale projects to comprehensive water management systems for communities and industries.",
      features: [
        "Water resource assessment and planning",
        "System design and modeling",
        "Project management and implementation",
        "Technical documentation and reporting",
        "Quality assurance and compliance"
      ],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      id: "consulting",
      icon: <Briefcase size={32} />,
      title: "Consulting Services",
      subtitle: "Strategic water management guidance",
      description: "Our consulting services provide expert guidance on water management strategies, policy development, and long-term planning for organizations, governments, and development agencies.",
      features: [
        "Water strategy development",
        "Policy guidance and development",
        "Sustainability assessments",
        "Risk analysis and management",
        "Stakeholder engagement and training"
      ],
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
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
      {/* Hero Section */}
      <HeroSection 
        title="Our Services"
        subtitle="Comprehensive water resource solutions for every need"
        backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b"
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
                Comprehensive Water Resource Solutions
              </h2>
              <p className="text-gray-600">
                From water quality testing to solar pumping systems, agricultural advisory services, 
                and professional engineering consulting, we provide end-to-end solutions for all water resource needs.
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
                        <h4 className="font-medium text-gray-800">What We Provide:</h4>
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
                Contact us today to discuss your water resource needs and discover how ENATECH can provide 
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
