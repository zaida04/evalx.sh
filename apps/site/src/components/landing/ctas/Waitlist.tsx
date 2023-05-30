import { FormEvent, useCallback, useState } from "react";
import { match } from "ts-pattern";

import { CTA_FORM_URL } from "../../../util/env";

export default function CTA() {
  return (
    <div className="my-10 bg-base-200">
      <div className="hero-content flex flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join our waitlist!</h1>
          <p className="py-6">
            Receive updates and news about our product. We know how annoying
            spam is, which is why we reserve emails only for important stuff
            and never sell your information.
          </p>
        </div>
        <CTAForm />
      </div>
    </div>
  );
}

function CTAForm() {
  const [formData, setFormData] = useState({ email: "", name: "" });
  const [submitState, setSubmitState] = useState<
    "NOT" | "LOADING" | "SUBMITTED"
  >("NOT");

  const updateFormData = useCallback(
    (input: keyof typeof formData, value: string) => {
      setFormData((prev) => ({ ...prev, [input]: value }));
    },
    []
  );

  const submitForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!formData.email || !formData.name) return;
      setSubmitState("LOADING");

      try {
        const response = await fetch(CTA_FORM_URL, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            "There was an issue submitting your waitlist sign-up."
          );
        }

        setSubmitState("SUBMITTED");
        setTimeout(() => setSubmitState("NOT"), 5000);
      } catch (error) {
        console.error(error);
        window.alert("There was an issue submitting your waitlist sign-up.");
      }
    },
    [formData]
  );

  return (
    <div className="card mx-8 w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
      <form className="card-body" onSubmit={submitForm}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="you@email.com"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="input-bordered input"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => updateFormData("name", e.target.value)}
            className="input-bordered input"
          />
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-stone-700"
            disabled={submitState === "SUBMITTED"}
          >
            {match(submitState)
              .with("NOT", () => "Join Waitlist")
              .with("LOADING", () => "Loading...")
              .with("SUBMITTED", () => "Submitted! See you soon!")
              .run()}
          </button>
        </div>
      </form>
    </div>
  );
}
