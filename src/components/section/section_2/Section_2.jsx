import React from "react";
import "./section_2.scss";
import ListImage from "./ListImage";
import { useParallax } from "react-scroll-parallax";

export default function RhombusLayout() {
  const parallax = useParallax({
    speed: -20,
  });

  return (
    <div className="bg-blue-600 z-0 py-10 relative overflow-hidden">
      <div
        ref={parallax.ref}
        className="absolute left-0 top-0 z-[-1] opacity-50 bg-cover bg-no-repeat"
        style={{
          width: "30%", // Sets the width to 30%
          height: "100%", // Sets the height to 100%
          backgroundImage: "url('/bg-2.jpg')",
          backgroundPosition: "center", // Aligns the image to the top left
          backgroundSize: "cover", // Ensures the image covers the background area
        }}
      ></div>
      <div className="container">
        <div className="grid grid-cols-4 gap-3 items-center">
          <div className="col-span-1">ttt</div>
          <div className="col-span-2">
            <ListImage />
          </div>
          <div className="col-span-1">
            <div className="flex items-center space-x-4 py-2">
              <div className="border-l-4 border-yellow-500 pl-4 text-white">
                SEN CONSTRUCTION tập trung lĩnh vực đầu tư, thiết kế và xây dựng
                công trình là một mắt xích quan trọng trong hệ sinh thái của Tập
                đoàn SEN GROUP.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
