import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const myScrollTo = (id: string | number) => {
  gsap.to(window, {
    duration: 2.5,
    ease: "expo.inOut",
    scrollTo: {
      y: id,
    },
  });
};
