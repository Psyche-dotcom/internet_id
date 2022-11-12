import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import idIcon from "../../public/idn.png";
import chat from "../../public/chat.png";
import keys from "../../public/key.png";
import logo from "../../public/dnd.png";
import copy from "../../public/copy.png";
import document from "../../public/book.png";
import product from "../../public/plus.png";
import axios from "axios";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";

const api_key = () => {
  const [details, setdetails] = useState("");

  const router = useRouter();
  const Url = "https://internetid.geebee.engineer/api/v1/users/me/";
  const log_out = "https://internetid.geebee.engineer/api/v1/auth/logout/";
  const fetch_user = async () => {
    try {
      const user_detail = await axios.get(Url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user").slice(1, -1)}`,
        },
      });
      setdetails(user_detail.data.data);
    } catch (error) {}
  };
  const logout_user = async () => {
    console.log("click");
    try {
      const user_detail = await axios.post(log_out, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user").slice(1, -1)}`,
        },
      });
      router.push("/");
      localStorage.removeItem("user");
    } catch (error) {
      router.push("/");
      localStorage.removeItem("user");
      console.log(error);
    }
  };

  useEffect(() => fetch_user, []);
  console.log(details);
  const value = details.private_key;
  return (
    <main className="lg:flex h-screen w-screen overflow-hidden">
      <section className="w-1/4 px-10 py-10 bg-cardBg menubar">
        <div className=" flex flex-col justify-between h-full">
          <div className="flex flex-col gap-20">
            <div className="self-center">
              <span
                onClick={logout_user}
                className={` text-xl  text-white 
                    before:bg-white
                   bg-button lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtN`}
                aria-label="Log-Out"
              >
                Log Out{" "}
              </span>
            </div>
            <div className="flex flex-col gap-4  mt-28">
              <Link href="/dashboard">
                <div className="flex gap-4 items-center  rounded px-3 py-3 ">
                  <Image src={idIcon} alt="identity" />
                  <p className="text-deepBlue font-body text-lg">
                    Get Internet ID
                  </p>
                </div>
              </Link>
              <Link href="/dashboard/integration">
                <div className="flex gap-4  item-center px-3 py-3 rounded">
                  <Image src={chat} alt="identity" />
                  <p className="text-deepBlue font-body text-lg">Integration</p>
                </div>
              </Link>
              <Link href="/dashboard/api_key">
                <div className="flex gap-4  px-3 py-3 bg-white rounded items-center">
                  <Image src={keys} alt="identity" />
                  <p className="text-deepBlue font-body  text-lg">
                    Get API Keys
                  </p>
                </div>
              </Link>
              <Link href="/dashboard/documentation">
                <div className="flex gap-4 b px-3 py-3 items-center rounded">
                  <Image src={document} alt="identity" />
                  <p className="text-deepBlue font-body text-lg">
                    Documentation
                  </p>
                </div>
              </Link>
              {details.is_dev === "1" ||
                (details.is_dev === 1 && (
                  <Link href="/dashboard/product">
                    <div className="flex gap-4 b px-3 py-3 items-center rounded">
                      <Image src={product} alt="identity" />
                      <p className="text-deepBlue font-body text-lg">
                        Add a Product
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <Image src={logo} alt="logo" className="self-center" />
        </div>
      </section>
      <section className="w-3/4 px-20 py-20 bg-deepBlue">
        <h2 className="text-center text-whiteTran capitalize text-3xl lg:text-6xl mb-8">
          Welcome {details.first_name}
        </h2>
        <div className="adminBg mx-auto flex justify-center items-center">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4 text-center w-2/3 ">
              <h3 className="text-3xl font-sans text-deepBlue">
                Click the clipboard icon to copy your API Keys{" "}
              </h3>
              <p className="text-base text-adminTx font-body">
                An API key is a unique identifier used to connect to, or
                perform, an API call. API stands for application programming
                interface. API's are used for software applications to send and
                receive data. API's can also connect one program to another, to
                share functionality.
              </p>
            </div>
            <div className="flex border justify-end w-2/3  border-bb rounded-lg">
              <span className="bg-white p-2 w-5/6">{details.private_key}</span>{" "}
              <CopyToClipboard text={value}>
                <span className="bg-button p-2 w-1/6 flex items-center justify-center cursor-pointer">
                  <Image src={copy} alt="copy" />
                </span>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default api_key;
