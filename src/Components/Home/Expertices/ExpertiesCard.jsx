const ExpertiesCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-xl h-52 w-72 overflow-hidden relative">
      <figure className="h-full w-full">
        <img
          className="w-full h-full object-cover opacity-80"
          src={service.image_url}
          alt={service.title}
        />
      </figure>
      <div
        className="card-body absolute inset-0 p-4 flex flex-col justify-end"
        style={{
          background:
            "linear-gradient(to top, #072B4A99 80%, #072B4A66 50%, #072B4A99 80%)",
        }}
      >
        <h2 className="card-title text-white text-lg absolute bottom-14">{service.title}</h2>
        <p className="text-white text-xs mt-1 absolute bottom-5 ">{service.description}</p>
      </div>
    </div>
  );
};

export default ExpertiesCard;
