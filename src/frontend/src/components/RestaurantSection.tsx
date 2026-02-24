import { Store } from 'lucide-react';

export default function RestaurantSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-blue-500 to-orange-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
            <Store className="h-5 w-5" />
            <span className="font-medium">Our Restaurant</span>
          </div>
          
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            ALL IS WELL .KANPUR
          </h2>
          
          <p className="text-xl text-white/90">
            Experience authentic flavors at our company-owned restaurant in Kanpur
          </p>
        </div>
      </div>
    </section>
  );
}
