export default function PopularItemsMenu({ item }) {
  const { name, image, price, recipe } = item;

  return (
    <div>
      <div className="flex gap-4">
        <div>
          <img className="w-40 rounded-2xl" src={image} alt="" />
        </div>
        <div className="mt-2">
          <div className="flex w-96">
            <h2 className="flex-grow uppercase font-semibold text-xl">
              {name}....
            </h2>
            <p className="ml-auto text-[#BB8506] text-xl">${price}</p>
          </div>
          <div className="w-96">
            <small>{recipe.split(" ").slice(0, 12).join(" ")}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
