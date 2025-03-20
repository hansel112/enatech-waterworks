
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';

interface ProductSlideCardProps {
  title: string;
  description: string; // Keeping this in the interface for compatibility
  imageSrc: string;
  link: string;
  className?: string;
}

const ProductSlideCard: React.FC<ProductSlideCardProps> = ({
  title,
  description, // Keeping this in the parameters for compatibility
  imageSrc,
  link,
  className,
}) => {
  return (
    <Card className={cn("h-full flex flex-col overflow-hidden", className)}>
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-xl font-serif font-semibold text-white p-4">{title}</h3>
        </div>
      </div>
      <CardFooter className="p-3">
        <Button asChild className="w-full bg-enatech-blue hover:bg-enatech-blue-dark group">
          <Link to={link}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductSlideCard;
