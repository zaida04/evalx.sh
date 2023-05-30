import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/landing/Layout";

export default function ContactUsEnterprise() {
  return <Layout>
    <div className="my-16 flex items-center justify-center w-full h-fit">
      <form className="w-full max-w-5xl bg-base-300 p-8 md:p-16 rounded-xl">
        <h3 className="pb-8">Contact Us For Enterprise</h3>
        <div className="flex flex-col md:flex-row mb-6">
          <Input id="first-name" label="First Name" placeholder="Jane" />
          <Input id="last-name" label="Last Name" placeholder="Doe" />
          <Input id="email" label="Email" placeholder="jane@email.com" />
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Select
              label="Estimated Userbase Sizes"
              options={[
                "50,000-100,000",
                "100,000-250,000",
                "250,000-500,000",
                "500,000-1,000,000",
                "1,000,000+"
              ]}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <TextArea label="Your Custom Needs" id="custom-needs" />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  </Layout>
}

function Label(props: { children: React.ReactNode }) {
  return <label className="block uppercase tracking-wide text-xs font-bold mb-2">
    {props.children}
  </label>
}

function Select(props: { label: string; options: string[]; }) {
  return <>
    <Label>{props.label}</Label>
    <div className="relative">
      <select className="text-black block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        {props.options.map(option => <option key={option}>{option}</option>)}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FontAwesomeIcon icon={faChevronDown} className="w-4" />
      </div>
    </div>
  </>
}

function Input(props: { label: string; id: string; placeholder: string }) {
  return <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <Label>{props.label}</Label>
    <input className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id={props.id} type="text" placeholder={props.placeholder} />
  </div>
}

function TextArea(props: { label: string; id: string; }) {
  return <div className="w-full px-3">
    <Label>{props.label}</Label>
    <textarea rows={8} className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" />
    <p className="text-white text-xs italic">Make it as long and as crazy as you'd like</p>
  </div>
}