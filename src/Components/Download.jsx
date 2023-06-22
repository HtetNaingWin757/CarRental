import React from "react";

const Download = () => {
  return (
    <div
      className="download pt-20 pb-[90px] ps-10 w-screen"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="download-body w-[570px]">
        <h1 className="download-title text-5xl font-bold leading-snug mb-6">
          Download our app to get most out of it
        </h1>
        <p className="download-para text-zinc-500 mb-6">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className=" download-btns flex gap-5">
          <button className="">
            <img
              src="https://car-rental-ten.vercel.app/static/media/googleapp.e6493904327fe3f9b89c7c75a4f3ae74.svg"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://car-rental-ten.vercel.app/static/media/appstore.35481c6295b0744dfcc00d35874fbdd8.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
