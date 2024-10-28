import React from "react";
import { NavLink } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import logo from "../../assets/images/Logo.svg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: "white",
          background: "transparent",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Home
      </NavLink>

      <div className="relative group">
        <NavLink
          to="/services"
          style={({ isActive }) => ({
            color: "white",
            background: "transparent",
            textDecoration: isActive ? "underline" : "none",
          })}
          className="flex items-center "
        >
          Services <IoIosArrowDown className="text-xs" />
        </NavLink>

        {/* Submenu for Services */}
        <div className="absolute left-0 top-3 px-2 hidden mt-2 rounded-lg w-48 bg-white shadow-lg group-hover:block">
          <ul className="py-2">
            <li>
              <NavLink
                to="/services/web-development"
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/app-development"
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                App Development
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/seo"
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                SEO Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <NavLink
        to="/projects"
        style={({ isActive }) => ({
          color: "white",
          background: "transparent",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Projects
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: "white",
          background: "transparent",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        About Us
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: "white",
          background: "transparent",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <div className="navbar lg:px-28 md:px-10 opacity-75 absolute z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xl gap-y-5  dropdown-content bg-blue-950 rounded-box z-[1] mt-3 w-52 p-4 shadow "
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="h-9 lg:ml-0 md:ml-48 ml-16"
          src={logo}
          alt=""
          srcset=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-5">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-transparent text-white btn-sm hover:bg-transparent">
          <CiCalendar className="text-lg" />
          Get a Schedule
        </a>
      </div>
    </div>
  );
};

export default Navbar;
