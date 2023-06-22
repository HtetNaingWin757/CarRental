import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import {RxCross2} from "react-icons/rx"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const MenuControl = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      {/* Mobile */}
      <ul
        className={`${
          openMenu ? "mobileMenuOpen" : ""
        } mobileMenu bg-white flex w-[100%] h-screen flex-col items-center justify-center font-medium gap-7 text-2xl`}
      >
        <NavLink className="nav absolute top-10 right-10" onClick={MenuControl}>
          <RxCross2/>
        </NavLink>
        <NavLink className="nav" onClick={MenuControl} to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink className="nav" onClick={MenuControl} to={"/about"}>
          <li>About</li>
        </NavLink>
        <NavLink className="nav" onClick={MenuControl} to={"/models"}>
          <li>Vehicle Models</li>
        </NavLink>
        <NavLink className="nav" onClick={MenuControl} to={"/testimonials"}>
          <li>Testimonials</li>
        </NavLink>
        <NavLink className="nav" onClick={MenuControl} to={"/team"}>
          <li>Our Team</li>
        </NavLink>
        <NavLink className="nav" onClick={MenuControl} to={"/contact"}>
          <li>Contact</li>
        </NavLink>
      </ul>

      {/* Desktop */}
      <div className="navbar flex z-50 absolute top-0 right-0 w-[100vw] overflow-x-hidden justify-between items-center py-10 pr-14 pl-10">
        <Link to={"/"}>
          <img className="logo w-40" src={logo} alt="" />
        </Link>
        <ul className="navlink flex font-medium gap-5 text-lg">
          <NavLink className="nav" to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink className="nav" to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink className="nav" to={"/models"}>
            <li>Vehicle Models</li>
          </NavLink>
          <NavLink className="nav" to={"/testimonials"}>
            <li>Testimonials</li>
          </NavLink>
          <NavLink className="nav" to={"/team"}>
            <li>Our Team</li>
          </NavLink>
          <NavLink className="nav" to={"/contact"}>
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="navlink flex font-medium gap-5 items-center">
          <button className="nav text-lg">Sign in</button>
          <button className=" py-3 px-9 rounded text-lg text-white btn">
            Register
          </button>
        </div>
        <div className="mobileNav">
          <div onClick={MenuControl} className="nav text-3xl">
            <MdOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
