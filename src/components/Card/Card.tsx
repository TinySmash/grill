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
  special?: boolean;
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
    <li
      className={`${
        props.special ? "special-dish-card" : "normal-dish-card"
      }     bg-antiflash-white rounded-[30px] flex  flex-col justify-between items-center drop-shadow-xl`}
    >
      <div>
        <img
          alt={dish.name}
          loading="lazy"
          src={
            dish.image.indexOf("http") == 0
              ? dish.image
              : `/assets/${dish.image}`
          }
          className="w-4/5 mb-1 mx-auto"
        ></img>
        <h1
          className={`text-center text-black font-bold mb-1 ${
            props.special
              ? "text-xl xl:text-2xl"
              : "text-lg md:text-xl xl:text-2xl"
          }`}
        >
          {dish.name}
        </h1>
        <p
          className={`text-center text-black font-semibold opacity-50 mb-5  ${
            props.special ? "xl:text-lg" : "text-xs md:text-base"
          }`}
        >
          {dish.description}
        </p>
      </div>
      <div
        className={`relative bottom-0 w-full flex justify-center items-center gap-3 ${
          !props.special ? "flex-col md:flex-row" : ""
        }`}
      >
        <h1 className="font-bold text-xl text-black xl:text-2xl">
          {dish.price}$
        </h1>
        <button
          className={`rounded-full bg-gradient-to-r from-primary to-secondary  font-bold text-antiflash-white ${
            props.special
              ? "xl:text-lg px-2 py-2"
              : "text-xs md:text-base py-2 px-3"
          }`}
        >
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default Card;
