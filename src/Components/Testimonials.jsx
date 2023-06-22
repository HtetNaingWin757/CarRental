import React from "react";
import Pfp1 from "../images/testimonials/pfp1.jpg";
import Pfp2 from "../images/testimonials/pfp2.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div
      className="testimonial flex py-24 items-center flex-col"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="testimonial-header text-center mb-24 w-[750px]">
        <h1 className=" text-2xl font-bold mb-3">Reviewed by People</h1>
        <h1 className=" text-5xl font-bold mb-7">Client's Testimonials</h1>
        <p className=" text-lg text-zinc-500 mb-7">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="testimonial-body flex gap-10">
        <div className="message-1 py-16 px-16 w-[580px] bg-white shadow-xl">
          <p className=" text-2xl font-semibold">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </p>
          <div className=" flex justify-between items-center mt-7">
            <div className=" flex items-center gap-5">
              <div className=" w-20">
                <img className=" rounded-full" src={Pfp1} alt="" />
              </div>
              <div className=" flex flex-col">
                <h1 className=" text-xl font-bold">Parry Hotter</h1>
                <p className=" text-xl">Mandalay</p>
              </div>
            </div>
            <div>
              <RiDoubleQuotesR className=" text-7xl text-[#FF4D30]" />
            </div>
          </div>
        </div>
        <div className="message-2 py-16 px-16 w-[580px] bg-white shadow-xl">
          <p className=" text-2xl font-semibold">
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website!"
          </p>
          <div className=" flex justify-between items-center mt-7">
            <div className=" flex items-center gap-5">
              <div className=" w-20">
                <img className=" rounded-full" src={Pfp2} alt="" />
              </div>
              <div className=" flex flex-col">
                <h1 className=" text-xl font-bold">Ron Rizzly</h1>
                <p className=" text-xl">Yangon</p>
              </div>
            </div>
            <div>
              <RiDoubleQuotesR className=" text-7xl text-[#FF4D30]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
