import { BiPhoneCall } from "react-icons/bi";
import { CgMouse } from "react-icons/cg";
const Banner = () => {
  return (
    <div className="relative overflow-hidden h-[calc(100vh-80px)] w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://s3-figma-videos-production-sig.figma.com/video/907900026577014002/TEAM/2e15/b653/-bba7-4454-a5cc-3ca982ed3987?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ALJFYa~AgGgHkY0b7lFiNvOSGlnRv-C3IBNSM7tUCYwANwpeKSkYTNX~pxWvLLeJ4h4qB5ZkWuskiWXLJArwL6pO-XTcdE8zTAYiy-cTS-DSepJcvArU4Iu4R33Rs~sNdY6oNbtDGM3zJh~PQ0u041Ceq7DmNFpQucQ9-9Lq91z9rZN5KaEJM-YvLIRWZsILgNyHHRKVvtN2fASKM6TneOz~hoymJ-b9oJxh0QHK8MxswSGRlLjTipVJSUuKZlvrqEIYwWGuRpVQUqqx-9W0BKmjrB2A~ZS6TC9rguLZuS~AmjVOq28iENNi3aZsxOFAL~B9FVSOSJ72liAEzMHVNQ__"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 ">
        <div className="text-center px-4 ">
          <h1 className="text-white text-5xl font-bold leading-normal">
            Transforming Your Ideas <br /> into
            <span className="text-[#2EB8A2]">Digital Outcomes</span>
          </h1>
          <p className="text-white text-sm mt-4 mb-2">
            Our global journey needs your expertise. Align with our brand ethos
            and help us reach new heights across the world.
          </p>
          <button className="btn btn-sm btn-accent mt-6">
            <BiPhoneCall />
            Talk to Someone
          </button>
        </div>
      </div>
     
        <CgMouse className="absolute bottom-5 right-5 text-[#2EB8A2] text-2xl "/>
      
    </div>
  );
};

export default Banner;
