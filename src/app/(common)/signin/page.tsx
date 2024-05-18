"use client";
import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Image from "../../components/Image";
import {useState} from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
interface LoginInput {
  email: string;
  password: string;
  errorList: {
    email?: string;
    password?: string;
  };
}
export default function Signin() {
  const router = useRouter();
  const [loginInput, setLoginInput] = useState<LoginInput>({
    email: "",
    password: "",
    errorList: {},
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/sign-in`, {
        email: loginInput.email,
        password: loginInput.password,
      });

      if (response.data.message === "Sign in Successfully") {
        // Lưu thông tin người dùng vào localStorage hoặc cookie
        localStorage.setItem("user", JSON.stringify(response.data.payload));
        router.push("/");
      } else {
        setLoginInput({
          ...loginInput,
          errorList: response.data.errors,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <section className="relative flex flex-wrap bg-[#D9D9D9]  lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-3xl text-[#E61F57] font-bold sm:text-3xl">
              Sign in
            </h1>

            <p className="mt-4 text-gray-500">
              Sign in to access your travel wise account
            </p>
          </div>

          <form onSubmit={loginSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <Input
            type="email"
            name="email"
            label="Email"
            value={loginInput.email}
            onChange={handleInput}
          />
          {loginInput.errorList.email && (
            <span>{loginInput.errorList.email}</span>
          )}
            <Input
            type="password"
            name="password"
            label="Password"
            value={loginInput.password}
            onChange={handleInput}
          />
          {loginInput.errorList.password && (
            <span>{loginInput.errorList.password}</span>
          )}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Dont have the account?
                <span
                  className="underline"
                  onClick={() => {
                    router.push("/patient/signup");
                  }}
                >
                  Sign up
                </span>
              </p>

              <Button type="submit" className="text-white bg-[#E61F57]" text="Sign in" />
            </div>
          </form>
        </div>

        <div
          className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2"
          style={{
            backgroundImage: 'url("/assets/images/Sign-in.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        ></div>
      </section>
    </>
  );
}
