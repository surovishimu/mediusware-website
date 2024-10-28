import { useEffect, useState } from "react";
import ExpertiesCard from "./ExpertiesCard";

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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-lg mx-auto gap-6 sm:gap-8 mt-10">
        {services.map((service) => (
          <ExpertiesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Experties;
