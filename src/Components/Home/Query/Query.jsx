
const Query = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between items-center bg-[#072B4A] rounded-lg p-10 w-4/5 mx-auto mt-14">
            <div className="text-white lg:mb-0 mb-4 ">
                <h1 className="text-lg">Want to know what we are up to?</h1>
                <span className="text-xs">Subscribe to our newsletter.</span>
            </div>
            <div className="flex justify-center items-center gap-2">
            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            <button className="btn bg-[#0C98EB] outline-none border-none text-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Query;