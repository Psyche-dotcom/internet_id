import Image from "next/image";

import React from "react";
import idIcon from "../public/idn.png";

import Layout from "../components/layout/Layout";
const documentation = () => {
  return (
    <Layout>
      <main className="lg:flex h-screen w-screen overflow-scroll lg:overflow-hidden lg:pt-28">
        <section className="w-1/4 px-10 py-10 bg-cardBg hidden lg:block">
          <div className=" flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-col gap-4  ">
                <div className="flex gap-4 bg-white  px-3 py-3 rounded">
                  <Image src={idIcon} alt="identity" />
                  <p className="text-deepBlue">Overview</p>
                </div>

                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">* Service Description</p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">* Data Model</p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">* Technology</p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">* Development</p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">* Development Tools </p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">* Interface and Services</p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">* Access</p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">Authentication</p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">Authorization</p>
                </div>
                <div className="flex gap-4  px-3 py-3 rounded">
                  <p className="text-deepBlue">Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-3/4 px-5 py-10 lg:px-20 lg:py-20 bg-deepBlue overflow-scroll flex flex-col gap-6">
          <div className="flex flex-col gap-4 pt-16 lg:pt-0">
            <h1 className="font-bold text-5xl font-sans text-white">
              Overview
            </h1>
            <p className="text-base font-body text-white">
              The internetID verification API is a simple one endpoint API. It
              can be accessed at
              https://internetid.geebee.engineer/api/v1/verify/. All you need to
              do is to make a request with your the API keys provided to you
              when you registered your product. Service Description
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className=" text-3xl font-sans text-white">
              Service Description
            </h3>
            <p className="text-base font-body text-white">
              The internetID verification API provides your business with real
              verifiable human beings which can allow you to access the reality
              of your business and how to improve it. The internetID offers a
              one time sign up verification for your customers. Internet ids
              provided to users are the only things that are required to verify
              your users as all users that have registered for our service have
              already been verified by one or more official methods which
              include but is not limited to National Identity Number, Bank
              Verification Number, International Passport.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className=" text-3xl font-sans text-white">Data Model</h3>
            <p className="text-base font-body text-white">
              All data collected are safely stored and users can feel safe that
              their data is well protected. Users do not need to provide
              sensitive data to multiple websites as verification can be done
              with one call and their internetID.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className=" text-3xl font-sans text-white">Technology</h3>
            <p className="text-base font-body text-white">
              The platform was developed with modern and secure technology for
              convenience, efficiency, performance and data safety.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className=" text-3xl font-sans text-white">Development</h3>
            <p className="text-base font-body text-white">
              The current API is the version 1 and updates would be added
              frequently and significant changes would be communicated
              effectively. How to Use the InternetID verify endpoint. Sign up as
              a developer. Your account would be created just like a regular
              user but you would have access to your developer dashboard and a
              private key. Verify your account by signing in with your
              internetID Go to your developer dashboard and click on `add a
              product` Register your product/service with the required fields
              Receive your public key for authorizing all requests sent from
              that product/service and that’s how simple it is Access the
              endpoint documentation to see examples of how to make a request
              and corresponding responses
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default documentation;
