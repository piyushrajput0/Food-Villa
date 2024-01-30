import React, { useState ,useContext} from "react";
import companylogo from "../Image/company_logo_image.jpg";
import { Link } from "react-router-dom";
import AppContext from "../App";
import {useSelector } from "react-redux";
const Header = () => {
  const [searchtext, setsearchtext] = useState();
  const { restaurantlist, setFilterdata, filterdata } = useContext(AppContext);

  const count = useSelector((store) => (
    store.cart.count ));


  function handleChange(e) {
    // console.log(searchtext);
    setsearchtext(e.target.value);
  }

  function getfilterdata() {
    // console.log(restaurantlist);

    const data = restaurantlist.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(searchtext);
    });
    // console.log(data);
    setFilterdata(data);
  }

  return (
    <div className="headerComponent">
      <div className="logoContainer">
        <img src={companylogo} alt="company logo" className="clogo" />
      </div>

      <div className="searchContainer">
        <div className="searchIcon">
          <i className="uil uil-search"></i>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchtext}
          onChange={handleChange}
        ></input>
        <button onClick={getfilterdata}>Search</button>
      </div>

      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart - {count}</Link>
        </li>
      </ul>
    </div>
  );
};

{
  /* <Header>
    logo
    search
    home/about /cart
</Header> */
}
export default Header;
