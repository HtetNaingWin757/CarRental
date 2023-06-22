import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer flex flex-wrap py-24 px-10 justify-between gap-3 items-start">
      <div className="mb-10 w-[300px]">
        <h1 className=" text-2xl font-bold mb-3">
          CAR <span className=" font-normal">Rental</span>
        </h1>
        <p className=" text-zinc-500 text-lg mb-3">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className=" flex flex-col gap-1">
          <p className=" contact">
            <a
              href="tel:123456789"
              className=" flex items-center gap-3 font-bold"
            >
              <BsTelephoneFill />
              (123)-456-789
            </a>
          </p>
          <p className=" contact">
            <a
              href="mailto:carRental@gmail.com"
              className=" flex items-center gap-3 font-bold"
            >
              <GrMail />
              carRental@gmail.com
            </a>
          </p>
          <p className=" contact">
            <a
              href="https://github.com/HtetNaingWin757"
              className=" flex items-center gap-3 font-semibold"
            >
              <GrMail />
              Design by Htet Naing Win
            </a>
          </p>
        </div>
      </div>
      <div className="mb-10 w-[300px]">
        <h1 className=" text-2xl font-bold mb-3">COMPANY</h1>
        <div className=" flex flex-col gap-1 text-lg">
          <p className="contact">New York</p>
          <p className="contact">Careers</p>
          <p className="contact">Mobile</p>
          <p className="contact">Blog</p>
          <p className="contact">How we work</p>
        </div>
      </div>
      <div className=" w-[300px]">
        <h1 className=" text-2xl font-bold mb-3">WORKING HOURS</h1>
        <div className=" flex flex-col gap-1 text-lg">
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
      <div className=" w-[300px]">
        <h1 className=" text-2xl font-bold mb-3">
          CAR <span className=" font-normal">Rental</span>
        </h1>
        <p className=" text-zinc-500 text-lg mb-3">
          Subscribe your Email address for latest news & updates.
        </p>
        <form>
            <input type="text" className=" w-full py-3 px-5 outline-none mb-3" style={{backgroundColor : "#ECECEC"}}/>
            <button className=" w-full text-center text-white py-3 font-semibold" style={{backgroundColor : "#FA4226"}}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
