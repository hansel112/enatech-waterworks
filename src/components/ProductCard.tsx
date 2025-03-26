
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductFeature {
  name: string;
  value?: string;
}

export interface ProductCardProps {
  name: string;
  image: string;
  shortDescription?: string;
  price?: string;
  manufacturer?: string;
  partNumber?: string;
  details?: string[];
  detects?: string[];
  features?: string[];
  productContents?: string[];
  testQuantity?: string;
  parameters?: string;
  isExpanded?: boolean;
  onToggleExpand: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  shortDescription,
  price,
  manufacturer,
  partNumber,
  details,
  detects,
  features,
  productContents,
  testQuantity,
  parameters,
  isExpanded,
  onToggleExpand,
}) => {
  const handleToggleExpand = () => {
    onToggleExpand(name);
  };

  const renderList = (items: string[] | undefined, title: string) => {
    if (!items || items.length === 0) return null;
    
    return (
      <div className="mt-4">
        <h4 className="font-medium text-gray-800 mb-2">{title}:</h4>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-enatech-green mr-2 mt-1 h-4 w-4 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300",
        isExpanded ? "col-span-2" : "col-span-1"
      )}
    >
      <div className="p-6">
        <div className={cn(
          "grid gap-6",
          isExpanded ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
        )}>
          <div>
            <div className="bg-gray-50 rounded-lg p-4 flex justify-center items-center h-40 md:h-48 mb-4">
              <img 
                src={image} 
                alt={name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
            {shortDescription && <p className="text-gray-600 mb-3 line-clamp-2">{shortDescription}</p>}
            {(manufacturer || partNumber || price) && (
              <div className="text-sm text-gray-600 mb-4 space-y-1">
                {price && <p><span className="font-medium">Price:</span> {price}</p>}
                {manufacturer && <p><span className="font-medium">By:</span> {manufacturer}</p>}
                {partNumber && <p><span className="font-medium">Part No:</span> {partNumber}</p>}
              </div>
            )}
          </div>

          {isExpanded && (
            <div className="space-y-4">
              {details && details.map((detail, index) => (
                <p key={index} className="text-gray-600">{detail}</p>
              ))}
              {renderList(detects, 'Detects')}
              {renderList(features, 'Features')}
              {renderList(productContents, 'Product Contents')}
              {testQuantity && (
                <p className="text-sm text-gray-600"><span className="font-medium">Test Quantity:</span> {testQuantity}</p>
              )}
              {parameters && (
                <p className="text-sm text-gray-600"><span className="font-medium">Parameters:</span> {parameters}</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-enatech-blue border-enatech-blue hover:bg-enatech-blue-light"
            onClick={handleToggleExpand}
          >
            {isExpanded ? (
              <>See Less <ChevronUp className="ml-1 h-4 w-4" /></>
            ) : (
              <>See More <ChevronDown className="ml-1 h-4 w-4" /></>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
