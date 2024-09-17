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

const tlMenu = gsap.timeline();

function menuAnimation() {
  tlMenu.to("#menuToggleButton", {
    x: "+=100vw",
    duration: 0.3,
    ease: "expo.inOut",
  }).to("#menuToggleButton", {
    autoAlpha: 0,
    duration: 0
  });

  tlMenu.to("#navMenu", {
    autoAlpha: 1,
    duration: 0.3,
  }, '<');

  tlMenu.to("#navMenu", {
    x: 0,
    duration: 0.7,
    ease: "expo.inOut",
  });

  tlMenu.to(
    ["#ulRoutes li *", "#navMenu p *", "#ulSocials li *"],
    {
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "expo.inOut",
    },
    ">"
  );
}

export const toggleMenuAnimation = (menuState: boolean) => {
  menuAnimation();

  if (!menuState) {
    tlMenu.play();
  } else {
    tlMenu.reverse();
  }
};
