import React from "react";

function Intro() {
  return (
    <div
      className="flex items-center justify-center flex-col
        pt-20 pb-6"
    >
      <h1 className="text-[#013dc4] text-3xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Surafel
      </h1>
      <p className="text-base md:text-x1 mb-3 font-medium">
        {" "}
        Sofware Engineer | AWS Certified Solution Architect{" "}
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am a software engineer transitioning into the Cloud Computing as a
        Solutions Architect. I have a good command of programming languages,
        including C++, Java, Python, JavaScript, React and Node.js. Hands-on
        experience with various AWS services such as EC2, S3, RDS, Lambda,
        CloudFormation, and CodePipeline. Committed to learning & staying
        up-to-date with the latest cloud trends and best practices to deliver
        optimal solutions for clients.
      </p>
    </div>
  );
}

export default Intro;
