import React from "react";
import Card from "./Card";
import Home from "../Pages/Home";

const Restaurants = ({restaurant}) => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
      

      {restaurant && restaurant.map((restaurant)=>(
        <Card
          key={restaurant.id}
          img={restaurant.img}
          title={restaurant.title}
          type={restaurant.type}
        />
      ))}
      </div>
    </div>
  );
}

export default Restaurants;
