import React from "react";
import Product from "./Product";
class Card extends React.Component{
    render(){
        return(
            <div className="cart">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        )
    }
}

export default Card;