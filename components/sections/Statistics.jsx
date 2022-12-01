import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Info from "../simpleComponent/Info";

const Statistics = () => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      onExit={() => setcounterOn(false)}
    >
      <section className="py-20 md:py-30 lg:py-40 ">
        <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-8 justify-evenly text-center">
            <Info
              title={"50000"}
              description="Verification and counting"
              counterOn={counterOn}
            />
            <Info
              title={"500"}
              description="Companies using our solutions "
              counterOn={counterOn}
            />
            <Info
              title={"3"}
              description="Average  development time"
              min={true}
              counterOn={counterOn}
            />
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Statistics;
