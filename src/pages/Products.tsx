
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
      image: "/lovable-uploads/d93b3e4a-8ca5-48d6-b03c-1b6dadc9b818.png",
      products: [
        {
          name: "Multi Meter Kit (NCW-486301-W4H)",
          shortDescription: "The new eXact pH+ Smart Meter System with Bluetooth® SMART is perfect for the detection of pH, Conductivity, Salinity, TDS, Temperature, and ORP.",
          price: "$397.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "eXact®",
          partNumber: "NCW-486301",
          details: [
            "ITS has developed an all new handheld multi-parameter pocket meter that works in conjunction with the eXact iDip® app for iOS and Android smart devices. The combination of this with the iDip® Photometer and the eXact iDip® app now allows for automatic calculations of formulas such as the Langelier Saturation Index."
          ],
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
          image: "/lovable-uploads/233aae6e-e251-4a7d-be6b-b5736af80637.png"
        },
        {
          name: "Bluetooth Photometer (NCW-486700-BT-W4H)",
          shortDescription: "The eXact® Micro 20 with Bluetooth® SMART is a powerful dual-wavelength photometer system that connects wirelessly to your smart device.",
          price: "$689.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "eXact®",
          partNumber: "NCW-486700-BT",
          details: [
            "The dual narrow band wavelength filters ensure delivery of the most accurate results! Pre-programmed to test over 40 water quality parameters with lab-quality accuracy.",
            "Fast, accurate results with EZ-3 Method Test results can be shared in real-time via email or exported to a CSV spreadsheet with time/date GPS locations when used with the eXact iDip® app 30-day satisfaction guarantee 2-year warranty."
          ],
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
          image: "/lovable-uploads/26db3820-f5d2-4754-808b-e1656b6a6cc8.png"
        },
        {
          name: "Bluetooth Well Drillers Kit (NCW-486700-BT-WD)",
          shortDescription: "The eXact® Micro 20 with Bluetooth® SMART is a powerful dual-wavelength photometer system designed specifically for well water testing.",
          price: "$887.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "eXact®",
          partNumber: "NCW-486700-BT-WD",
          details: [
            "The dual narrow band wavelength filters ensure delivery of the most accurate results! Pre-programmed to test over 40 water quality parameters with lab-quality accuracy Fast, accurate results with EZ-3 Method Test results can be shared in real time via email or exported to a CSV spreadsheet with time & date GPS locations when used with the eXact iDip® app 30-day satisfaction guarantee 2-year warranty."
          ],
          productContents: [
            "Large black plastic carrying case w/ Foam includes",
            "Mini-dilution kit",
            "eXact® Micro 20 Photometer",
            "Cleaning brush",
            "Instruction manual",
            "25 tests of each: Total Alkalinity, pH,Free Chlorine (DPD-1), Combined/Total Chlorine (DPD-3), Total Hardness High, Phosphate, Copper, Manganese, Chloride (Salt), Total Iron, HR Chlorine, Nitrate"
          ],
          image: "/lovable-uploads/5ccdf875-256f-4d56-8fcc-6720f1fa6f91.png"
        },
        {
          name: "Bluetooth Pool Kit (NCW-486700-BT-KP)",
          shortDescription: "The eXact® Micro 20 with Bluetooth® SMART photometer system specially configured for pool and spa water testing.",
          price: "$888.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "eXact®",
          partNumber: "NCW-486700-BT-KP",
          details: [
            "The dual narrow band wavelength filters ensure delivery of the most accurate results! Pre-programmed to test over 40 water quality parameters with lab quality accuracy Fast, accurate results with EZ-3 Method Test results can be shared in real time via email or exported to a CSV spreadsheet with time date GPS locations when used with the eXact iDip® app 30-day satisfaction guarantee 2-year warranty."
          ],
          productContents: [
            "Large black plastic carrying case w/ Foam includes",
            "Mini-dilution kit",
            "eXact® Micro 20 Bluetooth® Photometer",
            "Cleaning brush",
            "Instruction manual",
            "25 tests of each: Total Alkalinity, pH, Free Chlorine (DPD-1), Combined/Total Chlorine (DPD-3), Calcium Hardness, Phosphate, Copper, Chloride (Salt), Biguanide, Total Iron, HR Chlorine, Nitrate, Cyanuric Acid"
          ],
          image: "/lovable-uploads/2a9a1c66-bea1-41e4-9224-2c04fe46ce14.png"
        },
        {
          name: "Bluetooth Standard Kit (NCW-486700-BT-K)",
          shortDescription: "The eXact® Micro 20 with Bluetooth® SMART basic configuration for general water quality testing.",
          price: "$769.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "eXact®",
          partNumber: "NCW-486700-BT-K",
          details: [
            "The dual narrow band wavelength filters ensure delivery of the most accurate results! Pre-programmed to test over 40 water quality parameters with lab quality accuracy Fast, accurate results with EZ-3 Method Test results can be shared in real-time via email or exported to a CSV spreadsheet with time & date GPS locations when used with the eXact iDip® app 30-day satisfaction guarantee 2 year warranty."
          ],
          productContents: [
            "Large black plastic carrying case w/ Foam includes",
            "Mini-dilution kit",
            "eXact® Micro 20 Photometer",
            "Cleaning brush",
            "Instruction manual",
            "25 tests of each: Free Chlorine (DPD-1), Combined/Total Chlorine (DPD-3)"
          ],
          image: "/lovable-uploads/23ac5b43-d890-4556-ab4e-ea3ffd6bef27.png"
        }
      ]
    },
    {
      id: "visual-testing-kits",
      title: "Visual Testing Kits",
      description: "Professional visual water testing kits for accurate water quality analysis in various settings.",
      image: "/lovable-uploads/a1f74804-36f8-4a85-b16e-47ff42591f16.png",
      products: [
        {
          name: "5-Way Water Check Eco Packs (NCW-480115) (W4H)",
          shortDescription: "Simple 5-way colour test strip for quick and accurate testing of Free Chlorine, Total Chlorine, pH, Total Alkalinity and Total Hardness in water.",
          price: "Dhs. 66.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "WaterWorks™",
          partNumber: "NCW-480115-W4H",
          details: [
            "It is a simple dip and read test strip with a precise colour chart on the back of the bottle and the results are shown within 30 seconds.", 
            "This broad use strip can test for these parameters in water across industries including swimming pools and spas. No other reagents or accessories are needed for this test. We use trace amounts of chemicals on our strips which makes them extremely safe and non-hazardous. They are considered as Articles under OSHA and do not require SDS sheets. This packaging is recyclable."
          ],
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
          price: "$23.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "WaterWorks™",
          partNumber: "NCW-480655",
          details: [
            "All of the reagents are impregnated on the test strip pad, and no external chemicals are needed to perform the water quality test. Chlorination will destroy and deactivate disease producing microorganisms. Chlorination may introduce undesirable taste and odor. To monitor chlorination and minimize any adverse effects, proper testing should be performed routinely. Free Chlorine is a very effective disinfectant.", 
            "Total Chlorine is the combination of both Free (available) Chlorine and reacted Chlorine, or Chloramines. Chloramines are formed when Free Chlorine reacts with organic compounds. Chloramines are less effective at disinfection than Free Chlorine and may cause eye and skin irritation in addition to a strong Chlorine smell."
          ],
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
          price: "$24.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "SenSafe®",
          partNumber: "NCW-481026",
          details: [
            "It is designed to resist interference from monochloramines. It is a simple dip and read test and you will have your result within 20 seconds. These strips can be used across industry from testing for Free Chlorine in swimming pools and spas to testing for sanitizer residue in food processing or tap water and other environments.",
            "Our patented aperture strips are unique in the way the water flows through them and detects the Free Chlorine much more accurately. We use trace amounts of chemicals on our strips which makes them extremely safe and non-hazardous. They are considered as Articles under OSHA and do not require SDS sheets."
          ],
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
          price: "Dhs. 102.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "ITS Europe",
          partNumber: "NCW-481199",
          details: [
            "This is a COMPLETE Home Water Quality Test Kit. It is a multi-parameter testing kit designed to screen for 13 water quality parameters. The COMPLETE Home Water Quality Test Kit is a simple, accurate solution for analyzing your water.", 
            "It is designed using unique, ITS patented strips, this kit is safe to use since it requires no powders, liquids, or tablets. Full results can be performed in the home with quick, accurate results. Tests for: Coliform Bacteria, Nitrate, Nitrite, Hydrogen Sulfide, Total Hardness, Total alkalinity, Total Chlorine, Free Chlorine, Chloride, Copper, Sulfate, Iron and pH."
          ],
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
          price: "Dhs. 30.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "Pool Check®",
          partNumber: "NCW-484335",
          details: [
            "3in1 Pool Check® has been specially designed to work in pools & spas with either chlorine and bromine systems. Economically priced, 3in1 Pool Check® is the ideal choice for the average pool & spa owner."
          ],
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
          price: "Dhs. 34.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "Safe Tap Check™",
          partNumber: "NCW-487941",
          details: [
            "Many of us still don't trust our tap or well water and so we buy more plastic, but the simple solution is to test our water and see what's really in there. Home water quality testing helps identify quickly that your water is safe and healthy to drink. The Safe Well Check™ Kit includes all the basic tests you need to test your own well water. It's accurate, affordable and super easy to use. Tests for: Total Hardness,Total Alkalinity, pH, Iron, Nitrate and Nitrite."
          ],
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
          price: "£26.57 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "ITS Europe",
          partNumber: "NCW-487199",
          details: [
            "The UV light source is used to confirm the presence/absence of E. coli bacteria in the room temperature incubated EZ Coliform Cult (XGAL/MUG) positive test sample.",
            "365nm Light",
            "Super bright LEDs will last for over 100 hours"
          ],
          image: "/lovable-uploads/de2c6f0c-ab2e-46a4-b25a-e5f6b100fb78.png"
        },
        {
          name: "ITS Water Quality Test Kit (NCW-487986)",
          shortDescription: "Most complete multi-parameter kit designed to screen for 16 of the USEPA top water quality parameter concerns.",
          price: "Dhs. 141.00 Dhs. 169.00 (Net Price excluding applicable; VAT, Customs Duty, Delivery Cost)",
          manufacturer: "ITS Europe",
          partNumber: "NCW-487986",
          details: [
            "Designed using ITS patented and proprietary strips, this test kit is safe to use since it requires no powders, liquids, or tablets. Full results can be performed in the home, at a lab, or on-site. This is the easy, accurate and affordable way to do a full water check at home. Tests for an amazing 16 parameters!",
            "Drinking water is one of the most strictly regulated substances in the UK, and we should really be able to drink it without hesitation. According to the Water Supply Regulations, the local water companies have a duty to supply \"wholesome\" tap water and routinely monitor their water. However, what many consumers don't know is that the supplier's responsibility for the water ends at your house's supply pipes or the house water meter."
          ],
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
        backgroundImage="/lovable-uploads/aa128448-8e41-41fd-be53-942aaf2ee5b9.png"
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
