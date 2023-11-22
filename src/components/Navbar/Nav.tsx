"use client";

import Logo from "@/assets/Logo.png";
import Image from "next/image";
import "./nav.css";
import { useState } from "react";
import Pannel from "../Pannel/Pannel";

function Nav() {
  const [pannelOpened, setPannelOpened] = useState(false);

  return (
    <>
      <header className="w-full h-20 fixed md:relative flex justify-between items-center z-50 px-8 py-3">
        <Image
          width={75}
          height={75}
          alt="Logo"
          src={Logo}
          className="h-full w-auto cursor-pointer"
        ></Image>
        <button
          className="relative flex flex-col items-center justify-center w-10 h-10 active:bg-neutral-300 outline-none md:hidden"
          onClick={() => setPannelOpened(!pannelOpened)}
        >
          <div
            className={`absolute menu-btn-burger transition-all ${
              pannelOpened ? "menu-burger-opened" : ""
            }`}
          ></div>
        </button>
      </header>
      <Pannel />
    </>
  );
}

export default Nav;
