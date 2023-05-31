import { UserButton } from "@clerk/nextjs";

const headerSections = {
  "Dashboard": "/dashboard",
  "Billing": "/dashboard/billing",
  "Requests": "/dashboard/requests"
}

export default function Header() {
  return <div className="w-full border-b-2 border-neutral-content my-8 pb-4">
    <div className="flex flex-row justify-between items-center mx-4 md:mx-16">
      <div className="flex flex-row gap-4 md:gap-8">
        {Object.keys(headerSections).map((section, i) => {
          return <a key={i} className="btn btn-ghost">{section}</a>
        })}
      </div>
      <UserButton />
    </div>
  </div>
}