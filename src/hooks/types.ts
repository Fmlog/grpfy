export interface AccordionItem {
    title?: string;
    content?: string;
    label?: string;
    pages?: any;
    q?: string;
    a?: string;
}

export interface AccordionModifiedItem extends AccordionItem {
    activate: () => void;
    isActive: boolean;
    id: number;
    image_url?: string;
    description?: string;
    src?: string;
    a?: string;
    q?: string;
}

export interface UseAccordionProps {
    items: AccordionItem[];
    defaultActiveIndex?: number;
}

export interface UseAccordionControls {
    modifiedItems: AccordionModifiedItem[];
    activeItemIndex: number;
    previousActiveIndex: number;
}
export type UseTextAnimateProp = {
    id: string;
};
