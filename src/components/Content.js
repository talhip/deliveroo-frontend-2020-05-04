import React from "react";
import Item from "./Item";
import Cart from "./Cart";

const Content = ({ restaurant, cart, setCart }) => {
  const menu = restaurant.categories;

  return (
    <div className="container all">
      <div className="content">
        {menu.map((meal, index) => {
          const meals = meal.meals;
          return (
            meals.length > 0 && (
              <div className="menu-items" key={index}>
                <div>
                  <h3>{meal.name}</h3>
                  <div className="flex">
                    {meals.map((meal) => {
                      return (
                        <Item
                          key={meal.id}
                          meal={meal}
                          cart={cart}
                          setCart={setCart}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Content;
