import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
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

  // Timeline data - Updated for startup
  const timeline = [
    {
      year: "2025",
      title: "Company Founded",
      description: "ENATECH was registered on 19th March 2025 with a vision to provide smart, sustainable water solutions."
    }
  ];

  // Team data - Only the founder
  const founder = {
    name: "Eng. Nathan Etyang",
    role: "Founder & Director",
    bio: "Experienced and results-driven Water Resources Engineer with 6+ years of expertise in designing and managing sustainable water supply systems. Passionate about integrating emerging technologies, particularly AI, into water infrastructure to enhance sustainability and access to clean water. Published researcher in AI applications for water treatment, with a strong focus on innovation, WASH projects, and collaborative engineering solutions.",
    image: "/lovable-uploads/9335445d-b4df-4a18-82ad-e66577b0c88f.png",
    linkedin: "https://www.linkedin.com/in/nathan-etyang-976948173"
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <HeroSection 
        title="About ENATECH"
        subtitle="Revolutionizing sustainable water quality solutions through innovation and expertise"
        backgroundImage="/lovable-uploads/fc15edfe-9f31-4fbc-864c-6a9a5d07301b.png"
        overlayOpacity="medium"
        size="medium"
      />
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedElement delay={100}>
              <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] shadow-xl">
                <img 
                  src="/lovable-uploads/cfc6fdd5-bc96-4202-8ced-5767e7d17c7b.png" 
                  alt="ENATECH company history" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <div className="space-y-6">
                <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 leading-tight">
                  A Vision for Smart Water Management
                </h2>
                <p className="text-gray-600">
                  ENATECH is a forward-thinking water solutions provider, dedicated to transforming how individuals, 
                  communities, and industries manage and utilize water. Our mission is to ensure clean, safe, and 
                  sustainable water through cutting-edge technology, innovative water quality testing and water 
                  treatment solutions, and expert agricultural advisory services.
                </p>
                <p className="text-gray-600">
                  ENATECH's expertise covers, Smart irrigation planning, Solar Water Pumping Systems, Sustainable 
                  Water Use Strategies, Training and Capacity Building for Farmers.
                </p>
{/*                 <p className="text-gray-600">
                  ENATECH has an expert team of certified professionals with years of experience in water science 
                  and Agriculture, reliable State-of-the-art testing equipment and treatment systems, client 
                  focused and customized solutions to fit your specific needs and budget, sustainable Practices 
                  that promote eco-friendly and resource-efficient water use.
                </p> */}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-20 bg-enatech-gray-light">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                Mission & Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-gray-600">
                At ENATECH, our mission, vision, and values guide every decision we make and every project we undertake.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To deliver smart, sustainable water solutions that enhance water quality, optimize resource use, 
                  and empower communities and industries through innovation, technology, and expert support.
                </p>
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be a global leader in smart water management, transforming lives through clean water, 
                  sustainable practices, and intelligent agricultural solutions for a healthier, more resilient future.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-enatech-blue hover:bg-enatech-blue-dark">
                    <Link to="/services">
                      Explore Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Innovation</h4>
                      <p className="text-gray-600">We harness technology and creativity to pioneer advanced water management and treatment solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Sustainability</h4>
                      <p className="text-gray-600">We are committed to eco-conscious practices that preserve water resources for future generations.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Integrity</h4>
                      <p className="text-gray-600">We uphold the highest standards of honesty, accountability, and professionalism in all our engagements.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Excellence</h4>
                      <p className="text-gray-600">We strive for precision, reliability, and quality in every service, product, and solution we offer.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Collaboration</h4>
                      <p className="text-gray-600">We value partnerships and co-create solutions with our clients, aligning with their unique goals and challenges.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Empowerment</h4>
                      <p className="text-gray-600">We enable informed decision-making through education, training, and expert advisory, fostering self-reliance and growth.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Customer-Centricity</h4>
                      <p className="text-gray-600">We prioritize our clients' needs, delivering tailored, impactful, and cost-effective solutions that drive value.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                ENATECH: A New Beginning
              </h2>
              <p className="text-gray-600">
                Follow our journey as we grow and establish ourselves in the water resources sector.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-enatech-blue-light"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedElement key={index} delay={index * 100}>
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 relative">
                      <div className={`md:absolute ${index % 2 === 0 ? 'md:left-0' : 'md:right-0'} md:top-0 md:transform ${index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'} md:pl-10 md:pr-10`}>
                        <div className="relative md:ml-auto md:mr-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md">
                          <div className="absolute -left-3 md:left-auto md:-top-3 top-auto md:transform md:translate-x-0 transform -translate-y-1/2 md:translate-y-0 rounded-full w-6 h-6 bg-enatech-blue flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <div className="absolute md:hidden top-5 -left-5 rounded-full text-sm font-bold px-2 py-1 bg-enatech-blue text-white">
                            {item.year}
                          </div>
                          <div className="hidden md:block absolute top-0 left-0 transform -translate-y-full -mt-2 text-sm font-bold">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-medium text-gray-800 pt-2 md:pt-0">{item.title}</h3>
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-enatech-gray-light">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                Our Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Meet Our Founder
              </h2>
              <p className="text-gray-600">
                The vision and expertise behind ENATECH.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="max-w-3xl mx-auto">
            <AnimatedElement delay={100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold text-gray-800">{founder.name}</h3>
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-enatech-blue hover:text-enatech-blue-dark"
                      aria-label="LinkedIn Profile"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                  <p className="text-enatech-blue font-medium text-sm mb-3">{founder.role}</p>
                  <p className="text-gray-600">{founder.bio}</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                Join Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Passionate About Water Quality solutions?
              </h2>
              <p className="text-gray-600 mb-8">
                We're looking for talented individuals to join our team. If you're passionate about 
                water conservation, engineering, or sustainable development, we'd love to hear from you.
              </p>
              <Button asChild className="bg-enatech-blue hover:bg-enatech-blue-dark">
                <Link to="/contact">
                  Contact Us About Careers
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </main>
  );
};

export default About;
