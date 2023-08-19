'use client';
import React from "react";
import anime from "animejs";
import Money from "../../../ui/icons/Money";
import Bank from "../../../ui/icons/Bank";
import User from "../../../ui/icons/User";
import Link from "../../../ui/icons/Link";
import AddUser from "../../../ui/icons/AddUser";
import Arrow from "../../../ui/icons/Arrow";
import { TextAnimateWord } from "../../../ui/atoms/textAnimate/TextAnimateWord";
import { TextAnimate } from "@/components/ui/atoms/textAnimate/TextAnimate";
import { LINKS } from "@/constants/links";
import CustomWaypoint from "@/components/ui/atoms/customWaypoint/CustomWaypoint";
import { GROUPIFY_FEATURES } from "@/constants/home";

interface InViewAnimationProps {
  id: number;
}

export default function HomeFeatures() {
  const inViewAnimation = ({ id }: InViewAnimationProps) => {
    return anime({
      targets: `.home-page__features__feature:nth-child(${id})`,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1400,
      easing: "easeOutExpo",
      autoplay: false,
    });
  };

  const triggerAnimation = ({ id }: InViewAnimationProps) => {
    inViewAnimation({ id }).restart();
  };

  const easing = "easeOutElastic(1, .86)";
  const duration = 1000;

  const handleFeatureMouseOver = (id: number) => {
    anime({
      targets: `.home-page__features__feature:nth-child(${id}) .home-page__features__feature__cover`,
      opacity: [1, 0],
      translateY: [0, "100%"],
      easing: "easeOutExpo",
      duration,
      autoplay: false,
    }).play();

    anime({
      targets: `.home-page__features__feature:nth-child(${id}) .home-page__features__feature__details`,
      opacity: [0, 1],
      translateY: ["100%", 0],
      delay: 0,
      easing,
      duration,
      autoplay: false,
    }).play();
  };

  const handleFeatureMouseLeave = (id: number) => {
    anime({
      targets: `.home-page__features__feature:nth-child(${id}) .home-page__features__feature__details`,
      opacity: [1, 0],
      translateY: [0, "100%"],
      easing: "easeOutExpo",
      duration,
      autoplay: false,
    }).play();

    anime({
      targets: `.home-page__features__feature:nth-child(${id}) .home-page__features__feature__cover`,
      opacity: [0, 1],
      translateY: ["100%", 0],
      delay: 0,
      easing,
      duration,
      autoplay: false,
    }).play();
  };

  const featureIcon = (slug: string) => {
    switch (slug) {
      case "money":
        return <Money />;
      case "bank":
        return <Bank />;
      case "user":
        return <User />;
      case "link":
        return <Link />;
      case "add-user":
        return <AddUser />;
      default:
        return;
    }
  };

  return (
    <div className="app-container home-page__features-container">
      <div className="app-container__section home-page__features">
        <h2>
          <TextAnimate id="home-features-heading">
            <TextAnimateWord>
              Everything you need to manage your
            </TextAnimateWord>
            <TextAnimateWord variant="gradient">Whatsapp</TextAnimateWord>
            <TextAnimateWord>and</TextAnimateWord>
            <TextAnimateWord variant="gradient">Telegram</TextAnimateWord>
            <TextAnimateWord>groups</TextAnimateWord>
          </TextAnimate>
        </h2>

        <div className="home-page__features__grid">
          {GROUPIFY_FEATURES.map((feature, index) => (
            <CustomWaypoint
              onEnter={() => triggerAnimation({ id: index + 1 })}
              key={index}
            >
              <div
                className="home-page__features__feature"
                onMouseLeave={() => handleFeatureMouseLeave(index + 1)}
                onMouseEnter={() => handleFeatureMouseOver(index + 1)}
              >
                <div className="home-page__features__feature__cover">
                  {featureIcon(feature.cover.icon)}

                  <div className="home-page__features__feature__cover__title">
                    <TextAnimate id={`feature-${index}`}>
                      <FormatTitleCover>{feature.cover.title}</FormatTitleCover>
                    </TextAnimate>
                  </div>
                </div>

                <div className="home-page__features__feature__details">
                  <span>
                    <img
                      src={feature.details.image_url}
                      alt={`${feature.details.title}`}
                    />
                  </span>

                  <div>
                    <h6>{feature.details.title}</h6>

                    <p>{feature.details.description}</p>

                    <a href={LINKS.SIGN_UP} target="_self">
                      Check it out
                      <Arrow />
                    </a>
                  </div>
                </div>
              </div>
            </CustomWaypoint>
          ))}
        </div>
      </div>
    </div>
  );
}

function FormatTitleCover({ children }: { children: string }) {
  return (
    <>
      {children.split(" ").map((word, index) =>
        word[0] === "#" ? (
          <TextAnimateWord key={index} className="color-bold" perWord>
            {word.replace("#", "")}
          </TextAnimateWord>
        ) : (
          <TextAnimateWord key={index} perWord>{word}</TextAnimateWord>
        )
      )}
    </>
  );
}
