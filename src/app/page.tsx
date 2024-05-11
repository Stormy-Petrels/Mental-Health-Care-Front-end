import Image from "next/image";
import Input from "../components/Input";
import Signup from "./patient/Signup";
import Header from "./layouts/patient/Header";
import Footer from "./layouts/patient/Footer";
export default function Home() {
  return (
    <>
     {/* <Input label="Email" type="email" placeholder="Enter email" /> */}
      {/* <Signup /> */}
      <Header />
      <Footer />
    </>
   
  );
}
