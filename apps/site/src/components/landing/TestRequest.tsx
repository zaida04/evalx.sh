import { useState } from "react";

import CopyButton from "./buttons/CopyButton";
import { codeSnippets } from "../../util/consts";
import { css } from "../../util/css";
const outputString = `{ "output": "Hello world!" }`;

export default function TestRequest() {
  const [activeTab, setActiveTab] = useState("Curl");
  // const codeBoxRef = useRef<HTMLDivElement>(null);

  const tabClicked = (tab: string) => {
    return () => setActiveTab(tab);
  };

  // useEffect(() => {
  //   if (!codeBoxRef) return;
  //   codeBoxRef.current.style.height = "0";
  //   codeBoxRef.current.style.height = codeBoxRef.current.scrollHeight + "px";
  // }, [activeTab]);

  return (
    <div className="p-8">
      <h3 className="font-medium w-fit">Input</h3>
      <div className="tabs my-4">
        {Object.keys(codeSnippets).map((tab) => (
          <a
            key={tab}
            onClick={tabClicked(tab)}
            className={css(
              "tab-bordered tab",
              activeTab === tab ? "tab-active" : ""
            )}
          >
            {tab}
          </a>
        ))}
      </div>
      <pre>
        <CopyButton copyText={codeSnippets[activeTab]} />
        <div
          key={activeTab}
          // ref={codeBoxRef}
          className="textarea w-full overflow-y-hidden border-[1px] border-slate-950 px-6 md:px-10"
        >{codeSnippets[activeTab]}</div>
      </pre>

      <h3 className="my-4 font-medium w-fit">Output</h3>
      <div className="mockup-code bg-white dark:bg-black">
        <pre data-prefix="$"><code>{outputString}</code></pre>
      </div>
    </div>
  );
}
