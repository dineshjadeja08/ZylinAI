import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValue from './components/CoreValue';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Differentiators from './components/Differentiators';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <CoreValue />
        <HowItWorks />
        <Features />
        <UseCases />
        <Differentiators />
        <Pricing />
        <Testimonials />
        <FAQ />
        
        {/* Waitlist / Final CTA Section */}
        <WaitlistCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;