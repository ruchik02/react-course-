import React from "react";
function Joke(props){
    return(
        <div className="joke-contact">
        <h3> 
         {props.questions} </h3>
        <p>{props.answer}</p>
        <hr/>
       </div>
    )
  
}
export default Joke;