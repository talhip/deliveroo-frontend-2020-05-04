import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = ({ restaurant }) => {
  const menu = restaurant.categories;

  return (
    <div className="container all">
      <div className="content">
        {menu.slice(0, 6).map((meal, index) => {
          const meals = meal.meals;
          return (
            <div className="menu-items" key={index}>
              <div>
                <h3>{meal.name}</h3>
                <div className="flex">
                  {meals.map((meal) => {
                    return (
                      <div className="item" key={meal.id}>
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
                            <img
                              className="dish"
                              alt="dish"
                              src={meal.picture}
                            />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart">Valider mon panier</div>
    </div>
  );
};

export default Content;
