"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerSections = {
  "Dashboard": "/dashboard",
  "Requests": "/dashboard/requests",
  "Billing": "/dashboard/billing"
}

export default function Header() {
  const pathname = usePathname();

  return <div className="w-full border-b-2 border-neutral-content my-8 pb-4">
    <div className="flex flex-row justify-between items-center mx-4 md:mx-16">
      <div className="flex flex-row gap-4 md:gap-8">
        {Object.keys(headerSections).map((section, i) => {
          return <Link
            key={section + i} href={headerSections[section]}
            className={`btn btn-ghost ${pathname === headerSections[section] ? "bg-base-content text-black" : ""}`}>
            {section}
          </Link>
        })}
      </div>
      <UserButton appearance={{
        "elements": {
          "avatarBox": {
            width: "4rem",
            height: "4rem",
            borderWidth: "2px",
            borderColor: "var(--bc)"
          }
        }
      }} />
    </div>
  </div>
}