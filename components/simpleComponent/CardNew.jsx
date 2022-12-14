import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardNew = ({ icon, title, iconTitle, description, BookDemo }) => {
  return (
    <div className="mx-auto w-1/2">
      <span
        className=" text-1xl text-white bg-cardBg px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNLe"
        aria-label="Book-Demo"
      >
        <div className=" bg-cardBg flex flex-col  gap-4 items-center justify-center p-16 text-center">
          <Image src={icon} alt={iconTitle} />
          <h4 className="font-semibold font-sans text-deepBlue text-lg md:text-xl xll:text-2xl">
            {title}
          </h4>
          <p className="font-body text-deepBlue">{description}</p>
          {BookDemo && (
            <Link href="/demo" className="mt-4">
              <span
                className="  text-1xl text-white bg-button px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNL"
                aria-label="Book-Demo"
              >
                Book a Demo{" "}
              </span>
            </Link>
          )}
        </div>
      </span>
    </div>
  );
};

export default CardNew;
