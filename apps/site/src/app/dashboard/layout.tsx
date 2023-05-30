import Header from "../../components/dashboard/Header";

export default function Layout(props: { children: React.ReactNode }) {
  return <div className="flex flex-col">
    <Header />
    <div className="flex justify-center h-screen">
      <div className="md:w-2/3">
        {props.children}
      </div>
    </div>
  </div>
}