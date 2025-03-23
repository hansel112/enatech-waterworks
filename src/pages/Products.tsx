import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Check, 
  Droplet, 
  BeakerIcon, 
  Filter,
  Sun
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

  // Updated product categories and items with specific product images
  const productCategories = [
    {
      id: "testing-kits",
      title: "Water Testing Kits",
      description: "Professional water testing kits for accurate water quality analysis in various settings.",
      image: "/lovable-uploads/66b87e9c-21c7-4073-92a8-589f8554ee52.png",
      products: [
        {
          name: "5-Way Water Check Eco Packs (NCW-480115) (W4H)",
          description: "Comprehensive water testing kit for 5 essential water parameters.",
          features: [
            "Tests for 5 critical water parameters",
            "Easy to use with quick results",
            "Eco-friendly packaging",
            "Ideal for home and light commercial use"
          ],
          icon: <Droplet size={24} />,
          image: "/lovable-uploads/c66c7de0-b113-4ae5-a617-48b41b7a8bac.png"
        },
        {
          name: "Free & Total Chlorine Eco Packs (NCW-480655-W4H)",
          description: "Specialized kit for measuring both free and total chlorine levels in water.",
          features: [
            "Accurate chlorine measurement",
            "Environmentally friendly design",
            "Complete with all testing supplies",
            "Simple color-matching system"
          ],
          icon: <BeakerIcon size={24} />,
          image: "/lovable-uploads/bf338c63-ac3c-4d29-96bc-40037f49f9f0.png"
        },
        {
          name: "Free Chlorine Water Check (NCW-481026-W4H)",
          description: "Focused test kit for free chlorine levels in drinking water and pools.",
          features: [
            "Precise free chlorine measurement",
            "Quick results within minutes",
            "Easy-to-read color chart",
            "Multiple tests per package"
          ],
          icon: <Filter size={24} />,
          image: "/lovable-uploads/63b79d61-5e4d-4913-ab40-033862133b30.png"
        }
      ]
    },
    {
      id: "home-testing",
      title: "Home Water Testing Solutions",
      description: "Complete testing solutions for residential water quality monitoring.",
      image: "/lovable-uploads/ef956ade-0e64-430e-b58c-726187e21d80.png",
      products: [
        {
          name: "ITS Complete Home Water Quality Test Kit (NCW-481199)",
          description: "Comprehensive home test kit that covers all essential water quality parameters.",
          features: [
            "Tests for multiple contaminants",
            "Complete with detailed instructions",
            "Lab-grade accuracy for home use",
            "Includes water quality guide"
          ],
          icon: <BeakerIcon size={24} />,
          image: "/lovable-uploads/19815630-d5e6-421e-af0f-341911b75fd3.png"
        },
        {
          name: "Safe Well Check Home Well Water Test Kit (NCW-487941)",
          description: "Specialized kit designed specifically for testing private well water quality.",
          features: [
            "Targets well-specific contaminants",
            "Tests for bacteria and chemicals",
            "Simple testing procedure",
            "Detailed results interpretation guide"
          ],
          icon: <Droplet size={24} />,
          image: "/lovable-uploads/3d309d15-0a83-4407-8e7f-a1b87bdd992a.png"
        },
        {
          name: "ITS Water Quality Test Kit (NCW-487986)",
          description: "Professional-grade water quality testing kit with comprehensive parameter coverage.",
          features: [
            "Wide range of water quality indicators",
            "Professional accuracy standards",
            "Reusable components where possible",
            "Digital result recording options"
          ],
          icon: <Filter size={24} />,
          image: "/lovable-uploads/fa5c545e-3ebf-4c7d-84e5-c531e8647f3f.png"
        }
      ]
    },
    {
      id: "specialized-testing",
      title: "Specialized Testing Equipment",
      description: "Specialized equipment for specific water testing applications.",
      image: "/lovable-uploads/59bb6d42-163d-45b3-9753-413ddf75a599.png",
      products: [
        {
          name: "Pool Check 3in1 Eco pack (NCW-484335)",
          description: "Specialized test kit for pool and spa water, measuring Total Alkalinity, Free Chlorine/Bromine & pH.",
          features: [
            "3-in-1 testing capability",
            "Eco-friendly packaging",
            "Perfect for pool maintenance",
            "Clear color-coded results"
          ],
          icon: <BeakerIcon size={24} />,
          image: "/lovable-uploads/8b5ceb47-9caa-4074-9c1f-cdaaa4679723.png"
        },
        {
          name: "UV Light (NCW-487199)",
          description: "UV light for specialized water quality testing and verification procedures.",
          features: [
            "Portable UV light source",
            "Battery powered for field use",
            "Detects fluorescent markers",
            "Durable construction"
          ],
          icon: <Sun size={24} />,
          image: "/lovable-uploads/de2c6f0c-ab2e-46a4-b25a-e5f6b100fb78.png"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <HeroSection 
        title="Products & Equipment"
        subtitle="Professional water testing kits for accurate quality analysis"
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
                Professional Water Testing Equipment
              </h2>
              <p className="text-gray-600">
                ENATECH supplies high-quality water testing kits designed for reliability, 
                accuracy, and ease of use in diverse environmental conditions.
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
                            <div className="flex flex-col md:flex-row items-start gap-4">
                              <div className="bg-white rounded-lg p-4 text-enatech-blue-dark border border-gray-200 shadow-sm w-full md:w-1/3 flex justify-center items-center">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="object-contain max-h-48"
                                />
                              </div>
                              <div className="w-full md:w-2/3">
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
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
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
                Need Testing Equipment for Your Project?
              </h2>
              <p className="text-gray-700 mb-8">
                We supply high-quality water testing kits tailored to your specific requirements.
                Contact us today to discuss your needs and get expert recommendations.
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
