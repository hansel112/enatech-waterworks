
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

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
    <Card className={cn("h-full flex flex-col overflow-hidden", className)}>
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-serif font-semibold text-gray-800">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter>
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
