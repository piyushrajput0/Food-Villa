import { API_URL, RES_IMG_URL } from "./Constant.js";
import React, { useEffect, useContext } from "react";
import Loading from "./loading";
import AppContext from "../App.js"; // Update the path
import { Link } from "react-router-dom";

const Restaurantcard = (props) => {

  const cuisinesString = props.info.cuisines.join(", ");
  return (
    <div className="restaurant">
      <img
        src={RES_IMG_URL + props.info.cloudinaryImageId}
        alt="restaurant_image"
      />
      <h2>
        <i className="uil uil-restaurant"></i> {props.info.name}
      </h2>
      <h3>
        <i className="uil uil-bookmark"></i> {cuisinesString}
      </h3>
    </div>
  );
};

const Body = () => {
  const { restaurantlist, setRestaurantlist, filterdata, setFilterdata } =
    useContext(AppContext);

  async function getdata() {
    const data = await fetch(API_URL);
    const json = await data.json();

    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setRestaurantlist(restaurants);

    // Only set filterdata if it hasn't been set before
    if (filterdata.length === 0) {
      setFilterdata(restaurants);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  if (!restaurantlist) {
    return null;
  }

  if (restaurantlist.length === 0) {
    // console.log("loading...........");
    return <Loading />;
  } else {
    return (
      <div className="box">
        {filterdata.map((restaurant, index) => (
          <Link to={"/restaurantmenu/" + restaurant.info.id} key={index}>
            <Restaurantcard {...restaurant} />
          </Link>
        ))}
      </div>
    );
  }
};

export default Body;
