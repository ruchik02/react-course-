import React from "react";
function Joke(props){
    return(
        <div className="joke-contact">
        <h3>{props.contact.questions}</h3>
        <p>{props.contact.answer}</p>
       </div>
    )
  
}
export default Joke;