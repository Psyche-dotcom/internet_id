import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import idIcon from "../../public/idn.png";
import chat from "../../public/chat.png";
import keys from "../../public/key.png";
import logo from "../../public/dnd.png";
import document from "../../public/book.png";
import product from "../../public/plus.png";
import Lottie from "react-lottie";
import animationData from "../../public/Loading.json";
import axios from "axios";
import { useRouter } from "next/router";
import LayoutDash from "../../components/layout/LayoutDash";

const documentation = () => {
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
  const { data, error } = useSWR("documentation", fetcher);

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
  const router = useRouter();
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
                  <div className="flex gap-4 bg-white px-3 py-3 items-center rounded">
                    <Image src={document} alt="identity" />
                    <p className="text-deepBlue font-body text-lg">
                      Documentation
                    </p>
                  </div>
                </Link>
                {data.data.is_dev === "1" ||
                  (data.data.is_dev === 1 && (
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
        <section className="h-full lg:w-3/4 px-6 lg:px-20 py-20 bg-deepBlue">
          <h2 className="text-center text-whiteTran capitalize text-3xl lg:text-6xl mb-8">
            Welcome {data.data.first_name}
          </h2>
          <div className="adminBg mx-auto flex justify-center items-center">
            <div className="flex flex-col gap-8 items-center">
              <div className="flex flex-col gap-4 text-center w-2/3 ">
                <h3 className="lg:text-3xl text-2xl font-sans text-deepBlue">
                  Understands how Internet ID operates and how to use it
                </h3>
                <p className="text-base text-adminTx font-body">
                  Software documentation is written text or illustration that
                  accompanies computer software or is embedded in the source
                  code. The documentation either explains how the software
                  operates or how to use it, and may mean different things to
                  people in different roles.
                  <Link href="/documentation">
                    <span className="text-deepBlue font-bold">
                      {" "}
                      Go to Documentation{" "}
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutDash>
  );
};

export default documentation;
