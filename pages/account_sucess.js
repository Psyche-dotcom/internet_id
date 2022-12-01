import { ArrowBackIosNew } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/logo.png";

const account_sucess = () => {
  const router = useRouter();
  return (
    <main className="lg:flex bg-signBg ">
      <section className="flex-1 py-16 h-screen  w-11/12 mx-auto lg:px-10 lg:py-5 bg-signBg">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <ArrowBackIosNew className="hidden lg:block" />
          </Link>{" "}
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className="logo lg:hidden self-start"
            />
          </Link>
          <div className="flex flex-col  gap-20 lg:w-4/5 lg:mx-auto">
            <div className="flex flex-col gap-8 text-center mt-36 items-center ">
              <h1 className="text-2xl lg:text-3xl font-sans text-deepBlue">
                Congratulation
              </h1>
              <p className="text-greyLight">
                Your internet id has been created has been created sucessfully.
                Check your mail to copy your login credentials
              </p>
              <button
                className="text-left xl:mt-10 mr-12"
                onClick={() => router.push("/login")}
                type="button"
              >
                <span
                  // onClick={login}
                  className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                  aria-label="Sign_in"
                >
                  {" "}
                  Login to your account
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden lg:block flex-1 py-10 h-screen  w-11/12 mx-auto lg:px-10 lg:py-5 bg-deepBlue ">
        <div className="w-4/5 mx-auto ">
          <Image src={Logo} className="logo" alt="logo" />
          <div className="lg:mt-40 xl:mt-48 2xl:mt-56">
            <h1 className=" text-white lg:text-5xl lg:leading-normal xl:text-6xl  xl:leading-snug font-bold">
              Access your dashboard & verify an identity using Internet ID
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default account_sucess;
