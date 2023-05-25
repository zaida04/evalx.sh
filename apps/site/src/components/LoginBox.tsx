import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginBox() {
  return <div className="max-w-lg bg-slate-800 p-12 rounded-xl flex flex-col space-y-4">
    <SocialProvider icon={faGithub} text="Continue with GitHub" />
    <SocialProvider icon={faGoogle} text="Continue with Google" />
  </div>
}

function SocialProvider(props: { icon: IconProp, text: string }) {
  return <div className="flex flex-row space-x-4 rounded-3xl border-stone-600 bg-slate-900 py-3 px-6 items-center shadow-lg hover:cursor-pointer transition-all hover:bg-slate-950 hover:shadow-xl">
    <FontAwesomeIcon icon={props.icon} className="w-10" />
    <p>{props.text}</p>
  </div>
}