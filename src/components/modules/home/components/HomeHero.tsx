'use client';
import React from "react";
import anime from "animejs";
import { TextAnimate } from "../../../ui/atoms/textAnimate/TextAnimate";
import WhatsappNotification from "../../../ui/icons/WhatsappNotification";
import { Button } from "../../../ui/atoms/button/Button";
import TelegramNotification from "../../../ui/icons/TelegramNotification";
import SubscriptionNotification from "../../../ui/icons/SubscriptionNotification";
import { TextAnimateWord } from "../../../ui/atoms/textAnimate/TextAnimateWord";
import CustomWaypoint from "@/components/ui/atoms/customWaypoint/CustomWaypoint";
import { LINKS } from "@/constants/links";

export default function HomeHero() {
  const triggerAnimation = () => {
    const textAnimation = anime({
      targets: `#home-hero .content`,
      opacity: [0, 1],
      translateY: ["100%", 0],
      duration: 1200,
      easing: "easeOutExpo",
      autoplay: false,
      delay: (el: HTMLElement, i: number) => 800 + 200 * i,
    });

    const imageAnimation = anime({
      targets: `#home-hero .image`,
      opacity: [0, 1],
      translateY: [200, 0],
      duration: 1200,
      easing: "easeOutElastic",
      autoplay: false,
      delay: (el: HTMLElement, i: number) => 200 * i,
    });

    textAnimation.play();
    imageAnimation.play();
  };

  return (
    <CustomWaypoint onEnter={triggerAnimation}>
      <div className="app-container home-page__hero-container">
        <div className="app-container__section home-page__hero" id="home-hero">
          <div className="home-page__hero__text">
            <h1>
              <TextAnimate id="home-hero-heading">
                <TextAnimateWord>Best way</TextAnimateWord>
                <br />
                <TextAnimateWord>to</TextAnimateWord>
                <TextAnimateWord variant="gradient">Run</TextAnimateWord>
                <TextAnimateWord>a paid</TextAnimateWord>
                <TextAnimateWord variant="gradient">Community</TextAnimateWord>
              </TextAnimate>
            </h1>
            <p className="content">
              Groupify enables group creation on WhatsApp and Telegram, manages
              invites and members, collects payments so you can focus on
              creating great content and growing your community.
            </p>

            <Button
              onClick={() => window.open(LINKS.SIGN_UP, "_self")}
              className="content"
              content="Start for free"
            />
          </div>
          <div className="home-page__hero__illustration">
            <div className="image home-page__hero__illustration__whatsapp">
              <WhatsappNotification />
            </div>

            <div className="image home-page__hero__illustration__telegram">
              <TelegramNotification />
            </div>

            <div className="image home-page__hero__illustration__subscription">
              <SubscriptionNotification />
            </div>

            <div className="image home-page__hero__illustration__telegram">
              <TelegramNotification />
            </div>
          </div>
        </div>
      </div>
    </CustomWaypoint>
  );
}
