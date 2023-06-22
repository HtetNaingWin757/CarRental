import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const ContactInfo = () => {
  return (
    <div className="additional-info ">
      <div className="additional-container w-[450px]">
        <h1 className=" text-5xl font-bold leading-snug mb-10">
          Need additional information?
        </h1>
        <p className=" text-lg text-zinc-500 mb-10">
          A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience.
        </p>
        <div className=" flex flex-col gap-1">
          <p className=" contact">
            <a
              href="tel:123456789"
              className="contact-link flex items-center gap-3 font-bold"
            >
              <BsTelephoneFill />
              (123)-456-789
            </a>
          </p>
          <p className=" contact">
            <a
              href="mailto:carRental@gmail.com"
              className="contact-link flex items-center gap-3 font-bold"
            >
              <GrMail />
              carRental@gmail.com
            </a>
          </p>
          <p className=" contact">
            <a
              href="https://github.com/HtetNaingWin757"
              className="contact-link flex items-center gap-3 font-semibold"
            >
              <GrMail />
              Mandalay / Myanmar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
