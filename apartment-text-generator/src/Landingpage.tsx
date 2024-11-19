import React from "react";
import FeaturesSection from "./FeatureSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PricingSection from "./PricingSection";
import Statistics from "./Statistic";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <Statistics />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
