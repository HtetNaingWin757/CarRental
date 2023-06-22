import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Icon1 from "../images/chooseUs/icon1.png";
import Icon2 from "../images/chooseUs/icon2.png";
import Icon3 from "../images/chooseUs/icon3.png";
import ThreeCars from "../images/chooseUs/main.png";

const ChooseUs = () => {
  return (
    <div className="choose-us py-24">
      <div className="choose-us-car px-24">
        <img src={ThreeCars} className=" w-full" alt="" />
      </div>
      <div className="why-us-container px-28 flex flex-wrap justify-around">
        <div className="why-us w-[550px]">
          <h1 className=" text-2xl font-bold mb-3">Why Choose Us</h1>
          <h1 className="why-us-text text-5xl font-bold mb-7">
            Best valued deals you will ever find
          </h1>
          <p className="why-us-text text-lg text-zinc-500 mb-7">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="btn flex items-center gap-2 py-4 px-9 rounded text-white font-bold text-lg">
            Find Details
            <BiChevronRight className=" text-3xl" />
          </button>
        </div>
        <div>
          <div className="choose-us-card flex gap-3 ">
            <div className=" w-36">
              <img className=" w-full" src={Icon1} alt="" />
            </div>
            <div className=" flex flex-col w-[350px]">
              <h1 className="choose-us-card-body text-3xl font-bold mb-3">Cross Country Drive</h1>
              <p className="choose-us-card-body text-lg text-zinc-500 mb-7">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="choose-us-card flex gap-3 ">
            <div className=" w-36">
              <img className=" w-full" src={Icon2} alt="" />
            </div>
            <div className=" flex flex-col w-[350px]">
              <h1 className="choose-us-card-body text-3xl font-bold mb-3">
                All Inclusive Pricing
              </h1>
              <p className="choose-us-card-body text-lg text-zinc-500 mb-7">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="choose-us-card flex gap-3 ">
            <div className=" w-36">
              <img className=" w-full" src={Icon3} alt="" />
            </div>
            <div className="choose-us-card-body flex flex-col w-[350px]">
              <h1 className=" text-3xl font-bold mb-3">No Hidden Charges</h1>
              <p className=" text-lg text-zinc-500 mb-7">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
