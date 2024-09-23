import React, { useEffect, useState } from "react";
import "./NewCollections.css";

import Item from "../Items/Item";

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  const API_URL = "http://localhost:4000/newcollection";
  useEffect(() => {
    const fetchItem = async () =>{
      try{
        const response = await fetch(API_URL);
        const data = await response.json();
        setNew_collection(data);
      }catch(err){
        console.log(err);
      }
    }
    fetchItem()
  }, []);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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

export default NewCollections;
