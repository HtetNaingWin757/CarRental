import React from "react";
import AboutMain from "../images/about/about-main.jpg";
import Icon1 from "../images/about/icon1.png";
import Icon2 from "../images/about/icon2.png";
import Icon3 from "../images/about/icon3.png";

const AboutCompany = () => {
  return (
    <div className=" flex justify-center pt-24">
      <div className=" flex flex-wrap justify-center items-center gap-14">
        <img className="company-img mt-auto h-[450px]" src={AboutMain} alt="" />
        <div className="company-des md:text-center w-[470px]">
          <h1 className=" text-2xl font-semibold mb-5">About Company</h1>
          <h1 className=" text-5xl font-bold mb-5">
            You start the engine and your adventure begins
          </h1>
          <p className=" text-lg text-zinc-500 mb-10">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="company-card flex flex-wrap gap-10">
            <div className=" card">
              <img className=" mb-3" src={Icon1} alt="" />
              <div className=" flex gap-3 items-center">
                <span className=" text-5xl font-bold">20</span>
                <div className=" flex flex-col">
                  <span className=" text-lg text-zinc-500">Car</span>
                  <span className=" text-lg text-zinc-500">Types</span>
                </div>
              </div>
            </div>
            <div className=" card">
              <img className=" mb-3" src={Icon2} alt="" />
              <div className=" flex gap-3 items-center">
                <span className=" text-5xl font-bold">85</span>
                <div className=" flex flex-col">
                  <span className=" text-lg text-zinc-500">Rental</span>
                  <span className=" text-lg text-zinc-500">Outlets</span>
                </div>
              </div>
            </div>
            <div className=" card">
              <img className=" mb-3" src={Icon3} alt="" />
              <div className=" flex gap-3 items-center">
                <span className=" text-5xl font-bold">75</span>
                <div className=" flex flex-col">
                  <span className=" text-lg text-zinc-500">Repair </span>
                  <span className=" text-lg text-zinc-500">Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
