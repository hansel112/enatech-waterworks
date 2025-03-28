import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
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

  // Contact information
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: ["Kampala, Uganda"],
      link: "https://maps.app.goo.gl/oDh3jT3YdW8eEKkn6?g_st=aw"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: ["+256 706 179 98", "+256 785 778 171"]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: ["enatechcoltd@gmail.com"]
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 5PM", "Saturday: 10AM - 2PM"]
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section - Updated background image */}
      <HeroSection 
        title="Contact Us"
        subtitle="Get in touch with our team for consultations, quotes, or inquiries"
        backgroundImage="/lovable-uploads/IMG-20250326-WA0009.jpg"
        size="small"
        alignment="left"
      />
      
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
            {/* Contact Information */}
            <AnimatedElement delay={100}>
              <div className="space-y-8">
                <div>
                  <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                    Get In Touch
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                    We're Here to Help
                  </h2>
                  <p className="text-gray-600">
                    Have questions about our services or need a consultation? Our team is ready to assist you with any inquiries about water quality testing, solar pumping systems, or agricultural advisory services.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="p-6 bg-enatech-gray-light rounded-xl border border-gray-100">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-enatech-blue-light text-enatech-blue-dark mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">
                          {item.link && i === 0 ? (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-enatech-blue-dark"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-enatech-blue/5 rounded-xl border border-enatech-blue/10">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-enatech-blue-light flex items-center justify-center text-enatech-blue-dark hover:bg-enatech-blue hover:text-white transition-colors" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-enatech-blue-light flex items-center justify-center text-enatech-blue-dark hover:bg-enatech-blue hover:text-white transition-colors" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-enatech-blue-light flex items-center justify-center text-enatech-blue-dark hover:bg-enatech-blue hover:text-white transition-colors" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-enatech-blue-light flex items-center justify-center text-enatech-blue-dark hover:bg-enatech-blue hover:text-white transition-colors" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Contact Form */}
            <AnimatedElement delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-enatech-gray-light">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600">
                We're conveniently located in Kampala, Uganda. Feel free to visit us during business hours.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <div className="bg-white p-2 rounded-xl shadow-sm overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.7646339651864!2d32.5875121!3d0.3112077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTgnNDAuNCJOIDMywrAzNScxNS4wIkU!5e0!3m2!1sen!2sus!4v1715963608985!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ENATECH Office Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      {/* FAQ Section - Modified to only include first and last FAQs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-enatech-blue font-medium px-4 py-1.5 bg-enatech-blue-light rounded-full text-sm">
                FAQ
              </span>
              <h2 className="text-3xl font-serif font-semibold text-gray-800 mt-4 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our services and processes.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What areas do you service?",
                  answer: "We provide our water quality services nationwide, with a particular focus on the Western and Central regions. For international projects, please contact us directly to discuss your specific needs."
                },
                {
                  question: "How can I get a quotation for your services?",
                  answer: "You can request a quote by filling out our contact form, calling our office, or sending us an email. For most services, we'll need some basic information about your project to provide an accurate estimate."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-enatech-gray-light rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>
    </main>
  );
};

export default Contact;
