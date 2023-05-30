import CreditBalance from "../../components/dashboard/CreditBalance";
import UsageMeter from "../../components/dashboard/UsageMeter";

export default function Page() {
  return <div className="container m-auto grid grid-cols-3 grid-rows-6 gap-16 h-full">
    <div className="tile bg-slate-500 col-span-2 row-span-3">
      <h2 className="tile-marker">GRAPH HERE</h2>
    </div>
    <div className="tile border-[1px] border-base-content rounded-2xl row-span-2">
      <UsageMeter />
    </div>
    <div className="border-[1px] border-base-content rounded-2xl row-span-2">
      <CreditBalance />
    </div>
    <div className="tile bg-slate-600 col-span-2">
      <h1 className="tile-marker">Requests table here</h1>
    </div>
  </div>
}