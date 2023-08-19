import React from 'react';
import { AnchorProps } from './types';
import Link from 'next/link';

export default function Anchor({ children, href = '/', className = '' }: AnchorProps) {
    const linkProps = {
        href,
        className,
    };

    return <Link {...linkProps}>{children}</Link>;
}
