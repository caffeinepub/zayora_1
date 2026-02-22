import { Check } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
}

export default function ProductCard({ name, description, image, features }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border-2 border-orange-200 bg-card shadow-lg transition-all hover:border-orange-400 hover:shadow-2xl dark:border-orange-900/30 dark:hover:border-orange-600">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-foreground">{name}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                <Check className="h-3 w-3 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
