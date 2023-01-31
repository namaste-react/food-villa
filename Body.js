import { useEffect, useState } from "react";
import RestaurantCard from "./components/RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    var res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.467232&lng=78.354277&page_type=DESKTOP_WEB_LISTING"
    );
    let temp = await res.json();
    setAllRestaurants(temp.data.cards[2].data.data.cards);
  }

  return allRestaurants ? (
    <>
      <div className="res-list">
        {allRestaurants.map((ele) => {
          return <RestaurantCard {...ele.data} key={ele.data.id} />;
        })}
      </div>
    </>
  ) : (
    <h2>No data found</h2>
  );
};

export default Body;
