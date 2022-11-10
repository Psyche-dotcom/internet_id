import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import idIcon from "../../public/idn.png";
import chat from "../../public/chat.png";
import keys from "../../public/key.png";
import logo from "../../public/dnd.png";
import copy from "../../public/copy.png";

const documentation = () => {
  const [username, setusername] = useState("Gideon");
  return (
    <main className="lg:flex h-screen w-screen overflow-hidden">
      <section className="w-1/4 px-10 py-10 bg-cardBg">
        <div className=" flex flex-col justify-between h-full">
          <div>
            <p className="text-center text-deepBlue">Log Out</p>
            <div className="flex flex-col gap-4  mt-28">
              <Link href="/dashboard">
                <div className="flex gap-4  px-3 py-3 rounded">
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
                <div className="flex gap-4 bg-white px-3 py-3 rounded">
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
          {username}
        </h2>
        <div className="adminBg mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4 text-center w-2/3 ">
              <h3 className="text-3xl font-sans text-deepBlue">
                Understands how Internet ID operates and how to use it
              </h3>
              <p className="text-base text-adminTx font-body">
                Software documentation is written text or illustration that
                accompanies computer software or is embedded in the source code.
                The documentation either explains how the software operates or
                how to use it, and may mean different things to people in
                different roles.
                <Link href="/documentation">
                  <span className="text-deepBlue"> Go to Documentation </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default documentation;
