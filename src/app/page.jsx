"use client";

import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";

import React from "react";

import GlobalScroll from "@/components/layout user/scrollbar/GlobalScroll";
import ParallaxParent from "@/components/ParallaxParent/ParallaxParent";
import SlideHome from "@/components/carousel/SlideHome";
import Section_1 from "@/components/section/section_1/Section_1";

const Home = () => {
  return (
    <div className="">
      <GlobalScroll>
        {/* <div className="relative h-screen ">
          <div className="relative z-50">
            <Header />
          </div>

          <SlideHome />
        </div> */}

        <ParallaxParent />

        {/* <Section_1 /> */}

        <div className="py-5 bg-red-500"> tesstt</div>

        <Footer />
      </GlobalScroll>
    </div>
  );
};

export default Home;
