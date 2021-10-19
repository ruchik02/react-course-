import React from "react";
import Product from "./Product";

// import Product from "./Product";
const Card =(props)=> {
  const {products}=props;
  return(
    <div className="cart">
      {products.map((product)=>{
        return(
          <Product
          product={product}
          key={product.id}
          onIncreaseQuantity={props.onIncreaseQuantity}
          onDecreaseQuantity={props.onDecreaseQuantity}
          onDeleteProduct={props.onDeleteProduct}
          />
        )
      })}
    </div>
  ); 
}

export default Card;
