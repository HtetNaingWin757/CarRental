import React from "react";
import hero from "../images/hero/main-car.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Book from "../Components/Book";
import Plan from "../Components/Plan";
import Venhicle from "../Components/Venhicle";
import ChooseUs from "../Components/ChooseUs";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
import Download from "../Components/Download";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="home">
      <section className="flex px-10 pt-36 justify-center lg:justify-between items-center">
        <div className=" hero-text">
          <p className=" text-2xl font-bold mb-3">Plan your trip now</p>
          <h1 className=" text-6xl font-bold leading-[70px] mb-7">
            Save <span className="text">big</span> with our car rental
          </h1>
          <p className=" text-xl text-slate-500 leading-normal mb-10">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="hero-btn flex items-center gap-6">
            <Link className="primary-btn">
              <button className="btn primary-btn flex items-center gap-2 py-[17px] px-9 rounded text-white font-bold text-lg">
                Book Ride
                <IoIosCheckmarkCircle className=" text-2xl" />
              </button>
            </Link>
            <button className="primary-btn py-[14px] flex items-center gap-2 px-9 border-[3px] border-black rounded text-white font-bold text-lg bg-black hover:bg-inherit hover:text-black hover:border-black hover:border-[3px]">
              Learn More
              <BiChevronRight className=" text-3xl" />
            </button>
          </div>
        </div>
        <img src={hero} className="w-[60%] hero-car" alt="" />
      </section>
      <Book />
      <Plan />
      <Venhicle/>
      <div className="save w-screen flex flex-col justify-center gap-8 items-center text-white px-20 py-20" style={{backgroundColor : "#2D2D2D"}}>
        <h1 className="save-title text-center text-6xl font-bold">Save big with our cheap car rental!</h1>
        <p className="save-body text-3xl">Top Airports. Local Suppliers. <span style={{color: "#FF4D30"}}> 24/7 </span> Support.</p>
      </div>
      <ChooseUs/>
      <Testimonials/>
      <FAQ/>
      <Download/>
      <Footer/>
    </div>
  );
};

export default Home;
