import React from "react";
import ceoImg from "/images/ceo-img.png";
import { IoMdArrowForward } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";

const Inquiry = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mt-20 px-20">
      <div className="flex-1">
        <div className="relative">
          <img className="rounded-lg lg:w-56 md:w-56 w-36" src={ceoImg} alt="CEO" />

          <div className="absolute bottom-0 xl:right-28 lg:right-5 md:right-5 right-0 bg-[rgba(165,234,218,0.8)] p-2 rounded-lg">
            <h1 className="text-[#072B4A] text-md font-bold">
              Md. Shahinur Rahman
            </h1>
            <span className="text-xs text-[#072B4A]">
              Managing Director, Mediusware Ltd
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm">
          I'd be excited to talk with you about your projects or what you need.
        </p>
        <p className="mt-4 text-sm">
          Fill in the form or send us an email to <span className="text-[#007ACC] font-semibold">“info@mediusware.com”</span>
        </p>
        <h2 className="text-[#072B4A] font-bold text-md mt-4 mb-4">
          Talk to you in less than 24hs.
        </h2>
        <div className="bg-[#F0F8FF] p-5">
          <span className="font-bold text-[#072B4A] ">Book a call</span>
          <p className="text-sm">
            Feel free to select a time at your convenience!
          </p>
          <a
            className="flex justify-start text-[#0C98EB] text-sm items-center mt-2"
            href=""
          >
            Let's Talk <IoMdArrowForward />
          </a>
        </div>
      </div>
      <div className="flex-1 bg-[#F0F8FF] p-10">
        <h1 className="text-[#072B4A] text-lg font-semibold">
          Got an idea? We’ve got the skills.
        </h1>
        <p className="text-sm text-[#072B4A]">
          Fill out our contact form and we’ll get in touch!
        </p>

        {/* Inquiry Form */}
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="border border-gray-300 p-2 rounded w-full outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="border border-gray-300 p-2 rounded w-full outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm" htmlFor="phone">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="border border-gray-300 p-2 rounded w-full outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm" htmlFor="company">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company"
              placeholder="Enter your company name"
              className="border border-gray-300 p-2 rounded w-full outline-none"
            />
          </div>
          <div className="col-span-1 md:col-span-2 ">
            <label className="block mb-1 text-sm" htmlFor="details">
              Deep Details about Your Query (Optional)
            </label>
            <textarea
              id="details"
              placeholder="Enter details about your query"
              className="border border-gray-300 p-2 rounded w-full outline-none"
              rows="4"
            ></textarea>
          </div>
          {/* Submit Button at the End */}
          <div className="col-span-1 md:col-span-2 flex md:justify-end justify-center mt-4">
            <button
              type="submit"
              className="flex justify-center items-center gap-2 bg-[#0C98EB] text-white p-2 rounded hover:bg-[#1D5B8D] text-sm"
            >
              Submit Inquiy
              <LuSendHorizonal />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
