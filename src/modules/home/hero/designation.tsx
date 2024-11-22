"use client";

import { TypeAnimation } from "react-type-animation";

interface IProps {}

const Designation = ({}: IProps) => {
  return (
    <TypeAnimation
      className="block dark:text-white text-xl"
      sequence={[
        "MERN Stack Developer",
        1000,
        "Backend-Focused Full-Stack Developer",
        1000,
        "Web Application Developer",
        1000,
        "Tech Enthusiast & Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Designation;
