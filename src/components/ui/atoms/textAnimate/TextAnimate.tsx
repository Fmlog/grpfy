'use client';

import React, { useRef } from 'react';
import { TextAnimateProps } from './types';
import { useTextAnimate } from '../../../../hooks/useTextAnimate';
import CustomWaypoint from '../customWaypoint/CustomWaypoint';

// this component helps to stagger fade in animation on texts

export function TextAnimate({ children, id }: TextAnimateProps) {
    const textAnimateRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [triggerAnimation] = useTextAnimate({ id });
    const handleLeave = () => {
      textAnimateRef.current.style.opacity = '0';
  };
    return (
        <CustomWaypoint
            onEnter={triggerAnimation}
            props={undefined}
        >
            <div>
                {/* --- FOR SEO --- */}
                <span className='app-text-animate--hidden'>{children}</span>

                <span className='app-text-animate' id={id} ref={textAnimateRef}>
                    {children}
                </span>
            </div>
        </CustomWaypoint>
    );
}
