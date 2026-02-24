import { useState } from 'react';
import AnnouncementBanner from './components/AnnouncementBanner';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import ProductShowcase from './components/ProductShowcase';
import ProductReviews from './components/ProductReviews';
import PartnerLogos from './components/PartnerLogos';
import RestaurantSection from './components/RestaurantSection';
import ComingSoonSection from './components/ComingSoonSection';
import ContactFooter from './components/ContactFooter';
import CheckoutForm from './components/CheckoutForm';
import OrderConfirmation from './components/OrderConfirmation';
import type { Product } from './backend';

type View = 'home' | 'checkout' | 'confirmation';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderId, setOrderId] = useState<bigint | null>(null);

  const handleCheckout = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderPlaced = (newOrderId: bigint) => {
    setOrderId(newOrderId);
    setCurrentView('confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    setOrderId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {currentView === 'home' && (
        <>
          <AnnouncementBanner />
          <HeroSection />
          <VideoSection />
          <ProductShowcase onCheckout={handleCheckout} />
          <ProductReviews />
          <PartnerLogos />
          <RestaurantSection />
          <ComingSoonSection />
          <ContactFooter />
        </>
      )}

      {currentView === 'checkout' && selectedProduct && (
        <CheckoutForm
          product={selectedProduct}
          onOrderPlaced={handleOrderPlaced}
          onCancel={handleBackToHome}
        />
      )}

      {currentView === 'confirmation' && orderId && (
        <OrderConfirmation orderId={orderId} onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}

export default App;
