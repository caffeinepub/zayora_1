import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import PartnerLogos from './components/PartnerLogos';
import ComingSoonSection from './components/ComingSoonSection';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductShowcase />
      <PartnerLogos />
      <ComingSoonSection />
      <ContactFooter />
    </div>
  );
}

export default App;
