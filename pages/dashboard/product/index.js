import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import idIcon from "../../../public/idn.png";
import chat from "../../../public/chat.png";
import keys from "../../../public/key.png";
import logo from "../../../public/dnd.png";
import Lottie from "react-lottie";
import animationData from "../../../public/Loading.json";
import document from "../../../public/book.png";
import prod from "../../../public/plus.png";
import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import Field from "../../../components/simpleComponent/Field";
import LayoutDash from "../../../components/layout/LayoutDash";
const product = () => {
  const [company, setcompany] = useState("");
  const [business, setbusiness] = useState("");
  const [project, setproject] = useState("");
  const [website, setwebsite] = useState("");
  const [email, setemail] = useState("");

  const router = useRouter();
  const product_url = "https://internetid.geebee.engineer/api/v1/products/";
  const Url = "https://internetid.geebee.engineer/api/v1/users/me/";
  const log_out = "https://internetid.geebee.engineer/api/v1/auth/logout/";

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
  const fetcher = async () => {
    const Url = "https://internetid.geebee.engineer/api/v1/users/me/";
    const response = await fetch(Url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user").slice(1, -1)}`,
      },
    });
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR("integration", fetcher);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  if (error)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h1>Network error occurred, please check your internet connectivity</h1>
      </div>
    );
  if (!data)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    );

  let localstore;
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    localstore = localStorage.getItem("user").slice(1, -1);
  }

  const config = {
    headers: { Authorization: `Bearer ${localstore}` },
  };
  const bodyParameters = {
    business_type: business,
    company_mail: email,
    company_name: company,
    project_description: project,
    website_url: website,
    private_key: data.data.private_key,
  };
  const create_product = async () => {
    try {
      const product = await axios.post(product_url, bodyParameters, config);
      console.log(product.data.data.public_key);
      localStorage.setItem(
        "public_key",
        JSON.stringify(product.data.data.public_key)
      );
      router.push("/dashboard/product/sucess");
    } catch (error) {
      console.error(error);
    }
    console.log(`Bearer ${localstore}`);
  };
  return (
    <LayoutDash dev={data.data.is_dev} logout_user={logout_user}>
      <main className="lg:flex h-screen w-screen overflow-hidden">
        <section className="w-1/4 px-10 py-10 bg-cardBg menubar hidden lg:block">
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
                    <p className="text-deepBlue font-body text-lg">
                      Integration
                    </p>
                  </div>
                </Link>
                <Link href="/dashboard/api_key">
                  <div className="flex gap-4  px-3 py-3 rounded items-center">
                    <Image src={keys} alt="identity" />
                    <p className="text-deepBlue font-body text-lg">
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
                {data.data.is_dev === "1" ||
                  (data.data.is_dev === 1 && (
                    <Link href="/dashboard/product">
                      <div className="flex gap-4 b px-3 py-3 bg-white items-center rounded">
                        <Image src={prod} alt="identity" />
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
        <section className="h-full lg:w-3/4 px-6 lg:px-20 py-20 bg-deepBlue">
          <h2 className="text-center text-whiteTran text-3xl lg:text-6xl mb-8 capitalize">
            Welcome {data.data.first_name}
          </h2>
          <div className="adminBg mx-auto flex justify-center items-center">
            <div className=" flex flex-col gap-8 w-full  px-8 py-8 lg:px-0 lg:py-0 lg:w-auto">
              <div className="flex justify-between flex-col lg:flex-row gap-4 lg:gap-16">
                <div className="flex flex-col gap-4">
                  <Field
                    id="commpany_name"
                    placeholder="Company’s Name"
                    type="text"
                    setstate={(e) => setcompany(e)}
                    error="Your Company ID must be greater than one Char."
                  />
                  <Field
                    id="BusinessType"
                    placeholder="Business Type"
                    type="text"
                    setstate={(e) => setbusiness(e)}
                    error="Your business type must be greater than one Char."
                  />
                </div>
                <div className=" flex flex-col gap-4">
                  <Field
                    id="website_url"
                    placeholder="Website_URL"
                    type="url"
                    setstate={(e) => setwebsite(e)}
                    error="Invalid url"
                  />
                  <Field
                    id="Company_email"
                    placeholder="Company’s Email Address"
                    type="email"
                    setstate={(e) => setemail(e)}
                  />
                </div>
              </div>

              <div className="w-full">
                <textarea
                  name="project_description"
                  className="w-full  bg-cardBg p-4 text-sm rounded-lg border border-deepBlue lg:border-none"
                  placeholder="Project Description"
                  onChange={(e) => setproject(e.target.value)}
                ></textarea>
              </div>
              <div onClick={create_product}>
                <span
                  className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                  aria-label="Next"
                >
                  Create Product Key
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutDash>
  );
};

export default product;
