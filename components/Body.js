import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

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
          return (
            <Link to={"/restaurant-menu/" + ele.data.id} key={ele.data.id}>
              <RestaurantCard {...ele.data} />
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <h2>No data found</h2>
  );
};

export default Body;
