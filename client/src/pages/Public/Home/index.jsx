import React from "react";
import PageHelmet from "../../../common/components/Shared/PageHelmet";
import HomeBannersSection from "./sections/HomeBannersSection";
import HomeCarouselSection from "./sections/HomeCarouselSection";
import HomeCategoriesSection from "./sections/HomeCategoriesSection";
import GoldSilverPriceSection from "./sections/GoldSilverPriceSection";

const Home = () => {
  return (
    <>
      <PageHelmet title={"Home"} />
      <HomeBannersSection />
      <GoldSilverPriceSection /> {/* Moved below the banner */}
      <HomeCategoriesSection />
      <HomeCarouselSection />
    </>
  );
};

export default Home;
