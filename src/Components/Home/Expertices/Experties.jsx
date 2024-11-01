import { useEffect, useState } from "react";
import ExpertiesCard from "./ExpertiesCard";
import { FaArrowRightLong } from "react-icons/fa6";

const Experties = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("HomeServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-center mt-5 text-2xl sm:text-3xl font-bold">
        Things We're <span className="text-[#2EB8A2]">Good At</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 w-full mx-auto mt-10">
        {displayedServices.map((service) => (
          <ExpertiesCard key={service.id} service={service} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button 
          className="btn w-36 mt-4 bg-[#0C98EB] hover:bg-[#0C98EB] text-white" 
          onClick={() => setShowAll(!showAll)} 
        >
          {showAll ? "Show Less" : "See All"}
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Experties;
