import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;

    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
      );
    });

    document.addEventListener("click", () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add("expand");

      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove("expand");
      }, 500);
    });
  }, []);

  return <div className="cursor z-50" ref={cursorRef}></div>;
}
