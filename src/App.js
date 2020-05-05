import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./assets/img/logo.svg";
import Header from "./components/Header";
import Content from "./components/Content";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlusCircle, faMinusCircle);
function App() {
  const [restaurant, setRestaurant] = useState({});
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-backend-2020-05-04.herokuapp.com/"
      );
      setRestaurant(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="load">En cours de chargement... </div>
      ) : (
        <div>
          <Header restaurant={restaurant} logo={logo} />
          <Content restaurant={restaurant} cart={cart} setCart={setCart} />
        </div>
      )}
    </>
  );
}

export default App;
