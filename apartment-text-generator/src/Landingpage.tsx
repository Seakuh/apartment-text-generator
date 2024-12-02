import React, { useState } from "react";
import CtaComponent from "./CtaComponent";
import EmailSection from "./EmailSection";
import FeaturesSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PricingSection from "./PricingSection";
import Statistics from "./Statistic";

const LandingPage: React.FC = () => {
  // Zentraler Zustand für den Prompt
  const [prompt, setPrompt] = useState("");

  return (
    <div className="landing-page">
      {/* Übergabe des setPrompt-Handlers an HeroSection */}
      <HeroSection setPrompt={setPrompt} />
      {/* Übergabe des Prompts an die EmailSection */}
      <EmailSection prompt={prompt} />
      <CtaComponent />
      <HowItWorks />
      <Statistics />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
