"use client";

import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";
import Hero from "@/ui/hero/Hero";
import Gif from "@/ui/hero/Gif";
import ListBlog from "@/ui/blog/ListBlog";
import LoadingUi from "@/ui/loadingUi/LoadingUi";

const Home = () => {
  return (
    <div className="">

    <LoadingUi />

      <Header />

      <Hero />
      {/* <Gif /> */}

      <ListBlog />
      <Footer />
    </div>
  );
};

export default Home;

