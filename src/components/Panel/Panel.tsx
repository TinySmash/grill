"use client";

import Link from "next/link";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { togglePanel } from "@/redux/slices/navSlice";
import * as ReactScroll from "react-scroll";

type panelProps = {
  opened: boolean;
};

function Panel(props: panelProps) {
  const dispatch = useDispatch();
  const navigatePannel = (): void => {
    dispatch(togglePanel());
  };

  return (
    <div
      className={`fixed w-full h-screen z-40 pt-32 px-10 pb-20 flex flex-col justify-between items-center bg-antiflash-white md:hidden transition-all duration-300 ${
        props.opened ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <nav className="flex flex-col text-center gap-8">
        <Link
          onClick={navigatePannel}
          href="menu"
          className="font-semibold text-2xl border-b-2 border-black text-black flex gap-2 items-center justify-center"
        >
          <MdOutlineRestaurantMenu className="text-bleck" />
          Menu
        </Link>
        <Link
          onClick={navigatePannel}
          href="/"
          className="font-semibold text-2xl border-b-2 border-black text-black flex gap-2 items-center justify-center"
        >
          <MdOutlineRestaurantMenu className="text-bleck" />
          Services
        </Link>
        {/* <Link
          href="/"
          className="font-semibold text-2xl border-b-2 border-black text-black flex gap-2 items-center justify-center"
        >
          <MdOutlineRestaurantMenu className="text-bleck" />
          Why us
        </Link> */}
        <ReactScroll.Link
          to="menu"
          spy={true}
          smooth={true}
          className="cursor-pointer font-semibold text-2xl border-b-2 border-black text-black flex gap-2 items-center justify-center"
          onClick={() => {
            navigatePannel();
          }}
        >
          <MdOutlineRestaurantMenu className="text-bleck" />
          Why us
        </ReactScroll.Link>
      </nav>
      <Link
        onClick={navigatePannel}
        href="/"
        className="px-16 py-4 text-antiflash-white text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-primary to-secondary rounded-full"
      >
        My Cart
      </Link>
    </div>
  );
}

export default Panel;
