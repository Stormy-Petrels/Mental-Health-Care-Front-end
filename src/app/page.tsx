import Image from "next/image";
import Input from "./components/Button";
import Signup from "./patient/signup/page.jsx";
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
