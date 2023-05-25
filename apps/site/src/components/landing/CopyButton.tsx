import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CopyButton(props: { copyText: string }) {
  const [copied, setCopied] = useState(false);

  return <p className="absolute m-4 hover:cursor-pointer">
    <FontAwesomeIcon
      className="w-4 text-neutral-content hover:text-primary-content"
      onClick={() => {
        window.navigator.clipboard.writeText(props.copyText);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1_500);
      }}
      icon={copied ? faCheck : faCopy}
    />
  </p>
}