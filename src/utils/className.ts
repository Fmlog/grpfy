interface generateClassListFromObjectProps {
    [key: string]: boolean;
}

export const generateClassListFromObject = (dynamicClasses: generateClassListFromObjectProps) => {
    const classList: string[] = [];

    Object.keys(dynamicClasses).forEach((key) => {
        dynamicClasses[key] && classList.push(key);
    });

    return classList.join(' ');
};
