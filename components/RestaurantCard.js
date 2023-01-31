const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  totalRatingsString,
}) => {
  var cloud_url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="card">
      <img src={cloud_url + cloudinaryImageId} />
      <h3> {name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{totalRatingsString}</h6>
    </div>
  );
};

export default RestaurantCard;
