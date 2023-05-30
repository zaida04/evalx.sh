import Link from "next/link";

import { genNav } from "../../util/consts";

export default function Header() {
  return <>
    <div className="flex-1 px-2 mx-2">
      <h2 className="font-bold">
        <Link href="/">
          EvalX
        </Link>
      </h2>
    </div>
    <div className="flex-none hidden lg:block">
      <ul className="menu space-x-8 menu-horizontal">
        {genNav}
        <button className="px-6 border-2 border-stone-500 text-white rounded-xl hover:bg-stone-700 font-medium transition-colors">
          <Link href="/dashboard">
            Get Started
          </Link>
        </button>
      </ul>
    </div>
  </>
}