import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "/s1.gif",
    caption: "Slide 1",
  },
  {
    url: "/s2.jpg",
    caption: "Slide 2",
  },
];

const ParallaxParent = () => {
  return (
    <ParallaxProvider>
      <Slide arrows={true} autoplay={false} indicators={false}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <ParallaxBanner
              layers={[{ image: slideImage.url, speed: -15 }]}
              className="aspect-[2/1]"
            />
          </div>
        ))}
      </Slide>
    </ParallaxProvider>
  );
};

export default ParallaxParent;
