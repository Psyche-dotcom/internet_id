import Link from "next/link";
import React from "react";

const MobileNavItem = ({ title, link }) => {
  return (
    <Link href={link}>
      <span
        className={` cursor-pointer customPoint after:content-['']  after:absolute  after:h-1 relative  text-deepBlue text-sm  after:bg-deepBlue self-start `}
        aria-label={title}
      >
        {title}
      </span>
    </Link>
  );
};

export default MobileNavItem;
