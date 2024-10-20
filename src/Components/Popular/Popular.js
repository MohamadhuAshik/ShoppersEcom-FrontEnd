import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Items/Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  const API_URL = "http://localhost:4000/popularinwomen";
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPopularProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItem();
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN ENGISH BOOKS</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
