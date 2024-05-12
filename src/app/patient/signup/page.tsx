"use client";
import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Logo from "../../components/Logo";
import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();
  return (
    <>
      <section className="relative flex flex-wrap bg-[#D9D9D9]  lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl text-[#E61F57] font-bold sm:text-3xl">
              Sign up
            </h1>

            <p className="mt-4 text-gray-500">
              Sign up to access your travel wise account
            </p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <Input label="Email" type="email" placeholder="Enter email" />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
            />
            <Input label="Fullname" type="fullName" placeholder="Enter name" />
            <Input label="Phone" type="phone" placeholder="Enter phone" />
            <Input label="Address" type="address" placeholder="Enter address" />

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Already an account?
                <span
                  className="underline"
                  
                  onClick={() => {
                    router.push("/common/signin");
                  }}
                >
                  Sign in
                </span>
              </p>

              <Button className="text-white bg-[#E61F57]" text="Sign up" />
            </div>
          </form>
        </div>

        <div
          className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2"
          style={{
            backgroundImage: 'url("/assets/images/Sign-up.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        ></div>
      </section>
    </>
  );
}
