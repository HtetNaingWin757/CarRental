import React from "react";
import {FaCar} from "react-icons/fa"
import {MdLocationPin} from "react-icons/md"
import {FaCalendarAlt} from "react-icons/fa"

const Book = () => {
  return (
    <div className="booking mx-10 mt-10 book">
      <form className="book-form pt-10 px-12 pb-20 rounded-md shadow-xl">
        <h1 className=" text-3xl font-bold w-full mb-10">Book a car</h1>
        <div className="input-group flex justify-center flex-wrap gap-5">
          <div className="book-input flex flex-col w-[375px]">
            <label
              htmlFor="carName"
              className=" text-lg font-bold flex items-center gap-2 mb-3"
            >
              <FaCar className=" text-red-400" /> Select Your Car Type{" "}
              <span className=" text-red-500">*</span>
            </label>
            <select
              name="carName"
              className="p-4 border text-lg rounded text-zinc-400 font-semibold outline-none"
              id="carName"
            >
              <option value="volvo" className=" font-semibold">Select your car type</option>
              <option value="saab" className=" font-semibold">Audi A1 S-Line</option>
              <option value="mercedes" className=" font-semibold">VW Golf 6</option>
              <option value="audi" className=" font-semibold">Toyota Camry</option>
              <option value="audi" className=" font-semibold">BMW 320 ModernLine</option>
              <option value="audi" className=" font-semibold">Mercedes-Benz GLK</option>
              <option value="audi" className=" font-semibold">VW Passat CC</option>


            </select>
          </div>
          <div className="book-input flex flex-col w-[375px]">
            <label
              htmlFor="location"
              className=" text-lg font-bold flex items-center gap-2 mb-3"
            >
              <MdLocationPin className=" text-red-400" /> Pick-up{" "}
              <span className=" text-red-500">*</span>
            </label>
            <select
              name="location"
              className="p-4 border text-lg rounded text-zinc-400 font-semibold outline-none"
              id="location"
            >
              <option value="volvo" className=" font-semibold">Select pick up location</option>
              <option value="saab" className=" font-semibold">Yangon</option>
              <option value="saab" className=" font-semibold">Mandalay</option>
              <option value="saab" className=" font-semibold">Pyin Oo Lwin</option>
              <option value="saab" className=" font-semibold">Nay Pyi Taw</option>
              <option value="saab" className=" font-semibold">Pathein Gyi</option>             
            </select>
          </div>
          <div className="book-input flex flex-col w-[375px]">
            <label
              htmlFor="drop-location"
              className=" text-lg font-bold flex items-center gap-2 mb-3"
            >
              <MdLocationPin className=" text-red-400" /> Drop of{" "}
              <span className=" text-red-500">*</span>
            </label>
            <select
              name="drop-location"
              className="p-4 border text-lg rounded text-zinc-400 font-semibold outline-none"
              id="drop-location"
            >
              <option value="volvo" className=" font-semibold">Select drop of location</option>
              <option value="saab" className=" font-semibold">Yangon</option>
              <option value="saab" className=" font-semibold">Mandalay</option>
              <option value="saab" className=" font-semibold">Pyin Oo Lwin</option>
              <option value="saab" className=" font-semibold">Nay Pyi Taw</option>
              <option value="saab" className=" font-semibold">Pathein Gyi</option>
            </select>
          </div>
          <div className="book-input flex flex-col w-[375px]">
            <label
              htmlFor="pick-up-date"
              className=" text-lg font-bold flex items-center gap-2 mb-3"
            >
              <FaCalendarAlt className=" text-red-400" /> Pick-up{" "}
              <span className=" text-red-500">*</span>
            </label>
            <input type="date" className=" p-3 border text-lg rounded outline-none"/>
          </div>
          <div className="book-input flex flex-col w-[375px]">
            <label
              htmlFor="drop-date"
              className=" text-lg font-bold flex items-center gap-2 mb-3"
            >
              <FaCalendarAlt className=" text-red-400" /> Drop-of{" "}
              <span className=" text-red-500">*</span>
            </label>
            <input type="date" className=" p-3 border text-lg rounded outline-none"/>
          </div>
          <div className="book-btn flex primary-btn">
            <button className="btn book-btn mt-auto py-4 w-[375px] text-xl text-white font-semibold">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Book;
