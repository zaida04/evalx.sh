import Header from "../../components/dashboard/Header";

export default function Layout(props: { children: React.ReactNode }) {
  return <div className="flex flex-col">
    <Header />
    <div className="flex md:justify-center h-full">
      <div className="md:w-3/4">
        {props.children}
      </div>
    </div>
  </div>
}