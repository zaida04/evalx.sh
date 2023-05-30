export interface PricingTierProps {
  name: string;
  pricing: string;
  description: string;
  features: string[];
  signUpButton: React.ReactNode;
}

export default function PricingTier(props: PricingTierProps) {
  return <div key={props.name} className="flex flex-col justify-between rounded-2xl bg-base-300 border-2 border-stone-700 p-8 sm:p-10 shadow-xl">
    <div>
      <h3 className="text-lg font-semibold leading-8 tracking-tight">
        {props.name}
      </h3>
      <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-white">
        {props.pricing}
        <span className="text-lg font-semibold leading-8 tracking-normal text-gray-300">/mo</span>
      </div>
      <p className="mt-6 text-base leading-7 text-white">{props.description}</p>
    </div>
    <div className="flex flex-col items-center mt-8 mb-4">
      <ul className="list-disc text-xl">
        {props.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      {props.signUpButton}
    </div>
  </div>

  // return <div key={props.name} className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
  //   <div className="p-8 sm:p-10">
  //     <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
  //       {props.name}
  //     </h3>
  //     <div className="mt-4 flex items-baseline text-3xl font-bold tracking-tight text-gray-900">
  //       {props.pricing}
  //       <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/mo</span>
  //     </div>
  //     <p className="mt-6 text-base leading-7 text-gray-600">{props.description}</p>
  //   </div>
  //   <div className="flex flex-1 flex-col p-2">
  //     <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
  //       <ul role="list" className="space-y-6">
  //         {props.features.map((feature) => (
  //           <li key={feature} className="flex items-start">
  //             <p className="ml-3 text-sm leading-6 text-gray-600">{feature}</p>
  //           </li>
  //         ))}
  //       </ul>
  //       <div className="mt-8">
  //         <a
  //           className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
  //         >
  //           Get started today
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}