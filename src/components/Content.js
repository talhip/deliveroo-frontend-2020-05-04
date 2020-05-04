import React from "react";

const Content = ({ restaurant }) => {
  const menu = restaurant.categories;
  console.log(menu);

  return (
    <div className="content">
      <div className="order container">
        <div className="menu">
          {menu.slice(0, 6).map((meal, index) => {
            const meals = meal.meals;
            return (
              <div key={index}>
                <div>
                  <h1>{meal.name}</h1>
                </div>
                {/* <div>{meal.meals[index].title}</div> */}
                {meals.map((meal, index) => {
                  return (
                    <div key={index}>
                      <div>{meal.title}</div>
                      <div>
                        <h2>{meal.description}</h2>
                      </div>
                      <div>
                        <h2>{meal.price} €</h2>
                        {meal.popular ? (
                          <div>
                            <h2>Populaire</h2>
                          </div>
                        ) : null}
                      </div>
                      {meal.picture ? (
                        <div>
                          <img className="dish" alt="dish" src={meal.picture} />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="cart">Valider mon panier</div>
      </div>
    </div>
  );
};

export default Content;
