'use client';
import anime from "animejs";
import React, { useEffect, useRef } from "react";
import { useTextAnimate } from "../../../../hooks/useTextAnimate";
import { generateClassListFromObject } from "../../../../utils/className";
import { TextAnimateWord } from "../../../ui/atoms/textAnimate/TextAnimateWord";
import AddIcon from "../../../ui/icons/AddIcon";

type VoidFunction = () => void;
interface HomeFaqQuestionProps {
  setAllTriggerAnimations: (prop: any) => void;
  children: string;
  answer: string | undefined;
  isOpen: boolean;
  open: VoidFunction;
}

export default function HomeFaqQuestion({
  setAllTriggerAnimations,
  children,
  answer,
  open,
  isOpen,
}: HomeFaqQuestionProps) {
  const textAnimateRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const id = "faq-q";
  const [triggerTextAnimation] = useTextAnimate({ id });

  const triggerFadeAnimation = () => {
    anime({
      targets: ".home-page__faq__qa__question-container__button",
      opacity: [0, 1],
      easing: "linear",
      duration: 800,
      delay: (el: HTMLElement, i: number) => 700 + 200 * i,
      autoplay: false,
    }).restart();

    anime({
      targets: ".home-page__faq__qa__answer",
      translateY: [20, 0],
      opacity: [0, 1],
      easing: "easeOutElastic(1, .56)",
      duration: 1000,
      delay: (el: HTMLElement, i: number) => 700 + 200 * i,
      autoplay: false,
    }).restart();
  };

  const triggerLineAnimation = () => {
    anime({
      targets: ".home-page__faq__qa__line",
      translateX: [-1184, 0],
      easing: "linear",
      duration: 700,
      delay: (el: HTMLElement, i: number) => 200 * i,
      autoplay: false,
    }).restart();
  };

  useEffect(() => {
    setAllTriggerAnimations((prev: (() => void)[]) => [
      ...prev,
      () => {
        triggerTextAnimation();
        triggerLineAnimation();
        triggerFadeAnimation();
      },
    ]);
  }, [children, answer]);

  return (
    <button className="home-page__faq__qa" onClick={open}>
      <div className="home-page__faq__qa__question-container">
        <p
          className="home-page__faq__qa__question app-text-animate"
          ref={textAnimateRef}
          id={id}
        >
          <TextAnimateWord perWord>{children}</TextAnimateWord>
        </p>

        <div
          className={`home-page__faq__qa__question-container__button ${generateClassListFromObject(
            { active: isOpen }
          )}`}
        >
          <AddIcon />
        </div>
      </div>

      <p
        className={`home-page__faq__qa__answer ${generateClassListFromObject({
          active: isOpen,
        })}`}
      >
        <span>{answer}</span>
      </p>

      <span className="home-page__faq__qa__line"></span>
    </button>
  );
}
