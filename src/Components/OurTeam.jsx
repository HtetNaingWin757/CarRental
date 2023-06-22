import React from "react";
import person1 from "../images/team/1.png"
import person2 from "../images/team/2.png"
import person3 from "../images/team/3.png"
import person4 from "../images/team/4.png"
import person5 from "../images/team/5.png"
import person6 from "../images/team/6.png"

const OurTeam = () => {
  return (
    <div className='our-team gap-10 py-24 px-24 justify-center flex flex-wrap items-center'>
      <div className=" flex shadow-xl flex-col justify-center items-center">
        <img className=" w-72" src={person1} alt="" style={{backgroundColor : "#F6F6F6"}}/>
        <h1 className=" text-2xl mt-7 font-bold">Luke Miller</h1>
        <p className=" text-lg mb-7 font-semibold text-zinc-500">Salesman</p>
      </div>
      <div className=" flex shadow-xl flex-col justify-center items-center">
        <img className=" w-72" src={person2} alt="" style={{backgroundColor : "#F6F6F6"}}/>
        <h1 className=" text-2xl mt-7 font-bold">Michael Diaz</h1>
        <p className=" text-lg mb-7 font-semibold text-zinc-500">Business Owner</p>
      </div>
      <div className=" flex shadow-xl flex-col justify-center items-center">
        <img className=" w-72" src={person3} alt="" style={{backgroundColor : "#F6F6F6"}}/>
        <h1 className=" text-2xl mt-7 font-bold">Briana Ross</h1>
        <p className=" text-lg mb-7 font-semibold text-zinc-500">Photographer</p>
      </div>
      <div className=" flex shadow-xl flex-col justify-center items-center">
        <img className=" w-72" src={person4} alt="" style={{backgroundColor : "#F6F6F6"}}/>
        <h1 className=" text-2xl mt-7 font-bold">Lauren Rivera</h1>
        <p className=" text-lg mb-7 font-semibold text-zinc-500">Car Detailist</p>
      </div>
      <div className=" flex shadow-xl flex-col justify-center items-center">
        <img className=" w-72" src={person5} alt="" style={{backgroundColor : "#F6F6F6"}}/>
        <h1 className=" text-2xl mt-7 font-bold">Martin Rizz</h1>
        <p className=" text-lg mb-7 font-semibold text-zinc-500">Mechanic</p>
      </div>
      <div className=" flex shadow-xl flex-col justify-center items-center">
        <img className=" w-72" src={person6} alt="" style={{backgroundColor : "#F6F6F6"}}/>
        <h1 className=" text-2xl mt-7 font-bold">Caitlyn Hunt</h1>
        <p className=" text-lg mb-7 font-semibold text-zinc-500">Menager</p>
      </div>
    </div>
  );
};

export default OurTeam;
