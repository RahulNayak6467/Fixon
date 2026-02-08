// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "exchange": "US",
          "colorTheme": "dark",
          "dateRange": "12M",
          "showChart": true,
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": true,
          "showSymbolLogo": false,
          "showFloatingTooltip": false,
          "plotLineColorGrowing": "rgba(8, 153, 129, 1)",
          "plotLineColorFalling": "rgba(242, 54, 69, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "#DBDBDB",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
          "width": "100%",
          "height": "100%"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="h-[550px] w-[400px] border-2 border-bg-secondary rounded-2xl ml-5 mt-5">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        {/* <div className="tradingview-widget-copyright"> */}
        {/* <a
          href="https://www.tradingview.com/markets/stocks-usa/"
          rel="noopener nofollow"
          target="_blank"
          >
          <span className="blue-text">Stocks today</span>
          </a>
          <span className="trademark"> by TradingView</span> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
