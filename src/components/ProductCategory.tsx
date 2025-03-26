
import React, { useState } from 'react';
import ProductCard, { ProductCardProps } from './ProductCard';

export interface ProductCategoryProps {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Omit<ProductCardProps, 'isExpanded' | 'onToggleExpand'>[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  id,
  title,
  description,
  image,
  products
}) => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const handleToggleExpand = (productName: string) => {
    setExpandedProduct(expandedProduct === productName ? null : productName);
  };

  return (
    <div id={id} className="scroll-mt-24 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center mb-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-enatech-blue">{description}</p>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            {...product}
            isExpanded={expandedProduct === product.name}
            onToggleExpand={handleToggleExpand}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
