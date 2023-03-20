import React from "react";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/components/SectionPromo1";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderLargeProduct from "@/components/SectionSliderLargeProduct";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import DiscoverMoreSlider from "@/components/DiscoverMoreSlider";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo2 from "@/components/SectionPromo2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import SectionPromo3 from "@/components/SectionPromo3";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import Heading from "@/components/Heading/Heading";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import { PRODUCTS, SPORT_PRODUCTS } from "@/data/data";
import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";
import SectionMagazine5 from "@/app/blog/SectionMagazine5";

// Client Components:
// const SectionHero2 = dynamic(() => import('@/components/SectionHero/SectionHero2'));
// const DiscoverMoreSlider = dynamic(() => import('@/components/DiscoverMoreSlider'));
// const SectionSliderProductCard = dynamic(() => import('@/components/SectionSliderProductCard'));
// const SectionHowItWork = dynamic(() => import('@/components/SectionHowItWork/SectionHowItWork'));
// const SectionPromo1 = dynamic(() => import('@/components/SectionPromo1'));
// const BackgroundSection = dynamic(() => import('@/components/BackgroundSection/BackgroundSection'));
// const SectionGridMoreExplore = dynamic(() => import('@/components/SectionGridMoreExplore/SectionGridMoreExplore'));
// const SectionPromo2 = dynamic(() => import('@/components/SectionPromo2'));
// const SectionSliderLargeProduct = dynamic(() => import('@/components/SectionSliderLargeProduct'));
// const SectionSliderCategories = dynamic(() => import('@/components/SectionSliderCategories/SectionSliderCategories'));
// const SectionPromo3 = dynamic(() => import('@/components/SectionPromo3'));
// const SectionGridFeatureItems = dynamic(() => import('@/components/SectionGridFeatureItems'));
// const Heading = dynamic(() => import('@/components/Heading/Heading'));
// const SectionClientSay = dynamic(() => import('@/components/SectionClientSay/SectionClientSay'));

// import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div>
      <div className="nc-PageHome relative overflow-hidden">
        <SectionHero2 />
        <div className="mt-24 lg:mt-32">
          <DiscoverMoreSlider />
        </div>
        <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
          <SectionSliderProductCard
            data={[
              PRODUCTS[4],
              SPORT_PRODUCTS[5],
              PRODUCTS[7],
              SPORT_PRODUCTS[1],
              PRODUCTS[6],
            ]}
          />
          <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
            <SectionHowItWork />
          </div>
          <SectionPromo1 />
          <div className="relative py-24 lg:py-32">
            <BackgroundSection />
            <SectionGridMoreExplore />
          </div>
          <SectionSliderProductCard
            heading="Best Sellers"
            subHeading="Best selling of the month"
          />
          <SectionPromo2 />

          <SectionSliderLargeProduct cardStyle="style2" />

          <SectionSliderCategories />

          <SectionPromo3 />

          <SectionGridFeatureItems />

          <div className="relative py-24 lg:py-32">
            <BackgroundSection />
            <div>
              <Heading rightDescText="From the Ciseco blog">
                The latest news
              </Heading>
              <SectionMagazine5 />
              <div className="flex mt-16 pb-16 justify-center">
                <ButtonSecondary>Show all blog articles</ButtonSecondary>
              </div>
            </div>
          </div>
          <SectionClientSay />
        </div>
      </div>
    </div>
  )
}
