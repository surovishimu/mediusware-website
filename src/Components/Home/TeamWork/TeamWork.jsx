import img1 from "/images/planning.png";
import img2 from "/images/defining.png";
import img3 from "/images/designing.png";
import img4 from "/images/coding.png";
import img5 from "/images/testing.png";
import img6 from "/images/integration.png";

const TeamWork = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 xl:p-20 lg:p-14 md:p-10 p-8">
      <div className="lg:col-span-2 md:col-span-2 col-span-1">
        <h1 className="font-bold text-3xl mb-3">
          How We <span className="text-[#2EB8A2]">Work Together</span>
        </h1>
        <p className="text-sm text-gray-700">
          Mediusware is a US-based software development company with unique
          access to premium developers & Designers. We follow a structured
          process to ensure project success. Our approach guarantees reliability
          and ongoing support for every project. Here is the process we work on:
        </p>
      </div>
      <div className="bg-[#F1F5F9] rounded-md p-5">
        <img src={img1} alt="" />
        <h1 className="text-lg mb-2 text-[#072B4A] font-semibold">Planning</h1>
        <p className="text-[#072B4A] text-sm">
          Collaborate with clients to create a detailed project plan.
        </p>
      </div>
      <div className="bg-[#F1F5F9] rounded-md p-5">
        <img src={img2} alt="" />
        <h1 className="text-lg mb-2 text-[#072B4A] font-semibold">Defining</h1>
        <p className="text-[#072B4A] text-sm">
          Document project requirements and specifications.
        </p>
      </div>
      <div className="bg-[#F1F5F9] rounded-md p-5">
        <img src={img3} alt="" />
        <h1 className="text-lg mb-2 text-[#072B4A] font-semibold">Designing</h1>
        <p className="text-[#072B4A] text-sm">
          Develop and refine user-friendly prototypes and wireframes.
        </p>
      </div>
      <div className="bg-[#F1F5F9] rounded-md p-5">
        <img src={img4} alt="" />
        <h1 className="text-lg mb-2 text-[#072B4A] font-semibold">
          Coding & Implement
        </h1>
        <p className="text-[#072B4A] text-sm">
          Develop the software using best practices and latest technologies.
        </p>
      </div>
      <div className="bg-[#F1F5F9] rounded-md p-5">
        <img src={img5} alt="" />
        <h1 className="text-lg mb-2 text-[#072B4A] font-semibold">Testing</h1>
        <p className="text-[#072B4A] text-sm">
          Rigorously test for functionality, performance, and security.
        </p>
      </div>
      <div className="bg-[#F1F5F9] rounded-md p-5">
        <img src={img6} alt="" />
        <h1 className="text-lg mb-2 text-[#072B4A] font-semibold">
          Integration
        </h1>
        <p className="text-[#072B4A] text-sm">
          Integrate components, conduct final testing, and provide support.
        </p>
      </div>
    </div>
  );
};

export default TeamWork;
