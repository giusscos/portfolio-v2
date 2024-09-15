import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const myScrollTo = (id: string | number) => {
  gsap.to(window, {
    duration: 2.5,
    ease: "expo.inOut",
    scrollTo: {
      y: id,
      // autoKill: true,
    },
  });
};

export const myTo = (id: string | string[]) => {
  gsap.to(id, {
    duration: 3,
    ease: "expo.inOut",
    autoAlpha: 1,
    y: 0,
    stagger: {
      each: 0.2,
    },
  });
};
