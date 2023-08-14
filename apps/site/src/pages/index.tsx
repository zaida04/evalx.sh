
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

import GetStarted from "../components/landing/buttons/GetStarted";
import LikeWhatYouSeeCTA from "../components/landing/ctas/LikeWhatYouSee";
import WaitlistCTA from "../components/landing/ctas/Waitlist";
import Layout from "../components/landing/Layout";
import TestRequest from "../components/landing/TestRequest";
import { description } from "../util/consts";

export default function Landing() {
  const { isSignedIn } = useUser();

  return (
    <Layout>
      <LandingSection>
        <div className="alert flex flex-row border-2 border-yellow-900 mb-10">
          <span className="text-xs md:text-md">EvalX is in-progress and not production ready yet. Expect bugs.</span>
        </div>
        <h1 className="text-7xl font-bold">Code. Post. Done.</h1>
        <p className="py-6 text-xl">{description}</p>
        <div className="flex flex-row justify-center space-x-4">
          {
            isSignedIn ?
              (
                <Link href="/dashboard">
                  <button className="btn bg-stone-800 text-white">Go to Dashboard</button>
                </Link>
              ) :
              (
                <>
                  <GetStarted />
                  <a href="#try-it-out">
                    <button className="btn bg-stone-800 text-white">Try it out</button>
                  </a>
                </>
              )
          }
        </div>
      </LandingSection>
      <div className="divider" />
      <div className="mb-20 mt-10 flex flex-col items-center justify-center">
        <h1 className="mb-10 font-medium">3-step workflow</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <LandingStep
            title="Code"
            description="Every request starts off with getting the code from your users. We support various popular languages & runtimes and are working on more."
          />
          <LandingStep
            title="Post"
            badge="Try it out"
            description="Use a simple POST HTTP request to send the code right over to our runners. Whether it's from a browser or app, we've got you covered."
          />
          <LandingStep
            title="Done"
            description="We handle the computation, security, and scalability of running your code, so you can focus on what matters: building great software."
          />
        </div>
        <div className="w-full" id="try-it-out">
          <TestRequest />
          {!isSignedIn && <LikeWhatYouSeeCTA />}
        </div>
        <div className="divider" />
        <WaitlistCTA />
      </div>
    </Layout >
  );
}

function LandingSection(props: { children: React.ReactNode }) {
  return (
    <div className="hero h-[75vh]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">{props.children}</div>
      </div>
    </div>
  );
}

function LandingStep(props: {
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="w-70 flex flex-col rounded-xl bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="flex items-center text-3xl font-semibold md:text-5xl">
          {props.title}.
          {props.badge && (
            <span className="text-md badge ml-2 bg-secondary p-3">
              <a href="#try-it-out">{props.badge}</a>
            </span>
          )}
        </h2>
        <div className="divider" />
        <p>{props.description}</p>
      </div>
    </div>
  );
}
