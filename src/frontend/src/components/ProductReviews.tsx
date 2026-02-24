import { Star, Users } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Amazing product quality! The earbuds arrived within 2 days and the sound quality is exceptional. Worth every rupee. Highly recommend Zayora!',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    rating: 5,
    text: 'Best purchase I made this year. The delivery was super fast and the product exceeded my expectations. Great customer service too!',
  },
  {
    id: 3,
    name: 'Anjali Patel',
    rating: 4,
    text: 'Very satisfied with my order. The smartwatch works perfectly and the battery life is impressive. Delivery was on time as promised.',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    rating: 5,
    text: 'Outstanding experience from start to finish. The product quality is top-notch and the Cash on Delivery option made it so convenient. Will definitely order again!',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    rating: 5,
    text: 'Absolutely love my new earbuds! Crystal clear sound, comfortable fit, and the charging case is so handy. Zayora has won a loyal customer!',
  },
];

export default function ProductReviews() {
  return (
    <section className="bg-gradient-to-b from-background to-orange-50/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header with badge */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-white shadow-lg">
              <Users className="h-5 w-5" />
              <span className="text-lg font-bold">1000+ Happy Customers</span>
            </div>
            
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              What Our Customers Say
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Join thousands of satisfied customers who trust Zayora for premium tech products
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="group rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:border-orange-300"
              >
                {/* Star Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < review.rating
                          ? 'fill-orange-500 text-orange-500'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  "{review.text}"
                </p>

                {/* Reviewer Name */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All reviews are from verified customers who purchased from Zayora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
