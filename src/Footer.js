import React from "react";
function Footer(){
    const date=new Date(2021,9,2);
    const hours=date.getHours();
    let timeDay;
    const styles={
        fontSize: '50px'
    }
    if(hours<12){
        timeDay="Morning";
        styles.color="red"
    }
    else if(hours>=12 && hours<12){
        timeDay="Afternoon";
        styles.color="blue"
    }
    else{
        timeDay="night";
        styles.color="brown"
    }
    // const style={
    //     color:"red",
    //  backgroundColor:"pink",
    
    // }
    return(
        <>
            <h1 style={styles}>Good {timeDay}</h1>
            <h2>Hey,How are You?{date.getHours() % 12} o'clock! </h2><ul>
                <li>Item-1</li>
                <li>Item-2</li>
                <li>Item-3</li>

            </ul>
        </>
    );
}
export default Footer;