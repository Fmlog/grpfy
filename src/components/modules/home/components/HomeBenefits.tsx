'use client';
import anime from 'animejs';
import React, { useEffect } from 'react';
import { useAccordion } from '../../../../hooks/useAccordion';
import { TextAnimate } from '../../../ui/atoms/textAnimate/TextAnimate';
import { TextAnimateWord } from '../../../ui/atoms/textAnimate/TextAnimateWord';
import Arrow from '../../../ui/icons/Arrow';
import CustomWaypoint from '@/components/ui/atoms/customWaypoint/CustomWaypoint';
import { GROUPIFY_BENEFITS } from '@/constants/home';
import { LINKS } from '@/constants/links';

export default function HomeBenefits() {
    const {
        modifiedItems: groupifyBenefits,
        activeItemIndex,
        previousActiveIndex,
    } = useAccordion({
        items: GROUPIFY_BENEFITS,
        defaultActiveIndex: 1,
    });

    const groupifyBenefitsImages = groupifyBenefits.map((benefit) => benefit.image_url);

    const easing = 'easeOutElastic(1, .56)';
    const duration = 1000;

    useEffect(() => {
        if (typeof activeItemIndex === 'number' && activeItemIndex >= 0) {
            anime({
                targets: `.home-page__benefits__slider__image img:nth-child(${
                    previousActiveIndex + 1
                })`,
                translateY: [0, '30%'],
                opacity: [1, 0],
                easing,
                duration,
                autoplay: false,
            }).play();
            anime({
                targets: `.home-page__benefits__slider__image img:nth-child(${
                    activeItemIndex + 1
                })`,
                translateY: ['30%', 0],
                opacity: [0, 1],
                easing,
                duration,
                autoplay: false,
            }).play();
        }
    }, [activeItemIndex, previousActiveIndex]);

    return (
        <div className='app-container home-page__benefits-container'>
            <div className='app-container__section home-page__benefits'>
                <h3>
                    <TextAnimate id='home-benefits-heading'>
                        <TextAnimateWord variant='gradient'>Engage</TextAnimateWord>
                        <TextAnimateWord>your members</TextAnimateWord>
                        <br />
                        <TextAnimateWord>in the</TextAnimateWord>
                        <TextAnimateWord variant='gradient'>best</TextAnimateWord>
                        <TextAnimateWord>way possible</TextAnimateWord>
                    </TextAnimate>
                </h3>

                <div className='home-page__benefits__slider'>
                    <div className='home-page__benefits__slider__text'>
                        {groupifyBenefits.map((benefit) => (
                            <div
                                className='home-page__benefits__benefit'
                                data-active={benefit.isActive}
                                key={benefit.id}
                            >
                                <h5 onClick={benefit.activate}>{benefit.title}</h5>
                                <p>{benefit.description}</p>

                                <a href={LINKS.SIGN_UP} target='_self'>
                                    Let’s get started <Arrow />
                                </a>
                            </div>
                        ))}
                    </div>

                    <CustomWaypoint>
                        <div className='home-page__benefits__slider__image'>
                            {groupifyBenefitsImages.map((imageUrl, index) => (
                                <img src={imageUrl} alt='whatsapp chat' key={index} />
                            ))}
                        </div>
                    </CustomWaypoint>
                </div>
            </div>

            <span className='home-page__benefits-container__shadow'></span>
            <span className='home-page__benefits-container__shadow'></span>
        </div>
    );
}
