import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import PatientPortal from '../components/PatientPortal';
import Pricing from '../components/Pricing';
import TargetAudience from '../components/TargetAudience';
import FAQ from '../components/FAQ';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <ProductShowcase />
      <PatientPortal />
      <Pricing />
      <TargetAudience />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
}
