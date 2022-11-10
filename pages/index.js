import Layout from "../components/layout/Layout";
import CTA from "../components/sections/CTA";
import Hero from "../components/sections/Hero";
import Newsletters from "../components/sections/Newsletters";
import Statistics from "../components/sections/Statistics";
import UseCase from "../components/sections/UseCase";
import Verify from "../components/sections/Verify";
import Card from "../components/simpleComponent/Card";
import CardNew from "../components/simpleComponent/CardNew";
import idIcon from "../public/id.svg";
export default function Home() {
  return (
    <Layout>
      <main className="bg-mainLandBg">
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
