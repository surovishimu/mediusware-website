import { useEffect, useState } from "react";
import ExpertiesCard from "./ExpertiesCard";
import { FaArrowRightLong } from "react-icons/fa6";
const Experties = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-center mt-5 text-2xl sm:text-3xl font-bold">
        Things We're <span className="text-[#2EB8A2]">Good At</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 w-full mx-auto mt-10">
        {services.map((service) => (
          <ExpertiesCard key={service.id} service={service} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="btn btn-sm bg-[#0C98EB] text-white ">
          See All
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Experties;
