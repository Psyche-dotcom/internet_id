import Image from "next/image";
import Link from "next/link";
import React from "react";
import idIcon from "../../public/idn.png";
import chat from "../../public/chat.png";
import keys from "../../public/key.png";
import logo from "../../public/dnd.png";
import copy from "../../public/copy.png";

const index = () => {
  return (
    <main className="lg:flex h-screen w-screen overflow-hidden">
      <section className="w-1/4 px-10 py-10 bg-cardBg">
        <div className=" flex flex-col justify-between h-full">
          <div>
            <p className="text-center text-deepBlue">My Dashboard</p>
            <div className="flex flex-col gap-4  mt-28">
              <Link href="/dashboard">
                <div className="flex gap-4 bg-white px-3 py-3 rounded">
                  <Image src={idIcon} alt="identity" />
                  <p className="text-deepBlue">Get Internet ID</p>
                </div>
              </Link>
              <Link href="/dashboard/integration">
                <div className="flex gap-4  px-3 py-3 rounded">
                  <Image src={chat} alt="identity" />
                  <p className="text-deepBlue">Integration</p>
                </div>
              </Link>
              <Link href="/dashboard/api_key">
                <div className="flex gap-4  px-3 py-3 rounded">
                  <Image src={keys} alt="identity" />
                  <p className="text-deepBlue">Get API Keys</p>
                </div>
              </Link>
              <Link href="/dashboard/documentation">
                <div className="flex gap-4 b px-3 py-3 rounded">
                  <Image src={keys} alt="identity" />
                  <p className="text-deepBlue">Documentation</p>
                </div>
              </Link>
            </div>
          </div>
          <Image src={logo} alt="logo" className="self-center" />
        </div>
      </section>
      <section className="w-3/4 px-20 py-20 bg-deepBlue">
        <h2 className="text-center text-whiteTran text-3xl lg:text-6xl mb-8">
          Welcome Khadijah
        </h2>
        <div className="adminBg mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4 text-center w-2/3 ">
              <h3 className="text-3xl font-sans text-deepBlue">
                Click the clipboard icon to copy your internet ID
              </h3>
              <p className="text-base text-adminTx font-body">
                Internet Identification Number is a unique numbers that verify
                users and eliminate the possibility of information being exposed
                to the public by cybercriminals, bots and hackers,{" "}
              </p>
            </div>
            <div className="flex border justify-end w-2/3  border-bb rounded-lg">
              <span className="bg-white p-2 w-5/6">1234567890000</span>{" "}
              <span className="bg-button p-2 w-1/6 flex items-center justify-center cursor-pointer">
                <Image src={copy} alt="copy" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
