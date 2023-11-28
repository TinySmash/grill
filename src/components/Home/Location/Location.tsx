import Image from "next/image";
import "../Hero/hero.css";

function Location() {
  return (
    <section className="w-full bg-antiflash-white h-screen block md:flex gap-5 md:flex-wrap md:justify-between md:items-center px-10 lg:px-24">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-grill-gradient mb-3 text-center md:text-start">
          Location
        </h1>
        <p className="text-black opacity-50 mb-9 lg:text-lg xl:text-2xl text-center md:text-start">
          Explore a large menu at{" "}
          <span className="opacity-100 text-black text-lg font-bold">
            Grill
          </span>
          , centrally located in San Francisco, where every bite is a taste of
          local charm and global flavors
        </p>
      </div>
      <Image
        width={150}
        height={150}
        alt="Location map"
        src="/assets/location.png"
        className="mx-auto md:mx-0 w-full h-auto md:w-2/5 md:h-[40vw] max-w-lg max-h-96"
      ></Image>
    </section>
  );
}

export default Location;
