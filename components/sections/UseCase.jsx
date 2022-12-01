import React from "react";
import Card from "../simpleComponent/Card";
import idIcon from "../../public/id.svg";
import kyc from "../../public/kyc.svg";
import factor from "../../public/factor.svg";

const UseCase = () => {
  return (
    <section>
      <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto ">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <Card
            iconTitle={"unique id"}
            title="Unique Internet ID"
            icon={idIcon}
            animationType="fade-up"
            description="Eliminate Redundancy of Accounts with our Unique InternetID  "
          />
          <Card
            iconTitle={"KYC Compliance Software"}
            title="KYC Compliance Software"
            icon={kyc}
            animationType="fade-up"
            description="Verify users identity, reduce fraud and simplify KYC and AML compliance."
          />
          <Card
            iconTitle={"Multi-factor authentication (2FA)"}
            title="Multi-factor authentication (2FA)"
            icon={factor}
            animationType="fade-up"
            description="Eliminate the possibility of information being exposed to the public by cybercriminals, bots and hackers"
          />
        </div>
      </div>
    </section>
  );
};

export default UseCase;
