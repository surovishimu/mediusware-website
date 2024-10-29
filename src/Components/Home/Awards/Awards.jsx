import img1 from "/images/clutch.jpg";
import img2 from "/images/upwork.jpg";
import img3 from "/images/google.jpg";
import img4 from "/images/swd.jpg";
const Awards = () => {
  return (
    <div className="mt-10 bg-[#F0F8FF] p-20 text-center">
      <h1 className="text-3xl font-bold mb-5">Achievements <span className="text-[#2EB8A2]"> & Awards</span></h1>
      <p className="text-[#072B4A] font-xs w-3/4 mx-auto mb-10">
        People know us for our top-notch work and great customer service, all of
        whom have expressed nothing but positive feedback about our services.
        Take a moment to see for yourself.
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
        <div>
          <img className="bg-white rounded-md" src={img1} alt="" />
        </div>
        <div>
          <img className="bg-white rounded-md" src={img2} alt="" />
        </div>
        <div>
          <img className="bg-white rounded-md" src={img3} alt="" />
        </div>
        <div>
          <img className="bg-white rounded-md" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
