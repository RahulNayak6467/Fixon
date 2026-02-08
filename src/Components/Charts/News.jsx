// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function News() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "displayMode": "adaptive",
          "feedMode": "market",
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en",
          "market": "stock",
          "width": 400,
          "height": 550
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container bg-bg-secondary"
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        {/* <a
          href="https://www.tradingview.com/news/top-providers/tradingview/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Top stories</span>
        </a>
        <span className="trademark"> by TradingView</span> */}
      </div>
    </div>
  );
}

export default memo(News);
