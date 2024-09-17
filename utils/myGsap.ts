import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const myScrollTo = (id: string | number) => {
  gsap.to(window, {
    duration: 2.5,
    ease: "expo.inOut",
    scrollTo: {
      y: id,
      offsetY: 50,
    },
  });
};

const tl = gsap.timeline();

function menuAnimation() {
  tl.to("#menuToggleButton", {
    x: "+=100vw",
    duration: 0.3,
    ease: "expo.inOut",
  }).to("#menuToggleButton", {
    autoAlpha: 0,
    duration: 0
  });

  tl.to("#navMenu", {
    autoAlpha: 1,
    duration: 0,
    // ease: 'expo.inOut'
  }, '<').to("#navMenu", {
    x: 0,
    duration: 1,
    ease: "expo.inOut",
  }, '<');

  tl.to(
    ["#ulRoutes li *", "#navMenu p *", "#ulSocials li *"],
    {
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "expo.inOut",
    },
    ">"
  );
}

export const toggleMenuAnimation = (menuState: boolean) => {
  menuAnimation();

  if (!menuState) {
    tl.play();
  } else {
    tl.reverse();
  }
};
