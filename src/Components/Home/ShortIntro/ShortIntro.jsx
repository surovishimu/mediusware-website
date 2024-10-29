import { BiPhoneCall } from "react-icons/bi";
import aboutImg from "/images/aboutus-img.png";
import playImg from "/images/play.png";
import { FiDownload } from "react-icons/fi";

const ShortIntro = () => {
  return (
    <div className="bg-[#F0F8FF] relative flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-20 xl:p-18">
      {/* Image Section */}
      <div className="relative lg:w-2/3 flex-shrink-0 mb-8 lg:mb-0">
        <img
          className="w-full rounded-lg object-cover"
          src={aboutImg}
          alt="about"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-10"
          src={playImg}
          alt="play"
        />
      </div>

      {/* Content Section */}
      <div className="relative bg-white rounded-lg shadow-lg  p-10 lg:p-8 md:p-11 lg:w-1/2  max-h-auto lg:max-h-96  md:mt-5 lg:mt-0 lg:-ml-20 md:ml-20 ml-20 lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 z-10 right-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          A Little Bit <span className="text-[#2EB8A2]">About Us</span>
        </h1>
        <p className="mb-4 text-sm lg:text-base text-gray-700 leading-relaxed">
          Incepted in 2015, Mediusware Ltd. has been serving as a leading IT
          Solution provider in the USA & Bangladesh. Our aim is to help
          businesses worldwide by providing tailored digital solutions. We've
          collaborated with renowned companies globally, creating a wide range
          of satisfied clients!
        </p>

        {/* Stats Section */}
        <div className="flex flex-row  justify-between mb-4 gap-4">
          <div className="bg-gray-100 rounded-md p-4 flex-1 ">
            <h1 className="text-xl font-semibold text-black">800+</h1>
            <p className="text-gray-600 text-sm">Projects</p>
          </div>
          <div className="bg-gray-100 rounded-md p-4 flex-1 ">
            <h1 className="text-xl font-semibold text-black">100+</h1>
            <p className="text-gray-600 text-sm">Team Members</p>
          </div>
          <div className="bg-gray-100 rounded-md p-4 flex-1 ">
            <h1 className="text-xl font-semibold text-black">1,000+</h1>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-[#0C98EB] text-white flex items-center gap-1 px-4 py-2 rounded hover:bg-[#0C98EB] transition duration-300">
            <BiPhoneCall size={18} /> Contact Us
          </button>
          <button className="bg-transparent border-2 border-gray-300 text-gray-800 flex items-center gap-1 px-4 py-2 rounded hover:border-[#0C98EB] hover:text-[#0C98EB] transition duration-300">
            Company Deck <FiDownload size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
