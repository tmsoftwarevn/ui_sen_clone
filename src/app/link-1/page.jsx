"use client";
import Hero from "@/ui/hero/Hero";
import Header from "@/components/layout user/header/Header";
import Footer from "@/components/layout user/footer/Footer";
import ImageCss from "@/ui/image/ImageCss";

const Link1 = () => {
  return (
    <>
      <Header />

      <div className="bg-yellow-500 h-screen w-full ">
        <div className="grid grid-cols-2 gap-10 overflow-hidden">
          <div className="col-span-1">
            <Hero />
          </div>

          <div className="col-span-1">
            <ImageCss />
          </div>
        </div>

        <div className="h-screen"></div>
      </div>

      <Footer />
    </>
  );
};

export default Link1;
