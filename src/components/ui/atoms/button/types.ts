export interface ButtonVariantProps {
    className?: string;
    content: string | React.ReactNode;
    onClick: (() => void )| undefined;
    variant?: 'primary' | 'secondary' | 'plain' | undefined;
  }