import { Check, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { Product } from '../backend';

interface ProductCardProps {
  product: Product;
  onCheckout: (product: Product) => void;
}

export default function ProductCard({ product, onCheckout }: ProductCardProps) {
  const mrpInRupees = Number(product.mrp);

  return (
    <div className="group overflow-hidden rounded-2xl border-2 border-orange-200 bg-card shadow-lg transition-all hover:border-orange-400 hover:shadow-2xl dark:border-orange-900/30 dark:hover:border-orange-600">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20">
        <img
          src={product.imagePath}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {!product.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <Badge variant="secondary" className="text-lg font-semibold">
              Coming Soon
            </Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">MRP</div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              ₹{mrpInRupees}
            </div>
          </div>
        </div>

        <p className="mb-4 text-muted-foreground">{product.description}</p>

        <div className="mb-6 space-y-2">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                <Check className="h-3 w-3 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={() => onCheckout(product)}
          disabled={!product.available}
          className="w-full bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
          size="lg"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Cash on Delivery
        </Button>
      </div>
    </div>
  );
}
