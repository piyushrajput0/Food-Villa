import React from "react";
import { useSelector } from "react-redux";
import { FOOD_URL } from "./Constant.js";
import {useDispatch} from "react-redux";
import { removeItems ,clearItems } from "../utils/cartslice.js";

// import store from "../utils/store";
const CartCard = (props) => {

    const dispatch=useDispatch();
    const removeFoodItems= (item)=>{
        dispatch(removeItems(item));
    }
  
    return (
    
    <div className="cart-card">

      <img src={FOOD_URL + props.imageId} className="card_img"/>
      <h2>
        <i className="uil uil-restaurant"></i> {props.category}
      </h2>
      <p>
        <i className="uil uil-bookmark"></i> {props.description}
      </p>
      <h3>
        Price -{" "}
        {props.price
          ? props.price / 100
          : props.variantsV2?.pricingModels?.[0]?.price / 100}
      </h3>
      <h3>Quantity - {props.quantity}</h3>
      <button onClick={()=>removeFoodItems(props)} className="remove-button"><i class="uil uil-minus"></i></button>
      
    </div>
  );
};

const Cart = () => {
    const dispatch= useDispatch();
    const clearAllItems= (item)=>{
        dispatch(clearItems(item));
    }
  const cartItem = useSelector((store) => store.cart.items);
//   console.log(cartItem);

  
  return (
    <><button onClick={()=>clearAllItems()} className="remove-button">Clear Cart</button>
    <div className="box">
        
      {cartItem.map((item) => (
        <CartCard {...item} key={item.id} />
      ))}
    </div>
    </>
  );
};

export default Cart;
