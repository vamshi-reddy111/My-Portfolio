import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = document.querySelector<HTMLElement>("[data-cursor]");
    const cursorDot = document.querySelector<HTMLElement>("[data-cursor-dot]");
    if (!cursor || !cursorDot) return;

    let frame = 0;
    let x = -100;
    let y = -100;
    let targetX = x;
    let targetY = y;

    const render = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursorDot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const move = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };
    const setHover = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest("a, button, .project, .stat-card")) document.body.classList.add("cursor-hover");
    };
    const clearHover = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest("a, button, .project, .stat-card")) document.body.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", setHover);
    document.addEventListener("mouseout", clearHover);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", setHover);
      document.removeEventListener("mouseout", clearHover);
      document.body.classList.remove("cursor-hover");
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span className="cursor-dot" data-cursor-dot aria-hidden="true" />
      <span className="cursor-ring" data-cursor aria-hidden="true" />
    </>
  );
}
