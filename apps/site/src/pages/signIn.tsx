import Layout from "../components/landing/Layout";
import LoginBox from "../components/LoginBox";

export default function SignIn() {
  return <Layout>
    <div className="flex flex-col h-screen w-full">
      <div className="mx-auto my-16">
        <h1 className="mx-4">Sign In</h1>
        <LoginBox />
      </div>
    </div>
  </Layout>
}