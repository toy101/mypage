"use client";

import { useEffect } from "react";

const getScrollbarWidth = (): number => {
  const scrollDiv = document.createElement("div");
  scrollDiv.style.width = "100px";
  scrollDiv.style.height = "100px";
  scrollDiv.style.overflow = "scroll";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  document.body.appendChild(scrollDiv);
  const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return width;
};

export const ScrollbarSpacer = () => {
  useEffect(() => {
    const docEl = document.documentElement;
    const body = document.body;
    const scrollbarWidth = getScrollbarWidth();
    body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);

    const update = () => {
      const hasScrollbar = docEl.scrollHeight > docEl.clientHeight;
      body.classList.toggle("no-vertical-scrollbar", !hasScrollbar);
    };

    update();

    const resizeObserver = new ResizeObserver(() => update());
    resizeObserver.observe(body);
    resizeObserver.observe(docEl);
    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
};
