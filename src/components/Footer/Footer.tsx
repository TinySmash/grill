import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative w-full h-auto px-10 py-8 bg-black text-antiflash-white grid grid-cols-5 grid-rows-2 gap-5">
      <Image
        width={75}
        height={75}
        src="/assets/Logo.png"
        alt="Logo"
        className="relative w-auto h-auto bg-antiflash-white p-5 rounded-full col-start-1 col-end-3 my-5"
      ></Image>
      <ul className="col-start-3 col-end-6 row-start-1 my-12 flex flex-col gap-2 pl-10 md:text-2xl md:flex-row md:gap-8 md:pl-0 xl:text-5xl">
        <li className="flex gap-1 text-lg items-center hover:opacity-75 hover:ml-2 cursor-pointer transition-all">
          Menu
        </li>
        <li className="flex gap-1 text-lg items-center hover:opacity-75 hover:ml-2 cursor-pointer transition-all">
          Services
        </li>
        <li className="flex gap-1 text-lg items-center hover:opacity-75 hover:ml-2 cursor-pointer transition-all">
          why us
        </li>
      </ul>
      <ul className="col-start-1 col-end-6 flex flex-col gap-2 md:text-2xl md:items-center xl:text-5xl">
        <li className="flex gap-1 text-lg items-center">
          <FaLocationDot /> Location
        </li>
        <li className="flex gap-1 text-lg items-center">
          <MdEmail /> webt.business.app@gmail.com
        </li>
        <li className="flex gap-1 text-lg items-center">
          <FaPhoneAlt /> +212-682839818
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
