import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function Testimonials() {
  return (
    <section className="w-full h-auto pb-10 md:pb-36 px-10 lg:px-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-grill-gradient mb-14 text-center ">
        Testimonials
      </h1>
      <div className="flex w-full gap-3 md:gap-10 justify-center items-center">
        <button>
          <IoIosArrowBack style={{ fontSize: "40px", color: "#32312F" }} />
        </button>
        <div className="shadow-xl w-3/4 md:w-3/5 h-48 md:h-56 xl:h-72 xl:max-w-md rounded-lg max-w-sm px-5 py-7">
          <div className="w-full flex gap-5 items-center">
            <div className="w-10 h-10 bg-black opacity-10 rounded-full"></div>
            <h1 className="text-lg xl:text-2xl text-black font-semibold opacity-50">
              Robert Parish
            </h1>
          </div>
          <h1 className="text-xl text-primary font-bold flex mt-1 items-center gap-1">
            5.0 <FaStar style={{ fontSize: "19px", color: "#FAD61B" }} />{" "}
          </h1>
          <p className="text-black opacity-50 text-sm xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            nostrum dolorem. Minima esse laborum quas eaque enim illo
          </p>
        </div>
        <button>
          <IoIosArrowForward style={{ fontSize: "40px", color: "#32312F" }} />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
