
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

  // Timeline data
  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "ENATECH was established with a vision to provide sustainable water solutions."
    },
    {
      year: "2012",
      title: "Expansion of Services",
      description: "Added solar water pumping and agricultural advisory to our service offerings."
    },
    {
      year: "2015",
      title: "International Projects",
      description: "Began working on international water resource projects in developing regions."
    },
    {
      year: "2018",
      title: "Technical Innovation",
      description: "Developed proprietary water quality testing methods and equipment."
    },
    {
      year: "2021",
      title: "Sustainability Award",
      description: "Recognized for our contribution to sustainable water management solutions."
    }
  ];

  // Team data
  const team = [
    {
      name: "Dr. Alex Rivera",
      role: "Founder & CEO",
      bio: "Ph.D. in Water Resources Engineering with over 20 years of experience in the field.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Environmental Engineer",
      bio: "Specializes in water quality monitoring and treatment system design.",
      image: "https://images.unsplash.com/photo-1526450078254-7aec4ae92220?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400"
    },
    {
      name: "Michael Patel",
      role: "Agricultural Consultant",
      bio: "Expert in irrigation systems and water conservation techniques for agriculture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400"
    },
    {
      name: "Elena Rodriguez",
      role: "Solar Systems Engineer",
      bio: "Designs and implements solar-powered water pumping solutions worldwide.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <HeroSection 
        title="About ENATECH"
        subtitle="Pioneering sustainable water solutions through innovation and expertise"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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
                  src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed" 
                  alt="ENATECH company history" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <div className="space-y-6">
                <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 leading-tight">
                  A Vision for Sustainable Water Management
                </h2>
                <p className="text-gray-600">
                  Founded in 2008, ENATECH began with a mission to transform how communities and businesses 
                  approach water resource management. Our founder, Dr. Alex Rivera, recognized the growing 
                  challenges of water scarcity and quality issues worldwide.
                </p>
                <p className="text-gray-600">
                  Starting with just a small team of dedicated engineers, we've grown into a comprehensive 
                  water resource engineering firm with expertise spanning water quality testing, solar-powered 
                  pumping systems, agricultural water management, and more.
                </p>
                <p className="text-gray-600">
                  Today, ENATECH is proud to serve clients across multiple sectors, from small rural communities 
                  to large agricultural operations and government agencies. Our commitment to innovation, 
                  sustainability, and excellence remains at the heart of everything we do.
                </p>
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
                Mission & Values
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-gray-600">
                At ENATECH, our mission and values guide every decision we make and every project we undertake.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To provide innovative, sustainable, and accessible water resource solutions that improve lives, 
                  protect the environment, and foster sustainable development. We strive to be a catalyst for positive 
                  change in how water resources are managed globally.
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
                      <p className="text-gray-600">Constantly seeking new and better ways to address water challenges.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Sustainability</h4>
                      <p className="text-gray-600">Prioritizing environmental protection in all our solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Excellence</h4>
                      <p className="text-gray-600">Maintaining the highest standards in all aspects of our work.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full p-1 bg-enatech-green-light text-enatech-green-dark mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Community</h4>
                      <p className="text-gray-600">Building relationships and supporting the communities we serve.</p>
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
                ENATECH Through the Years
              </h2>
              <p className="text-gray-600">
                Explore our growth and major milestones since our founding.
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
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Meet the Experts Behind ENATECH
              </h2>
              <p className="text-gray-600">
                Our team combines decades of experience in water resources engineering with a passion 
                for sustainable solutions.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedElement key={index} delay={100 + (index * 100)}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-enatech-blue font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
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
                Passionate About Water Resources?
              </h2>
              <p className="text-gray-600 mb-8">
                We're always looking for talented individuals to join our team. If you're passionate about 
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
