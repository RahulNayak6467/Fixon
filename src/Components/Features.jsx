import {
  ChartColumnIncreasing,
  IndianRupee,
  ChartNoAxesCombined,
} from "lucide-react";
function Features() {
  return (
    <div className="w-[90%] bg-bg-secondary mx-auto h-25  mb-5 font-heading text-text-secondary rounded-2xl mt-5 ">
      <div className="flex gap-4 justify-between p-6">
        <div>
          <div className="flex gap-2 items-center">
            <ChartColumnIncreasing className="text-purple-end" size={20} />
            <p className="text-white text-md ">Real-time tracking</p>
          </div>
          <p className="text-text-secondary text-sm font-bold">
            Instant updates and portfolio refresh
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <IndianRupee className="text-purple-end" size={20} />
            <p className="text-white text-md">Portfolio analytics</p>
          </div>
          <p className="text-text-secondary text-sm font-bold">
            P&L, allocation, performance charts
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <ChartNoAxesCombined className="text-purple-end" size={20} />
            <p className="text-white text-md">Smart insights</p>
          </div>
          <p className="text-text-secondary text-sm font-bold">
            Alerts, trends, and key moves
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
