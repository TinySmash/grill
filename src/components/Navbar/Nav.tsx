"use client";

import Logo from "@/assets/Logo.png";
import Image from "next/image";
import "./nav.css";
import { useState } from "react";
import Panel from "../Panel/Panel";
import { useSelector, useDispatch } from "react-redux";
import { togglePanel } from "@/redux/slices/navSlice";

function Nav() {
  const pannelOpened = useSelector((state: any) => state.navbar.isPanelOpened);
  const dispatch = useDispatch();

  return (
    <>
      <header className="w-full h-20 fixed flex justify-between items-center z-50 px-8 py-3">
        <Image
          width={75}
          height={75}
          alt="Logo"
          src={Logo}
          className="h-full w-auto cursor-pointer"
        ></Image>
        <button
          className="relative flex flex-col items-center justify-center w-10 h-10 active:bg-neutral-300 outline-none md:hidden"
          onClick={() => dispatch(togglePanel())}
        >
          <div
            className={`absolute menu-btn-burger transition-all ${
              pannelOpened ? "menu-burger-opened" : ""
            }`}
          ></div>
        </button>
      </header>
      <Panel opened={pannelOpened} />
    </>
  );
}

export default Nav;
