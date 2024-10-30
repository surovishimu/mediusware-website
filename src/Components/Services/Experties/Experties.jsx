import { useEffect, useState } from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import ExpertiesCard from "./ExpertiesCard";

const Experties = () => {
  const [services, setServices] = useState([]);
  

  useEffect(() => {
    fetch("HomeServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);


  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-center mt-5 text-2xl sm:text-3xl font-bold">
      Explore What We Can <span className="text-[#2EB8A2]">Do For You </span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 w-full mx-auto mt-10">
        {services.map((service) => (
          <ExpertiesCard key={service.id} service={service} />
        ))}
      </div>
      
    </div>
  );
};

export default Experties;
