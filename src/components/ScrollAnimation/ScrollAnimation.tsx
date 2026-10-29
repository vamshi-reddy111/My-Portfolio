import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type ScrollAnimationProps = {
  animateIn: string;
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
};

export default function ScrollAnimation({
  animateIn,
  children,
  delay = 0,
  style,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? `animated ${animateIn}` : undefined}
      style={{
        animationDelay: `${delay}ms`,
        opacity: isVisible ? undefined : 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
