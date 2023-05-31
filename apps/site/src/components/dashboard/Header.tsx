import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return <div className="border-b-2 border-neutral-content mx-4 md:mx-16 my-8 pb-4">
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 md:gap-8">
        <p className="btn btn-ghost">Dashboard</p>
        <p className="btn btn-ghost">Billing</p>
        <p className="btn btn-ghost">Requests</p>
      </div>
      <UserButton />
    </div>
  </div>
}