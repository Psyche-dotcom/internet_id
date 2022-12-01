import React from "react";
import CountUp from "react-countup";
const Info = ({ title, description, min, counterOn }) => {
  return (
    <div className="flex flex-col gap-5 w-40 items-center">
      <h3 className="text-button font-sans text-4xl font-semibold">
        {counterOn && <CountUp start={0} end={title} duration={3} delay={0} />}
        {min ? " min." : "+"}{" "}
      </h3>
      <p className="font-body text-whiteTran text-lg">{description}</p>
    </div>
  );
};

export default Info;
