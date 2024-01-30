import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./loading";
import { RES_IMG_URL } from "./Constant";
import {useDispatch } from "react-redux"
import { addItems } from "../utils/cartslice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [res, setres] = useState();

  const [resMenu, setResMenu] = useState([]);

  const dispatch = useDispatch();
  const addFoodItem = (item)=>{
    dispatch(addItems(item));
  }
  const RES_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.782790411047007&lng=77.0533874630928&restaurantId=" +
    id +
    "&catalog_qa=undefined&submitAction=ENTER";

  async function getrestaurantdata() {
    const data = await fetch(RES_URL);
    const jsondata = await data.json();
    const resData = jsondata?.data?.cards[0]?.card?.card?.info;
    const resMenuData =
      jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    // console.log(resMenuData);
    setres(resData);
    setResMenu(resMenuData);
  }

  useEffect(() => {
    getrestaurantdata();
  }, []);
  return !res ? (
    <Loading />
  ) : (
    <div className="restaurantmenu">
      <div className="res_Details">
        <h1>
          <i className="uil uil-restaurant"></i> Restaurant name : {res.name}
        </h1>
        <img
          src={RES_IMG_URL + res.cloudinaryImageId}
          alt="Restaurant_Photo"
          className="res_menu_page_img"
        />
        <p>
          <i className="uil uil-location-point"></i>{" "}
          <span style={{ fontWeight: "bold" }}> Address : </span>{" "}
          {res.labels[1].message}
        </p>
        <p>🚚 {res.feeDetails.message}</p>
      </div>

      <div className="resmenu">
  <h1>Menu</h1>
  <ul>
    {resMenu?.map((items, index) => (
      <li className="menu-list" key={index} >
        <span className="menu-item">{items?.card?.info?.name}</span>
        
        <span className="menu-item" style={{fontWeight:"bold"}}> (Price - ₹
        {items?.card?.info?.price
          ? items?.card?.info?.price / 100
          : items?.card?.info?.variantsV2?.pricingModels?.[0]?.price / 100}
         )
          </span>
          

        <button className="add-button" onClick={() => addFoodItem(items?.card?.info)}>
          <i className="uil uil-plus"></i>
        </button>
      </li>
    ))}
  </ul>
  </div>
  </div>

  );
};

export default RestaurantMenu;
