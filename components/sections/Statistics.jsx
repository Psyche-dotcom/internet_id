import React from "react";
import Info from "../simpleComponent/Info";

const Statistics = () => {
  return (
    <section className="py-20 md:py-30 lg:py-40 ">
      <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8 justify-evenly text-center">
          <Info title={"50,000+"} description="Verification and counting" />
          <Info title={"500+"} description="Companies using our solutions " />
          <Info title={"3 min."} description="Average  development time" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
