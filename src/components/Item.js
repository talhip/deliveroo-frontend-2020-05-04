import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ meal, cart, setCart }) => {
  const addItem = () => {
    const usedId = cart.findIndex((cartItem) => cartItem.id === meal.id);
    if (usedId === -1) {
      const copyCart = [...cart];
      copyCart.push({
        id: meal.id,
        title: meal.title,
        price: meal.price,
        amount: 1,
      });
      setCart(copyCart);
    } else {
      const copyCart = [...cart];
      copyCart[usedId] = {
        ...copyCart[usedId],
        amount: copyCart[usedId].amount + 1,
      };
      setCart(copyCart);
    }
  };

  return (
    <div className="item" onClick={addItem}>
      <div className="dishes">
        <h4>{meal.title}</h4>
        <p>{meal.description}</p>
        <div className="price">
          <span>{meal.price} €</span>
          {meal.popular ? (
            <span className="pop">
              <FontAwesomeIcon icon="star" />
              &nbsp;&nbsp;Populaire
            </span>
          ) : null}
        </div>
      </div>
      {meal.picture ? (
        <div className="in-dish">
          <img className="dish" alt="dish" src={meal.picture} />
        </div>
      ) : null}
    </div>
  );
};

export default Item;
