import React from 'react';

interface TextAnimateWordProps {
    children: string;
    variant?: 'gradient';
    perWord?: boolean;
    className?: string;
}

export function TextAnimateWord({
    children,
    variant,
    perWord = false,
    className = '',
}: TextAnimateWordProps) {
    if (variant === 'gradient') {
        return (
            <>
                {children.split(' ')?.map((word, index) => (
                    <React.Fragment key={index}>
                        <span className={`letter word app-gradient-text ${className}`}>{word}</span>{' '}
                    </React.Fragment>
                ))}
            </>
        );
    }

    return (
        <>
            {children.split(' ')?.map((word, index) => (
                <React.Fragment key={index}>
                    <span className={`${perWord ? 'letter' : ''} word ${className}`}>
                        {word.split('').map((letter, index) => (
                            <span key={index} className={!perWord ? 'letter' : ''}>{letter}</span>
                        ))}
                    </span>{' '}
                </React.Fragment>
            ))}
        </>
    );
}
