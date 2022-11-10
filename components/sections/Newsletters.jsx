import React from "react";

const Newsletters = () => {
  return (
    <section className="py-20 md:py-30 lg:py-40 Newsletters">
      <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
        <div className="flex flex-col lg:w-1/2 items-start gap-4 lg:gap-8">
          <h1 className="text-white font-sans text-2xl text-center lg:text-left leading-snug md:text-4xl md:leading-loose lg:leading-snug xl:text-5xl xl:leading-snug font-medium">
            Want to stay in the loop?
          </h1>
          <p className="text-whiteTran font-body leading-snug text-base ">
            Get all product updates and industry news directly in your inbox.
            It’s free!
          </p>
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg"
          />
          <div>
            <span
              className=" text-1xl text-white bg-cardBg px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNL"
              aria-label="Book-Demo"
            >
              Get a Newsletter{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;
