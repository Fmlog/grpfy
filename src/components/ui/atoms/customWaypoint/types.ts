import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

export type CustomWaypointProps = {
    children: React.ReactNode;
    onEnter?: () => void;
    onLeave?: () => void;
    props?: Partial<Waypoint>;
};
