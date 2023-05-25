import { genNav } from "../../util/consts";

export default function Sidebar() {
  return <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    <ul className="menu p-8 w-80 bg-base-100">
      <h2 className="mb-8 font-bold">EvalX</h2>
      {genNav}
      <button className="py-4 border-2 border-stone-500 bg-base-200 font-medium text-white rounded-xl hover:bg-stone-700 transition-colors">Get Started</button>
    </ul>
  </div>
}
