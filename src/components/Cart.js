import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cart = ({ cart, setCart }) => {
  let subTotal = 0;
  const delivery = 2.5;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    subTotal += item.price * item.amount;
  }
  const total = subTotal + delivery;

  return cart.length === 0 ? (
    <div className="cart">
      <div className="bill">
        <button className="disabled-button" type="button" disabled>
          Votre panier est vide
        </button>
      </div>
    </div>
  ) : (
    <div className="cart">
      <div className="bill">
        <button className="disabled-button on" type="button">
          Valider mon panier
        </button>
        {cart.map((item) => {
          const addItem = () => {
            const usedId = cart.findIndex(
              (cartItem) => cartItem.id === item.id
            );
            const copyCart = [...cart];
            copyCart[usedId] = {
              ...copyCart[usedId],
              amount: copyCart[usedId].amount + 1,
            };
            setCart(copyCart);
          };
          const removeItem = () => {
            const usedId = cart.findIndex(
              (cartItem) => cartItem.id === item.id
            );
            const copyCart = [...cart];
            copyCart[usedId] = {
              ...copyCart[usedId],
              amount: copyCart[usedId].amount - 1,
            };
            if (copyCart[usedId].amount === 0) {
              copyCart.splice(usedId, 1);
              setCart(copyCart);
            } else {
              setCart(copyCart);
            }
          };
          return (
            <div key={item.id} className="total-price">
              <div className="quantity">
                <FontAwesomeIcon
                  className="operator"
                  icon="minus-circle"
                  onClick={removeItem}
                />
                <span>&nbsp;{item.amount}&nbsp;</span>
                <FontAwesomeIcon
                  className="operator"
                  icon="plus-circle"
                  onClick={addItem}
                />
                <span>&nbsp;{item.title}</span>
              </div>
              <div>{item.price}&nbsp;€</div>
            </div>
          );
        })}
        <div className="total-price sub">
          <span>Sous-total</span>
          <span>{subTotal.toFixed(2)}&nbsp;€</span>
        </div>
        <div className="total-price deli">
          <span>Frais de livraison</span>
          <span>{delivery}0&nbsp;€</span>
        </div>
        <div className="total-price numbers">
          <span>Total</span>
          <span>{total.toFixed(2)}&nbsp;€</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
