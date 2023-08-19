'use client';
import anime from "animejs";
import React, { useEffect, useState } from "react";
import { groupifyDashboardHeader } from "../../../ui/images";
import { useAccordion } from "@/hooks/useAccordion";
import SyncWithScroll from "@/components/ui/atoms/syncWithScroll/SyncWithScroll";
import { Button } from "@/components/ui/atoms/button/Button";
import { AccordionItem } from "@/hooks/types";

interface HomeModulePagesProps {
  pages: AccordionItem[];
}

export default function HomeDemoModulePages({ pages }: HomeModulePagesProps) {
  const { modifiedItems, activeItemIndex, previousActiveIndex } = useAccordion({
    items: pages,
    defaultActiveIndex: 0,
  });
  const [currentTop, setCurrentTop] = useState(0);

  useEffect(() => {
    modifiedItems[0].activate();
  }, [pages]);

  const easing = "easeOutElastic(1, .56)";
  const duration = 1000;

  useEffect(() => {
    if (typeof activeItemIndex === "number" && activeItemIndex >= 0) {
      anime({
        targets: `.home-page__demo__modules__module-page-image > div:nth-child(${
          previousActiveIndex + 1
        })`,
        translateY: [0, "40px"],
        opacity: [1, 0],
        easing,
        duration,
        autoplay: false,
      }).play();
      anime({
        targets: `.home-page__demo__modules__module-page-image > div:nth-child(${
          activeItemIndex + 1
        })`,
        translateY: ["40px", 0],
        opacity: [0, 1],
        easing,
        duration,
        autoplay: false,
      }).play();
    }
  }, [activeItemIndex, previousActiveIndex]);

  const handleScroll = (_currentTop: number) => {
    setCurrentTop(_currentTop);
  };

  return (
    <>
      <div className="home-page__demo__modules__module-page-btns">
        {modifiedItems?.map((item, i) => (
          <Button
            variant="plain"
            onClick={item.activate}
            className={`anime-stagger ${item.isActive ? "is-active" : ""}`}
            content={
              <p className="app-gradient-border">
                <span>
                  <span className="app-gradient-text">{item.label}</span>
                </span>
              </p>
            }
            key={i}
          />
        ))}
      </div>

      <div className="anime-stagger">
        <SyncWithScroll
          onScroll={handleScroll}
          className="home-page__demo__modules__module-page-image"
        >
          {modifiedItems?.map?.((item, i) => (
            <div key={i}>
              <img
                src={item.src}
                alt="Groupify dashboard"
                style={{
                  transform: `translateY(-${(currentTop - 0.5) * 50}%)`,
                }}
              />
            </div>
          ))}

          <img
            className="navigation-bar-image"
            src={groupifyDashboardHeader}
            alt="Groupify dashboard navigation bar"
          />
        </SyncWithScroll>
      </div>
    </>
  );
}
