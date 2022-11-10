import React from "react";
import Card from "../simpleComponent/Card";
import idIcon from "../../public/id.svg";
import kyc from "../../public/kyc.svg";
const Verify = () => {
  return (
    <section className="py-20 md:py-30 lg:py-40 Verify">
      <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-white font-sans text-2xl text-center md:2/3 lg:w-1/2 2xl:w-1/3 leading-snug md:text-4xl md:leading-loose lg:leading-snug xl:text-5xl xl:leading-snug font-medium">
            Verify and Assess your Customers in no Time
          </h1>
          <div className="flex flex-col gap-4 items-center xl:flex-row">
            <p className="text-whiteTran font-body leading-snug text-base ">
              * Prevent fraud by asking & validating the required information
            </p>
            <p className="text-whiteTran font-body leading-snug text-base ">
              * Offer a delightful user experience
            </p>
            <p className="text-whiteTran font-body leading-snug text-base ">
              * Verify any user in under 3 minutes
            </p>
          </div>
          <div className="flex flex-col gap-16 lg:flex-row lg:justify-around ">
            <Card
              iconTitle={"Comprehensive Dashboard"}
              title="Comprehensive Dashboard"
              icon={idIcon}
              BookDemo={true}
              description="View all users you've automatically verified and manually review a case if needed."
            />
            <Card
              iconTitle={"Easy Integration"}
              title="Easy Integration"
              icon={kyc}
              BookDemo={true}
              description="Smoothly integrate with web and mobile platforms through our API."
            />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Verify;
