import React from "react";
function Card(props){
   return(
    <div className="contact-cards">
    <img src={props.contact.imgUrl} style={{height:'250px',width:'250px'}} />
    <h3>{props.contact.name}</h3>
    <p>{props.contact.phone}</p>
    <p>{props.contact.email}</p>
    </div>
   )
}

export default Card;