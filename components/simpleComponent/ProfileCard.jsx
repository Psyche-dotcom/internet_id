import Image from "next/image";
import React from "react";
import linkdin from "../../public/linkdin.png";
const ProfileCard = ({ img, name, role, url }) => {
  return (
    <div className="w-2/10 flex flex-col gap-4" data-aos="zoom-in-up">
      <Image src={img} alt="team" />
      <h4 className="text-white text-lg font-sans font-semibold">{name}</h4>
      <a href={url}>
        <div className="flex gap-2">
          <Image src={linkdin} alt="linkdin" />{" "}
          <p className="font-body text-whiteTran">{role}</p>
        </div>
      </a>
    </div>
  );
};

export default ProfileCard;
