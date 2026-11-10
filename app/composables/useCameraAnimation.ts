import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

export const useCameraAnimation = (
  camera: THREE.PerspectiveCamera,
  target: THREE.Object3D,
) => {
  let cameraTimeline: gsap.core.Timeline | null = null;

  const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    const cameraMainPlanPosition = { x: 0, y: 4.5, z: 10 };
    const targetMainPlanPosition = { x: 0, y: 4.5, z: 0 };

    cameraTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".review",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
      onUpdate: () => {
        camera.lookAt(target.position);
      },
    });

    // к голове
    cameraTimeline
      .to(camera.position, {
        x: 1,
        y: 5,
        z: 1.5,
        duration: 1,
      })
      .to(
        target.position,
        {
          x: -1,
          y: 4,
          z: 0,
          duration: 1,
        },
        "<",
      );

    // к груди
    cameraTimeline
      .to(camera.position, {
        x: 0,
        y: 5,
        z: 5,
        duration: 1,
      })
      .to(
        target.position,
        {
          x: -3,
          y: 2,
          z: -5,
          duration: 1,
        },

        "<",
      );

    // к руке
    cameraTimeline
      .to(camera.position, {
        x: -1,
        y: 3,
        z: 2,
        duration: 1,
      })
      .to(
        target.position,
        {
          x: 2,
          y: 2.5,
          z: 0,
          duration: 1,
        },
        "<",
      );

    // к ногам
    cameraTimeline
      .to(camera.position, {
        x: 4,
        y: 0,
        z: 1,
        duration: 1,
      })
      .to(
        target.position,
        {
          x: 2,
          y: 0.5,
          z: 1,
          duration: 1,
        },
        "<",
      );

    // общая сцена
    cameraTimeline
      .to(camera.position, {
        x: cameraMainPlanPosition.x,
        y: cameraMainPlanPosition.y,
        z: cameraMainPlanPosition.z,
        duration: 1,
      })
      .to(
        target.position,
        {
          x: targetMainPlanPosition.x,
          y: targetMainPlanPosition.y,
          z: targetMainPlanPosition.z,
          duration: 1,
        },
        "<",
      );

    // пролет в реактор
    cameraTimeline
      .to(camera.position, {
        x: 0,
        y: 3.8,
        z: 0.5,
        duration: 1,
      })
      .to(
        target.position,
        {
          x: 0,
          y: 3.75,
          z: 0,
          duration: 1,
        },
        "<",
      );
  };

  const destroy = () => {
    cameraTimeline?.scrollTrigger?.kill();
    cameraTimeline?.kill();
    cameraTimeline = null;
  };

  return { init, destroy };
};
