import React from "react";
import { Link } from "react-router-dom";
export default function Categori(props) {
  
  return (
    <div className="card my-2 mx-2" >
         <img src={props.image} className="card-img-top" alt="Error" style={{height:"18rem"}}/>
      <div className="card-body">
      <Link to={props.newLink} className={`btn btn-outline-${props.btnClr} `}>
        <h5 className="card-title">{props.title.charAt(0).toUpperCase()+props.title.slice(1)}</h5>
        </Link>
      </div>
    </div>
  );
}
