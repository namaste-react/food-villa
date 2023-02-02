import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantdata, setRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    var data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.467232&lng=78.354277&menuId=" +
        resId
    );
    var json = await data.json();

    setRestaurantData(json);
  }
  var cloud_url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  return restaurantdata ? (
    <div className="restaurant-data">
      <div>
        <h3> {restaurantdata?.data?.name}</h3>
        <img src={cloud_url + restaurantdata?.data?.cloudinaryImageId} />
        <h5>{restaurantdata?.data?.cuisines.join(", ")}</h5>
        <h6>{restaurantdata?.data?.totalRatingsString}</h6>
      </div>
      {Object.values(restaurantdata?.data?.menu.items).map((item) => (
        <li key={item?.id}>{item?.name}</li>
      ))}
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};
export default RestaurantMenu;
