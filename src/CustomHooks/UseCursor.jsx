import { useEffect, useRef } from "react";
function useCursor() {
  const x = useRef(null);
  const y = useRef(null);
  const moveCursor = (e, cursor) => {
    x.current = e.clientX;
    y.current = e.clientY;
    cursor.style.left = `${x.current}px`;
    cursor.style.top = `${y.current}px`;
  };
  useEffect(() => {
    const body = document.querySelector("body");
    const cursor = document.querySelector(".cursor");
    console.log(cursor);
    body.addEventListener("mousemove", function (e) {
      moveCursor(e, cursor);
    });
  }, []);
}

export default useCursor;
