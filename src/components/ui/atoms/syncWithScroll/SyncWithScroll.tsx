import React, { useEffect, useRef } from "react";

export interface SyncWithScrollProps {
  children: React.ReactNode;
  className?: string;
  onScroll: (currentTop: number) => void;
}

// this component helps to sync a animation with the scroll position

export default function SyncWithScroll({
  children,
  onScroll,
  ...props
}: SyncWithScrollProps) {
  const thisElementRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const handleScroll = () => {
      // returns a value ranging from 0 to infinity, which represents the element's position from the top of the view port

      // 1 meaning element is 0px from view port top
      // 0 meaning element is [view port height] from view port top

      let t = thisElementRef?.current?.getBoundingClientRect().top;
      t = (t - window.outerHeight) * -1;
      t = t < 0 ? 0 : t;
      t = (t / window.outerHeight) * 100;
      t = t / 100;

      onScroll(t);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScroll]);

  return (
    <div ref={thisElementRef} {...props}>
      {children}
    </div>
  );
}
