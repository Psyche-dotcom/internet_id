import React from "react";

const Info = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-5 w-40 items-center">
      <h3 className="text-button font-sans text-4xl font-semibold">{title}</h3>
      <p className="font-body text-whiteTran text-lg">{description}</p>
    </div>
  );
};

export default Info;
