import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout(props: { children: React.ReactNode }) {
  return <div className="drawer bg-base-200 h-fit">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col my-4 md:mx-32 mx-4">
      <div className="w-full navbar">
        <Header />
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <FontAwesomeIcon className="text-xl w-8 h-8 drawer-button" icon={faBars} />
          </label>
        </div>
      </div>
      {props.children}
    </div>
    <Footer />
    <Sidebar />
  </div>
}


