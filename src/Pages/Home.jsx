import Banner from "./Banner";
import FoodMenu from "./FoodMenu";
import OnlineOrder from "./OnlineOrder";
import Recommends from "./Recommends";

export default function Home() {
  return (
    <div>
      <Banner />
      <OnlineOrder />
      <FoodMenu />
      <Recommends />
    </div>
  );
}
