import ProductCard from './ProductCard';

export default function ProductShowcase() {
  const products = [
    {
      name: 'Bluetooth Earbuds',
      description: 'Premium wireless earbuds with crystal-clear sound, active noise cancellation, and all-day battery life. Perfect for music lovers and professionals.',
      image: '/assets/generated/earbuds-product.dim_800x800.png',
      features: ['Active Noise Cancellation', 'Up to 24H Battery', 'Premium Sound Quality']
    },
    {
      name: 'Smart Watch',
      description: 'Advanced smartwatch with health tracking, fitness monitoring, and seamless connectivity. Stay connected and healthy with style.',
      image: '/assets/generated/smartwatch-product.dim_800x800.png',
      features: ['Health Monitoring', 'Fitness Tracking', 'Smart Notifications']
    }
  ];

  return (
    <section id="products" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Our Products
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our range of cutting-edge tech products designed to enhance your lifestyle
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
