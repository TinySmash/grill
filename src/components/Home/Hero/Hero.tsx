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
      bgRef.current.classList.replace("bg-off", "bg-on");
    }, 200);
    setTimeout(() => {
      burgerRef.current.classList.replace("burger-off", "burger-on");
    }, 900);
  }, []);

  return (
    <div className="w-full h-auto min-h-screen relative overflow-hidden bg-primary">
      <div
        className="absolute md:left-0 md:-translate-x-1/3 bg-off rounded-full bg-antiflash-white transition-all duration-1000 z-10"
        ref={bgRef}
      ></div>
      <section className="relative w-full h-screen text-center md:text-start pt-36 md:pt-44 px-10 lg:px-24 z-30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-grill-gradient mb-3">
          Savor The Flavor
        </h1>
        <p className="text-black opacity-50 mb-9 md:w-1/2 lg:text-lg xl:text-2xl">
          Food tastes better when every bite is a flavor-packed journey
        </p>
        <button className="flex items-center justify-center gap-2 w-fit mx-auto md:mx-0 text-lg md:text-xl lg:text-2xl xl:text-4xl font-medium mb-3 transition-all hover:gap-5">
          Explore our menu
          <IoIosArrowForward style={{ fontSize: "20px", marginTop: "2px" }} />
        </button>
        {/* <button className="flex items-center justify-center gap-2 w-fit mx-auto text-lg font-medium">
          About
        </button> */}
        <Image
          width={150}
          height={150}
          alt="Hamburger"
          src={Hamburger}
          className="absolute w-3/4 sm:w-1/2 md:w-auto md:h-4/5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0  md:bottom-auto md:top-1/2 md:-translate-y-1/2 burger-off transition-all duration-1000"
          ref={burgerRef}
        ></Image>
      </section>
    </div>
  );
}

export default Hero;
