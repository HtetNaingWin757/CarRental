import React from "react";
import Icon1 from "../images/plan/icon1.png";
import Icon2 from "../images/plan/icon2.png";
import Icon3 from "../images/plan/icon3.png";

const Plan = () => {
  return (
    <div className="plan px-10 mt-32">
      <div className=" text-center">
        <p className=" text-2xl font-bold mb-3">Plan your trip now</p>
        <h1 className=" text-5xl font-bold leading-[70px] mb-7">
          Quick & easy car rental
        </h1>
      </div>
      <div className="plan-container flex flex-wrap justify-between gap-5 px-24 py-24 items-center ">
        <div className=" w-80 flex justify-center items-center flex-col">
          <img src={Icon1} className=" w-52" alt="" />
          <h1 className=" text-3xl font-bold mb-3">Select Car</h1>
          <p className="text-lg text-zinc-500 text-center">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className=" w-80 flex justify-center items-center flex-col">
          <img src={Icon2} className=" w-52" alt="" />
          <h1 className=" text-3xl font-bold mb-3">Contact Operator</h1>
          <p className="text-lg text-zinc-500 text-center">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className=" w-80 flex justify-center items-center flex-col">
          <img src={Icon3} className=" w-52" alt="" />
          <h1 className=" text-3xl font-bold mb-3">Let's Drive</h1>
          <p className="text-lg text-zinc-500 text-center">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
