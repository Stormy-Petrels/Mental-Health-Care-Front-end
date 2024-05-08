import Image from "next/image";
import Input from "../components/Input";
import Signup from "./patient/Signup";
export default function Home() {
  return (
    <>
     {/* <Input label="Email" type="email" placeholder="Enter email" /> */}
      <Signup />
    </>
   
  );
}
