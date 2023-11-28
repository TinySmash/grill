"use client";

import "./menu.css";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaTruckArrowRight } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { IoFastFoodSharp, IoPricetags } from "react-icons/io5";

function Menu() {
  const pizzaRef: any = useRef(null);
  const inview = useInView(pizzaRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inview) {
      // FIRE THE ANIMATION
      controls.start("visible");
    }
  }, [inview]);

  return (
    <div className="w-full h-auto min-h-screen px-10 lg:px-24 pt-20 bg-antiflash-white">
      <h1 className="text-black text-2xl lg:text-5xl font-bold mt-16 mb-10 w-fit mx-auto">
        Why choose us ?
      </h1>
      <section className=" w-full h-auto block md:flex" ref={pizzaRef}>
        <motion.img
          ref={pizzaRef}
          alt="Sliced Pizza"
          src="/assets/pizza.png"
          variants={{
            hidden: { x: "-100%", rotate: -120 },
            visible: { x: 0, rotate: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 1 }}
          className="hidden lg:flex relative w-2/3 lg:w-1/2 h-auto -left-1/3 lg:-left-1/4"
        ></motion.img>
        <div className="lg:absolute lg:right-24  w-full lg:w-2/5 text-center lg:text-start mt-20 xl:mt-36">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-grill-gradient mb-3">
            Serving Tasty Menu
          </h1>
          <p className="text-black opacity-50 mb-9 lg:text-lg xl:text-2xl">
            Where each dish is crafted with passion and precision. From savory
            bites to sweet delights, our menu is a symphony of flavors that
            promises to elevate your dining experience
          </p>
          <button className="flex items-center justify-center gap-2 w-fit mx-auto lg:mx-0 text-lg font-medium bg-secondary text-black-50 px-6 py-2 rounded-full">
            Explore more
          </button>
        </div>
      </section>
      <section className="w-full h-auto py-10">
        <ul className="list-none flex flex-wrap justify-evenly mt-20 xl:mt-36">
          <li className="w-[45%] md:w-1/5 md:max-w-xs p-4 md:py-10 shadow-xl flex flex-col gap-3 justify-center items-center text-center rounded-md mb-10">
            <FaTruckArrowRight style={{ color: "#32312F", fontSize: "40px" }} />
            <h1 className="text-black opacity-50 font-semibold md:text-lg xl:text-xl">
              Fast delivery
            </h1>
          </li>
          <li className="w-[45%] md:w-1/5 md:max-w-xs p-4 shadow-xl flex flex-col gap-3 justify-center items-center text-center rounded-md mb-10">
            <LuChefHat style={{ color: "#32312F", fontSize: "40px" }} />
            <h1 className="text-black opacity-50 font-semibold md:text-lg xl:text-xl">
              Experienced staff
            </h1>
          </li>
          <li className="w-[45%] md:w-1/5 md:max-w-xs p-4 shadow-xl flex flex-col gap-3 justify-center items-center text-center rounded-md mb-10">
            <IoFastFoodSharp style={{ color: "#32312F", fontSize: "40px" }} />
            <h1 className="text-black opacity-50 font-semibold md:text-lg xl:text-xl">
              Diversed menu
            </h1>
          </li>
          <li className="w-[45%] md:w-1/5 md:max-w-xs p-4 shadow-xl flex flex-col gap-3 justify-center items-center text-center rounded-md mb-10">
            <IoPricetags style={{ color: "#32312F", fontSize: "40px" }} />
            <h1 className="text-black opacity-50 font-semibold md:text-lg xl:text-xl">
              Best prices
            </h1>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Menu;
