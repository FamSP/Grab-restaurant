import React from "react";

import Restaurants from "../Componants/Restaurants";
import { useState , useEffect } from "react";

const Home = () => {
 const [restaurants, setRestuarants] = useState([])

 const [filteredrestaurant, setFilteredrestaurant] = useState([])

 const handleSearch = (keyword) => {
    if(keyword === ""){
      setFilteredrestaurant(restaurants)
      return;
    }
    const result = restaurants.filter((restaurant) => {
      return(
        restaurant.title.toLowerCase().includes(keyword.toLocaleLowerCase())  ||
        restaurant.type.toLowerCase().includes(keyword.toLocaleLowerCase())
      );

      

    })
    setFilteredrestaurant(result)
 }

 useEffect(()=>{
  fetch("http://localhost:5000/restaurants").then((res)=>{
    //convert to json
    return res.json()
  }).then((response)=>{
    //save to stage
    setRestuarants(response)
    setFilteredrestaurant(response)
  }).catch((err)=>{
    //catch error
    console.log(err.message);
  })
 },[])


  return (
    <div className="container mx-auto">
     
      <h1 className="title justify-center text-3xl text-center m-5 p-5">
        {" "}
        Grab restaurant
      </h1>
      <div className="mb-5 flex justify-center items-center">
        <label className="input flex items-center gap-2 w-2xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="text"
          name="keyword"
          // value={restaurant}
          onChange={(e)=>handleSearch(e.target.value)}
          required placeholder="Search" />
        </label>
      </div>
      <Restaurants 
      restaurant={filteredrestaurant}
      />
    </div>
  );
};

export default Home;
