import React, { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Resume from "../assets/Resume_Chinmay_Bhate_2023.pdf";
import { Link } from "react-scroll";
import { Link as EmailLink } from "react-router-dom";
import { BsFillPersonLinesFill } from "react-icons/bs";
import style from "./Common-style";
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleMailTo = (e) => {
    e.preventDefault();
    window.location = "mailto:chinmaybhate123@gmail.com";
  };
  return (
    <div
      className={
        `fixed w-full h-[80px] flex justify-end items-center px-4 text-gray-300 ` +
        style.background
      }
    >
      {/* menu */}

      <ul className="hidden md:flex">
        <li targetid="Home">
          <Link
            to="Home"
            className={style.hoverTextColor}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li targetid="About">
          <Link
            to="About"
            className={style.hoverTextColor}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li targetid="Skills">
          <Link
            to="Skills"
            className={style.hoverTextColor}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li targetid="Experience">
          <Link
            to="Experience"
            className={style.hoverTextColor}
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li targetid="Work">
          <Link
            to="Work"
            className={style.hoverTextColor}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li targetid="Contact">
          <Link
            to="Contact"
            className={style.hoverTextColor}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <Link to="Experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <Link to="Work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://linkedin.com/in/chinmaybhate"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000}">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://github.com/chinmay13"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="/"
              onClick={handleMailTo}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565fc9]">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href={Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
