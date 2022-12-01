import { ArrowBackIosNew } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/logo.png";

import CustomForm from "../components/simpleComponent/form";

const Sign_up = () => {
  const [client, setclient] = useState(false);

  // const submitForm = async (values) => {
  //   console.log(values);
  //   // try {
  //   //   const resp = await axios.post(url, {
  //   //     first_name: values.first_name,
  //   //     last_name: values.last_name,
  //   //     email: values.email,
  //   //     password: values.password,
  //   //     phone_number: values.phone_number,
  //   //     date_of_birth: values.date_of_birth,
  //   //     gender: values.gender,
  //   //     country: values.country,
  //   //     international_id: values.international_id,

  //   //     bank_verification_num: values.bank_verification_num,
  //   //     is_dev: client ? true : false,
  //   //   });
  //   //   console.log(resp.data);
  //   // } catch (error) {
  //   //   console.log(error.response.data);
  //   // }
  // };

  // const {
  //   values,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  //   errors,
  //   touched,
  //   isSubmitting,
  // } = useFormik({
  //   initialValues: {
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     password: "",
  //     phone_number: "",
  //     date_of_birth: "",
  //     gender: "",
  //     country: "",
  //     international_id: "",
  //     bank_verification_num: "",
  //   },
  //   validationSchema: signUpSchema,
  //   submitForm,
  // });
  // console.log(values);

  return (
    <main className="lg:flex bg-signBg ">
      <section className="flex-1 py-16 h-screen  w-11/12 mx-auto lg:px-10 lg:py-5 bg-signBg">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <ArrowBackIosNew className="hidden lg:block" />
          </Link>{" "}
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className="logo lg:hidden self-start"
            />
          </Link>
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
                    client && "bg-cardBg"
                  } `}
                >
                  User
                </button>
                <button
                  onClick={() => setclient(true)}
                  className={`border border-cardBg rounded-r-lg px-2 py-1 text-sm ${
                    !client && "bg-cardBg"
                  }`}
                >
                  Developer
                </button>
              </div>
            </div>
            <CustomForm client={client} />
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
