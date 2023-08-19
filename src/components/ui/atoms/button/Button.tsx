import React from 'react';
import '../../../../styles/index.scss';
import PrimaryButton from './Primary';
import { BUTTON_COMPONENT_TO_VARIANT_MAPPING } from '@/constants/button';

interface ButtonProps {
    content?: string | React.ReactNode;
    variant?: 'primary' | 'outlined' | 'plain';
    className?: string;
    onClick?: () => void;
}

interface ButtonVariantProps {
    className?: string;
    content?: string | React.ReactNode;
    onClick?: () => void;
}

interface ButtonProps extends ButtonVariantProps {
    variant?: keyof typeof BUTTON_COMPONENT_TO_VARIANT_MAPPING | undefined;
}

export function Button({ content, variant = 'primary', className = '', onClick }: ButtonProps) {
    const ButtonComponent = BUTTON_COMPONENT_TO_VARIANT_MAPPING[variant] || PrimaryButton;

    return <ButtonComponent onClick={onClick} className={className} content={content || ''} />;
}
