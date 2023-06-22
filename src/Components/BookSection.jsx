import React from "react";
import { BsTelephoneFill } from "react-icons/bs";


const BookSection = () => {
  return (
    <div className="book-section flex xl:justify-center gap-10 items-center px-7 py-24">
      <h1 className="book-title leading-snug text-4xl text-white font-bold">
        Book a car by getting in touch with us
      </h1>
      <h1 className="book-contact flex items-end gap-2 text-4xl font-bold" style={{color : "#FF4D30"}}>
        <BsTelephoneFill className=" text-3xl"/> (123) 456-7869
        </h1>
    </div>
  );
};

export default BookSection;
