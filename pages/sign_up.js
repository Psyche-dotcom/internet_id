import { ArrowBackIosNew } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Field from "../components/simpleComponent/Field";
import Logo from "../public/logo.png";
import axios from "axios";
import { useRouter } from "next/router";

const Sign_up = () => {
  const [client, setclient] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [country, setcountry] = useState("");
  const [Dob, setDob] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [BVN, setBVN] = useState("");
  const [NIN, setNIN] = useState("");
  const [gender, setgender] = useState("");
  const router = useRouter();
  const [errorsignup, setsignuperror] = useState("");
  const [errorsignupstate, setsignuperrorstate] = useState(false);
  const url = "https://internetid.geebee.engineer/api/v1/auth/register/";
  const submitForm = async () => {
    try {
      const resp = await axios.post(url, {
        first_name: firstname,
        last_name: lastname,
        email: Email,
        password: password,
        phone_number: phone,
        date_of_birth: Dob,
        gender: gender,
        country: country,
        international_id: NIN,
        bank_verification_num: BVN,
        is_dev: client ? true : false,
      });
      router.push("/account_sucess");
      console.log(resp.data);
    } catch (error) {
      console.log(error.response.data);
      setsignuperror(
        `${error.response.data.error}, ${error.response.data.message}`
      );
      setsignuperrorstate(true);
    }
  };

  return (
    <main className="lg:flex bg-signBg overflow-x-hidden">
      <section className="flex-1 py-10 h-screen  w-11/12 mx-auto lg:px-10 lg:py-5 bg-signBg">
        <div className="flex flex-col gap-8">
          <div className=" lg:block hidden">
            <Link href="/">
              <ArrowBackIosNew className="hidden lg:block" />
            </Link>{" "}
          </div>
          <div className=" block lg:hidden">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="logo lg:hidden self-start"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-20 lg:w-4/5 lg:mx-auto">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
              <div className="flex flex-col gap-4 ">
                <h3 className="text-2xl lg:text-3xl font-sans">Welcome Back</h3>
                <p className="text-greyLight">Enter your details below.</p>
              </div>
              <div className=" flex self-center">
                <button
                  onClick={() => setclient(false)}
                  className={`border border-cardBg rounded-l-lg px-2 py-1 text-sm ${
                    client ? "" : "bg-deepBlue text-white"
                  } `}
                >
                  User
                </button>
                <button
                  onClick={() => setclient(true)}
                  className={`border border-cardBg rounded-r-lg px-2 py-1 text-sm ${
                    !client ? "" : "bg-deepBlue text-white"
                  }`}
                >
                  Developer
                </button>
              </div>
            </div>

            <form>
              <div className="flex flex-col gap-8" id="stepUser1">
                <Field
                  id="first_name"
                  placeholder="First Name"
                  type="text"
                  setstate={(e) => setfirstname(e)}
                  error="Your name must be greater than one Char."
                />
                <Field
                  id="last_name"
                  placeholder="Last Name"
                  type="text"
                  setstate={(e) => setlastname(e)}
                  error="Your Last Name must be greater than one Char."
                />
                <Field
                  id="Country"
                  placeholder="Country"
                  type="text"
                  setstate={(e) => setcountry(e)}
                  error="Enter your country"
                />
                <Field
                  id="Gender"
                  placeholder="Gender"
                  type="text"
                  setstate={(e) => setgender(e)}
                />
                <div
                  onClick={() => {
                    const stepUser1 = document.querySelector("#stepUser1");
                    const stepUser2 = document.querySelector("#stepUser2");
                    console.log(stepUser1);
                    stepUser1.style.display = "none";
                    stepUser2.style.display = "flex";
                  }}
                >
                  <span
                    className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                    aria-label="Next"
                  >
                    Next
                  </span>
                </div>

                <p className="text-greyLight mt-4 text-center">1/3</p>
              </div>
              <div className=" hidden flex-col gap-8" id="stepUser2">
                <Field
                  id="DOB"
                  placeholder="Date of Birth"
                  type="date"
                  setstate={(e) => setDob(e)}
                  error="Enter your date of birth"
                />
                <Field
                  id="email"
                  placeholder="Email Address"
                  type="email"
                  setstate={(e) => setEmail(e)}
                />
                <Field
                  id="Password"
                  placeholder="Password"
                  type="password"
                  setstate={(e) => setpassword(e)}
                  error="Your Internet ID must be greater than one Char."
                />
                <div className="flex gap-10 items-center">
                  <div
                    onClick={() => {
                      const stepUser1 = document.querySelector("#stepUser1");
                      const stepUser2 = document.querySelector("#stepUser2");
                      const stepUser3 = document.querySelector("#stepUser3");
                      stepUser1.style.display = "flex";
                      stepUser2.style.display = "none";
                      stepUser3.style.display = "none";
                    }}
                  >
                    <span
                      className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                      aria-label="Next"
                    >
                      Back
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      const stepUser1 = document.querySelector("#stepUser1");
                      const stepUser2 = document.querySelector("#stepUser2");
                      const stepUser3 = document.querySelector("#stepUser3");
                      stepUser1.style.display = "none";
                      stepUser2.style.display = "none";
                      stepUser3.style.display = "flex";
                    }}
                  >
                    <span
                      className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                      aria-label="Next"
                    >
                      Next
                    </span>
                  </div>
                </div>

                <p className="text-greyLight mt-4 text-center">2/3</p>
              </div>
              <div className=" hidden flex-col gap-8" id="stepUser3">
                <Field
                  id="phone"
                  placeholder="Phone Number"
                  type="tel"
                  setstate={(e) => setphone(e)}
                  error="Your Internet ID must be greater than one Char."
                />
                <Field
                  id="BVN"
                  placeholder="Bank Verification Number"
                  type="text"
                  setstate={(e) => setBVN(e)}
                  error="Invalid BVN"
                />
                <Field
                  id="NIN"
                  placeholder="international Number"
                  type="text"
                  setstate={(e) => setNIN(e)}
                  error="Invalid NIN"
                />

                <div className="flex flex-col gap-4">
                  {errorsignupstate && (
                    <div>
                      <p className="text-red">{errorsignup}</p>
                    </div>
                  )}
                  <div className="flex gap-10 items-center">
                    <div
                      onClick={() => {
                        const stepUser1 = document.querySelector("#stepUser1");
                        const stepUser2 = document.querySelector("#stepUser2");
                        const stepUser3 = document.querySelector("#stepUser3");
                        stepUser1.style.display = "none";
                        stepUser2.style.display = "flex";
                        stepUser3.style.display = "none";
                      }}
                    >
                      <span
                        className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                        aria-label="Next"
                      >
                        Back
                      </span>
                    </div>
                    <div onClick={submitForm}>
                      <span
                        className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                        aria-label="Sign_up"
                      >
                        Create ID
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-greyLight mt-4 text-center">3/3</p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="hidden lg:block flex-1 py-10 h-screen  w-11/12 mx-auto lg:px-10 lg:py-5 bg-deepBlue ">
        <div className="w-4/5 mx-auto ">
          <Image src={Logo} className="logo" alt="logo" />
          <div className="lg:mt-40 xl:mt-48 2xl:mt-56">
            <h1 className=" text-white lg:text-5xl lg:leading-normal xl:text-6xl  xl:leading-snug font-bold">
              Access your dashboard & verify an identity using Internet ID
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sign_up;
