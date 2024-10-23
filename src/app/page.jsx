"use client";

import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";
// import SlideHome from "@/components/carousel/SlideHome";

// export default function Home() {
//   return (
//     <>
//       <Header />

//       <SlideHome />

//       <div className="py-10">
//         Et amet consetetur erat consetetur accusam sed sed stet. Diam dolor
//         voluptua magna vero gubergren sit diam stet, amet sit aliquyam sed
//         justo. Ut dolores sed erat gubergren. Sadipscing justo labore kasd sea.
//         Accusam accusam erat duo lorem et et, vero dolor at no sadipscing et
//         lorem. Magna clita erat.
//       </div>

//       <div className="mb-10"></div>

//       <Footer />
//     </>
//   );
// }
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

import SnowAnimation from "@/components/animation/SnowAnimation";

const Home = () => {
  return (
    <div>
      <ParallaxProvider>
        <div className="relative h-screen overflow-hidden">
          <div className="relative z-50">
            <Header />
          </div>
          <SlideHome />
        </div>

        <Section_1 />

        <div className="mt-20"></div>
      </ParallaxProvider>

      
      {/* <SnowAnimation /> */}

      <Footer />
    </div>
  );
};

export default Home;

{
  /* <ParallaxProvider>
          <SlideHome />

          <Section_1 />
        </ParallaxProvider> */
}
