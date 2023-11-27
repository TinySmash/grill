import Image from "next/image";
import { useState, useEffect } from "react";
import "@/data/data.json";

interface propsData {
  dish: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: any;
  };
}

function Card(props: propsData) {
  const [dish, setDish] = useState(props.dish);

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const response = await import(`../../assets/${dish.image}`); // change relative path to suit your needs
  //       console.warn(response);
  //       setDish({ ...dish, image: response?.default?.src });
  //     } catch (err) {
  //       console.warn("failed to load dish image" + err);
  //     }
  //   };
  //   fetchImage();
  // }, []);

  return (
    <div className="w-[95%] px-6 py-[22px] bg-antiflash-white rounded-[30px] flex flex-col justify-center items-center drop-shadow-xl">
      <Image
        height={100}
        width={100}
        alt={dish.name}
        src={`/assets/${dish.image}`}
        className="w-4/5 mb-1"
      ></Image>
      <h1 className="text-center text-black font-bold text-xl mb-1">
        {dish.name}
      </h1>
      <p className="text-center text-black font-semibold opacity-50 mb-5">
        {dish.description}
      </p>
      <div className="w-full flex justify-center items-center gap-3">
        <h1 className="font-bold text-xl text-black">{dish.price}$</h1>
        <button className="rounded-full bg-gradient-to-r from-primary to-secondary px-2 py-2 font-bold text-antiflash-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
