"use client";
import { useEffect, useRef } from "react";
import "./hero.css";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Card from "@/components/Card/Card";
import data from "@/data/data.json";
import { motion, useAnimation, useInView } from "framer-motion";

type dish = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

function Hero() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // ... rest of your useEffect logic

    // Optionally, you can also scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

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

  const specialDishesRef: any = useRef(null);
  const inview = useInView(specialDishesRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inview) {
      // FIRE THE ANIMATION
      controls.start("visible");
    }
  }, [inview]);

  return (
    <div className="w-full h-auto min-h-screen relative overflow-hidden bg-primary">
      <section className="relative w-full h-screen md:h-[110vh] max-h-[1100px] text-center md:text-start pt-36 md:pt-44 px-10 lg:px-24 z-30 md:overflow-hidden">
        <div
          className="absolute md:left-0 md:-translate-x-1/3 bg-off rounded-full bg-antiflash-white transition-all duration-1000 -z-20"
          ref={bgRef}
        ></div>
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
          src="/assets/Burger.png"
          className="absolute w-3/4 sm:w-1/2 md:w-auto md:h-4/5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0  md:bottom-auto md:top-1/2 md:-translate-y-1/2 burger-off transition-all duration-1000"
          ref={burgerRef}
        ></Image>
      </section>
      <section
        className="w-full h-auto  my-20 block text-center"
        ref={specialDishesRef}
      >
        <h1 className="text-black text-2xl font-bold mt-16 mb-10">
          Specials dishes
        </h1>
        <ul className="list-none w-full px-10 lg:px-24 flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-10 sm:gap-5 lg:gap-10">
          {data.menu
            .filter((e: dish) => {
              return data.special.includes(e.id);
            })
            .map((e: dish, index: number) => {
              return (
                <motion.div
                  key={e?.id}
                  variants={{
                    hidden: { opacity: 0, y: -50, x: -20, scale: 1.2 },
                    visible: { opacity: 100, y: 0, x: 0, scale: 1 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: index * 1 }}
                  className="w-[95%] sm:w-[44%] md:w-[30%] flex-shrink-0"
                >
                  <Card key={e.id} dish={e} special={true} />
                </motion.div>
              );
            })}
        </ul>
      </section>
    </div>
  );
}

export default Hero;
