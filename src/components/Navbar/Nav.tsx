"use client";

// import Logo from "/asse";
import Image from "next/image";
import "./nav.css";
import { useEffect, useRef } from "react";
import Panel from "../Panel/Panel";
import { useSelector, useDispatch } from "react-redux";
import { togglePanel } from "@/redux/slices/navSlice";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import * as ReactScroll from "react-scroll";

function Nav() {
  const pannelOpened = useSelector((state: any) => state.navbar.isPanelOpened);
  const dispatch = useDispatch();
  const navbarRef: any = useRef<any>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        navbarRef.current?.classList?.add("bg-antiflash-white");
        navbarRef.current?.classList?.add("shadow-xl");
      } else {
        navbarRef.current?.classList?.remove("bg-antiflash-white");
        navbarRef.current?.classList?.remove("shadow-xl");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="w-full h-20 md:h-24 xl:h-28 fixed flex justify-between items-center z-50 px-8 md:px-14 py-3 transition-all"
        ref={navbarRef}
      >
        <Image
          width={75}
          height={75}
          alt="Logo"
          src="/assets/Logo.png"
          className="h-full w-auto cursor-pointer"
        ></Image>
        <div className="flex items-center gap-5 md:hidden">
          <ReactScroll.Link
            to="location"
            spy={true}
            smooth={true}
            className="cursor-pointer flex md:hidden bg-gradient-to-r from-primary to-secondary text-antiflash-white p-[6px] xl:p-2 rounded-full border-2 border-black "
          >
            <FaLocationDot style={{ color: "#32312F", fontSize: "25px" }} />
          </ReactScroll.Link>
          {/* <button className="flex md:hidden bg-gradient-to-r from-primary to-secondary text-antiflash-white p-[6px] xl:p-2 rounded-full border-2 border-black ">
          </button> */}
          <button
            className="relative flex flex-col items-center justify-center w-10 h-10 active:bg-neutral-300 outline-none"
            onClick={() => dispatch(togglePanel())}
          >
            <div
              className={`absolute menu-btn-burger transition-all ${
                pannelOpened ? "menu-burger-opened" : ""
              }`}
            ></div>
          </button>
        </div>
        <nav className="hidden md:flex gap-8 font-medium lg:text-lg xl:text-xl bg-transparent w-fut text-black ">
          <Link href="">Menu</Link>
          <ReactScroll.Link
            to="menu"
            spy={true}
            smooth={true}
            className="cursor-pointer"
          >
            Why us
          </ReactScroll.Link>
          <Link href="">Services</Link>
          <ReactScroll.Link
            to="location"
            spy={true}
            smooth={true}
            className="cursor-pointer"
          >
            Location
          </ReactScroll.Link>
        </nav>

        <button className="hidden md:flex bg-gradient-to-r from-primary to-secondary text-antiflash-white p-[6px] xl:p-2 rounded-full border-2 border-black ">
          <MdOutlineShoppingBag
            style={{ color: "#32312F", fontSize: "40px" }}
          />
        </button>
      </header>
      <Panel opened={pannelOpened} />
    </>
  );
}

export default Nav;
