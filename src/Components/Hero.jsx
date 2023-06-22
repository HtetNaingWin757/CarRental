import React from "react";
import { Link } from "react-router-dom";
import heroCar from "../images/hero/heroes-bg.png"


const Hero = ({ text, img }) => {
  return (
    <div
      className="hero h-[400px] relative z-0 flex items-center px-10"
      style={{ backgroundImage: `url(${heroCar})` }}
    >
      <div className=" flex flex-col">
        <h1 className=" text-[40px] font-bold">{text}</h1>
        <p className=" text-lg font-semibold">
          <Link to={"/"}>
            <span className=" contact cursor-pointer">Home</span>
          </Link>
          <span> / </span>
          <span>{text}</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
