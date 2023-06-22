import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";

const VenhicleModels = ({ cars }) => {
  return (
    <div className="venhicle-model flex flex-wrap justify-center items-center gap-7 py-24 px-28">
      {cars.map((car) => {
        return (
          <div className=" border rounded-t" key={car.id}>
            <img
              className=" rounded-t w-[350px] h-[230px]"
              src={car.img}
              alt=""
            />
            <div className=" px-7 py-8">
              <div className="flex text-[30px] font-bold justify-between items-center">
                <h1 className="text-2xl">{car.name.substring(0, 7)}</h1>
                <p>$ {car.price}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className=" flex ">
                  <AiFillStar className=" text-amber-300 text-[20px]" />
                  <AiFillStar className=" text-amber-300 text-[20px]" />
                  <AiFillStar className=" text-amber-300 text-[20px]" />
                  <AiFillStar className=" text-amber-300 text-[20px]" />
                  <AiFillStar className=" text-amber-300 text-[20px]" />
                </div>
                <p>per day</p>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className=" flex items-center gap-3">
                  <FaCarSide />
                  <span className=" text-lg font-semibold text-zinc-500">
                    {car.model}
                  </span>
                </div>
                <div className=" flex items-center gap-3">
                  <span className=" text-lg font-semibold text-zinc-500">
                    4/5
                  </span>
                  <FaCarSide />
                </div>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className=" flex items-center gap-3">
                  <FaCarSide />
                  <span className=" text-lg font-semibold text-zinc-500">
                    {car.transmission}
                  </span>
                </div>
                <div className=" flex items-center gap-3">
                  <span className=" text-lg font-semibold text-zinc-500">
                    {car.fuel}
                  </span>
                  <FaCarSide />
                </div>
              </div>
              <div className=" border-t mt-5"></div>
              <Link to={"/"}>
                <button className="btn w-full text-center text-white py-5 mt-5 font-bold text-lg">
                  Book Ride
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VenhicleModels;
