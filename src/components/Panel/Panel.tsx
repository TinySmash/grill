"use client";

import Link from "next/link";
import { MdOutlineRestaurantMenu } from "react-icons/md";

type panelProps = {
  opened: boolean;
};

function Panel(props: panelProps) {
  return (
    <div
      className={`fixed w-full h-screen z-40 pt-32 px-10 pb-20 flex flex-col justify-between items-center bg-antiflash-white md:hidden transition-all duration-300 ${
        props.opened ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <nav className="flex flex-col text-center gap-8">
        <Link
          href="/"
          className="font-semibold text-2xl border-b-2 border-black text-black flex gap-2 items-center justify-center"
        >
          <MdOutlineRestaurantMenu className="text-bleck" />
          Menu
        </Link>
        <Link
          href="/"
          className="font-semibold text-2xl border-b-2 border-black text-black flex gap-2 items-center justify-center"
        >
          <MdOutlineRestaurantMenu className="text-bleck" />
          Services
        </Link>
        <Link
          href="/"
          className="font-semibold text-2xl border-b-2 border-black text-black flex gap-2 items-center justify-center"
        >
          <MdOutlineRestaurantMenu className="text-bleck" />
          Why us
        </Link>
        <Link
          href="/"
          className="font-semibold text-2xl border-b-2 border-black text-black flex gap-2 items-center justify-center"
        >
          <MdOutlineRestaurantMenu className="text-bleck" />
          Contact
        </Link>
      </nav>
      <Link
        href="/"
        className="px-16 py-4 text-antiflash-white text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-primary to-secondary rounded-full"
      >
        My Cart
      </Link>
    </div>
  );
}

export default Panel;
