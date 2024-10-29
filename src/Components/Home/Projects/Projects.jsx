import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "/images/website.jpg";
import img2 from "/images/game.jpg";
import img3 from "/images/learn.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
const Projects = () => {
  return (
    <div className="">
      <div className="px-20">
        <h1 className="mt-10 text-2xl sm:text-3xl font-bold mb-5">
          Projects We’d Hang on{" "}
          <span className="text-[#2EB8A2]">Our Refrigerator</span>
        </h1>
        <div className="flex flex-col md:flex-col lg:flex-row justify-between lg:items-end items-start">
          <p className="w-full md:w-3/5 text-gray-700 text-sm mb-2 md:mb-0">
            Discover our latest work, showcasing innovative solutions and
            successful collaborations that highlight our expertise in delivering
            high-quality software development projects.
          </p>
          <button className="btn btn-sm bg-[#0C98EB] lg:mt-0 md:mt-4 mt-4 text-white">
            See All
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="px-20 mt-10 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide
            className="bg-[#F0F8FF] lg:mb-15 md:mb-16 mb-20 flex flex-col justify-between"
            style={{ height: "450px" }}
          >
            <img
              className="mb-4 rounded-t-lg rounded-b-none h-64 w-full"
              src={img1}
              alt=""
            />

            <div className="px-4">
              <h1 className="mb-2 text-[#072B4A]  text-md font-semibold ml-2 ">
                GoThruhike Website Redesign
              </h1>
              <p className="text-gray-800 ml-2 mb-5 font-semibold text-xs">
                Thruhike is the ultimate platform for discovering and sharing
                your favorite places and products. Our mission is to celebrate
                local business and inspire new experiences.
              </p>
              <a className="flex items-center cursor-pointer text-sm ml-2  text-[#0C98EB]">
                View Project <MdKeyboardArrowRight size={15} />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="bg-[#F0F8FF]  flex flex-col justify-between"
            style={{ height: "450px" }}
          >
            <img
              className="mb-4 rounded-t-lg rounded-b-none h-64 w-full"
              src={img2}
              alt=""
            />

            <div className="px-4">
              <h1 className="mb-2 text-[#072B4A]  text-md font-semibold ml-2 ">
                Gamezone Game Launcher
              </h1>
              <p className="text-gray-800 ml-2 mb-5 font-semibold text-xs">
                Game Launcher is a sleek desktop application designed
                exclusively for gamers. It offers seamless access to your
                favorite games, customizable setti
              </p>
              <a className="flex items-center cursor-pointer text-sm ml-2  text-[#0C98EB]">
                View Project <MdKeyboardArrowRight size={15} />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="bg-[#F0F8FF]  flex flex-col justify-between"
            style={{ height: "450px" }}
          >
            <img
              className="mb-4 rounded-t-lg rounded-b-none h-64 w-full"
              src={img3}
              alt=""
            />

            <div className="px-4">
              <h1 className="mb-2 text-[#072B4A]  text-md font-semibold ml-2 ">
                Learn Here
              </h1>
              <p className="text-gray-800 ml-2 mb-5 font-semibold text-xs">
                LearnHere is the platform that presents all the lessons from
                Beginner to Expert Level with live and recorded classes.
              </p>
              <a className="flex items-center cursor-pointer text-sm ml-2  text-[#0C98EB]">
                View Project <MdKeyboardArrowRight size={15} />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="bg-[#F0F8FF]  flex flex-col justify-between"
            style={{ height: "450px" }}
          >
            <img
              className="mb-4 rounded-t-lg rounded-b-none h-64 w-full"
              src={img1}
              alt=""
            />

            <div className="px-4">
              <h1 className="mb-2 text-[#072B4A]  text-md font-semibold ml-2 ">
                GoThruhike Website Redesign
              </h1>
              <p className="text-gray-800 ml-2 mb-5 font-semibold text-xs">
                Thruhike is the ultimate platform for discovering and sharing
                your favorite places and products. Our mission is to celebrate
                local business and inspire new experiences.
              </p>
              <a className="flex items-center cursor-pointer text-sm ml-2  text-[#0C98EB]">
                View Project <MdKeyboardArrowRight size={15} />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="bg-[#F0F8FF]  flex flex-col justify-between"
            style={{ height: "450px" }}
          >
            <img
              className="mb-4 rounded-t-lg rounded-b-none h-64 w-full"
              src={img2}
              alt=""
            />

            <div className="px-4">
              <h1 className="mb-2 text-[#072B4A]  text-md font-semibold ml-2 ">
                Gamezone Game Launcher
              </h1>
              <p className="text-gray-800 ml-2 mb-5 font-semibold text-xs">
                Game Launcher is a sleek desktop application designed
                exclusively for gamers. It offers seamless access to your
                favorite games, customizable setti
              </p>
              <a className="flex items-center cursor-pointer text-sm ml-2  text-[#0C98EB]">
                View Project <MdKeyboardArrowRight size={15} />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="bg-[#F0F8FF]  flex flex-col justify-between"
            style={{ height: "450px" }}
          >
            <img
              className="mb-4 rounded-t-lg rounded-b-none h-64 w-full"
              src={img3}
              alt=""
            />

            <div className="px-4">
              <h1 className="mb-2 text-[#072B4A]  text-md font-semibold ml-2 ">
                Learn Here
              </h1>
              <p className="text-gray-800 ml-2 mb-5 font-semibold text-xs">
                LearnHere is the platform that presents all the lessons from
                Beginner to Expert Level with live and recorded classes.
              </p>
              <a className="flex items-center cursor-pointer text-sm ml-2  text-[#0C98EB]">
                View Project <MdKeyboardArrowRight size={15} />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
