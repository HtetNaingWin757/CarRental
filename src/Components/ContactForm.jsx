import React from "react";
import {MdOutgoingMail} from "react-icons/md"

const ContactForm = () => {
  return (
    <div className="contact-form w-[600px] flex flex-col items-start justify-start">
      <div className=" contact-form-input mb-5 w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-lg font-semibold">
          Full Name <span className=" text-red-400 text-lg">*</span>
        </label>
        <input
          id="name"
          type="text"
          className=" py-5 px-10 w-full"
          style={{ backgroundColor: "#F2F2F2" }}
          placeholder='E.g: "Joe Shmoe"'
        />
      </div>
      <div className=" contact-form-input mb-5 w-full flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-semibold">
          Email <span className=" text-red-400 text-lg">*</span>
        </label>
        <input
          id="email"
          type="text"
          className=" py-5 px-10 w-full"
          style={{ backgroundColor: "#F2F2F2" }}
          placeholder='youremail@gmail.com'
        />
      </div>
      <div className=" contact-form-input mb-5 w-full flex flex-col gap-2">
        <label htmlFor="message" className="text-lg font-semibold">
        Tell us about it <span className=" text-red-400 text-lg">*</span>
        </label>
        <textarea
          id="message"
          className=" py-5 px-10 w-full"
          rows={"7"}
          style={{ backgroundColor: "#F2F2F2" }}
          placeholder='Write Here...'
        />
      </div>
      <button className=" flex gap-2 items-center justify-center py-5 btn w-full text-lg font-bold text-white">
        <MdOutgoingMail className=" text-xl"/>
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
