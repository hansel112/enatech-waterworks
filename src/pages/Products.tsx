import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Check, 
  Droplet, 
  BeakerIcon, 
  Gauge, 
  Package, 
  Filter, 
  PipetteIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Products = () => {
  // Animation utility for fade-in effects
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

  // Product categories and items
  const productCategories = [
    {
      id: "testing-equipment",
      title: "Water Testing Equipment",
      description: "Professional equipment for accurate water quality analysis in field and laboratory settings.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      products: [
        {
          name: "Portable Water Quality Analyzer",
          description: "Comprehensive water testing device for pH, conductivity, dissolved oxygen, and temperature measurement.",
          features: [
            "Real-time data collection",
            "Waterproof design for field use",
            "Rechargeable battery with 12+ hours runtime",
            "Digital display with data storage"
          ],
          icon: <Droplet size={24} />
        },
        {
          name: "Multi-Parameter Testing Kit",
          description: "Complete kit for testing 12 critical water parameters including heavy metals and contaminants.",
          features: [
            "Color-changing reagents for visual analysis",
            "Carry case with all necessary tools",
            "Comprehensive instruction manual",
            "Suitable for both professionals and beginners"
          ],
          icon: <BeakerIcon size={24} />
        },
        {
          name: "Digital Water Quality Meter",
          description: "High-precision digital device for measuring TDS, EC, and temperature in water sources.",
          features: [
            "Auto-calibration functionality",
            "0.1 mg/L resolution",
            "Data logging capabilities",
            "Compact pocket design"
          ],
          icon: <Gauge size={24} />
        }
      ]
    },
    {
      id: "pumping-systems",
      title: "Water Pumping Systems",
      description: "Efficient and reliable pumping solutions powered by solar energy for various applications.",
      image: "https://images.unsplash.com/photo-1604213410393-89f7e38d77c3",
      products: [
        {
          name: "Solar Submersible Pump Package",
          description: "Complete solar-powered pumping system designed for deep wells and boreholes.",
          features: [
            "Stainless steel construction",
            "High-efficiency brushless DC motor",
            "Solar panels with mounting structure",
            "Controller with MPPT technology"
          ],
          icon: <Package size={24} />
        },
        {
          name: "Surface Solar Pump Kit",
          description: "Solar surface pump ideal for irrigation, livestock watering, and water transfer applications.",
          features: [
            "Self-priming up to 6 meters",
            "Flow rates up to 40 liters/minute",
            "Modular design for easy maintenance",
            "Optional battery backup system"
          ],
          icon: <Package size={24} />
        },
        {
          name: "Solar Pump Controller",
          description: "Advanced controller for optimizing solar pump performance and protecting system components.",
          features: [
            "Automatic speed adjustment",
            "Dry run protection",
            "Low voltage disconnect",
            "Digital display with system diagnostics"
          ],
          icon: <Gauge size={24} />
        }
      ]
    },
    {
      id: "treatment-systems",
      title: "Water Treatment Systems",
      description: "Filtration and purification solutions for delivering clean, safe water for various applications.",
      image: "https://images.unsplash.com/photo-1527689638836-411945a2b57c",
      products: [
        {
          name: "Compact Filtration System",
          description: "Multi-stage water filtration system for household and small community use.",
          features: [
            "Sediment, carbon, and UF membrane filtration",
            "99.9% bacteria and virus removal",
            "Easy-to-replace filter cartridges",
            "Wall-mountable compact design"
          ],
          icon: <Filter size={24} />
        },
        {
          name: "UV Purification Unit",
          description: "Ultra-violet water purification system for effectively eliminating microbial contaminants.",
          features: [
            "254nm UV wavelength for optimal disinfection",
            "Low power consumption",
            "Flow rates suitable for homes or small businesses",
            "Lamp life indicator and replacement alert"
          ],
          icon: <PipetteIcon size={24} />
        },
        {
          name: "Reverse Osmosis System",
          description: "Advanced RO system for removing dissolved solids, chemicals, and impurities from water.",
          features: [
            "5-stage filtration process",
            "High recovery rate to minimize waste",
            "Automatic flush system",
            "Modular design for easy servicing"
          ],
          icon: <Filter size={24} />
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <HeroSection 
        title="Products & Equipment"
        subtitle="High-quality water management equipment for sustainable solutions"
        backgroundImage="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5"
        size="medium"
      />
      
      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                Our Product Line
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Professional Water Resource Equipment
              </h2>
              <p className="text-gray-600">
                ENATECH supplies high-quality water management equipment designed for reliability, 
                accuracy, and durability in diverse environmental conditions.
              </p>
            </div>
          </AnimatedElement>
          
          {/* Product Categories */}
          <div className="space-y-32">
            {productCategories.map((category, index) => (
              <div 
                key={category.id} 
                id={category.id}
                className={`scroll-mt-24 ${index !== 0 ? 'pt-8' : ''}`}
              >
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr] md:flex-row-reverse'} gap-12 items-center`}>
                  <AnimatedElement delay={100}>
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 leading-tight">
                        {category.title}
                      </h2>
                      <p className="text-xl text-enatech-blue">{category.description}</p>
                      
                      <div className="space-y-8 pt-4">
                        {category.products.map((product, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                              <div className="bg-enatech-blue-light rounded-lg p-2 text-enatech-blue-dark">
                                {product.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                
                                <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                  {product.features.map((feature, j) => (
                                    <li key={j} className="flex items-start">
                                      <Check className="text-enatech-green mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                                      <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedElement>
                  
                  <AnimatedElement delay={300}>
                    <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </AnimatedElement>
                </div>
                
                {index < productCategories.length - 1 && (
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
                Need Equipment for Your Project?
              </h2>
              <p className="text-gray-700 mb-8">
                We supply high-quality water management equipment tailored to your specific requirements.
                Contact us today to discuss your equipment needs and get expert recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-enatech-blue hover:bg-enatech-blue-dark group">
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-enatech-blue text-enatech-blue hover:bg-white hover:text-enatech-blue-dark">
                  <Link to="/services">
                    View Our Services
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

export default Products;
