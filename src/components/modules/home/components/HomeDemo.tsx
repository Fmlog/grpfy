'use client';
import React from 'react';
import anime from 'animejs';
import { Button } from '../../../ui/atoms/button/Button';
import {
    groupifyDashboard,
    groupifyMemberAdded,
    groupifyMembersPage,
    groupifyNewGroupPage,
    groupifyPaymentModal,
    groupifyPersonalInformationModal,
    groupifySalesPage,
} from '../../../ui/images';
import { useAccordion } from '../../../../hooks/useAccordion';
import { AccordionItem } from '../../../../hooks/types';
import HomeDemoModulePages from './HomeDemoModulePages';
import CustomWaypoint from '@/components/ui/atoms/customWaypoint/CustomWaypoint';

interface DemoModule extends AccordionItem {
    label: string;
}

const HOME_DEMO_MODULES: DemoModule[] = [
    {
        label: 'For Creators',
        pages: [
            {
                label: 'Create Group',
                src: groupifyNewGroupPage,
            },
            {
                label: 'Groups Page',
                src: groupifyMembersPage,
            },
            {
                label: 'Sales Page',
                src: groupifySalesPage,
            },
            {
                label: 'Members Join',
                src: groupifyDashboard,
            },
        ],
    },
    {
        label: 'For Members',
        pages: [
            {
                label: 'Sales Page',
                src: groupifySalesPage,
            },
            {
                label: 'Registration',
                src: groupifyPersonalInformationModal,
            },
            {
                label: 'Payment Page',
                src: groupifyPaymentModal,
            },
            {
                label: 'Group Joined',
                src: groupifyMemberAdded,
            },
        ],
    },
];

export default function HomeDemo() {
    const { modifiedItems, activeItemIndex } = useAccordion({
        items: HOME_DEMO_MODULES,
    });

    const triggerAnimation = () => {
        const textAnimation = anime({
            targets: `#home-demo .anime-stagger`,
            opacity: [0, 1],
            translateY: ['40px', 0],
            duration: 1200,
            easing: 'easeOutExpo',
            autoplay: false,
            delay: (el: HTMLElement, i: number) => 200 + 100 * i,
        });

        textAnimation.play();
    };
    return (
        <CustomWaypoint onEnter={triggerAnimation}>
            <div className='app-container home-page__demo-container' id='home-demo'>
                <div className='app-container__section home-page__demo'>
                    <div className='home-page__demo__modules'>
                        <div className='home-page__demo__modules__header'>
                            {modifiedItems?.map((item, i) => (
                                <Button
                                    variant='plain'
                                    className={`anime-stagger ${item.isActive ? 'is-active' : ''}`}
                                    onClick={item.activate}
                                    content={
                                        <h1 className='app-gradient-text'>
                                            {item.label} <br /> {item.isActive ? <>&#x2022;</> : ''}
                                        </h1>
                                    }
                                    key={i}
                                />
                            ))}
                        </div>

                        <HomeDemoModulePages pages={HOME_DEMO_MODULES[activeItemIndex].pages} />
                    </div>
                </div>
            </div>
        </CustomWaypoint>
    );
}
