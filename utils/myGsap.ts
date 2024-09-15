import { gsap } from "gsap";

const tl = gsap.timeline();

function menuAnimation() {
  tl.to("#menuToggleButton", {
    x: "+=100vw",
    duration: 0.3,
    ease: "power3.in",
  }).to("#menuToggleButton", {
    autoAlpha: 0,
  });

  tl.to("#navMenu", {
    autoAlpha: 1,
  }).to("#navMenu", {
    x: 0,
    duration: 0.3,
    ease: "power3.out",
  });

  tl.to(
    ["#ulRoutes li *", "#navMenu p *", "#ulSocials li *"],
    {
      y: 0,
      duration: 0.5,
      stagger: 0.3,
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
    tl.timeScale(1.6).reverse();
  }
};
