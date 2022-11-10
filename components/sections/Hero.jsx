import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "../../public/heroImg.png";
const Hero = () => {
  return (
    <section className="heroBg">
      <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
        <div className="flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-4 pt-40 pb-20 lg:pt-60 lg:pb-40  justify-between">
          <article className="flex flex-col gap-4 lg:gap-8 w-full  lg:w-2/4">
            <h1 className="text-white font-sans text-2xl leading-snug md:text-4xl md:leading-loose lg:leading-snug xl:text-5xl xl:leading-snug 2xl:text-6xl  2xl:leading-normal font-medium">
              Transform Digital Identity with Internet Identification Number{" "}
            </h1>
            <p className="text-whiteTran font-body leading-snug text-base xl:text-2xl xl:leading-relaxed">
              Ensure every user has the correct level of access for optimal
              security and efficient identity management.
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
                  className=" text-1xl text-white bg-buttonBlue px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNL"
                  aria-label="Book-Demo"
                >
                  Book a Demo{" "}
                </span>
              </Link>
            </div>
          </article>
          <Image src={HeroImage} alt="llustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
