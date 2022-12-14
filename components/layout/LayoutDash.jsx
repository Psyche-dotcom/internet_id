import { Close, Menu } from "@mui/icons-material";
import Head from "next/head";
import { useEffect, useState } from "react";

import { navData, navDataDash } from "../../dummyData/data";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import MobileNavItem from "./mobileNavItem";
const LayoutDash = ({ children, dev, logout_user }) => {
  const [menuMobile, setmenuMobile] = useState(false);
  const [customNavBG, setcustomNavBG] = useState(false);
  const changeNavColor = () => {
    if (scrollY > 50) {
      setcustomNavBG(true);
    } else {
      setcustomNavBG(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  });
  // window.addEventListener("scroll", changeNavColor);
  return (
    <>
      <Head></Head>
      <nav
        className="lg:hidden py-6 lg:py-12 fixed z-40 w-full"
        style={{ backgroundColor: customNavBG ? "white" : "#203354" }}
      >
        <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src={logo} alt="InternetID" className="logo" />
            </Link>

            <div className="lg:hidden">
              {menuMobile ? (
                <Close
                  className={`text-4xl hambur border ${
                    customNavBG
                      ? "text-deepBlue border-deepBlue"
                      : "text-white border-white"
                  }`}
                  onClick={() => setmenuMobile(false)}
                />
              ) : (
                <Menu
                  className={`text-4xl hambur border ${
                    customNavBG
                      ? "text-deepBlue border-deepBlue"
                      : "text-white border-white"
                  }`}
                  onClick={() => setmenuMobile(true)}
                />
              )}
            </div>
          </div>
          {menuMobile && (
            <div className="flex flex-col gap-6 mt-6  bg-white px-6 py-10">
              {navDataDash.map(({ title, id, link }) => (
                <MobileNavItem key={id} title={title} link={link} />
              ))}
              {dev === "1" ||
                (dev === 1 && (
                  <Link href="/dashboard/product">
                    <span
                      className={` cursor-pointer customPoint after:content-['']  after:absolute  after:h-1 relative  text-deepBlue text-sm  after:bg-deepBlue self-start `}
                      aria-label=" Add a Product"
                    >
                      Add a Product
                    </span>
                  </Link>
                ))}
              <div className="self-center">
                <span
                  onClick={logout_user}
                  className={` text-xl  text-white
                    before:bg-button
                    bg-deepBlue px-4 py-2 xl:px-8 xl:py-4 customBtN`}
                  aria-label="Log-Out"
                >
                  Log Out{" "}
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {children}
      <footer></footer>
    </>
  );
};

export default LayoutDash;
