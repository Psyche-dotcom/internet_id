import React from "react";

const CustomButton = ({ title }) => {
  return (
    <div>
      <span
        className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
        aria-label="Sign_up"
      >
        {title}
      </span>
    </div>
  );
};

export default CustomButton;
