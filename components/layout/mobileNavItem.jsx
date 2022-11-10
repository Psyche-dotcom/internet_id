import React from "react";

const MobileNavItem = ({ title, mobile, customNavBG }) => {
  return (
    <span
      className={` cursor-pointer customPoint after:content-['']  after:absolute  after:h-1 relative  text-deepBlue text-sm  after:bg-deepBlue self-start `}
      aria-label={title}
    >
      {title}
    </span>
  );
};

export default MobileNavItem;
