import { useEffect, useState } from "react";
import PopularItemsMenu from "./PopularItemsMenu";

export default function FoodMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "salad");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div>
      <div className="mt-12">
        <p className="text-center text-yellow-600">
          <i>-----Check it out-----</i>
        </p>
        <div className="text-center order-banner mx-auto mb-12">
          <h2 className="text-3xl">_FROM OUR MENU_</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-10/12 mx-auto">
        {menu.map((item) => (
          <PopularItemsMenu key={item._id} item={item} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-yellow-500 px-8 py-3 font-semibold text-white text-xl rounded-lg">
          View Full Menu
        </button>
      </div>

      <div className="px-24 py-16 bg-black text-white md:text-4xl w-6/12 mx-auto mt-12 rounded-md">
        <h1 className="text-center">Call Us: +88 0192345678910</h1>
      </div>
    </div>
  );
}
