import { useParallax } from "react-scroll-parallax";

const Section_1 = () => {
  const contentParallax = useParallax({
    speed: 10,
    easing: "easeInOut",
    translateY: [0, 10],
  });

  return (
    //ref={contentParallax.ref}
    <div
      ref={contentParallax.ref}
      className="min-h-screen bg-gray-200 text-center text-lg "
    >
      <div>
        Et amet consetetur erat consetetur accusam sed sed stet. Diam dolor
        voluptua magna vero gubergren sit diam stet, amet sit aliquyam sed
        justo. Ut dolores sed erat gubergren. Sadipscing justo labore kasd sea.
        Accusam accusam erat duo lorem et et, vero dolor at no sadipscing et
        lorem. Magna clita erat.
      </div>
      <div>
        Et amet consetetur erat consetetur accusam sed sed stet. Diam dolor
        voluptua magna vero gubergren sit diam stet, amet sit aliquyam sed
        justo. Ut dolores sed erat gubergren. Sadipscing justo labore kasd sea.
        Accusam accusam erat duo lorem et et, vero dolor at no sadipscing et
        lorem. Magna clita erat.
      </div>
      <div>
        Et amet consetetur erat consetetur accusam sed sed stet. Diam dolor
        voluptua magna vero gubergren sit diam stet, amet sit aliquyam sed
        justo. Ut dolores sed erat gubergren. Sadipscing justo labore kasd sea.
        Accusam accusam erat duo lorem et et, vero dolor at no sadipscing et
        lorem. Magna clita erat.
      </div>
      <div>
        Et amet consetetur erat consetetur accusam sed sed stet. Diam dolor
        voluptua magna vero gubergren sit diam stet, amet sit aliquyam sed
        justo. Ut dolores sed erat gubergren. Sadipscing justo labore kasd sea.
        Accusam accusam erat duo lorem et et, vero dolor at no sadipscing et
        lorem. Magna clita erat.
      </div>
      <div>
        Et amet consetetur erat consetetur accusam sed sed stet. Diam dolor
        voluptua magna vero gubergren sit diam stet, amet sit aliquyam sed
        justo. Ut dolores sed erat gubergren. Sadipscing justo labore kasd sea.
        Accusam accusam erat duo lorem et et, vero dolor at no sadipscing et
        lorem. Magna clita erat.
      </div>
    </div>
  );
};

export default Section_1;
