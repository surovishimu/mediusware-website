import { BiPhoneCall } from "react-icons/bi";
import { CgMouse } from "react-icons/cg";

const Banner = () => {
  return (
    <div className="relative overflow-hidden h-[calc(100vh-200px)] w-full">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://s3-alpha-sig.figma.com/img/f338/8544/0a00cbb5813a5e26cf1e8eb69418f309?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMkbFD4dF~2kzccmN7Ys2YhFThaMp~vQV5dV1UiidaXv5yX3wepZQmkWhoYh~tTg7I6Ha~NBEigNilKQTNV9IckPPyR~BI1g8NumZV7CW8ILhFQX-xK16MvYFM3vBXR8uDnOIeZoIVl0C-Cm1l8FSss7t0JR9QHVhANaFrMl-xsx-GsTgPGxhogILuPCHjleZ8spY0t9Fw-eTC3hAZ85n8kMIaGQQkqvCWzZFKL8ajZHJ-OqUPfvNafSXgr9tepJGf1woF82ebzQfudw4fMgQ57TllxDGv0quJR89PQmBNFC~S7oeZCIVwU0PAuQrIa0alMgyeA41Jmeq2~Cf7y6fA__"
        alt="Banner Background"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#0F172AE5] opacity-90">
        <div className="text-center px-4">
          <h1 className="text-white text-4xl font-bold leading-normal">
            Crafting Customized  into
            <span className="text-[#2EB8A2]"> Digital Solutions </span>
          </h1>
          <p className="text-white text-sm mt-4 mb-2">
            Explore our full range of software development services designed to transform your ideas into innovative, high-performing <br /> digital products.
          </p>
          
        
          <div className="flex justify-center mt-6">
            <button className="btn btn-sm bg-[#0C98EB] border-none text-white font-thin flex items-center space-x-2">
              <BiPhoneCall />
              <span>Talk to Someone</span>
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Banner;
