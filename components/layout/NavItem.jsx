import Link from "next/link";
import React from "react";

const NavItem = ({ title, customNavBg, link }) => {
  return (
    <Link href={link || "#"}>
      <span
        className={` cursor-pointer customPoint after:content-['']  after:absolute  after:h-1 relative ${
          customNavBg
            ? "text-deepBlue text-xl  after:bg-deepBlue"
            : "text-white text-xl  after:bg-white"
        } `}
        aria-label={title}
      >
        {title}
      </span>
    </Link>
  );
};

export default NavItem;
