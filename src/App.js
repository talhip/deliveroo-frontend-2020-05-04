import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import logo from "./assets/img/logo.svg";
import Header from "./components/Header";
import Content from "./components/Content";
function App() {
  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-backend-2020-05-04.herokuapp.com/"
      );
      setRestaurant(response.data);
      setIsLoading(false);
    } catch (e) {
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <div>
          <Header restaurant={restaurant} logo={logo} />
          <Content restaurant={restaurant} />
        </div>
      )}
    </>
  );
}

export default App;
