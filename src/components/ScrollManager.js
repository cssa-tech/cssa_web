import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";

/*
 * The app scrolls inside .main-content, not the window. This component
 * resets that scroll on every page change and shows a back-to-top button.
 */
const getScroller = () => document.querySelector(".main-content");

const ScrollManager = () => {
  const { pathname } = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const scroller = getScroller();
    if (scroller) scroller.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    const scroller = getScroller();
    if (!scroller) return;
    const onScroll = () => setShowTop(scroller.scrollTop > 700);
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to_top ${showTop ? "to_top-visible" : ""}`}
      onClick={() => getScroller()?.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="回到顶部"
    >
      <FiArrowUp />
    </button>
  );
};

export default ScrollManager;
