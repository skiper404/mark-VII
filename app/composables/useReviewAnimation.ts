import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useReviewAnimation = () => {
  let helmetTimeline: gsap.core.Timeline | null = null;
  let chestTimeline: gsap.core.Timeline | null = null;
  let handTimeline: gsap.core.Timeline | null = null;
  let bootsTimeline: gsap.core.Timeline | null = null;
  let ergonomicTimeline: gsap.core.Timeline | null = null;
  let finalTimeline: gsap.core.Timeline | null = null;

  const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    helmetTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".review-helmet",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      })
      .fromTo(
        ".helmet-title",
        { autoAlpha: 0, y: 50, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
      )
      .fromTo(
        ".helmet-description",
        { autoAlpha: 0, y: 30, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
        "-=0.4",
      )
      .to({}, { duration: 1 })
      .to(".helmet-title", {
        autoAlpha: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 1,
      })
      .to(
        ".helmet-description",
        { autoAlpha: 0, y: -30, filter: "blur(10px)", duration: 1 },
        "<",
      );

    // chest timeline
    chestTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".review-chest",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
      .fromTo(
        ".chest-title",
        { autoAlpha: 0, y: 50, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
      )
      .fromTo(
        ".chest-description",
        { autoAlpha: 0, y: 30, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
        "-=0.4",
      )
      .to({}, { duration: 1 })
      .to(".chest-title", {
        autoAlpha: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 1,
      })
      .to(
        ".chest-description",
        { autoAlpha: 0, y: -30, filter: "blur(10px)", duration: 1 },
        "<",
      );

    // hand timeline
    handTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".review-hand",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
      .fromTo(
        ".hand-title",
        { autoAlpha: 0, y: 50, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
      )
      .fromTo(
        ".hand-description",
        { autoAlpha: 0, y: 30, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
        "-=0.4",
      )
      .to({}, { duration: 1 })
      .to(".hand-title", {
        autoAlpha: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 1,
      })
      .to(
        ".hand-description",
        { autoAlpha: 0, y: -30, filter: "blur(10px)", duration: 1 },
        "<",
      );

    //boots timeline
    bootsTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".review-boots",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
      .fromTo(
        ".boots-title",
        { autoAlpha: 0, y: 50, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
      )
      .fromTo(
        ".boots-description",
        { autoAlpha: 0, y: 30, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
        "-=0.4",
      )
      .to({}, { duration: 1 })
      .to(".boots-title", {
        autoAlpha: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 1,
      })
      .to(
        ".boots-description",
        { autoAlpha: 0, y: -30, filter: "blur(10px)", duration: 1 },
        "<",
      );

    //ergonomic
    ergonomicTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".review-ergonomic",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
      .fromTo(
        ".ergonomic-title",
        { autoAlpha: 0, y: 50, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
      )
      .fromTo(
        ".ergonomic-description",
        { autoAlpha: 0, y: 30, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
        "-=0.4",
      )
      .to({}, { duration: 1 })
      .to(".ergonomic-title", {
        autoAlpha: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 1,
      })
      .to(
        ".ergonomic-description",
        { autoAlpha: 0, y: -30, filter: "blur(10px)", duration: 1 },
        "<",
      );

    //final
    finalTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".review-summary",
          start: "top",
          end: "bottom center",
          scrub: true,
        },
      })
      .fromTo(
        ".summary-title",
        { autoAlpha: 0, y: 50, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.1 },
      )
      .fromTo(
        ".summary-description",
        { autoAlpha: 0, y: 30, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 },
        "-=0.4",
      )
      .to({}, { duration: 1 })
      .to(".summary-title", {
        autoAlpha: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 1,
      })
      .to(
        ".summary-description",
        { autoAlpha: 0, y: -30, filter: "blur(10px)", duration: 1 },
        "<",
      );
  };

  const destroy = () => {
    helmetTimeline?.kill();
    chestTimeline?.kill();
    handTimeline?.kill();
    bootsTimeline?.kill();
    ergonomicTimeline?.kill();
    finalTimeline?.kill();
  };

  return { init, destroy };
};
