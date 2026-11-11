import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useBlenderAnimation = (markVIIRef: any) => {
  const progress = { value: 0 };

  let blenderTween: gsap.core.Tween | null = null;

  const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    blenderTween = gsap.to(progress, {
      value: 1,
      scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      onUpdate: () => {
        markVIIRef.value?.setProgress(progress.value);
      },
    });
  };

  const destroy = () => {
    blenderTween?.scrollTrigger?.kill();
    blenderTween?.kill();
    blenderTween = null;
  };

  return { init, destroy };
};
