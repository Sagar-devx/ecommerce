import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/remove.webp";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product &&
        all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format-main cartitems-format">
                  <img src={e.image} alt={e.name} className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    alt="remove"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder="promocode" />
                    <button>submit</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CartItems;
