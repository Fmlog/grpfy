import anime from "animejs";
import { UseTextAnimateProp } from "./types";

export function useTextAnimate({ id }: UseTextAnimateProp) {
  const thisTextAnimation = () => {
    return anime({
      targets: `#${id} .letter`,
      translateY: ["70%", 0],
      translateZ: 0, 
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el: HTMLElement, i: number) => 300 + 30 * i,
      autoplay: false,
    });
  };

  const triggerAnimation = () => {
    thisTextAnimation().restart();
  };

  return [triggerAnimation];
}
