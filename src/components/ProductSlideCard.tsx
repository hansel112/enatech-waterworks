
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProductSlideCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

const ProductSlideCard: React.FC<ProductSlideCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  className,
}) => {
  return (
    <div className={cn("h-full flex flex-col rounded-xl overflow-hidden shadow-md bg-white", className)}>
      <div className="relative h-48 md:h-64">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow p-5 space-y-4">
        <h3 className="text-xl font-serif font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        <Button asChild className="mt-auto w-full bg-enatech-blue hover:bg-enatech-blue-dark group">
          <Link to={link}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductSlideCard;
