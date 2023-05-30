import Link from "next/link"

import Layout from "../components/landing/Layout"
import PricingTier from "../components/landing/PricingTier"

export default function Pricing() {
  return <Layout>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
      <PricingTier
        name="Hobby"
        pricing="$5"
        description="Perfect for those starting out with the service or those that have low usage needs."
        features={["3,000 requests monthly", "Dashboard with logging", "Code-caching"]}
        signUpButton={<SignUpButton href="/dashboard" />}
      />
      <PricingTier
        name="Pro"
        pricing="$10"
        description="For users with higher usage needs that don't want to break the bank. Medium sized applications."
        features={["15,000 requests monthly", "Everything from Hobby", "Premium Support"]}
        signUpButton={<SignUpButton href="/dashboard" />} />
      <PricingTier
        name="Custom"
        pricing="Custom"
        description="Perfect for companies or organizations serving hundreds of thousands of users per day."
        features={["∞ requests monthly", "Everything from Pro", "Custom Features"]}
        signUpButton={<ContactUsButton />}
      />
    </div>
  </Layout>
}

function SignUpButton(props: { href: string }) {
  return <Link href={props.href}>
    <button className="btn bg-stone-800 text-white w-full">Get Started</button>
  </Link>
}

function ContactUsButton() {
  return <Link href="/contact-us-enterprise">
    <button className="w-full btn bg-stone-800 text-white">Contact Us</button>
  </Link>
}