import React from "react";
import certification from "../data/certification";
import CertificationItem from "./CertificationItem";
import Title from "./Title";

function Certification() {
  return (
    <div
      className="max-w-[1040px] flex items-center justify-center flex-col
    pt-20 pb-6"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {certification.map((cert) => (
          <CertificationItem imgUrl={cert.imgUrl} link={cert.link} />
        ))}
      </div>
    </div>
  );
}

export default Certification;
