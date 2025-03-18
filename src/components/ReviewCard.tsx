
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  imageSrc: string;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role,
  content,
  rating,
  imageSrc,
  className,
}) => {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-md flex flex-col h-full", className)}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={imageSrc} 
            alt={`${name}`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic flex-grow">{content}</p>
    </div>
  );
};

export default ReviewCard;
