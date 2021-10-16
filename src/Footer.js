import React from "react";
function Footer(){
    const date=new Date();
    const hours=date.getHours();
    let timeDay;
    if(hours<12){
        timeDay="Morning";
    }
    else if(hours>=12 && hours<12){
        timeDay="Afternoon";
    }
    else{
        timeDay="night";
    }
    return(
        <>
        <h1>Good {timeDay}</h1>
        <h2>Hey,How are You? {date.getHours() % 12 } o'clock!</h2>
       <ul>
           <li>Item-1</li>
           <li>Item-2</li>
           <li>Item-3</li>

       </ul>
        </>
    );
}
export default Footer;