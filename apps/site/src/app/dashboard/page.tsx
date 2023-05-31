import CreditBalance from "../../components/dashboard/CreditBalance";
import Graph from "../../components/dashboard/Graph";
import RecentRequests from "../../components/dashboard/RecentRequests";
import UsageMeter from "../../components/dashboard/UsageMeter";

export default function Page() {
  return <div className="container md:m-auto grid lg:grid-cols-3 lg:grid-rows-3 gap-16 h-full">
    <div className="md:col-span-2 md:row-span-1">
      <Graph />
    </div>
    <div className="border-2 border-base-content rounded-2xl md:row-span-1">
      <UsageMeter />
    </div>
    <div className="border-2 border-base-content rounded-2xl md:row-span-1">
      <CreditBalance />
    </div>
    <div className="md:col-span-2">
      <h3 className="mb-4">Recent Requests</h3>
      <RecentRequests />
    </div>
  </div>
}