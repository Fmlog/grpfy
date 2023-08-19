'use client';
import React, { useState } from 'react';
import { TextAnimateWord } from '../../../ui/atoms/textAnimate/TextAnimateWord';
import HomeFaqQuestion from './HomeFaqQuestion';
import { GROUPIFY_FAQs } from '@/constants/home';
import CustomWaypoint from '@/components/ui/atoms/customWaypoint/CustomWaypoint';
import { TextAnimate } from '@/components/ui/atoms/textAnimate/TextAnimate';
import { useAccordion } from '@/hooks/useAccordion';

export default function HomeFaq() {
  const [allTriggerAnimations, setAllTriggerAnimations] = useState([]);

  const triggerAnimation = () => {
    allTriggerAnimations.forEach((_triggerAnimation: () => void) =>
      _triggerAnimation()
    );
  };

  const { modifiedItems: groupifyFAQs } = useAccordion({
    items: GROUPIFY_FAQs,
    defaultActiveIndex: -1,
  });

  return (
    <div className="app-container home-page__faq-container" id="faq">
      <div className="app-container__section home-page__faq">
        <h1 className="home-page__faq__heading">
          <TextAnimate id="home-faq-heading">
            <TextAnimateWord variant="gradient">Frequently</TextAnimateWord>
            <TextAnimateWord>Asked</TextAnimateWord>
            <TextAnimateWord variant="gradient">Questions</TextAnimateWord>
          </TextAnimate>
        </h1>

        <CustomWaypoint onEnter={triggerAnimation}>
          <div>
            {groupifyFAQs.map((aq, index) => (
              <HomeFaqQuestion
                setAllTriggerAnimations={setAllTriggerAnimations}
                answer={aq.a}
                open={aq.activate}
                isOpen={aq.isActive}
                key={index}
              >
                {aq.q ? aq.q : ''}

              </HomeFaqQuestion>
            ))}
          </div>
        </CustomWaypoint>
      </div>
    </div>
  );
}
