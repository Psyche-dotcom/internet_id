import { ArrowBackIosNew } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import { useRouter } from "next/router";
import { userService } from "../services";
import { useFormik } from "formik";
import { basicSchema } from "../components/schemas";

const Login = () => {
  const onSubmit = async (values, actions) => {
    // console.log("submitted");
    // console.log(values);
    // console.log(actions);
    const router = useRouter();
    const data = { internet_id: values.internet_id, password: values.password };
    try {
      await userService.login(data);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
    actions.resetForm();
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      internet_id: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // const [internetId, setinternetId] = useState("");
  // const [errorfirst, seterrorfirst] = useState(false);
  // const [password, setpassword] = useState("");
  // const url = "https://internetid.geebee.engineer/api/v1/auth/login/";
  // const login = async () => {
  //   try {
  //     const resp = await axios.post(url, {
  //       internet_id: internetId,
  //       password: password,
  //     });
  //     console.log(resp.data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

  // const login = async () => {
  //   const data = "";

  //   // { internet_id: internetId, password: password };
  //   try {
  //     await userService.login(data);
  //     router.push("/dashboard");
  //   } catch (err) {
  //     router.push("/login");
  //   }
  // };

  // useEffect(() => {
  //   // redirect to home if already logged in
  //   if (userService.userValue) {
  //     router.push("/")
  //   }
  // }, [])
  return (
    <main className="lg:flex bg-signBg ">
      <section className="flex-1 py-10 h-screen  w-11/12 mx-auto lg:px-10 lg:py-5 bg-signBg">
        <div className="flex flex-col gap-28 lg:gap-20">
          <ArrowBackIosNew className="hidden lg:block" />
          <Link href="/">
            <Image
              src={Logo}
              className="logo lg:hidden self-start"
              alt="logo"
            />
          </Link>
          <div className="flex flex-col gap-20 lg:w-4/5 lg:mx-auto">
            <div className="text-center flex flex-col gap-4 ">
              <h3 className="text-2xl lg:text-3xl font-sans">Welcome Back</h3>
              <p className="text-greyLight">Enter your login details below.</p>
            </div>
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="w-full">
                <input
                  value={values.internet_id}
                  name="internet_id"
                  type="text"
                  placeholder="Internet ID"
                  id="Internet_id"
                  className={`w-full  bg-cardBg p-4 text-sm rounded-lg ${
                    errors.internet_id &&
                    touched.internet_id &&
                    "border-red border "
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.internet_id && touched.internet_id && (
                  <p className="errorMessage">{errors.internet_id}</p>
                )}
              </div>
              {/* <Field
                id="Internet_ID"
                name="Internet ID"
                placeholder="Internet ID"
                type="text"
                setstate={(e) => setinternetId(e)}
                error="Your Internet ID must be greater than one Char."
                errorState={errorfirst}
              /> */}
              <div className="w-full">
                <input
                  value={values.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  className={`w-full  bg-cardBg p-4 text-sm rounded-lg ${
                    errors.password && touched.password && "border-red border"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <p className="errorMessage">{errors.password}</p>
                )}
              </div>
              {/* <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
                setstate={(e) => setpassword(e)}
                error="Invalid password"
                errorState={errorfirst}
              /> */}
              <div className="flex gap-2 items-center">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-left xl:mt-10"
              >
                <span
                  // onClick={login}
                  className="text-1xl text-white bg-deepBlue px-10 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNewe"
                  aria-label="Sign_in"
                >
                  Log In
                </span>
              </button>
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

export default Login;
