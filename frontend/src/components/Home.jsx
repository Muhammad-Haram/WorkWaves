import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import CategoryCarousel from "./CategoryCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
