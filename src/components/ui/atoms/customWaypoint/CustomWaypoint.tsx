'use client';

import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { CustomWaypointProps } from './types';

// this component runs an onEnter function immediately an element is in view

export default function CustomWaypoint({
    children,
    onEnter,
    onLeave,
    ...props
}: CustomWaypointProps) {
    const [enterFunctionRan, alreadyRanEnterFunction] = useState(false);

    const handleOnEnter = () => {
        !enterFunctionRan && onEnter?.();
        // run onEnter function once (when component is in view)
        alreadyRanEnterFunction(true);
    };

    return (
        <Waypoint onEnter={handleOnEnter} onLeave={onLeave} {...props}>
            {children}
        </Waypoint>
    );
}
