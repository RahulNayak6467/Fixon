import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import MarketOverview from "./Components/Charts/MarketOverview";
import TradingViewWidget from "./Components/Charts/TradingViewWidget";
import Heatmap from "./Components/Charts/Heatmap";
import News from "./Components/Charts/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import TradingViewWidget from "./Components/Charts/TradingViewWidget";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "marketoverview",
        element: <TradingViewWidget />,
      },
    ],
  },
]);
function App() {
  return (
    // <div className="min-h-screen overflow-x-hidden mb-6">
    //   {/* <Navbar />
    //   <Hero /> */}
    //   <div className="flex">
    //     <div className="h-[550px] w-[400px] border-2 border-bg-secondary rounded-2xl ml-5 mt-5 ">
    //       <TradingViewWidget />
    //     </div>
    //     {/* <div className="max-h-[550px] w-[95%] border-2 border-bg-secondary   rounded-2xl ml-5 mt-5 overflow-hidden ">
    //       <Heatmap />
    //     </div> */}
    //   </div>
    //   <div className="w-[400px] h-[550px]">
    //     <News />
    //   </div>
    // </div>
    <RouterProvider router={routes} />
  );
}

export default App;
