import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import PatientPortal from '../components/PatientPortal';
import Pricing from '../components/Pricing';
import TargetAudience from '../components/TargetAudience';
import FAQ from '../components/FAQ';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <SocialProof />
      <Features />
      <PatientPortal />
      <Pricing onOpenModal={openModal} />
      <TargetAudience />
      <FAQ />
      <CTAFinal onOpenModal={openModal} />
      <Footer />
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
