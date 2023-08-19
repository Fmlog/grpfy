import React from 'react';
import { ButtonVariantProps } from './types';

export default function PrimaryButton({ className, content, onClick }: ButtonVariantProps) {
    return (
        <button className={`base-button ${className || ''}`} onClick={onClick}>
            {content}
        </button>
    );
}
