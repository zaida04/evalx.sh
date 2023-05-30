import Header from "../../components/dashboard/Header";

export default function Layout(props: { children: React.ReactNode }) {
  return <div className="flex flex-col">
    <Header />
    <div className="flex justify-center h-screen">
      <div className="w-full md:w-3/4">
        {props.children}
      </div>
    </div>
  </div>
}