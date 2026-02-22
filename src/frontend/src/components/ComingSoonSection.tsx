import { Clock } from 'lucide-react';

export default function ComingSoonSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Coming Soon</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Available on Blinkit Soon!
          </h2>
          
          <p className="mb-8 text-lg text-orange-50">
            Get ready for ultra-fast delivery of Zayora products. We're partnering with Blinkit to bring you premium tech at your doorstep in minutes.
          </p>
          
          <div className="flex justify-center">
            <div className="rounded-2xl bg-white p-6 shadow-2xl">
              <img
                src="/assets/generated/blinkit-logo.dim_200x200.png"
                alt="Blinkit Logo"
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
