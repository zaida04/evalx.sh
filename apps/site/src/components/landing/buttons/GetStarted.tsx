import Link from "next/link";

export default function GetStarted() {
  return <Link href="/dashboard">
    <button className="btn bg-stone-700">
      Get Started
    </button>
  </Link>
}