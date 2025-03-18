
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'glass';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link = '/services',
  className,
  variant = 'default',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: "bg-white border border-gray-200 shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-gray-200 hover:border-enatech-blue-dark",
    glass: "glass-card backdrop-blur-md bg-white/80 border border-white/20 shadow-lg hover:shadow-xl"
  };

  return (
    <div 
      className={cn(
        "rounded-xl p-6 transition-all duration-300 group",
        variants[variant],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="mb-4 text-enatech-blue-dark">
        <div className="w-14 h-14 rounded-lg bg-enatech-blue-light flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3 group-hover:text-enatech-blue-dark transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-5 line-clamp-3">
        {description}
      </p>
      
      {/* Link */}
      <Link 
        to={link} 
        className="inline-flex items-center text-enatech-blue font-medium group-hover:text-enatech-blue-dark"
      >
        Learn more
        <ArrowRight 
          className={cn(
            "ml-2 h-4 w-4 transition-transform duration-300",
            isHovered && "translate-x-1"
          )} 
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
