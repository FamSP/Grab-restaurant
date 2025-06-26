import React from "react";

const Card = (props) => {

  const handleDelete = async (id) => {
    try{
        const response = await fetch("http://localhost:5000/restaurants/"+ id,{
            method:"Delete",
        });
        if(response.ok){
            alert("Restaurant Delete Succesfully");
          window.location.reload();
        }
    }catch (error) {console.log(error)}
};

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.type}</p>
        <div className="card-actions justify-end">
          <a href={"/update/"+props.id} className="btn btn-primary">Update</a>
          <a onClick={() => handleDelete(props.id)} className="btn btn-error">Delete</a>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
