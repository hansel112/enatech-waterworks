import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCategory from '@/components/ProductCategory';

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

  // Updated product categories with new images
  const productCategories = [
    {
      id: "smart-digital-testing-kits",
      title: "Smart Digital Water Testing Kits",
      description: "Advanced digital testing equipment with smartphone connectivity for professional water analysis.",
      image: "/lovable-uploads/7ad22af4-e0a5-4155-b7c7-3bd8e02c0579.png",
      products: [
        {
          name: "Multi Meter Kit (NCW-486301-W4H)",
          shortDescription: "The new eXact pH+ Smart Meter System with Bluetooth® SMART is perfect for the detection of pH, Conductivity, Salinity, TDS, Temperature, and ORP.",
          detects: [
            "pH: 0.00 - 14.00",
            "Temperature: 0 - 50 deg C",
            "Salinity: 0 - 10.00 ppt",
            "Conductivity: 0 - 2000μS",
            "Total Dissolved Solids: 0.1ppm - 10 ppt"
          ],
          productContents: [
            "Plastic carrying case w/ Foam includes",
            "eXact® pH+ Smart Meter",
            "eXact® pH+ Multi Probe (pH, Conductivity, Salinity, TDS, Temperature)",
            "Premixed pH calibration solutions (4.00 and 7.00)",
            "Premixed Conductivity calibration solutions (12.88 mS/cm and 1413 μS/cm)",
            "Soaking solution (3M KCl)",
            "Calibration bottles (4)",
            "Lanyard",
            "(Four AAA batteries sold separately)",
            "pH+ sample collection bottle"
          ],
          image: "/lovable-uploads/c1698f0e-6eb3-48e5-b782-501f8aa10e0a.png"
        },
        {
          name: "Bluetooth Photometer (NCW-486700-BT-W4H)",
          shortDescription: "The eXact® Micro 20 with Bluetooth® SMART is a powerful dual-wavelength photometer system that connects wirelessly to your smart device.",
          detects: [
            "Alkalinity, Total: (fresh) 10 - 210 ppm",
            "Alkalinity, Total: (pool water) 8 - 200 ppm",
            "Alkalinity, Total (marine): 25 - 200 ppm",
            "Aluminum: 0.01 - 1.20 ppm",
            "Ammonia: 0.02 - 2.40 ppm",
            "Biguanide: 1.6 - 210 ppm",
            "Bromine (DPD-4): 0.01 - 12.0 ppm",
            "Calcium (as CaCO3): 20 - 400 ppm",
            "Chloride (as NaCl) III: 3 - 270 ppm",
            "Chloride (as NaCl) III HR: 50 - 5400 ppm",
            "And 30+ more parameters"
          ],
          productContents: [
            "Comes with basic components to start water testing",
            "eXact® Micro 20 Photometer",
            "Cleaning brush",
            "Instruction manual",
            "Carry case and reagent bottles NOT included",
            "App available in 10 languages",
            "4.25\"W x 7.25\"H x 2.25\"D | 10.8oz"
          ],
          image: "/lovable-uploads/f258aad8-5783-4cbf-bdbc-daa6450ecef8.png"
        },
        {
          name: "Bluetooth Well Drillers Kit (NCW-486700-BT-WD)",
          shortDescription: "The eXact® Micro 20 with Bluetooth® SMART is a powerful dual-wavelength photometer system designed specifically for well water testing.",
          productContents: [
            "Large black plastic carrying case w/ Foam includes",
            "Mini-dilution kit",
            "eXact® Micro 20 Photometer",
            "Cleaning brush",
            "Instruction manual",
            "25 tests of each: Total Alkalinity, pH,Free Chlorine (DPD-1), Combined/Total Chlorine (DPD-3), Total Hardness High, Phosphate, Copper, Manganese, Chloride (Salt), Total Iron, HR Chlorine, Nitrate"
          ],
          image: "/lovable-uploads/59a21518-d699-468c-b068-9782f312d892.png"
        },
        {
          name: "Bluetooth Pool Kit (NCW-486700-BT-KP)",
          shortDescription: "The eXact® Micro 20 with Bluetooth® SMART photometer system specially configured for pool and spa water testing.",
          productContents: [
            "Large black plastic carrying case w/ Foam includes",
            "Mini-dilution kit",
            "eXact® Micro 20 Bluetooth® Photometer",
            "Cleaning brush",
            "Instruction manual",
            "25 tests of each: Total Alkalinity, pH, Free Chlorine (DPD-1), Combined/Total Chlorine (DPD-3), Calcium Hardness, Phosphate, Copper, Chloride (Salt), Biguanide, Total Iron, HR Chlorine, Nitrate, Cyanuric Acid"
          ],
          image: "/lovable-uploads/e0974b0a-2ba8-4228-824e-d122e1b4488d.png"
        },
        {
          name: "Bluetooth Standard Kit (NCW-486700-BT-K)",
          shortDescription: "The eXact® Micro 20 with Bluetooth® SMART basic configuration for general water quality testing.",
          productContents: [
            "Large black plastic carrying case w/ Foam includes",
            "Mini-dilution kit",
            "eXact® Micro 20 Photometer",
            "Cleaning brush",
            "Instruction manual",
            "25 tests of each: Free Chlorine (DPD-1), Combined/Total Chlorine (DPD-3)"
          ],
          image: "/lovable-uploads/7ad22af4-e0a5-4155-b7c7-3bd8e02c0579.png"
        }
      ]
    },
    {
      id: "visual-testing-kits",
      title: "Visual Testing Kits",
      description: "Professional visual water testing kits for accurate water quality analysis in various settings.",
      image: "/lovable-uploads/d93b3e4a-8ca5-48d6-b03c-1b6dadc9b818.png",
      products: [
        {
          name: "5-Way Water Check Eco Packs (NCW-480115) (W4H)",
          shortDescription: "Simple 5-way colour test strip for quick and accurate testing of Free Chlorine, Total Chlorine, pH, Total Alkalinity and Total Hardness in water.",
          detects: [
            "Total Hardness: 0, 25, 50, 120, 250, 425 ppm (mg/L)",
            "Total Chlorine: 0, 0.5, 1, 2, 4, 10 ppm (mg/L)",
            "Free Chlorine: 0, 0.5, 1, 2, 4, 10 ppm (mg/L)",
            "Total Alkalinity: 0, 40, 80, 120, 180, 240 ppm (mg/L)",
            "pH: 6.2, 6.8, 7.2, 7.8, 8.4 pH"
          ],
          testQuantity: "30 tests",
          parameters: "5/strip",
          image: "/lovable-uploads/c66c7de0-b113-4ae5-a617-48b41b7a8bac.png"
        },
        {
          name: "Free & Total Chlorine Eco Packs (NCW-480655-W4H)",
          shortDescription: "WaterWorks Free Chlorine & Total Chlorine water quality test strips with patented Free Chlorine indicator.",
          detects: [
            "Free Chlorine 0.0, 0.1, 0.2, 0.5, 1.0, 2.5, 4.0*, 5.0 ppm (mg/L)",
            "Total Chlorine 0.0, 0.1, 0.2, 0.5, 1.0, 2.5, 4.0*, 5.0 ppm (mg/L)",
            "EPA Maximum Contaminant Level"
          ],
          testQuantity: "30 tests",
          parameters: "1/strip",
          image: "/lovable-uploads/bf338c63-ac3c-4d29-96bc-40037f49f9f0.png"
        },
        {
          name: "Free Chlorine Water Check (NCW-481026-W4H)",
          shortDescription: "The ONLY EPA APPROVED test strip used for drinking water compliance monitoring with patented Free Chlorine indicator.",
          detects: [
            "0.0, 0.05, 0.1, 0.2 0.4, 0.6, 0.8, 1.2, 1.5, 2.0, 2.6, 4.0,>6.0 ppm (mg/L)"
          ],
          testQuantity: "50 tests",
          parameters: "1/strip",
          image: "/lovable-uploads/63b79d61-5e4d-4913-ab40-033862133b30.png"
        },
        {
          name: "ITS Complete Home Water Quality Test Kit (NCW-481199)",
          shortDescription: "Complete home water quality test kit covering 13 essential water parameters.",
          detects: [
            "Coliform Bacteria & E. coli: Positive/Negative",
            "Copper: 0.0, 0.1, 0.5, 1.0, 2.0 ppm (mg/l)",
            "Chloride Check: 0, 250, 500 ppm (mg/l)",
            "Free Chlorine: 0.0, 0.05, 0.2, 0.6, 1.5, 4.0, 10 ppm (mg/l)",
            "And 9 more parameters"
          ],
          productContents: [
            "1 x Coliform Bacteria & E. coli",
            "2 x Copper Test Strips",
            "2 x Chloride Check Test Strips",
            "2 x Free Chlorine Test Strips",
            "2 x Hydrogen Sulfide Test Strips",
            "2 x Iron Test Strips",
            "2 x Nitrate/Nitrite Test Strips",
            "2 x pH / Total Alkalinity / Total Hardness Test Strips",
            "2 x Sulfate Test Strips",
            "2 x Total Chlorine Test Strips"
          ],
          testQuantity: "25 Tests (13 Parameters)",
          image: "/lovable-uploads/19815630-d5e6-421e-af0f-341911b75fd3.png"
        },
        {
          name: "Pool Check 3in1 Eco pack (NCW-484335)",
          shortDescription: "Specialized test kit for pool and spa water, measuring Total Alkalinity, Free Chlorine/Bromine & pH.",
          detects: [
            "Total Alkalinity: 0, 40, 80, 120, 180, 240, 360 ppm (mg/L)",
            "Free Chlorine: 0, 0.5, 1, 3, 5, 10, 20 ppm (mg/L)",
            "pH: 6.0, 6.4, 6.8, 7.2, 7.6, 8.2, 9.0 pH"
          ],
          testQuantity: "10 tests",
          parameters: "3/strip",
          image: "/lovable-uploads/8b5ceb47-9caa-4074-9c1f-cdaaa4679723.png"
        },
        {
          name: "Safe Well Check Home Well Water Test Kit (NCW-487941)",
          shortDescription: "Test kit specifically designed for well water, covering all essential parameters for home use.",
          detects: [
            "Alkalinity: 0, 40, 80, 120, 180, 240, 500 ppm (mg/L)",
            "Total Hardness: 0, 50, 80, 120, 180, 240, 500 ppm (mg/L)",
            "Nitrate (as N): 0, 2.0, 10, 20, 50 ppm (mg/L)",
            "Nitrite (as N): 0.2, 1.0, 1.5, 3.0 ppm (mg/L)",
            "Iron (Fe+2): 0.0, 0.05, 0.1, 0.3, 1.0 ppm (mg/L)",
            "pH: 2.0, 4.0, 5.0, 6.5, 8.5, 9.5, 10.5, 12.0 pH"
          ],
          image: "/lovable-uploads/3d309d15-0a83-4407-8e7f-a1b87bdd992a.png"
        },
        {
          name: "UV Light (NCW-487199)",
          shortDescription: "UV light source for confirming the presence/absence of E. coli bacteria in test samples.",
          detects: [
            "365nm Light",
            "Super bright LEDs will last for over 100 hours"
          ],
          image: "/lovable-uploads/de2c6f0c-ab2e-46a4-b25a-e5f6b100fb78.png"
        },
        {
          name: "ITS Water Quality Test Kit (NCW-487986)",
          shortDescription: "Most complete multi-parameter kit designed to screen for 16 of the USEPA top water quality parameter concerns.",
          detects: [
            "Bacteria: 5cfu/ml Positive/Negative",
            "Chloride: 0, 250, 500 ppm (mg/l)",
            "Copper: 0.0, 0.1, 0.5, 1.0, 2.0 ppm (mg/l)",
            "Free Chlorine: 0, 0.05, 0.2, 0.6, 1.5, 4.0, 10 ppm (mg/l)",
            "And 12 more parameters"
          ],
          productContents: [
            "1 x Coliform Bacteria",
            "2 x Chloride Test Strips",
            "2 x Copper Test Strips",
            "And multiple other test strips"
          ],
          testQuantity: "29 Tests (16 Parameters)",
          image: "/lovable-uploads/fa5c545e-3ebf-4c7d-84e5-c531e8647f3f.png"
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
        backgroundImage="/lovable-uploads/ef956ade-0e64-430e-b58c-726187e21d80.png"
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
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <AnimatedElement key={category.id} delay={200}>
                <ProductCategory
                  id={category.id}
                  title={category.title}
                  description={category.description}
                  image={category.image}
                  products={category.products}
                />
              </AnimatedElement>
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
