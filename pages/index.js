import Layout from "../components/layout/Layout";
import CTA from "../components/sections/CTA";
import Hero from "../components/sections/Hero";
import Newsletters from "../components/sections/Newsletters";
import Statistics from "../components/sections/Statistics";
import UseCase from "../components/sections/UseCase";
import Verify from "../components/sections/Verify";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
      <main className="bg-mainLandBg overflow-x-hidden">
        <Hero />
        <UseCase />
        <Statistics />
        <CTA />
        <Verify />
        <Newsletters />
      </main>
    </Layout>
  );
}
