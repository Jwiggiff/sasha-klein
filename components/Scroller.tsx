"use client";

import { RefObject, useEffect, useRef, useState, WheelEvent } from "react";
import styles from "./Scroller.module.scss";

export default function Scroller({
  children,
  drift,
}: {
  children: React.ReactNode[];
  drift?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [drifting, setDrifting] = useState(true);
  const translates = useRef<number[]>([]);
  let height: number;

  const scroll = (dy: number) => {
    childrenRefs.current.forEach((el, i) => {
      translates.current[i] -= dy;
      let duration = 200;

      if (translates.current[i] < 0) {
        translates.current[i] += height;
        duration = 0;
      }

      if (translates.current[i] > height) {
        translates.current[i] -= height;
        duration = 0;
      }

      el!.animate(
        {
          transform: `translateY(${translates.current[i]}px)`,
        },
        {
          duration: duration,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
    });
  };

  useEffect(() => {
    height = childrenRefs.current.reduce(
      (h, el) => h + el!.getBoundingClientRect().height,
      0
    );

    translates.current = childrenRefs.current.map(
      (el, i) => i * el!.getBoundingClientRect().height
    );

    childrenRefs.current.forEach((el, i) =>
      el!.animate(
        { transform: `translateY(${translates.current[i]}px)` },
        { duration: 0, fill: "forwards" }
      )
    );

    containerRef.current!.scrollTop = height / 2 + (Math.random() - 0.5) * 500;
  }, [containerRef, childrenRefs]);

  useEffect(() => {
    if (drift) {
      let int: NodeJS.Timer;
      if (drifting) int = setInterval(() => scroll(drift), 1000 / 60);
      else clearInterval(int!);

      return () => clearInterval(int);
    }
  }, [drifting]);

  return (
    <div
      // onMouseEnter={() => setDrifting(false)}
      // onMouseLeave={() => setDrifting(true)}
      ref={containerRef}
      className={styles.scroller}
      onWheel={(e: WheelEvent<HTMLDivElement>) => scroll(e.deltaY)}
    >
      {children.map((child, index) => (
        <div
          data-key={index}
          ref={(el) => (childrenRefs.current[index] = el)}
          key={index}
          className={styles.child}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
