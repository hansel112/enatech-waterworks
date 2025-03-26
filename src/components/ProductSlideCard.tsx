
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductSlideCardProps {
  title: string;
  description?: string; // Making this optional since we don't use it
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
    <Card className={cn("h-full overflow-hidden", className)}>
      <div className="relative h-64 md:h-72 overflow-hidden bg-white flex items-center justify-center p-4">
        <img 
          src={imageSrc} 
          alt={title} 
          className="max-h-full max-w-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-lg font-serif font-semibold text-white mb-3 line-clamp-2">{title}</h3>
          <Button 
            asChild 
            className="bg-enatech-blue hover:bg-enatech-blue-dark group w-auto text-xs py-1 h-7 px-2"
          >
            <Link to={link}>
              View Details
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductSlideCard;
