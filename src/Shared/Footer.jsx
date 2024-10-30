import logo from "/images/Logo.svg";
import linkedIn from "/images/linkedin.svg";
import twiter from "/images/x.svg";
import facebook from "/images/fb.svg";
import youtube from "/images/youtube.svg";
import img1 from "/images/clutch.png";
import img2 from "/images/upwork.png";
import img3 from "/images/google.png";
import country1 from "/images/loc-usa.png";
import country2 from "/images/loc-bd.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#072B4A] mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 px-5 md:px-10 lg:px-20 ">
        <div>
          <img className="md:mb-4 mb-6 w-32 md:mx-0 mx-auto" src={logo} alt="Logo" />
          <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
            <img className="w-6  rounded-full" src={linkedIn} alt="LinkedIn" />
            <img className="w-6  rounded-full" src={twiter} alt="Twitter" />
            <img className="w-6  rounded-full" src={facebook} alt="Facebook" />
            <img className="w-6 h-6 rounded-full" src={youtube} alt="YouTube" />
          </div>
          <div className="flex justify-center md:justify-start items-center gap-5 mt-4 flex-wrap">
            <img
              className="xl:w-36 lg:w-28 md:w-40 w-24"
              src={img1}
              alt="Clutch"
            />
            <img
              className="xl:w-36 lg:w-28 md:w-40 w-24"
              src={img2}
              alt="Upwork"
            />
            <img
              className=" xl:w-36 lg:w-28 md:w-40 w-24"
              src={img3}
              alt="Google"
            />
          </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-between text-white lg:mb-0 -mb-16 lg:px-0 px-5 xl:mr-20 lg:mr-0 md:mr-48">
          <div>
            <h1 className="text-md font-semibold mb-4">Company</h1>
            <ul className="text-xs font-thin md:space-y-2 flex flex-row md:flex-col md:gap-0 gap-4">
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex lg:ml-5 md:ml-20 ml-0 gap-10 ">
            <div>
              <h1 className="text-md font-semibold mb-4 md:mt-0 mt-5">
                Services
              </h1>
              <ul className="text-xs font-thin space-y-2">
                <li>Software Development</li>
                <li>UI/UX Design & Dev</li>
                <li>Web Development</li>
                <li>API Integration</li>
                <li>Mobile App Design</li>
                <li>E-commerce Solutions</li>
              </ul>
            </div>
            <div>
              <h1 className="text-md font-semibold md:mb-10 mb-16"></h1>
              <ul className="text-xs font-thin space-y-2 ">
                <li>Mobile App Development</li>
                <li>Enterprise Solution</li>
                <li>SQA Solution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between px-2 md:px-10 lg:px-20 py-10 gap-8">
        <div className="flex md:flex-row flex-col md:items-center items-start bg-[#FFFFFF1A] gap-4 p-4 rounded-md flex-1">
          <img className="md:w-36 w-20" src={country1} alt="USA Office" />
          <div>
            <h1 className="text-white text-lg mb-2">USA Office</h1>
            <span className="text-white flex items-center gap-2">
              <IoLocationSharp />
              1903 Commonwealth St, Houston, TX 77006, USA
            </span>
            <span className="text-white flex items-center gap-2">
              <MdOutlinePhoneInTalk /> +1 (978) 431-0122
            </span>
            <span className="text-white flex items-center gap-2">
              <MdOutlineEmail />
              info@mediusware.com
            </span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start bg-[#FFFFFF1A] gap-4 p-4 rounded-md flex-1">
          <img className="md:w-36 w-20" src={country2} alt="Bangladesh Office" />
          <div>
            <h1 className="text-white text-lg mb-2">Bangladesh Office</h1>
            <span className="text-white flex items-center gap-2">
              <IoLocationSharp />
              1903 Commonwealth St, Dhaka, BD
            </span>
            <span className="text-white flex items-center gap-2">
              <MdOutlinePhoneInTalk /> +880 1750-020408
            </span>
            <span className="text-white flex items-center gap-2">
              <MdOutlineEmail />
              info@mediusware.com
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-7 border-t xl:w-[1120px] lg:w-[900px] mx-auto -mt-5 border-cyan-900 ">
        <p className="text-white text-xs">
          © 2015-2024 Mediusware Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
