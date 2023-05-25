import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const footerLinks = {
  "Terms of Service": "/terms-of-service",
  "Privacy Policy": "/privacy-policy",
};

const links = Object.keys(footerLinks).map((key) => (
  <Link className="link-hover link" key={key} href={footerLinks[key]}>
    {key}
  </Link>
));

export default function Footer() {
  return (
    <footer className="footer footer-center rounded bg-base-100 p-10 text-base-content">
      <div className="flex flex-col">
        <div className="flex flex-col space-x-0 text-lg md:flex-row md:space-x-8">
          {links}
        </div>
        <div className="flex flex-col space-x-0 text-lg md:flex-row md:space-x-8">
          <a className="link-hover link" href="mailto:support@evalx.sh">Need help? Reach us at support@evalx.sh</a>
        </div>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/evalxsh">
            <FontAwesomeIcon className="w-8" icon={faTwitter} />
          </a>
        </div>
      </div>
      <div>
        <p className="text-sm">
          Copyright © 2023 - All right reserved by{" "}
          <a
            href="https://github.com/yoki-labs"
            className="link-hover link font-bold"
          >
            Yoki Labs
          </a>
        </p>
      </div>
    </footer>
  );
}
