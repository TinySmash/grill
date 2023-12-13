"use client";

import data from "@/data/data.json";
import Card from "@/components/Card/Card";

type dish = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

function Menu() {
  return (
    <main className="w-full h-auto min-h-screen bg-antiflash-white text-center pt-28">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-grill-gradient text-center mb-5">
        Grill Menu
      </h1>
      <p className="text-black opacity-75 mb-16 text-center md:text-lg lg:text-xl xl:text-3xl">
        Discover our diverse tasty menu
      </p>
      <ul className="w-full h-auto flex flex-wrap max-h-min justify-center md:px-24 md:pl-36 md:justify-start gap-3 md:gap-6 my-10">
        {data.menu.map((e: dish) => {
          return <Card key={e.id} dish={e} />;
        })}
      </ul>
    </main>
  );
}

export default Menu;
