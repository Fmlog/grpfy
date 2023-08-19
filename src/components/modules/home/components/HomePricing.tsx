'use client';

import anime from "animejs";
import React from "react";
import { TextAnimateWord } from "../../../ui/atoms/textAnimate/TextAnimateWord";
import { Button } from "@/components/ui/atoms/button/Button";
import CustomWaypoint from "@/components/ui/atoms/customWaypoint/CustomWaypoint";
import { TextAnimate } from "@/components/ui/atoms/textAnimate/TextAnimate";
import { GROUPIFY_PERCENTAGE } from "@/constants/home";
import { LINKS } from "@/constants/links";
import Link from "next/link";

export default function HomePricing() {
  const slideInAnimation = (targets: string) => {
    return anime({
      targets,
      translateX: ["50%", 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      autoplay: false,
    });
  };

  const slideIn = () => {
    slideInAnimation(".home-page__pricing").play();
  };

  const slideButtonIn = () => {
    slideInAnimation(".home-page__pricing__plan-details button").play();
  };

  return (
    <div className="app-container home-page__pricing-container" id="pricing">
      <CustomWaypoint onEnter={slideIn}>
        <div className="app-container__section home-page__pricing">
          <div className="home-page__pricing__title">
            <h3>
              <TextAnimate id="pricing-heading">
                <TextAnimateWord>Pricing</TextAnimateWord>
              </TextAnimate>
            </h3>
            <div className="home-page__pricing__title--description">
              <TextAnimate id="pricing-description">
                <TextAnimateWord>
                  Using Groupify is free. We only make money when you start
                  making money.
                </TextAnimateWord>
              </TextAnimate>
            </div>
          </div>

          <div className="home-page__pricing__plan-details">
            <div className="home-page__pricing__plan-details__heading">
              <div>
                <h2>
                  <TextAnimate id="pricing-plan-heading-1">
                    <TextAnimateWord>$0</TextAnimateWord>
                  </TextAnimate>
                </h2>
                <div>
                  <TextAnimate id="pricing-plan-heading-2">
                    <TextAnimateWord>Per month</TextAnimateWord>
                  </TextAnimate>
                </div>
              </div>

              <h4>
                <TextAnimate id="pricing-plan-heading-3">
                  <TextAnimateWord>+</TextAnimateWord>
                </TextAnimate>
              </h4>

              <div>
                <h2>
                  <TextAnimate id="pricing-plan-heading-4">
                    <TextAnimateWord>
                      {`${GROUPIFY_PERCENTAGE}%`}
                    </TextAnimateWord>
                  </TextAnimate>
                </h2>
                <div>
                  <TextAnimate id="pricing-plan-heading-5">
                    <TextAnimateWord>Per transaction</TextAnimateWord>
                  </TextAnimate>
                </div>
              </div>
            </div>

            <ul>
              <li>
                <span>
                  <TextAnimate id="pricing-plan-benefit-1">
                    <TextAnimateWord>
                      Unlimited Groups, members or sales
                    </TextAnimateWord>
                  </TextAnimate>
                </span>
              </li>

              <li>
                <span>
                  <TextAnimate id="pricing-plan-benefit-2">
                    <TextAnimateWord>No monthly or hidden fees</TextAnimateWord>
                  </TextAnimate>
                </span>
              </li>

              <li>
                <span>
                  <TextAnimate id="pricing-plan-benefit-3">
                    <TextAnimateWord>No payment to get started</TextAnimateWord>
                  </TextAnimate>
                </span>
              </li>

              <li>
                <span>
                  <TextAnimate id="pricing-plan-benefit-4">
                    <TextAnimateWord>Withdraw anytime you want</TextAnimateWord>
                  </TextAnimate>
                </span>
              </li>
            </ul>

            <CustomWaypoint onEnter={slideButtonIn}>
              <div>
                <Link href={LINKS.SIGN_IN}>
                  <Button
                    content="Start for Free"
                  />
                </Link>
              </div>
            </CustomWaypoint>
          </div>

          <span className="home-page__pricing__background"></span>
        </div>
      </CustomWaypoint>
    </div>
  );
}
