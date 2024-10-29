import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "/images/slider1.jpg";
import img2 from "/images/slider2.jpg";
import img3 from "/images/slider3.jpg";
import playImg from "/images/play.png";

const Feedback = () => {
  return (
    <div className="bg-[#F0F8FF] p-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          What the People
          <span className=" text-[#2EB8A2]">Are Saying</span>
        </h1>
        <p className="text-sm text-gray-700">
          Explore success stories from clients across a range of industries,
          spanning from techpreneurs and start-ups to established enterprises.
        </p>
      </div>
      <div className="px-8 mt-10 relative">
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
          {/* First Slide */}
          <SwiperSlide
            className="bg-white p-4 rounded-md mb-20 relative"
            style={{ height: "400px" }}
          >
            <div className="relative">
              <img className="rounded-lg mb-4" src={img1} alt="Feedback 1" />

              <div className="absolute inset-0 bg-black opacity-50 rounded-lg flex items-center justify-center">
                <img src={playImg} alt="Play Button" className="w-12 h-12" />
              </div>
            </div>
            <p className="text-[#072B4A] ml-2 mb-3 font-semibold text-md">
              Mediusware renewed our trust in outsourcing IT development in the
              USA.
            </p>
            <h1 className="text-gray-800 font-semibold ml-2 mb-1">
              Jenny Wilson
            </h1>
            <span className="text-sm ml-2 text-[#1E293B] font-thin">
              CEO, Company Name
            </span>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide
            className="bg-white p-4 rounded-md mb-20 relative"
            style={{ height: "400px" }}
          >
            <div className="relative">
              <img className="rounded-lg mb-4" src={img2} alt="Feedback 2" />

              <div className="absolute inset-0 bg-black opacity-50 rounded-lg flex items-center justify-center">
                <img src={playImg} alt="Play Button" className="w-12 h-12" />
              </div>
            </div>
            <p className="text-[#072B4A] ml-2 mb-3 font-semibold text-md">
              Banking the unbanked with the help of Mediusware developers.
            </p>
            <h1 className="text-gray-800 font-semibold ml-2 mb-1">
              Courtney Henry
            </h1>
            <span className="text-sm ml-2 text-[#1E293B] font-thin">
              CTO, Company Name
            </span>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide
            className="bg-white p-4 rounded-md mb-20 relative"
            style={{ height: "400px" }}
          >
            <div className="relative">
              <img className="rounded-lg mb-4" src={img3} alt="Feedback 3" />

              <div className="absolute inset-0 bg-black opacity-50 rounded-lg flex items-center justify-center">
                <img src={playImg} alt="Play Button" className="w-12 h-12" />
              </div>
            </div>
            <p className="text-[#072B4A] ml-2 mb-3 font-semibold text-md">
              Our Digital Transformation Journey Fueled by Top-Tier IT Solutions
              by Mediusware Ltd.
            </p>
            <h1 className="text-gray-800 font-semibold ml-2 mb-1">
              Kristin Watson
            </h1>
            <span className="text-sm ml-2 text-[#1E293B] font-thin">
              Director, Company Name
            </span>
          </SwiperSlide>

          {/* Fourth Slide */}
          <SwiperSlide
            className="bg-white p-4 rounded-md mb-20 relative"
            style={{ height: "400px" }}
          >
            <div className="relative">
              <img className="rounded-lg mb-4" src={img1} alt="Feedback 1" />

              <div className="absolute inset-0 bg-black opacity-50 rounded-lg flex items-center justify-center">
                <img src={playImg} alt="Play Button" className="w-12 h-12" />
              </div>
            </div>
            <p className="text-[#072B4A] ml-2 mb-3 font-semibold text-md">
              Mediusware renewed our trust in outsourcing IT development in the
              USA.
            </p>
            <h1 className="text-gray-800 font-semibold ml-2 mb-1">
              Jenny Wilson
            </h1>
            <span className="text-sm ml-2 text-[#1E293B] font-thin">
              CEO, Company Name
            </span>
          </SwiperSlide>

          {/* Fifth Slide */}
          <SwiperSlide
            className="bg-white p-4 rounded-md mb-20 relative"
            style={{ height: "400px" }}
          >
            <div className="relative">
              <img className="rounded-lg mb-4" src={img2} alt="Feedback 2" />

              <div className="absolute inset-0 bg-black opacity-50 rounded-lg flex items-center justify-center">
                <img src={playImg} alt="Play Button" className="w-12 h-12" />
              </div>
            </div>
            <p className="text-[#072B4A] ml-2 mb-3 font-semibold text-md">
              Banking the unbanked with the help of Mediusware developers.
            </p>
            <h1 className="text-gray-800 font-semibold ml-2 mb-1">
              Courtney Henry
            </h1>
            <span className="text-sm ml-2 text-[#1E293B] font-thin">
              CTO, Company Name
            </span>
          </SwiperSlide>

          {/* Sixth Slide */}
          <SwiperSlide
            className="bg-white p-4 rounded-md mb-20 relative"
            style={{ height: "400px" }}
          >
            <div className="relative">
              <img className="rounded-lg mb-4" src={img3} alt="Feedback 3" />

              <div className="absolute inset-0 bg-black opacity-50 rounded-lg flex items-center justify-center">
                <img src={playImg} alt="Play Button" className="w-12 h-12" />
              </div>
            </div>
            <p className="text-[#072B4A] ml-2 mb-3 font-semibold text-md">
              Our Digital Transformation Journey Fueled by Top-Tier IT Solutions
              by Mediusware Ltd.
            </p>
            <h1 className="text-gray-800 font-semibold ml-2 mb-1">
              Kristin Watson
            </h1>
            <span className="text-sm ml-2 text-[#1E293B] font-thin">
              Director, Company Name
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
