import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-blue-500 to-orange-700 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Premium Fashion & Clothing Brand</span>
          </div>
          
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
            ZAYORA
          </h1>
          
          <p className="mb-2 text-xl font-medium text-orange-100 md:text-2xl">
            Founded by Yash Jaiswal
          </p>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-orange-50 md:text-xl">
            Elevate your style with our premium clothing collection — crafted for comfort, designed for confidence
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="rounded-full bg-white px-8 py-3 font-semibold text-orange-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Shop Collection
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
