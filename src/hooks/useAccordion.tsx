'use client';

import { useEffect, useState } from 'react';
import {
    AccordionItem,
    AccordionModifiedItem,
    UseAccordionControls,
    UseAccordionProps,
} from './types';

//  this component helps to create accordion like functionalities fast
export function useAccordion({
    items: defaultItems,
    defaultActiveIndex = 0,
}: UseAccordionProps): UseAccordionControls {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [previousActiveIndex, setPreviousActiveIndex] = useState(0);

    // function to activateItem by index
    const activateItemByIndex = (itemId: number) => {
        setPreviousActiveIndex(activeItemIndex);
        setActiveItemIndex(itemId);
    };

    const activeItemIs = (itemId: number) => activeItemIndex === itemId;

    // modify default items to include an active state and a activate function
    const modifiedItems: AccordionModifiedItem[] = defaultItems.map(
        (item: AccordionItem, index): AccordionModifiedItem => ({
            ...item,
            activate: () => activateItemByIndex(index),
            isActive: activeItemIs(index),
            id: index,
        })
    );

    useEffect(() => {
        // activate default active index on component mount
        activateItemByIndex(defaultActiveIndex);
    }, [defaultItems]);

    return { modifiedItems, activeItemIndex, previousActiveIndex };
}
