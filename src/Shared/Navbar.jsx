import React from "react";
import { NavLink } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "yellow" : "white",
            background: "transparent",
            textDecoration: isActive ? "underline" : "none",
          };
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/services"
        style={({ isActive }) => {
          return {
            color: isActive ? "yellow" : "white",
            background: "transparent",
            textDecoration: isActive ? "underline" : "none",
          };
        }}
      >
        Services
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => {
          return {
            color: isActive ? "yellow" : "white",
            background: "transparent",
            textDecoration: isActive ? "underline" : "none",
          };
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "yellow" : "white",
            background: "transparent",
            textDecoration: isActive ? "underline" : "none",
          };
        }}
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => {
          return {
            color: isActive ? "yellow" : "white",
            background: "transparent",
            textDecoration: isActive ? "underline" : "none",
          };
        }}
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-blue-950">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-white text-xl">{"<mediusware/>"}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-5">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn ">
          <CiCalendar />
          Get a Schedule
        </a>
      </div>
    </div>
  );
};

export default Navbar;
