import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "../public/teamHero.png";
import Logo from "../public/InternetID.png";
import Layout from "../components/layout/Layout";

import style from "../public/style.png";
import k from "../public/k.png";
import g from "../public/R.png";
import s from "../public/S.png";
import b from "../public/B.png";
import ProfileCard from "../components/simpleComponent/ProfileCard";
const about = () => {
  return (
    <Layout>
      <main className="bg-mainLandBg">
        <section className="heroBg">
          <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
            <div className="flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-4 pt-40 pb-20 lg:pt-60 lg:pb-40  justify-between">
              <article className="flex flex-col gap-4 lg:gap-8 w-full  lg:w-2/4">
                <h1 className="text-white font-sans text-2xl leading-snug md:text-4xl md:leading-loose lg:leading-snug xl:text-5xl xl:leading-snug 2xl:text-6xl  2xl:leading-normal font-medium">
                  Team <span className="text-button">Optimus</span> @ Hackfest
                  2022, Hackathon with Seamfix{" "}
                </h1>
                <p className="text-whiteTran font-body leading-snug text-base xl:text-2xl xl:leading-relaxed">
                  Transforming digital identity with our Internet Identity
                  ID(InternetID),we are able to eliminate the possibility of
                  information being exposed to the public by cybercriminals,
                  bots and hackers. Improving on critical probelms like delay in
                  transactions, waste of time and loss of money.
                </p>
                <div className=" mt-4 lg:mt-8 flex gap-16">
                  <Link href="/sign_up">
                    <span
                      className="text-1xl text-white bg-button px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNew"
                      aria-label="Sign_up"
                    >
                      Sign up{" "}
                    </span>
                  </Link>
                  <Link href="/demo">
                    <span
                      className=" text-1xl text-white bg-buttonBlue px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNL"
                      aria-label="Book-Demo"
                    >
                      Book a Demo{" "}
                    </span>
                  </Link>
                </div>
              </article>
              <Image src={HeroImage} alt="llustration" />
            </div>
          </div>
        </section>
        <section>
          <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto py-20 md:py-30 lg:py-40">
            <div className="flex items-center justify-center mb-16">
              <Image src={Logo} alt="logo" className="text-center" />
            </div>
            <div className="flex items-center justify-center lg:gap-20 gap:8 flex-wrap">
              <span className="lg:w-4/12">
                <div className=" customCard bg-cardBg flex flex-col  gap-4 items-center justify-center p-16 text-center">
                  <p className="font-body text-deepBlue">
                    Monitoring and verifying user access continuously allows
                    businesses to understand who is inside the enterprise
                    network and where they are attempting to access
                  </p>

                  <a
                    href="https://medium.com/@bertinfonge/secure-single-account-access-using-our-internet-id-8052e2522672"
                    className="mt-4"
                  >
                    <span
                      className="  text-1xl text-white bg-button px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNL"
                      aria-label="Book-Demo"
                    >
                      Read Article
                    </span>
                  </a>
                </div>
              </span>
              <span className="lg:w-4/12">
                <div className=" customCard bg-cardBg flex flex-col  gap-4 items-center justify-center p-16 text-center">
                  <p className="font-body text-deepBlue">
                    Quickly enabling trusted user access to data resources, and
                    applications is made possible for IT admins.Whoever you’re
                    giving access to the experience should be efficient and
                    seamless.
                  </p>

                  <a
                    href="https://medium.com/@bertinfonge/secure-single-account-access-using-our-internet-id-8052e2522672"
                    className="mt-4"
                  >
                    <span
                      className="  text-1xl text-white bg-button px-3 py-2 lg:px-6 lg:py-2 xl:px-8 xl:py-4 customBtNL"
                      aria-label="Book-Demo"
                    >
                      Read Article
                    </span>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-30 lg:py-40 bg-lightBlue CTA">
          <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
            <div className="flex flex-col items-center lg:flex-row gap-8 justify-between">
              <div className="flex flex-col gap-8">
                <h3 className="text-white font-sans text-3xl">Style Guide</h3>
                <div className="flex flex-col mt-4">
                  <span className="text-white font-body text-2xl mb-2">
                    Regular
                  </span>
                  <span className="text-white font-body">
                    ABCDEFGHIJ
                    <br /> KLMNOPQRSTUVWXYZ
                  </span>
                </div>
                <p className="text-white font-body">Fonts: Inter & Helvetica</p>
              </div>
              <div>
                <h3 className="text-white font-body text-2xl font-semibold mb-2">
                  Medium
                </h3>
                <div>
                  <span className="text-white font-body">
                    ABCDEFGHIJ
                    <br />
                    KLMNOPQRSTUVWXYZ
                  </span>
                </div>
              </div>
              <Image src={style} alt="style" />
            </div>
          </div>
        </section>
        <section>
          <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto py-20 md:py-30 lg:py-40">
            <h1 className="text-white text-5xl">Meet the Team</h1>
            <div className="flex flex-wrap gap-4 justify-between mt-8">
              <ProfileCard
                name="Khadijah Arowosegbe"
                role="UI/UX Designer"
                img={k}
                url={"https://www.linkedin.com/in/khadijaharowosegbe/"}
              />
              <ProfileCard
                name="Gideon Balogun"
                role="Backend Developer"
                img={g}
                url={"https://www.linkedin.com/in/gideon-balogun/"}
              />
              <ProfileCard
                name="Saheed Babatunde"
                role="Frontend Developer"
                img={s}
                url={"https://www.linkedin.com/in/babatunde-saheed-124639ab/"}
              />
              <ProfileCard
                name="Bertin Fonge"
                role="Data Scientist"
                img={b}
                url={"https://www.linkedin.com/in/bertin-fonge-30aa69212"}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default about;
