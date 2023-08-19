import React from "react";
import HomeBenefits from "../components/HomeBenefits";
import HomeDemo from "../components/HomeDemo";
import HomeFaq from "../components/HomeFaq";
import HomeFeatures from "../components/HomeFeatures";
import HomeHero from "../components/HomeHero";
import HomePricing from "../components/HomePricing";
import HomeTestimonials from "../components/HomeTestimonals";
import "../../../../styles/index.scss";

export default function Home() {
  return (
      <div className="home-page">
        <HomeHero />
        <HomeDemo />
        <HomeFeatures />
        <HomeBenefits />
        {/* --- hide testimonials for now --- */}
        {/* <HomeTestimonials /> */}
        <HomePricing />
        <HomeFaq />
      </div>
  );
}
