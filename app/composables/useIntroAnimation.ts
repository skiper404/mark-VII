import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useIntroAnimation = () => {
  let introTimeline: gsap.core.Timeline | null = null;

  const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        start: "20% 30%", // 20% - позиция внутри .intro, 30% - позиция внутри viewport
        end: "center top",
        scrub: true,
      },
    });

    introTimeline
      .fromTo(
        ".intro-title",
        { autoAlpha: 0, y: 50, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, duration: 1, filter: "blur(0px)" },
      )
      .fromTo(
        ".intro-description",
        { autoAlpha: 0, y: 30, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, duration: 1, filter: "blur(0px)" },
        "-=0.4",
      )
      .to({}, { duration: 1 })
      .to(".intro-title", {
        autoAlpha: 0,
        y: -30,
        duration: 1,
        filter: "blur(10px)",
      })
      .to(
        ".intro-description",
        { autoAlpha: 0, y: -30, duration: 1, filter: "blur(10px)" },
        "<",
      );
  };

  const destroy = () => {
    introTimeline?.kill();
  };

  return { init, destroy };
};
