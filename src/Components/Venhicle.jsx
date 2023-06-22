import React, { useEffect, useState } from "react";
import { CAR_DATA } from "./CarData";

const Venhicle = () => {
  const carDatas = CAR_DATA;
  const defaultCar = carDatas[0];
  const [selectData, setSelectData] = useState(defaultCar);

  const showCar = (name) => {
    const data = carDatas.filter((car) => car.name === name);
    setSelectData(data[0]);
  };

  return (
    <div className="car-model px-10 mt-10 mb-52 flex flex-col items-center justify-center">
      <div className=" text-center w-[600px]">
        <p className=" text-2xl font-bold mb-3">Vehicle Models</p>
        <h1 className=" text-5xl font-bold leading-[70px] mb-7">
          Our rental fleet
        </h1>
        <p className="text-lg text-zinc-500 text-center">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="model-container flex w-[100%] flex-wrap justify-between items-center mt-10">
        <div className="model-names flex w-72 flex-col gap-1">
          {carDatas?.map((carData, i) => {
            const isActive = selectData.name === carData.name;
            return (
              <button
                onClick={() => showCar(carData.name)}
                key={i}
                className={`${
                  isActive ? "active-btn" : ""
                } btn-model text-2xl text-start font-[625] bg-zinc-300 py-4 px-5 w-full`}
              >
                {carData.name}
              </button>
            );
          })}
        </div>
        <div className=" overflow-hidden w-[600px]">
          <img src={selectData.img} className={`model-img w-full`} alt="" />
        </div>
        <div>
          <div className="w-72 mb-2">
            <div
              className=" w-full py-2 px-5 text-white flex items-center"
              style={{ backgroundColor: "#FF4D30" }}
            >
              <h1 className=" text-3xl font-extrabold me-3">
                ${selectData.price} 
              </h1>
              <span className=" font-normal text-2xl">  / rent per day</span>
            </div>
            <div className=" flex w-full py-2 px-5 border-b-[3px] border-l-[3px] border-r-[3px] border-gray-400">
              <h1 className=" w-[50%] text-center">Model</h1>
              <div className=" h-6 border-r-[3px] border-gray-400"></div>
              <h1 className=" w-[50%] text-center">{selectData.model}</h1>
            </div>
            <div className=" flex w-full py-2 px-5 border-b-[3px] border-l-[3px] border-r-[3px] border-gray-400">
              <h1 className=" w-[50%] text-center">Mark</h1>
              <div className=" h-6 border-r-[3px] border-gray-400"></div>
              <h1 className=" w-[50%] text-center">{selectData.mark}</h1>
            </div>
            <div className=" flex w-full py-2 px-5 border-b-[3px] border-l-[3px] border-r-[3px] border-gray-400">
              <h1 className=" w-[50%] text-center">Year</h1>
              <div className=" h-6 border-r-[3px] border-gray-400"></div>
              <h1 className=" w-[50%] text-center">{selectData.year}</h1>
            </div>
            <div className=" flex w-full py-2 px-5 border-b-[3px] border-l-[3px] border-r-[3px] border-gray-400">
              <h1 className=" w-[50%] text-center">Doors</h1>
              <div className=" h-6 border-r-[3px] border-gray-400"></div>
              <h1 className=" w-[50%] text-center">{selectData.doors}</h1>
            </div>
            <div className=" flex w-full py-2 px-5 border-b-[3px] border-l-[3px] border-r-[3px] border-gray-400">
              <h1 className=" w-[50%] text-center">AC</h1>
              <div className=" h-6 border-r-[3px] border-gray-400"></div>
              <h1 className=" w-[50%] text-center">{selectData.air}</h1>
            </div>
            <div className=" flex w-full py-2 px-5 border-b-[3px] border-l-[3px] border-r-[3px] border-gray-400">
              <h1 className=" w-[50%] text-center">Transmission</h1>
              <div className=" h-6 border-r-[3px] border-gray-400"></div>
              <h1 className=" w-[50%] text-center">{selectData.transmission}</h1>
            </div>
            <div className=" flex w-full py-2 px-5 border-b-[3px] border-l-[3px] border-r-[3px] border-gray-400">
              <h1 className=" w-[50%] text-center">Fuel</h1>
              <div className=" h-6 border-r-[3px] border-gray-400"></div>
              <h1 className=" w-[50%] text-center">{selectData.fuel}</h1>
            </div>
          </div>
          <button className=" w-72 btn py-2 px-5 text-2xl text-white font-bold">RESERVE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Venhicle;
