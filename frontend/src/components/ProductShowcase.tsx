import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useQueries';
import { Loader2 } from 'lucide-react';
import type { Product } from '../backend';

interface ProductShowcaseProps {
  onCheckout: (product: Product) => void;
}

export default function ProductShowcase({ onCheckout }: ProductShowcaseProps) {
  const { data: products, isLoading, error } = useProducts();

  return (
    <section id="products" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Our Fashion Collection
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our curated range of premium clothing — stylish, comfortable, and made to impress
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
          </div>
        )}

        {error && (
          <div className="mx-auto max-w-md rounded-lg border-2 border-destructive bg-destructive/10 p-6 text-center">
            <p className="text-destructive">Failed to load products. Please try again later.</p>
          </div>
        )}

        {products && products.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {products.map((product) => (
              <ProductCard key={product.id.toString()} product={product} onCheckout={onCheckout} />
            ))}
          </div>
        )}

        {products && products.length === 0 && !isLoading && (
          <div className="mx-auto max-w-md rounded-lg border-2 border-muted bg-muted/10 p-6 text-center">
            <p className="text-muted-foreground">No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
