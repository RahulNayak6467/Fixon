import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import MarketOverview from "./Components/Charts/MarketOverview";
import TradingViewWidget from "./Components/Charts/TradingViewWidget";
// import TradingViewWidget from "./Components/Charts/TradingViewWidget";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden mb-6">
      {/* <Navbar />
      <Hero /> */}
      <div className="h-[550px] w-[400px] border-2 border-bg-secondary rounded-2xl ml-5 mt-5 ">
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default App;
