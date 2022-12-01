import Image from "next/image";
import Link from "next/link";
import React from "react";
import Phone from "../../public/phone.png";

const CTA = () => {
  return (
    <section className="py-20 md:py-30 lg:py-40 bg-lightBlue CTA">
      <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
        <div className="flex flex-col items-center lg:flex-row gap-8 justify-between">
          <div className="lg:w-3/5">
            <Image src={Phone} alt="phone" data-aos="fade-right" />
          </div>
          <article
            className="flex flex-col gap-4 lg:gap-8 w-full  lg:w-2/4"
            data-aos="fade-left"
          >
            <h1 className="text-white font-sans text-2xl leading-snug md:text-4xl md:leading-loose lg:leading-snug xl:text-5xl xl:leading-snug font-medium">
              Protect your business with Internet ID
            </h1>

            <p className="text-whiteTran font-body leading-snug text-base xl:text-2xl xl:leading-relaxed">
              Transform how you do business, secure your resources with internet
              ID, elimate exposing information to scammers and bot
            </p>
            <div className=" mt-4 lg:mt-8 flex gap-16">
              <Link href="/sign_up">
                <span
                  className="text-1xl text-white bg-button px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNew"
                  aria-label="Sign_up"
                >
                  Sign up{" "}
                </span>
              </Link>
              <Link href="/demo">
                <span
                  className=" text-1xl text-white bg-deepBlue px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNL"
                  aria-label="Book-Demo"
                >
                  Book a Demo{" "}
                </span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CTA;
