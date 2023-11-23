"use client";
import { useEffect, useRef } from "react";
import "./hero.css";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Hamburger from "@/assets/Burger.png";

function Hero() {
  const bgRef: any = useRef("");
  const burgerRef: any = useRef("");
  useEffect(() => {
    setTimeout(() => {
      bgRef.current.classList.replace("-translate-y-full", "-translate-y-1/3");
    }, 200);
    setTimeout(() => {
      burgerRef.current.classList.replace("burger-off", "burger-on");
    }, 900);
  }, []);

  return (
    <div className="w-full h-auto min-h-screen relative overflow-hidden bg-primary">
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-full sm:-translate-y-[60%] w-[180%] h-[180vw] rounded-full bg-antiflash-white hero-bg-appear transition-all duration-1000 z-10"
        ref={bgRef}
      ></div>
      <section className="relative w-full h-screen text-center pt-36 px-10 z-30">
        <h1 className="text-3xl sm:text-4xl font-bold text-grill-gradient mb-3">
          Savor The Flavor
        </h1>
        <p className="text-black opacity-50 mb-9">
          Food tastes better when every bite is a flavor-packed journey
        </p>
        <button className="flex items-center justify-center gap-2 w-fit mx-auto text-lg font-medium mb-3">
          Explore our menu
          <IoIosArrowForward />
        </button>
        {/* <button className="flex items-center justify-center gap-2 w-fit mx-auto text-lg font-medium">
          About
        </button> */}
        <Image
          width={150}
          height={150}
          alt="Hamburger"
          src={Hamburger}
          className="absolute w-3/4 left-1/2 -translate-x-1/2 burger-off transition-all duration-1000"
          ref={burgerRef}
        ></Image>
      </section>
    </div>
  );
}

export default Hero;
