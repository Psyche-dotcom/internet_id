import { Close, Menu } from "@mui/icons-material";
import Head from "next/head";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { navData } from "../../dummyData/data";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/internetID.png";
import MobileNavItem from "./mobileNavItem";
const Layout = ({ children }) => {
  const [menuMobile, setmenuMobile] = useState(false);
  const [customNavBG, setcustomNavBG] = useState(false);
  const changeNavColor = () => {
    if (scrollY > 50) {
      setcustomNavBG(true);
      console.log(scrollY);
      console.log(true);
    } else {
      setcustomNavBG(false);
      console.log(false);
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
        className="py-6 lg:py-12 fixed z-40 w-full"
        style={{ backgroundColor: customNavBG ? "white" : "#203354" }}
      >
        <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src={logo} alt="InternetID" className="logo" />
            </Link>

            <div className="hidden lg:flex lg:gap-8  ">
              {navData.map(({ title, id, link }) => (
                <NavItem
                  key={id}
                  title={title}
                  link={link}
                  customNavBg={customNavBG}
                />
              ))}
              <Link href="/demo">
                <span
                  className={` text-xl  text-white ${
                    customNavBG ? "before:bg-deepBlue" : "before:bg-white"
                  } bg-button lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtN`}
                  aria-label="Book-Demo"
                >
                  Book Demo{" "}
                </span>
              </Link>
            </div>
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
              {navData.map(({ title, id }) => (
                <MobileNavItem key={id} title={title} />
              ))}
            </div>
          )}
        </div>
      </nav>

      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
