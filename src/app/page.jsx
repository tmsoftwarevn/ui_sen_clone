"use client";

import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ParallaxProvider to avoid SSR issues
const ParallaxProvider = dynamic(
  () => import("react-scroll-parallax").then((mod) => mod.ParallaxProvider),
  { ssr: false }
);

const SlideHome = dynamic(() => import("@/components/carousel/SlideHome"), {
  ssr: false,
});

const Section_1 = dynamic(
  () => import("@/components/section/section_1/Section_1"),
  { ssr: false }
);

import GlobalScroll from "@/components/layout user/scrollbar/GlobalScroll";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* <ParallaxProvider>
        <div className="relative h-screen overflow-hidden">
          <div className="relative z-50">
            <Header />
          </div>
          <SlideHome />
        </div>

        <Section_1 />

        <div className="py-5 bg-red-500"> tesstt</div>

        <Footer />
      </ParallaxProvider> */}
      <GlobalScroll>
        <div className="relative h-screen overflow-hidden">
          <div className="relative z-50">
            <Header />
          </div>
          <SlideHome />
        </div>

        <Section_1 />

        <div className="py-5 bg-red-500"> tesstt</div>

        <Footer />
      </GlobalScroll>
    </div>
  );
};

export default Home;
