
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  alignment?: 'left' | 'center' | 'right';
  overlayOpacity?: 'light' | 'medium' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText = 'Learn More',
  ctaLink = '/services',
  backgroundImage = 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
  alignment = 'center',
  overlayOpacity = 'medium',
  size = 'medium',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);

    // Animate entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [backgroundImage]);

  // Dynamic classes
  const overlayClasses = {
    light: 'bg-black/20',
    medium: 'bg-black/40',
    dark: 'bg-black/60'
  };

  const heightClasses = {
    small: 'min-h-[60vh]',
    medium: 'min-h-[80vh]',
    large: 'min-h-screen'
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with blur loading effect */}
      <div 
        className={cn(
          "absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out",
          !imageLoaded && "blur-xl scale-105"
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className={cn(
        "absolute inset-0", 
        overlayClasses[overlayOpacity]
      )} />
      
      {/* Content */}
      <div className={cn(
        "relative w-full flex flex-col justify-center px-4 sm:px-6 transition-all duration-700 ease-out",
        heightClasses[size],
        alignmentClasses[alignment],
        !isLoaded && "opacity-0 translate-y-10"
      )}>
        <div className="container-custom">
          <div className={cn(
            "max-w-3xl space-y-6",
            alignment === 'center' && "mx-auto",
            alignment === 'right' && "ml-auto"
          )}>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance",
              isLoaded && "animate-fade-up"
            )}>
              {title}
            </h1>
            
            <p className={cn(
              "text-xl text-white/90 max-w-xl text-balance",
              isLoaded && "animate-fade-up",
              alignment === 'center' && "mx-auto",
              alignment === 'right' && "ml-auto"
            )} style={{ animationDelay: '100ms' }}>
              {subtitle}
            </p>
            
            {ctaText && (
              <div className={cn(
                "pt-4",
                isLoaded && "animate-fade-up",
                alignment === 'center' && "text-center"
              )} style={{ animationDelay: '200ms' }}>
                <Button 
                  asChild
                  size="lg" 
                  className="bg-enatech-blue hover:bg-enatech-blue-dark text-white rounded-md group"
                >
                  <Link to={ctaLink}>
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
